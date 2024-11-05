import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

import AllBlogs from "../pages/AllBlogs";
import BlogDetails from "../pages/BlogDetails";
import AddBlog from "../pages/AddBlog";
import BookMark from "../pages/BookMark";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blogs/add",
        element: <AddBlog />,
      },
      {
        path: "/blogs/all",
        element: <AllBlogs />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
      },
      {
        path: "/blogs/bookmark",
        element: <BookMark />,
      },
    ],
  },
]);

export default router;
