import CardComponent from "../../components/Card";

export default function RecentBlogs({ data }) {
  return (
    <div className="mt-4">
      <h1 className="text-3xl text-center italic mb-10">Recent Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {data.map((blog) => (
          <CardComponent key={blog._id} data={blog} />
        ))}
      </div>
    </div>
  );
}
