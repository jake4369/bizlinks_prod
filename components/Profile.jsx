import Image from "next/image";
import { useSession } from "next-auth/react";

import LinkCard from "./LinkCard";

const Profile = ({ username, image, website, data, handleDelete }) => {
  console.log(username);
  const { data: session } = useSession();

  return (
    <section className="profile">
      <div className="profile-info">
        <Image
          src={
            image ||
            data[0]?.creator.image ||
            `/assets/profile-placeholder.jpeg`
          }
          alt="Profile Image"
          width={100}
          height={100}
          className="profile__profile-img"
        />

        <p className="desc text-center">
          {username || data[0]?.creator.username}
        </p>

        <a href="" className="profile__website">
          {website ? website : ""}
        </a>

        {session?.user.name === username && (
          <button className="outline__btn edit-profile__btn hover-underline-animation">
            Edit Profile
          </button>
        )}
      </div>

      <div className="link-cards">
        {data.map((review) => (
          <LinkCard
            key={review._id}
            review={review}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
