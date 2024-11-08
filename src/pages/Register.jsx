import { Button, Label } from "flowbite-react";
import { Link } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import useAuth from "../hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const field = e.target;
    const name = field.name.value;
    const email = field.email.value;
    const image = field.image.files;
    const password = field.password.value;

    //check if password has one uppercase, one special letter, one number and 6 letter long
    if (
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password) &&
      password.length >= 6
    ) {
    } else {
      Swal.fire({
        icon: "error",
        title: "Wrong Password Making ",
        text: "Your password should have at least 1 uppercase, 1 lowercase, 1 number And should be at least 6 character long.",
      });

      return;
    }

    // host image to imgbb
    const imageFile = { image: image[0] };
    const response = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const imgUrl = response.data.data.display_url;

    if (response.data.success) {
      createUser(email, password)
        .then(() => {
          // update profile
          updateUserProfile(name, imgUrl)
            .then(() => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registered successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            })
            .catch((err) => {
              Swal.fire({
                icon: "warning",
                title: err.message,
              });
            });
        })
        .catch((err) => {
          Swal.fire({
            icon: "warning",
            title: err.message,
          });
        });
    }
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
              htmlFor="name"
              value="Your Name"
              className="text-slate-300"
            />
          </div>

          <input
            id="name"
            name="name"
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
            name="email"
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
            name="image"
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
            name="password"
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
