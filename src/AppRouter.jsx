import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TimerHome from "./Pages/TimerHome";
import HomePage from "./Pages/HomePage";
import FruitsAndVegetables from "./Pages/FruitsAndVegetables";
import MeatAndSeafood from "./Pages/MeatAndSeafood";
import DairyProducts from "./Pages/DairyProducts";
import Bakery from "./Pages/Bakery";
import Beverages from "./Pages/Beverages";
import FrozenFoods from "./Pages/FrozenFoods";
import UserProvider from "./Components/Context/UserProvider";

// Define routes
const routing = createBrowserRouter([
  {
    path: "/",
    element: <TimerHome />,
  },
  {
    path: "/HomePage",
    element: <HomePage />,
  },
  {
    path: "/FruitsAndVegetables",
    element: <FruitsAndVegetables />,
  },
  {
    path: "/MeatAndSeafood",
    element: <MeatAndSeafood />,
  },
  {
    path: "/DairyProducts",
    element: <DairyProducts />,
  },
  {
    path: "/Bakery",
    element: <Bakery />,
  },
  {
    path: "/Beverages",
    element: <Beverages />,
  },
  {
    path: "/FrozenFoods",
    element: <FrozenFoods />,
  },
]);

const AppRouter = () => {
  return (
    <>
      <UserProvider>
        <RouterProvider router={routing} />;
      </UserProvider>
    </>
  );
};

export default AppRouter;
