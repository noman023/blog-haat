import { Button, Label } from "flowbite-react";

export default function AddBlog() {
  return (
    <div className="mt-16">
      <h1 className="text-3xl md:text-4xl text-center italic mb-7">
        Write your blog
      </h1>

      <form className="flex flex-col gap-4 bg-slate-800 px-5 py-7 rounded-xl space-y-3">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="title"
              value="Blog Title"
              className="text-slate-300"
            />
          </div>

          <input
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
