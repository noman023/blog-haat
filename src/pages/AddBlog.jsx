import BlogForm from "../components/shared/BlogForm";

export default function AddBlog() {
  return (
    <div className="mt-16">
      <h1 className="text-3xl md:text-4xl text-center italic mb-7">
        Write your blog
      </h1>

      <BlogForm />
    </div>
  );
}
