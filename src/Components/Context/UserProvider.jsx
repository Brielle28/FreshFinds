import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [likeArray, setLikeArray] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const storedLikes = localStorage.getItem("likeArray");
    const storedCart = localStorage.getItem("cartItems");

    if (storedLikes) setLikeArray(JSON.parse(storedLikes));
    if (storedCart) setCartItems(JSON.parse(storedCart));
  }, []);

  // Save to localStorage when updated
  useEffect(() => {
    if (likeArray.length > 0) {
      localStorage.setItem("likeArray", JSON.stringify(likeArray));
    } else {
      localStorage.removeItem("likeArray");
    }
  }, [likeArray]);

  console.log(cartItems, "from provider");
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems");
    }
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        // Create a new array with the updated item
        const newItems = prevItems.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
        return newItems;
      }

      // Add new item with quantity 1
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, change) => {
    setCartItems((prevItems) => {
      // Find the item to update
      const itemToUpdate = prevItems.find((item) => item.id === itemId);

      if (!itemToUpdate) return prevItems; // If item doesn't exist, return current items

      // Calculate the new quantity
      const newQuantity = itemToUpdate.quantity + change;

      if (newQuantity < 1) {
        removeFromCart(itemId);
        return prevItems; // Return the updated list after removal
      }

      // Update the quantity of the item
      return prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      // Remove currency symbols and any non-numeric characters except decimal point
      const priceString = item.price.toString().replace(/[^0-9.]/g, '');
      const price = parseFloat(priceString);
      const quantity = item.quantity || 1;
      
      // For debugging
      console.log({
        itemTitle: item.title,
        originalPrice: item.price,
        cleanedPrice: priceString,
        parsedPrice: price,
        quantity: quantity,
        itemTotal: price * quantity
      });
  
      if (isNaN(price)) {
        console.warn(`Invalid price for item ${item.title}:`, item.price);
        return total;
      }
  
      return total + (price * quantity);
    }, 0).toFixed(2); // Round to 2 decimal places
  };
  
  // Alternative version if your prices include commas for thousands
  // const getTotalAmount = () => {
  //   return cartItems.reduce((total, item) => {
  //     // Remove currency symbols and convert commas to handle thousand separators
  //     const priceString = item.price.toString()
  //       .replace(/[^0-9.,]/g, '') // Remove everything except numbers, dots, and commas
  //       .replace(',', ''); // Remove commas if they're used as thousand separators
      
  //     const price = parseFloat(priceString);
  //     const quantity = item.quantity || 1;
      
  //     // For debugging
  //     console.log({
  //       itemTitle: item.title,
  //       originalPrice: item.price,
  //       cleanedPrice: priceString,
  //       parsedPrice: price,
  //       quantity: quantity,
  //       itemTotal: price * quantity
  //     });
  
  //     if (isNaN(price)) {
  //       console.warn(`Invalid price for item ${item.title}:`, item.price);
  //       return total;
  //     }
  
  //     return total + (price * quantity);
  //   }, 0).toFixed(2); // Round to 2 decimal places
  // };
  
  
  //CHECKOUT STEPS

  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Personal info", "Payment Method", "Summary"];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handlePreviousStep = () => {
    if (currentStep < steps.length + 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  //form
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
  });

  //payment form data
  const [paymentFormData, setPaymentFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    cardName: "",
  });

  const value = {
    likeArray,
    setLikeArray,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    currentStep,
    setCurrentStep,
    handleNext,
    steps,
    handlePreviousStep,
    formData,
    setFormData,
    setPaymentFormData,
    paymentFormData,
    getTotalAmount,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
