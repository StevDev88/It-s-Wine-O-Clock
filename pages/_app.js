import Layout from "@/components/Layout"
import { SessionProvider } from "next-auth/react"

// Version 1, working setup + MUI CSS Baseline added

// import CssBaseline from '@mui/material/CssBaseline';


// export default function App({
//   Component, pageProps: { session, ...pageProps }
// }) {
//   return (
//     <SessionProvider session={session}>
//         <CssBaseline />
//         <Layout>
//             <Component {...pageProps}/>
//         </Layout>
//     </SessionProvider>
//   )
// }


// Version 2, with outdated MUI boilerplate

// import React from 'react';
// import PropTypes from 'prop-types';
// import Head from 'next/head';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from '../styles/themes/theme';

// export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {

//   React.useEffect(() => {
//     const jssStyles = document.querySelector('#jss-server-side');
//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }
//   }, []);

//   return (
//     <React.Fragment>
//         <Head>
//             <title>My page</title>
//             <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
//         </Head>
//     <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <SessionProvider session={session}>
//         <Layout>
//             <Component {...pageProps}/>
//         </Layout>
//         </SessionProvider>
//     </ThemeProvider>
//     </React.Fragment>
//   );
// }

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };


import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../config/theme';
import createEmotionCache from '../config/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps: { session, ...pageProps } }) {
  return (
    <CacheProvider value={emotionCache}>
        <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <SessionProvider session={session}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                    <Layout>
                        <Component {...pageProps}/>
                    </Layout>
            </ThemeProvider>
        </SessionProvider>
    </CacheProvider>
  );
}