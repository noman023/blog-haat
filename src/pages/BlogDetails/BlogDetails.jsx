import { Badge, Button, Modal } from "flowbite-react";
import { useParams } from "react-router-dom";
import { useState } from "react";

import useAuth from "../../hooks/useAuth";
import useTanstackQuery from "../../hooks/useTanstackQuery";
import SpinnerComponent from "../../components/Spinner";

import BlogForm from "../../components/shared/BlogForm";
import CommentSection from "./CommentSection";

export default function BlogDetails() {
  const [openModal, setOpenModal] = useState(null);
  const { user } = useAuth();
  const { id } = useParams();

  const { data = [], refetch } = useTanstackQuery(`/blog/${id}`);

  // if no data show sipnner component
  if (!data[0]) return <SpinnerComponent />;

  const { category, title, content, imgURL, writerEmail, _id } = data[0];

  // every \n will be rendered as separate p tag
  const splitContent = content.split("\n").map((line, index) => (
    <p key={index} className="text-xl">
      {line}
    </p>
  ));

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
        <div className="p-3 pb-7 mt-3 space-y-7">
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

          {splitContent}
        </div>
      </div>

      {/* modal for updating the blog */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-slate-800 ">
          <p className="text-slate-300">Update blog</p>
        </Modal.Header>

        <Modal.Body className="bg-slate-800 text-slate-300">
          <BlogForm
            blogData={data[0]}
            closeModal={setOpenModal}
            refetch={refetch}
          />
        </Modal.Body>
      </Modal>

      {/* comment section */}
      <CommentSection author={writerEmail} blogId={_id} />
    </>
  );
}
