import Footer from "../Components/Footer/Footer";
import PropTypes from "prop-types"; // Import PropTypes if you want to use them

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

// Optional: Define prop types for better type checking
Layout.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a valid React node
};

export default Layout;
