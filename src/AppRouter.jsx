// src/AppRouter.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TimerHome from "./Pages/TimerHome";
import HomePage from "./Pages/HomePage";
import UserProvider from "./Components/Context/UserProvider";
import LikeItems from "./Pages/LikeItems";
import ItemsInCart from "./Pages/ItemsInCart";
import CheckOut from "./Pages/CheckOut";
import Section from "./Pages/Section";
import ItemDetails from "./Pages/ItemDetails"; // Ensure this is imported
import OrderSuccess from "./Pages/OrderSuccess";

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
    path: "/LikeItems",
    element: <LikeItems />,
  },
  {
    path: "/ItemsInCart",
    element: <ItemsInCart />,
  },
  {
    path: "/CheckOut",
    element: <CheckOut />,
  },
  {
    path: "/OrderSuccess",
    element: <OrderSuccess />,
  },
  {
    path: "/section/:sectionName",
    element: <Section />,
  },
  {
    path: "/:sectionName/:id",
    element: <ItemDetails />,
  },
  
]);

const AppRouter = () => {
  return (
    <UserProvider>
      <RouterProvider router={routing} />
    </UserProvider>
  );
};

export default AppRouter;
