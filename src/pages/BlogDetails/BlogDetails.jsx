import { Badge, Button, Modal } from "flowbite-react";

import CommentSection from "./CommentSection";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import BlogForm from "../../components/shared/BlogForm";

export default function BlogDetails() {
  const [openModal, setOpenModal] = useState(null);
  const { user } = useAuth();

  const responseData = useLoaderData();
  const { category, title, content, imgURL, writerEmail } = responseData[0];

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

            {user?.email === writerEmail && (
              <Button size="sm" color="gray" onClick={() => setOpenModal(true)}>
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

      {/* modal for updating the blog */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-slate-800 ">
          <p className="text-slate-300">Update blog</p>
        </Modal.Header>

        <Modal.Body className="bg-slate-800 text-slate-300">
          <BlogForm blogData={responseData[0]} closeModal={setOpenModal} />
        </Modal.Body>
      </Modal>

      {/* comment section */}
      <CommentSection />
    </>
  );
}
