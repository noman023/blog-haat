import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

import AllBlogs from "../pages/AllBlogs";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import AddBlog from "../pages/AddBlog";
import BookMark from "../pages/BookMark";
import FeaturedBlogs from "../pages/FeaturedBlogs";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        loader: () => {
          return fetch(`http://localhost:4000/blog/`);
        },
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
        element: (
          <PrivateRoute>
            <AddBlog />,
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs/all",
        element: <AllBlogs />,
      },
      {
        path: "/blogs/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:4000/blog/${params.id}`);
        },
        element: <BlogDetails />,
      },
      {
        path: "/blogs/bookmark",
        element: (
          <PrivateRoute>
            <BookMark />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs/featured",
        element: <FeaturedBlogs />,
      },
    ],
  },
]);

export default router;
