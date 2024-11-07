import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col gap-6 justify-center items-center">
      <h1 className="text-3xl">Page not found :(</h1>

      <Link to="/">
        <Button color="gray">Back to home</Button>
      </Link>
    </div>
  );
}
