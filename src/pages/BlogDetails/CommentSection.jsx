import { Button } from "flowbite-react";
import { useState } from "react";

import CommentCard from "../../components/CommentCard";
import useAuth from "../../hooks/useAuth";

export default function CommentSection({ author }) {
  const [comment, setComment] = useState("");

  const { user } = useAuth();

  const handleComment = () => {
    console.log("commnet posted");
    setComment("");
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl text-center italic mb-4 md:mb-7">
        Comment Section
      </h1>

      <div className="flex flex-col-reverse md:flex-row gap-10">
        {/* all comments section */}
        <div className="md:w-[60%]">
          <p className="mb-2">All Comments</p>

          <div className="space-y-3">
            <CommentCard />
            <CommentCard />
          </div>
        </div>

        {/* create comment section */}
        <div className="md:w-[40%] space-y-2">
          <h1>Create a Comment!</h1>

          <textarea
            type="text"
            value={comment}
            name="comment"
            placeholder="Comment on this blog.."
            className="w-full bg-slate-800 text-slate-300 border-slate-500"
            onChange={(e) => setComment(e.target.value)}
            disabled={user?.email === author}
          />

          {user?.email === author && (
            <p className="text-yellow-300">Can't comment to your own post!</p>
          )}

          <Button
            color="gray"
            onClick={handleComment}
            className="w-full"
            disabled={user?.email === author}
          >
            Comment
          </Button>
        </div>
      </div>
    </div>
  );
}
