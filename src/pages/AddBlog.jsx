import { Button, FileInput, Label, TextInput, Textarea } from "flowbite-react";

export default function AddBlog() {
  return (
    <div className="mt-16">
      <h1 className=" text-4xl text-center mb-7">Write your blog.</h1>

      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="title"
              value="Blog Title"
              className="text-slate-300"
            />
          </div>

          <TextInput id="title" type="text" placeholder="Name" required />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="file-upload"
              value="Blog Image"
              className="text-slate-300"
            />
          </div>

          <FileInput id="file-upload" />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="content"
              value="Blog Content"
              className="text-slate-300"
            />
          </div>

          <Textarea
            name="content"
            type="text"
            placeholder="Write your blog"
            required
            rows={10}
          />
        </div>

        <Button color="dark" type="submit">
          Post Blog
        </Button>
      </form>
    </div>
  );
}
