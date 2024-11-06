import { Button, TextInput } from "flowbite-react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if email is valid
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Thank you for subscribing to our newsletter",
        showConfirmButton: false,
        timer: 1500,
      });

      setEmail("");
      setError("");
    } else {
      setError("Please enter a valid email address!");
    }
  };

  return (
    <div className="mt-16">
      <h1 className="text-3xl text-center italic mb-7">
        Subscribe to our <br /> newsletter!
      </h1>

      <form className="flex max-w-md mx-auto flex-col gap-4">
        <TextInput
          type="email"
          placeholder="your@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {error && <p className="text-red-500">{error}</p>}

        <Button color="dark" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
}
