import { TextInput } from "flowbite-react";
import CardComponent from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:4000/blog/");
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="mt-4">
      <h1 className="text-3xl md:text-4xl text-center italic">All Blogs</h1>

      <div className="max-w-md mx-auto my-10 ">
        <TextInput
          placeholder="Search blog by title.."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {blogs.map((blog) => (
          <CardComponent key={blog._id} data={blog} />
        ))}
      </div>
    </div>
  );
}
