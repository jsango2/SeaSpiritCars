import React from "react";

// Import global styles (e.g., from your CSS framework or custom styles)
import "../styles/index.css"; // Adjust path as needed

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
