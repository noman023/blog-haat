import { Badge, Button, Card } from "flowbite-react";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CardComponent() {
  return (
    <Card
      className="max-w-sm bg-slate-900 border-gray-500"
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

        <FaRegBookmark
          className="text-2xl cursor-pointer"
          title="bookmark this blog"
        />
      </div>
    </Card>
  );
}
