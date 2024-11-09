// src/Pages/ItemDetails.js
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BeveragesItems } from "../Utils/BeveragesItem";
import { BakeryItems } from "../Utils/BakeryItem";
import { DairyProductsItems } from "../Utils/DairyProductsItems";
import { FrozenFoodItems } from "../Utils/FrozenFoodsItems";
import { FruitsAndVegetablesItem } from "../Utils/FruitsAndVegetablesItem";
import { MeatAndSeafoodItems } from "../Utils/MeatAndSeafoodItems";
import { PopularItems } from "../Utils/PopularItems";

const ItemDetails = () => {
  const { id } = useParams(); // Get the item ID from the URL
  const [item, setItem] = useState(null); // State to store the item details

  // Map for all items data
  const itemsMap = {
    beverages: BeveragesItems,
    fruitsandvegetables: FruitsAndVegetablesItem,
    meatandseafood: MeatAndSeafoodItems,
    dairyproducts: DairyProductsItems,
    bakery: BakeryItems,
    frozenfoods: FrozenFoodItems,
    PopularItems: PopularItems,
  };

  // Get the section name from the URL or pass a default one
  const sectionName = window.location.pathname.split('/')[1];

  useEffect(() => {
    // Fetch the corresponding item data based on the section and item id
    const items = itemsMap[sectionName.toLowerCase()] || [];
    const foundItem = items.find((item) => item.id === parseInt(id)); // Find item by ID
    setItem(foundItem);
  }, [id, sectionName,]);

  if (!item) return <div>Item not found</div>;

  return (
    <div className="max-w-3xl py-6 mx-auto">
      <div className="flex flex-col items-center">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full max-w-[300px] h-auto object-cover"
        />
        <h1 className="mt-4 text-3xl font-semibold">{item.title}</h1>
        <p className="mt-2 text-lg text-gray-500">{item.description}</p>
        <p className="mt-4 text-xl text-gray-800">${item.price}</p>

        {/* Add to cart button */}
        <button
          className="px-4 py-2 mt-6 text-white bg-green-600 rounded"
          onClick={() => {
            // Implement add to cart logic
            alert(`Added ${item.title} to the cart!`);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;
