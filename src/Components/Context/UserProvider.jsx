import React, { createContext, useState, useEffect } from "react";

// Create the UserContext
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [likeArray, setLikeArray] = useState([]);

  // On component mount, load the likeArray from localStorage if available
  useEffect(() => {
    const storedLikes = localStorage.getItem('likeArray');
    if (storedLikes) {
      setLikeArray(JSON.parse(storedLikes));
    }
  }, []);

  // Save likeArray to localStorage whenever it changes
  useEffect(() => {
    if (likeArray.length > 0) {
      localStorage.setItem('likeArray', JSON.stringify(likeArray));
    } else {
      localStorage.removeItem('likeArray'); // Clean up if array is empty
    }
  }, [likeArray]);

  const value = {
    likeArray,
    setLikeArray,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
