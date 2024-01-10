import { createBrowserRouter } from "react-router-dom";
import ManageSaving from "./pages/ManageSaving";
import Savings from "./pages/Savings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Savings />,
  },
  {
    path: "/savings/add",
    element: <ManageSaving />,
  },
]);
