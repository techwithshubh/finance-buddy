import { createBrowserRouter } from "react-router-dom";
import ManageSaving from "./pages/ManageSaving";
import Savings from "./pages/Savings";
import ApiError from "./pages/ApiError";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Savings />,
  },
  {
    path: "/savings/add",
    element: <ManageSaving />,
  },
  {
    path:"/api/error",
    element: <ApiError />
  }
]);
