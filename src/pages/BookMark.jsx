import CardComponent from "../components/shared/Card";
import useAuth from "../hooks/useAuth";

import useTanstackQuery from "../hooks/useTanstackQuery";
import SpinnerComponent from "../components/Spinner";

export default function Bookmark() {
  const { user } = useAuth();

  const { data = [], isPending } = useTanstackQuery(
    `/bookmark?user=${user.email}`
  );

  return (
    <div className="mt-4">
      <h1 className="text-3xl md:text-4xl text-center italic mb-10">
        Bookmarked Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {/* if not pending and no data then show this text */}
        {!isPending && data.length === 0 && (
          <p className="text-yellow-300">No bookmark found!</p>
        )}

        {isPending ? (
          <SpinnerComponent />
        ) : (
          data.map((bookmark) => (
            <CardComponent
              key={bookmark._id}
              data={bookmark.blog}
              bookmarkId={bookmark._id}
            />
          ))
        )}
      </div>
    </div>
  );
}
