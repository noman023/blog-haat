import { Badge, Button } from "flowbite-react";

import CommentSection from "./CommentSection";

export default function BlogDetails() {
  const user = true;

  return (
    <>
      {/* blog content section*/}
      <div className=" bg-slate-800 border-gray-500 mb-12 md:mb-20 rounded-xl">
        <div>
          <img
            src="/images/image-1.jpg"
            alt="blog image"
            className="w-full h-[200px] md:h-[400px] object-cover rounded-xl"
          />
        </div>

        {/* blog content */}
        <div className="p-3 mt-3 space-y-7">
          <div className="flex justify-between ">
            <Badge color="success" className="max-w-max" size="lg">
              Health
            </Badge>

            {user && (
              <Button size="sm" color="gray">
                Update Blog
              </Button>
            )}
          </div>

          <h1 className="text-slate-100 text-3xl md:text-5xl text-center font-bold ">
            This is blog title
          </h1>

          <p className="text-xl pb-5">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order. Here are the biggest enterprise
            technology acquisitions of 2021 so far, in reverse chronological
            order.
            <br />
            <br />
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order. technology acquisitions of 2021
            so far, in reverse chronological order. Here are the biggest
            enterprise technology acquisitions of 2021 so far, in reverse
            chronological order.
          </p>
        </div>
      </div>

      {/* comment section */}
      <CommentSection />
    </>
  );
}
