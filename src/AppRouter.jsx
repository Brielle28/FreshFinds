import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TimerHome from "./Pages/TimerHome";
import HomePage from "./Pages/HomePage";

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
]);

const AppRouter = () => {
  return <RouterProvider router={routing} />;
};

export default AppRouter;
