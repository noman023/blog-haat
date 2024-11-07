import { Button, FileInput, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {};

  return (
    <div>
      <form className="bg-slate-800 flex max-w-md flex-col gap-4 border-2 border-gray-500 mx-auto my-10 p-5 rounded-xl shadow-2xl">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="name"
              value="Your Name"
              className="text-slate-300"
            />
          </div>

          <input
            id="name"
            type="text"
            placeholder="Name"
            required
            className="w-full bg-slate-900 border-slate-500 rounded-md"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Your email"
              className="text-slate-300"
            />
          </div>

          <input
            id="email1"
            type="email"
            placeholder="name@example.com"
            required
            className="w-full bg-slate-900 border-slate-500 rounded-md"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="file-upload"
              value="Profile Image"
              className="text-slate-300"
            />
          </div>

          <input
            type="file"
            id="file-upload"
            className="w-full bg-slate-900 border-slate-500 rounded-md"
          />
        </div>

        <div className="relative">
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Password"
              className="text-slate-300"
            />
          </div>

          <input
            id="password1"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            required
            className="w-full bg-slate-900 border-slate-500 rounded-md"
          />

          {showPassword ? (
            <FaEye
              className="absolute right-3 bottom-3 text-gray-500 text-xl cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <FaEyeSlash
              className="absolute right-3 bottom-3 text-gray-500 text-xl cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>

        <p className="mt-2 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-slate-400 hover:text-blue-400 duration-300"
          >
            login
          </Link>
        </p>

        <Button type="submit" color="gray">
          Register
        </Button>
      </form>
    </div>
  );
}
