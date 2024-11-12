import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";

export default function Home() {
  return (
    <div>
      <Banner />
      <RecentBlogs />
      <NewsLetter />
    </div>
  );
}
