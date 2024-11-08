import { Button, Label } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { loginWithGoogle, logIn } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const field = e.target;
    const email = field.email.value;
    const password = field.password.value;

    logIn(email, password)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: err.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) =>
        Swal.fire({
          icon: "warning",
          title: err.message,
        })
      );
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 flex max-w-md flex-col gap-4 border-2 border-gray-500 mx-auto my-10 p-5 rounded-xl shadow-2xl"
      >
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
            name="email"
            placeholder="name@example.com"
            required
            className="w-full bg-slate-900 border-slate-500 rounded-md"
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

          <input
            id="password1"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="password"
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
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-slate-400 hover:text-blue-400 duration-300"
          >
            Register
          </Link>
        </p>

        <Button type="submit" color="gray">
          Login
        </Button>

        <p className="text-lg font-bold text-center">Or</p>

        <button
          onClick={handleGoogleLogin}
          type="button"
          className="bg-gray-600 hover:bg-gray-700 duration-300 flex items-center justify-center text-white p-3 rounded-md"
        >
          Login with Google
          <FcGoogle className="text-lg ml-2" />
        </button>
      </form>
    </div>
  );
}
