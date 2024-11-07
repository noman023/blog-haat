import { Avatar, Card } from "flowbite-react";

export default function CommentCard() {
  return (
    <Card className="bg-slate-800 border-slate-500">
      <div className="flex items-center space-x-4">
        <div className="shrink-0">
          <Avatar alt="Writer Image" img="/user.png" />
        </div>

        <div>
          <p className="truncate text-sm font-bold">Neil Sims</p>

          <p className="truncate text-sm ">email@windster.com</p>
        </div>
      </div>

      <h5 className="text-lg font-bold">
        Noteworthy technology acquisitions 2021
      </h5>
    </Card>
  );
}
