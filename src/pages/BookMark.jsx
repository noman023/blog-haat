import CardComponent from "../components/Card";

export default function Bookmark() {
  return (
    <div className="mt-4">
      <h1 className="text-3xl text-center italic mb-10">Bookmarked Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <CardComponent bookmark={true} />
        <CardComponent bookmark={true} />
        <CardComponent bookmark={true} />
        <CardComponent bookmark={true} />
      </div>
    </div>
  );
}
