"use client";

import { useState } from "react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import UploadPhotoButton from "@components/UploadPhotoButton";

const EditProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [updatedDetails, setUpdatedDetails] = useState({
    username: "",
    website: "",
  });

  const [savingChanges, setSavingChanges] = useState(false);

  const handleChange = (e) => {
    setUpdatedDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSavingChanges(true);

    try {
      const response = await fetch(`/api/users/update/${session?.user.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          username: updatedDetails.username,
          website: updatedDetails.website,
        }),
      });

      if (response.ok) {
        router.push("/profile");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSavingChanges(false);
    }
  };

  return (
    <div className="edit-profile-page">
      <UploadPhotoButton />

      <form
        className="edit-profile__form glassmorphism"
        onSubmit={handleSubmit}
      >
        <label>
          <span>Company name</span>
          <input
            type="text"
            className="form__input"
            placeholder="example ltd"
            name="username"
            value={updatedDetails.username}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Website</span>
          <input
            type="text"
            className="form__input"
            placeholder="www.example.com"
            name="website"
            value={updatedDetails.website}
            onChange={handleChange}
          />
        </label>

        <button className="blue__btn">
          {savingChanges ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
