import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";

export default function Home() {
  return (
    <div className="my-10">
      <Banner />
      <RecentBlogs />
      <NewsLetter />
    </div>
  );
}
