// import { FaLocationDot } from "react-icons/fa6";
// import { IoNotificationsOutline } from "react-icons/io5";
// import { FaSearch } from 'react-icons/fa';
// import { IoIosArrowBack } from "react-icons/io";
// import { BakeryItems } from "../../Utils/BakeryItem";
// import { BeveragesItems } from "../../Utils/BeveragesItem"
// import { DairyProductsItems } from "../../Utils/DairyProductsItems"
// import { FrozenFoodItems } from "../../Utils/FrozenFoodsItems"
// import { FruitsAndVegetablesItem } from "../../Utils/FruitsAndVegetablesItem"
// import { MeatAndSeafoodItems } from "../../Utils/MeatAndSeafoodItems"
// import { useState } from "react";

// const Header = () => {
//   const allItems = [
//     ...DairyProductsItems,
//     ...MeatAndSeafoodItems,
//     ...FruitsAndVegetablesItem,
//     ...BeveragesItems,
//     ...FrozenFoodItems,
//     ...BakeryItems,
//   ];

//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredItems, setFilteredItems] = useState(allItems);


//   const handleSearch = (event) => {
//     const searchQuery = event.target.value.toLowerCase();
//     setSearchTerm(searchQuery);

//     const results = allItems.filter(item =>
//       item.title.toLowerCase().includes(searchQuery) ||
//       item.category.toLowerCase().includes(searchQuery) ||
//       item.description.toLowerCase().includes(searchQuery)
//     );

//     setFilteredItems(results);
//   };

//   console.log(filteredItems, "this is filtered item")
//   return (
//     <>
//       <div className="fixed top-0 z-10 w-full flex flex-col items-center justify-center bg-[#d7f3d0] py-6 px-4 md:py-10 md:px-20 h-[29%]">
//         <div className="flex items-center justify-between w-full">
//           {/* Back arrow */}
//           <div className="flex items-center justify-center p-2 bg-white rounded-full">
//             <IoIosArrowBack className="text-black" size={17} />
//           </div>

//           {/* Location */}
//           <div className="flex flex-col items-center justify-center">
//             <div className="flex items-center justify-center gap-2">
//               <FaLocationDot size={16} />
//               <h1 className="text-sm font-semibold text-black md:text-base">Location</h1>
//             </div>
//             <h1 className="text-sm font-bold text-black md:text-lg">Nigeria, Enugu</h1>
//           </div>

//           {/* Notifications icon */}
//           <div className="flex items-center justify-center p-2 bg-white rounded-full">
//             <IoNotificationsOutline className="text-black" size={17} />
//           </div>
//         </div>

//         {/* Search bar */}
//         <div className="relative w-full max-w-[1000px] mt-6 md:mt-10">
//           <input
//             type="text"
//             className="w-full py-2 pl-10 pr-4 rounded-[35px] outline-0 text-sm md:text-base"
//             placeholder="Search Your Groceries"
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//           <FaSearch className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 text-[#88df72] font-extrabold" />

//           <div className="w-full bg-white h-[200px] overflow-hidden max-w-[1000px] mt-4">
//             {filteredItems.map((item) => (
//               <div key={item.id} className="p-2 border-b">
//                 <h2 className="text-lg font-semibold">{item.title}</h2>
//               </div>
//             ))}
//           </div>
          
//         </div>
//       </div>
//     </>
//   )
// }

// export default Header;

// import { useState, useEffect, useCallback, useRef } from "react";
// import { IoNotificationsOutline } from "react-icons/io5";
// import { IoIosArrowBack } from "react-icons/io";
// import { BakeryItems } from "../../Utils/BakeryItem";
// import { BeveragesItems } from "../../Utils/BeveragesItem";
// import { DairyProductsItems } from "../../Utils/DairyProductsItems";
// import { FrozenFoodItems } from "../../Utils/FrozenFoodsItems";
// import { FruitsAndVegetablesItem } from "../../Utils/FruitsAndVegetablesItem";
// import { MeatAndSeafoodItems } from "../../Utils/MeatAndSeafoodItems";
// import { useParams } from 'react-router-dom';
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showResults, setShowResults] = useState(false);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const searchRef = useRef(null);
//   const { sectionName, id } = useParams();
  

//   // Combine all items once during component initialization
//   const allItems = [
//     ...DairyProductsItems,
//     ...MeatAndSeafoodItems,
//     ...FruitsAndVegetablesItem,
//     ...BeveragesItems,
//     ...FrozenFoodItems,
//     ...BakeryItems,
//   ];

//   // Debounced search function
//   const debounce = (func, wait) => {
//     let timeout;
//     return (...args) => {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => func(...args), wait);
//     };
//   };

//   // Search function
//   const performSearch = useCallback((query) => {
//     if (!query.trim()) {
//       setFilteredItems([]);
//       return;
//     }

//     const searchQuery = query.toLowerCase();
//     const results = allItems.filter((item) =>
//       item.title.toLowerCase().includes(searchQuery) ||
//       item.category.toLowerCase().includes(searchQuery) 
//       // item.description.toLowerCase().includes(searchQuery)
//     );

//     setFilteredItems(results.slice(0, 5)); // Limit results to 5 items
//   }, [allItems]);

//   // Debounced search handler
//   const debouncedSearch = useCallback(
//     debounce((query) => performSearch(query), 300),
//     [performSearch]
//   );

//   // Handle input change
//   const handleSearch = (event) => {
//     const query = event.target.value;
//     setSearchTerm(query);
//     debouncedSearch(query);
//   };

//   // Handle click outside search results
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         setShowResults(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Show results when typing
//   useEffect(() => {
//     setShowResults(searchTerm.length > 0);
//   }, [searchTerm]);

//   return (
//     <div className="fixed top-0 z-10 w-full bg-[#d7f3d0]">
//       <div className="flex flex-col items-center justify-center w-full px-4 py-6 md:py-10 md:px-20">
//         {/* Top Navigation */}
//         <div className="flex items-center justify-between w-full max-w-7xl">
//           <button className="flex items-center justify-center p-2 transition-colors bg-white rounded-full hover:bg-gray-100">
//             <IoIosArrowBack className="text-black" size={17} />
//           </button>

//           <div className="flex flex-col items-center justify-center">
//             <div className="flex items-center justify-center gap-2">
//               <span className="text-sm font-semibold text-black md:text-base">
//                 Location
//               </span>
//             </div>
//             <span className="text-sm font-bold text-black md:text-lg">
//               Nigeria, Enugu
//             </span>
//           </div>

//           <button className="flex items-center justify-center p-2 transition-colors bg-white rounded-full hover:bg-gray-100">
//             <IoNotificationsOutline className="text-black" size={17} />
//           </button>
//         </div>

//         {/* Search Section */}
//         <div className="relative w-full max-w-3xl mt-6 md:mt-10" ref={searchRef}>
//           <div className="relative">
//             <input
//               type="text"
//               className="w-full py-3 pl-10 pr-4 text-sm transition-shadow bg-white rounded-full outline-none md:text-base focus:ring-2 focus:ring-green-300"
//               placeholder="Search Your Groceries"
//               value={searchTerm}
//               onChange={handleSearch}
//               onFocus={() => setShowResults(true)}
//             />
//           </div>

//           {/* Search Results */}
//           {showResults && filteredItems.length > 0 && (
//           <Link to={`/${sectionName}/${id}`}>
//             <div className="absolute w-full mt-2 overflow-hidden bg-white rounded-lg shadow-lg">
//               {filteredItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex items-center p-3 transition-colors cursor-pointer hover:bg-gray-50"
//                   onClick={() => {
//                     // Handle item selection
//                     setSearchTerm(item.title);
//                     setShowResults(false);
//                   }}
//                 >
//                   <div className="flex-1">
//                     <h3 className="font-medium text-gray-900">{item.title}</h3>
//                     <p className="text-sm text-gray-500">{item.category}</p>
//                   </div>
//                   {item.price && (
//                     <span className="text-sm font-medium text-green-600">
//                       {item.price}
//                     </span>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </Link>
//           )}


//           {/* No Results Message */}
//           {showResults && searchTerm && filteredItems.length === 0 && (
//             <div className="absolute w-full p-4 mt-2 text-center bg-white rounded-lg shadow-lg">
//               <p className="text-gray-500">No items found</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import { useState, useEffect, useCallback, useRef } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { BakeryItems } from "../../Utils/BakeryItem";
import { BeveragesItems } from "../../Utils/BeveragesItem";
import { DairyProductsItems } from "../../Utils/DairyProductsItems";
import { FrozenFoodItems } from "../../Utils/FrozenFoodsItems";
import { FruitsAndVegetablesItem } from "../../Utils/FruitsAndVegetablesItem";
import { MeatAndSeafoodItems } from "../../Utils/MeatAndSeafoodItems";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Combine all items with their section names
  const allItems = [
    ...DairyProductsItems.map(item => ({ ...item, section: 'dairyproducts' })),
    ...MeatAndSeafoodItems.map(item => ({ ...item, section: 'meatandseafood' })),
    ...FruitsAndVegetablesItem.map(item => ({ ...item, section: 'fruitsandvegetables' })),
    ...BeveragesItems.map(item => ({ ...item, section: 'beverages' })),
    ...FrozenFoodItems.map(item => ({ ...item, section: 'frozenfoods' })),
    ...BakeryItems.map(item => ({ ...item, section: 'bakery' })),
  ];

  // Debounced search function
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  // Search function
  const performSearch = useCallback((query) => {
    if (!query.trim()) {
      setFilteredItems([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const results = allItems.filter((item) =>
      item.title.toLowerCase().includes(searchQuery) ||
      item.category.toLowerCase().includes(searchQuery)
    );

    setFilteredItems(results.slice(0, 5)); // Limit results to 5 items
  }, [allItems]);

  // Debounced search handler
  const debouncedSearch = useCallback(
    debounce((query) => performSearch(query), 300),
    [performSearch]
  );

  // Handle input change
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    debouncedSearch(query);
  };

  // Handle item selection
  const handleItemSelect = (item) => {
    setSearchTerm(item.title);
    setShowResults(false);
    navigate(`/${item.section}/${item.id}`);
  };

  // Handle click outside search results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Show results when typing
  useEffect(() => {
    setShowResults(searchTerm.length > 0);
  }, [searchTerm]);

  return (
    <div className="fixed top-0 z-10 w-full bg-[#d7f3d0]">
      <div className="flex flex-col items-center justify-center w-full px-4 py-6 md:py-10 md:px-20">
        {/* Top Navigation */}
        <div className="flex items-center justify-between w-full max-w-7xl">
          <button 
            className="flex items-center justify-center p-2 transition-colors bg-white rounded-full hover:bg-gray-100"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack className="text-black" size={17} />
          </button>

          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm font-semibold text-black md:text-base">
                Location
              </span>
            </div>
            <span className="text-sm font-bold text-black md:text-lg">
              Nigeria, Enugu
            </span>
          </div>

          <button className="flex items-center justify-center p-2 transition-colors bg-white rounded-full hover:bg-gray-100">
            <IoNotificationsOutline className="text-black" size={17} />
          </button>
        </div>

        {/* Search Section */}
        <div className="relative w-full max-w-3xl mt-6 md:mt-10" ref={searchRef}>
          <div className="relative">
            <input
              type="text"
              className="w-full py-3 pl-10 pr-4 text-sm transition-shadow bg-white rounded-full outline-none md:text-base focus:ring-2 focus:ring-green-300"
              placeholder="Search Your Groceries"
              value={searchTerm}
              onChange={handleSearch}
              onFocus={() => setShowResults(true)}
            />
          </div>

          {/* Search Results */}
          {showResults && filteredItems.length > 0 && (
            <div className="absolute w-full mt-2 overflow-hidden bg-white rounded-lg shadow-lg">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center p-3 transition-colors cursor-pointer hover:bg-gray-50"
                  onClick={() => handleItemSelect(item)}
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                  {item.price && (
                    <span className="text-sm font-medium text-green-600">
                      {item.price}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* No Results Message */}
          {showResults && searchTerm && filteredItems.length === 0 && (
            <div className="absolute w-full p-4 mt-2 text-center bg-white rounded-lg shadow-lg">
              <p className="text-gray-500">No items found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;