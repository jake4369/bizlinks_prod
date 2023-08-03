"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import LinkCard from "./LinkCard";

import { getUserData } from "@utils/utils";

const Profile = ({ userId, username, image, website, data, handleDelete }) => {
  const [userData, setUserData] = useState({});
  const { id } = useParams();
  const { data: session } = useSession();

  useEffect(() => {
    getUserData(`${session?.user.id ? session?.user.id : id}`, setUserData);
  }, [id, session?.user.id]);

  return (
    <motion.div
      transition={{ delay: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <section className="profile">
        <div className="profile-info">
          <Image
            src={userData.image || `/assets/profile-placeholder.jpeg`}
            alt="Profile Image"
            width={100}
            height={100}
            className="profile__profile-img"
            style={{
              borderColor: userData.borderColor
                ? `${userData.borderColor}`
                : "#fff",
            }}
            priority
          />

          <p className="desc text-center profile__username">
            {username || data[0]?.creator.username}
          </p>

          <a href="" className="profile__website">
            {website ? website : ""}
          </a>

          {userId ? (
            <Link
              href={`profile/edit/${userId}`}
              className="outline__btn edit-profile__btn hover-underline-animation"
            >
              Edit Profile
            </Link>
          ) : null}
        </div>

        {data.length > 0 ? (
          <div className="link-cards">
            {data.map((review) => (
              <LinkCard
                key={review._id}
                review={review}
                handleDelete={handleDelete}
                userId={userId}
              />
            ))}
          </div>
        ) : userId ? (
          <div style={{ textAlign: "center" }}>
            <p className="desc">No Links</p>
            <Link href="/create-review-link" className="blue__gradient">
              Click To Create
            </Link>
          </div>
        ) : null}
      </section>
    </motion.div>
  );
};

export default Profile;
