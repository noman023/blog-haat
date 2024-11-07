import { Badge, Button, Card } from "flowbite-react";
import { FaRegBookmark } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";

import { Link } from "react-router-dom";

export default function CardComponent({ bookmark = false }) {
  const handleBookmark = () => {};
  const handleRemoveBookmark = () => {};

  return (
    <Card
      className="max-w-sm bg-slate-800 border-gray-500 rounded-xl"
      imgAlt="blog image"
      imgSrc="/images/image-1.jpg"
    >
      <Badge color="success" className="max-w-max">
        Health
      </Badge>

      <h5 className="text-2xl font-bold tracking-tight">
        Noteworthy technology acquisitions 2021
      </h5>

      <p className="line-clamp-3">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order. Here are the biggest enterprise
        technology acquisitions of 2021 so far, in reverse chronological order.
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>

      <div className="flex justify-between items-center mt-2">
        <Link to={"/blogs/blogNumber"}>
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
