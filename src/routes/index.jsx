import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RootLayout from "../layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h1>page not found</h1>,
  },
]);

export default router;
