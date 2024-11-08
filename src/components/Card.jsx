import { Badge, Button, Card } from "flowbite-react";
import { FaRegBookmark } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";

import { Link } from "react-router-dom";

export default function CardComponent({ data, bookmark = false }) {
  const handleBookmark = () => {};
  const handleRemoveBookmark = () => {};

  return (
    <Card
      className="max-w-sm bg-slate-800 border-gray-500 rounded-xl"
      imgAlt="blog image"
      imgSrc={data?.imgURL ? data.imgURL : "/images/image-1.jpg"}
    >
      <Badge color="success" className="max-w-max">
        {data.category}
      </Badge>

      <h5 className="text-2xl font-bold tracking-tight">{data.title}</h5>

      <p className="line-clamp-3">{data.content}</p>

      <div className="flex justify-between items-center mt-2">
        <Link to={`/blogs/${data._id}`}>
          <Button color="gray">Read Blog</Button>
        </Link>

        {bookmark ? (
          <IoTrashBinSharp
            className="text-2xl cursor-pointer"
            title="Remove from bookmark"
            onClick={handleRemoveBookmark}
          />
        ) : (
          <FaRegBookmark
            className="text-2xl cursor-pointer"
            title="bookmark this blog"
            onClick={handleBookmark}
          />
        )}
      </div>
    </Card>
  );
}
