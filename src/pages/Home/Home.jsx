import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";

export default function Home() {
  const blogs = useLoaderData();

  return (
    <div>
      <Banner />
      <RecentBlogs data={blogs} />
      <NewsLetter />
    </div>
  );
}
