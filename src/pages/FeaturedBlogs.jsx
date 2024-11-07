import { Avatar, Table } from "flowbite-react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FeaturedBlogs() {
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
          <Table.Row className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-slate-300">
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Blog one</Table.Cell>
            <Table.Cell>John doe</Table.Cell>
            <Table.Cell>
              <Avatar
                alt="Writer Image"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              />
            </Table.Cell>

            <Table.Cell>
              <Link to={"/blogs/d"}>
                <p className="flex items-center gap-2 hover:text-slate-400 duration-300">
                  Read <FaLongArrowAltRight className="text-lg" />
                </p>
              </Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-slate-300">
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Blog one</Table.Cell>
            <Table.Cell>John doe</Table.Cell>
            <Table.Cell>
              <Avatar
                alt="Writer Image"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              />
            </Table.Cell>

            <Table.Cell>
              <Link to={"/blogs/d"}>
                <p className="flex items-center gap-2 hover:text-slate-400 duration-300">
                  Read <FaLongArrowAltRight className="text-lg" />
                </p>
              </Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-slate-300">
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Blog one</Table.Cell>
            <Table.Cell>John doe</Table.Cell>
            <Table.Cell>
              <Avatar
                alt="Writer Image"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              />
            </Table.Cell>

            <Table.Cell>
              <Link to={"/blogs/d"}>
                <p className="flex items-center gap-2 hover:text-slate-400 duration-300">
                  Read <FaLongArrowAltRight className="text-lg" />
                </p>
              </Link>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
