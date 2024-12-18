import { Badge, Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { FaRegBookmark } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";

import useAuth from "../../hooks/useAuth";
import useAxiosInstance from "../../hooks/useAxiosInstance";

export default function CardComponent({ data, bookmarkId = false, refetch }) {
  const { user } = useAuth();
  const axiosInstance = useAxiosInstance();

  // add to bookmark
  const handleAddBookmark = async () => {
    axiosInstance
      .post("/bookmark/add/", {
        blog: data._id,
        user: user.email,
      })
      .then((res) => {
        if (res.status === 201) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: res.data,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: err.response.data,
        });
      });
  };

  // remove from bookmark
  const handleRemoveBookmark = () => {
    axiosInstance
      .delete(`/bookmark/${bookmarkId}`)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: res.data,
            showConfirmButton: false,
            timer: 1500,
          });

          // refetch bookmark
          refetch();
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: err.response.data,
        });
      });
  };

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

        {/* if bookmark id exist then show remove bookmark icon else add icon */}
        {bookmarkId ? (
          <IoTrashBinSharp
            className="text-2xl cursor-pointer"
            title="Remove from bookmark"
            onClick={handleRemoveBookmark}
          />
        ) : (
          <FaRegBookmark
            className="text-2xl cursor-pointer"
            title="bookmark this blog"
            onClick={handleAddBookmark}
          />
        )}
      </div>
    </Card>
  );
}
