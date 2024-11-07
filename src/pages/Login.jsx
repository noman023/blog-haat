import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {};

  return (
    <div>
      <form className="bg-slate-700 flex max-w-md flex-col gap-4 border-2 border-gray-500 mx-auto my-10 p-5 rounded-xl shadow-2xl">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Your email"
              className="text-slate-300"
            />
          </div>

          <TextInput
            id="email1"
            type="email"
            placeholder="name@example.com"
            required
          />
        </div>

        <div className="relative">
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Your password"
              className="text-slate-300"
            />
          </div>

          <TextInput
            id="password1"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            required
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
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-slate-400 hover:text-blue-400 duration-300"
          >
            Register
          </Link>
        </p>

        <Button type="submit" color="dark">
          Login
        </Button>

        <p className="text-lg font-bold text-center">Or</p>

        <Button type="button" gradientDuoTone="tealToLime">
          Login with Google
          <FcGoogle className="text-lg ml-2" />
        </Button>
      </form>
    </div>
  );
}
