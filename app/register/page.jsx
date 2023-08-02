"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const [newUserDetails, setNewUserDetails] = useState({
    email: "",
    username: "",
  });
  const [registeringUser, setRegisteringUser] = useState(false);

  const handleChange = (e) => {
    setNewUserDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegisteringUser(true);

    try {
      const response = await fetch(`/api/users/register`, {
        method: "POST",
        body: JSON.stringify({
          email: newUserDetails.email,
          username: newUserDetails.username,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setRegisteringUser(false);
    }
  };

  return (
    <div className="registration__page">
      <form className="registration__form" onSubmit={handleSubmit}>
        <h1>Welcome to BizLinks</h1>

        <p>Please register here:</p>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            value={newUserDetails.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Company name:
          <input
            type="text"
            name="username"
            placeholder="Example LTD"
            value={newUserDetails.username}
            onChange={handleChange}
          />
        </label>

        <button className="blue__btn registration__btn">
          {registeringUser ? "Register..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
