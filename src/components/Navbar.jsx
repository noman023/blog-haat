import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import SpinnerComponent from "./Spinner";

export default function NavComponent() {
  const { user, logOut, loading } = useAuth();

  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/blogs/add",
      name: "Add a Blog",
    },
    {
      path: "/blogs/all",
      name: "All Blogs",
    },
    {
      path: "/blogs/featured",
      name: "Featured Blog",
    },
    {
      path: "/blogs/bookmark",
      name: "Bookmark",
    },
  ];

  const dropdownItemStyle = "text-slate-300 hover:text-slate-950 duration-200";

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: err.message,
        });
      });
  };

  return (
    <Navbar fluid rounded className="bg-slate-950 px-0">
      <Navbar.Brand href="/">
        <h2 className="text-xl md:text-2xl font-bold italic">Blog Haat</h2>
      </Navbar.Brand>

      <Navbar.Collapse>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="hover:text-slate-400 duration-300"
          >
            {link.name}
          </Link>
        ))}
      </Navbar.Collapse>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            loading ? (
              <SpinnerComponent />
            ) : (
              <Avatar
                alt="User image"
                img={user?.photoURL ? user.photoURL : "/user.png"}
                rounded
              />
            )
          }
          className="bg-slate-700"
        >
          <Dropdown.Header className="text-slate-300">
            <span className="block text-sm">
              {user ? user.displayName : "User Name"}
            </span>
            <span className="block truncate text-sm font-medium">
              {user ? user.email : "User Email"}
            </span>
          </Dropdown.Header>

          {user ? (
            <>
              <Dropdown.Item
                className={dropdownItemStyle}
                onClick={handleLogOut}
              >
                Sign out
              </Dropdown.Item>
            </>
          ) : (
            <Link to={"/login"}>
              <Dropdown.Item className={dropdownItemStyle}>
                Sign In
              </Dropdown.Item>
            </Link>
          )}
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
