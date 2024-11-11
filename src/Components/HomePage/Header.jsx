import { useState, useEffect, useCallback, useRef } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { BakeryItems } from "../../Utils/BakeryItem";
import { BeveragesItems } from "../../Utils/BeveragesItem";
import { DairyProductsItems } from "../../Utils/DairyProductsItems";
import { FrozenFoodItems } from "../../Utils/FrozenFoodsItems";
import { FruitsAndVegetablesItem } from "../../Utils/FruitsAndVegetablesItem";
import { MeatAndSeafoodItems } from "../../Utils/MeatAndSeafoodItems";
import { useNavigate } from "react-router-dom";

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