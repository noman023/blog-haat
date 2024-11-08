import { Button, Label } from "flowbite-react";
import { useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function AddBlog() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const field = e.target;

    // host image to imgbb
    const imageFile = { image: field.image.files[0] };
    const response = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const imgUrl = response.data.data.display_url;

    const blogData = {
      title: field.title.value,
      category: field.category.value,
      imgURL: imgUrl,
      content: field.content.value,
      writerName: user && user.displayName,
      writerEmail: user && user.email,
    };

    if (response.data.success) {
      const res = await axios.post("http://localhost:4000/blog/add", blogData);

      if (res.status === 201) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: res.data,
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      } else {
        Swal.fire({
          icon: "warning",
          title: err.message,
        });
      }
    }
  };

  return (
    <div className="mt-16">
      <h1 className="text-3xl md:text-4xl text-center italic mb-7">
        Write your blog
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-slate-800 px-5 py-7 rounded-xl space-y-3"
      >
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="title"
              value="Blog Title"
              className="text-slate-300"
            />
          </div>

          <input
            name="title"
            id="title"
            type="text"
            placeholder="Blog title.."
            required
            className="w-full bg-slate-900 border-slate-500 rounded-md"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="category"
              value="Blog Category"
              className="text-slate-300"
            />
          </div>

          <select
            name="category"
            id="category"
            required
            className="w-full bg-slate-900 border-slate-500"
          >
            <option>---</option>
            <option>Health Care</option>
            <option>Technology</option>
            <option>Travel</option>
            <option>Education</option>
            <option>Science</option>
          </select>
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="file-upload"
              value="Blog Image"
              className="text-slate-300"
            />
          </div>

          <input
            name="image"
            type="file"
            id="file-upload"
            className="w-full bg-slate-900 border-slate-500 rounded-md"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="content"
              value="Blog Content"
              className="text-slate-300"
            />
          </div>

          <textarea
            name="content"
            type="text"
            placeholder="Write your blog"
            required
            rows={10}
            className="w-full bg-slate-900 border-slate-500 rounded-md"
          />
        </div>

        <Button color="gray" type="submit">
          Post Blog
        </Button>
      </form>
    </div>
  );
}
