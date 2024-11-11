import { Avatar, Card } from "flowbite-react";

export default function CommentCard({ data }) {
  return (
    <Card className="bg-slate-800 border-slate-500">
      <div className="flex items-center space-x-4">
        <div className="shrink-0">
          <Avatar
            alt="Writer Image"
            img={data.commenterImg ? data.commenterImg : "/user.png"}
          />
        </div>

        <div>
          <p className="truncate text-sm font-bold">{data.commenterName}</p>

          <p className="truncate text-sm ">{data.commenterEmail}</p>
        </div>
      </div>

      <h5 className="text-lg font-bold">{data.comment}</h5>
    </Card>
  );
}
