import axios from "axios";
import { Button, Label } from "flowbite-react";

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function BlogForm({ blogData, closeModal }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  // on adding blog
  const onAdd = async (e) => {
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
          title: "Blog created successfully",
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

  // on updating blog
  const onUpdate = (e) => {
    const field = e.target;

    const updatedData = {
      title: field.title.value,
      category: field.category.value,
      content: field.content.value,
    };

    //  update data
    axios
      .patch(`/blogs/${blogData._id}`, updatedData)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Blog updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: err.message,
        });
      });

    //close modal
    closeModal(false);
  };

  //  set callBack based on blogData
  const callBack = blogData ? onUpdate : onAdd;

  return (
    <form
      onSubmit={callBack}
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
          defaultValue={blogData && blogData.title}
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
          defaultValue={blogData && blogData.category}
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
          defaultValue={blogData && blogData.image}
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
          defaultValue={blogData && blogData.content}
          required
          rows={10}
          className="w-full bg-slate-900 border-slate-500 rounded-md"
        />
      </div>

      <Button color="gray" type="submit">
        {blogData ? "Update Blog" : "Post Blog"}
      </Button>
    </form>
  );
}
