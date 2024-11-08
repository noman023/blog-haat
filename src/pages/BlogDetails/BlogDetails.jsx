import { Badge, Button } from "flowbite-react";

import CommentSection from "./CommentSection";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function BlogDetails() {
  const { user } = useAuth();

  const res = useLoaderData();
  const { category, title, content, imgURL, writerEmail } = res[0];

  return (
    <>
      {/* blog content section*/}
      <div className=" bg-slate-800 border-gray-500 mb-12 md:mb-20 rounded-xl">
        <div>
          <img
            src={imgURL ? imgURL : "/images/image-1.jpg"}
            alt="blog image"
            className="w-full h-[200px] md:h-[400px] object-cover rounded-xl"
          />
        </div>

        {/* blog content */}
        <div className="p-3 mt-3 space-y-7">
          <div className="flex justify-between ">
            <Badge color="success" className="max-w-max" size="lg">
              {category}
            </Badge>

            {user.email != writerEmail && (
              <Button size="sm" color="gray">
                Update Blog
              </Button>
            )}
          </div>

          <h1 className="text-slate-100 text-3xl md:text-5xl text-center font-bold ">
            {title}
          </h1>

          <p className="text-xl pb-5">{content}</p>
        </div>
      </div>

      {/* comment section */}
      <CommentSection />
    </>
  );
}
