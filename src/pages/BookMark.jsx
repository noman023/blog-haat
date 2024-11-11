import { useEffect, useState } from "react";
import CardComponent from "../components/shared/Card";
import useAuth from "../hooks/useAuth";
import axios from "axios";

export default function Bookmark() {
  const [bookmarks, setBookmarks] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/bookmark?user=${user.email}`
        );

        setBookmarks(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBookmarks();
  }, []);

  return (
    <div className="mt-4">
      <h1 className="text-3xl md:text-4xl text-center italic mb-10">
        Bookmarked Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {bookmarks.length === 0 && (
          <p className="text-yellow-300">No bookmark found!</p>
        )}

        {bookmarks.map((bookmark) => (
          <CardComponent
            key={bookmark._id}
            data={bookmark.blog}
            bookmarkId={bookmark._id}
          />
        ))}
      </div>
    </div>
  );
}
