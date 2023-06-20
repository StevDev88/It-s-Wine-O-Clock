import React, { useState } from "react";
import Layout from "../../components/Layout";

  
  export async function getStaticProps({ params }) {

    try {
      if (!params || !params.id) {
        throw new Error('Invalid ID parameter');
      }
      let response = await fetch(
        "http://localhost:3000/api/getSingleWine?id=" + params.id
      );
  
      let responseFromServer = await response.json();
  
      return {
        props: {
          wine: {
            _id: responseFromServer._id,
            name: responseFromServer.name,
            image: responseFromServer.image,
            color: responseFromServer.color,
            size: responseFromServer.size,
            price: responseFromServer.price,
            region: responseFromServer.region,
            protectedOrigin: responseFromServer.protectedOrigin,
            description: responseFromServer.description
          },
        },
      };
  } catch (e) {
    console.log("error: ", e);
    return {
      props: {
        wine: {
          _id: "",
          name: "",
          image: "",
          color: "",
          size: "",
          price: "",
          region: "",
          protectedOrigin: "",
          description: ""
        },
      },
    };
  }
}
  
  export async function getStaticPaths() {
    let wines = await fetch("http://localhost:3000/api/getWineList");
  
    let wineFromServer = await wines.json();
    return {
      paths: wineFromServer.map((wine) => {
        return {
          params: {
            id: wine._id,
          },
        };
      }),
      fallback: false, // can also be true or 'blocking'
    };
  }

  export default function EditWine({
    wine: { _id, name, image, color, size, price, region, protectedOrigin, description,
        // flavorProfile: [],
    }}) {

    const [wineName, setName] = useState(name);
    const [wineImage, setImage] = useState(image)
    const [wineColor, setColor] = useState(color)
    const [wineSize, setSize] = useState(size)
    const [winePrice, setPrice] = useState(price)
    const [wineRegion, setRegion] = useState(region)
    const [wineProtectedOrigin, setProtectedOrigin] = useState(protectedOrigin)
    // const [flavorProfile, setFlavorProfile] = useState("")
    const [wineDescription, setDescription] = useState(description);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (wineName && wineDescription) {
          try {
            let response = await fetch(
              "http://localhost:3000/api/editWine?id=" + String(_id),
              {
                method: "PUT",
                body: JSON.stringify({
                  _id: _id,
                  name: wineName,
                  image: wineImage,
                  color: wineColor,
                  size: wineSize,
                  price: winePrice,
                  region: wineRegion,
                  protectedOrigin: wineProtectedOrigin,
                  description: wineDescription,
                }),
                headers: {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json",
                },
              }
            );
            response = await response.json();
            setName("");
            setImage("");
            setColor("");
            setSize("");
            setPrice("");
            setRegion("");
            setProtectedOrigin("");
            setDescription("");
            setError("");
            setMessage("Wine edited successfully");
          } catch (errorMessage) {
            setError(errorMessage);
          }
        } else {
          return setError("All fields are required");
        }
      };

  
    // If no such wine exists
    // if (!name && !description && !_id && typeof window) {
    //   return (window.location.href = "/");
    // }
  
    return (
    <>
            <form onSubmit={handleSubmit} className="form">
          {error ? <div className="alert-error">{error.toString()}</div> : null}
          {message ? <div className="alert-message">{message.toString()}</div> : null}
          <div className="form-group">
            <label>Name</label>
            <input
              type= "text"
              placeholder= "Name of the wine"
              onChange={(e) => setName(e.target.value)}
              value={wineName}
            />
          </div>
            <div className="form-group">
              <label>Image</label>
              <input
                type= "text"
                placeholder= "Image URL"
                onChange={(e) => setImage(e.target.value)}
                value={wineImage}
              />
            </div>
            <div className="form-group">
              <label>Color</label>
              <input
                type= "text"
                placeholder= "White, red, rose, bubbly, etc."
                onChange={(e) => setColor(e.target.value)}
                value={wineColor}
              />
            </div>
            <div className="form-group">
              <label>Size</label>
              <input
                type= "text"
                placeholder= "Volume in ml"
                onChange={(e) => setSize(e.target.value)}
                value={wineSize}
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type= "text"
                placeholder= "Price in USD"
                onChange={(e) => setPrice(e.target.value)}
                value={winePrice}
              />
            </div>
            <div className="form-group">
              <label>Region</label>
              <input
                type= "text"
                placeholder= "Region of origin"
                onChange={(e) => setRegion(e.target.value)}
                value={wineRegion}
              />
            </div>
            <div className="form-group">
              <label>Protected Origin?</label>
              <input
                type= "text"
                placeholder= "Type of legally protected origin like DOCG"
                onChange={(e) => setProtectedOrigin(e.target.value)}
                value={wineProtectedOrigin}
              />
            </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name= "description"
              placeholder= "Description of the wine"
              value={wineDescription}
              onChange={(e) => setDescription(e.target.value)}
              cols={20}
              rows={8}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit_btn">
              Update
            </button>
          </div>
        </form>
        <style jsx>
          {`
            .form {
              width: 400px;
              margin: 10px auto;
            }
            .form-group {
              width: 100%;
              margin-bottom: 10px;
              display: block;
            }
            .form-group label {
              display: block;
              margin-bottom: 10px;
            }
            .form-group input[type="text"] {
              padding: 10px;
              width: 100%;
            }
            .form-group textarea {
              padding: 10px;
              width: 100%;
            }
            .alert-error {
              width: 100%;
              color: red;
              margin-bottom: 10px;
            }
            .alert-message {
              width: 100%;
              color: green;
              margin-bottom: 10px;
            }
          `}
        </style>
    </>

    );
  }
  