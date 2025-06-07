import React from "react";

// Import global styles (e.g., from your CSS framework or custom styles)
import "../styles/index.css"; // Adjust path as needed

// If you're using a Context API for global state:
// import { MyContextProvider } from '../context/MyContext';

// If you have a shared layout component:
// import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  // You can define a global layout here, or use getLayout on individual pages
  // If a page defines its own layout, it will override this one.
  // const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
