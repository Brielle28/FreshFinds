// // import React, { createContext, useState } from "react";

// // export const UserContext = createContext();

// // const UserProvider = ({ children }) => {

// //     const [likeArray, setLikeArray] = useState([]);

// //     // Function to toggle like state
// //     const toggleLike = (item) => {
// //       setLikeArray((prevArray) => {
// //         if (prevArray.some((likedItem) => likedItem.id === item.id)) {
// //           // If already liked, remove it
// //           return prevArray.filter((likedItem) => likedItem.id !== item.id);
// //         } else {
// //           // If not liked, add it
// //           return [...prevArray, item];
// //         }
// //       });
// //     };
// //   const value = { 
// //     likeArray,
// //     toggleLike,
// //   };

// //   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// // }

// // export default UserProvider

// import React, { createContext, useState } from "react";

// export const UserContext = createContext();

// const UserProvider = ({ children }) => {
//   const [likeArray, setLikeArray] = useState([]); // Initialize as an array

//   const value = {
//     likeArray,
//     setLikeArray
//   };

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };

// export default UserProvider;


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
