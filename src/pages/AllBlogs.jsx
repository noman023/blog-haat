import { TextInput } from "flowbite-react";
import CardComponent from "../components/Card";
import { useState } from "react";

export default function AllBlogs() {
  const [searchText, setSearchText] = useState("");

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
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}
