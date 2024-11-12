import { Avatar, Table } from "flowbite-react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import useTanstackQuery from "../hooks/useTanstackQuery";
import SpinnerComponent from "../components/Spinner";

export default function FeaturedBlogs() {
  const { data = [], isPending } = useTanstackQuery("/blog");

  if (isPending) return <SpinnerComponent />;

  // select 10 blogs by their content size
  const topTenBlogs = data
    .map((blog) => ({
      ...blog,
      contentLength: blog.content.length,
    }))
    // Sort by content length in descending order
    .sort((a, b) => b.contentLength - a.contentLength)
    .slice(0, 10);

  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl md:text-4xl text-center italic mb-10">
        Read our top 10 blogs
      </h1>

      <Table hoverable>
        <Table.Head className="bg-gray-900">
          <Table.HeadCell>Serial</Table.HeadCell>
          <Table.HeadCell>Blog Title</Table.HeadCell>
          <Table.HeadCell>Writer</Table.HeadCell>
          <Table.HeadCell>Writer Image</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {/* show top 10 blogs */}
          {topTenBlogs.map((blog, index) => (
            <Table.Row
              key={blog._id}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-slate-300"
            >
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{blog.title}</Table.Cell>
              <Table.Cell>{blog.writerName}</Table.Cell>
              <Table.Cell>
                <Avatar
                  alt="Writer Image"
                  img={
                    blog.writerImage
                      ? blog.writerImage
                      : "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  }
                />
              </Table.Cell>

              <Table.Cell>
                <Link to={`/blogs/${blog._id}`}>
                  <p className="flex items-center gap-2 hover:text-slate-400 duration-300">
                    Read <FaLongArrowAltRight className="text-lg" />
                  </p>
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
