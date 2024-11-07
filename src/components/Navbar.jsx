import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NavComponent() {
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
          label={<Avatar alt="User settings" img="/user.png" rounded />}
          className="bg-slate-700"
        >
          <Dropdown.Header className="text-slate-300">
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>

          <Link to={"/login"}>
            <Dropdown.Item className={dropdownItemStyle}>Sign In</Dropdown.Item>
          </Link>

          <Dropdown.Item className={dropdownItemStyle}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
