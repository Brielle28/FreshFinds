import React from "react";
import Footer from "../Components/Footer/Footer"
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {children} {/* This will render the page content dynamically */}
      </main>
      <Footer /> {/* The footer will always be at the bottom */}
    </div>
  );
};

export default Layout;
