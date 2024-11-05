import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  return <div>Blog number {id}</div>;
}
