import Image from "next/image";
import Link from "next/link";

import LinkCard from "./LinkCard";

const Profile = ({ userId, username, image, website, data, handleDelete }) => {
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

        {userId === data[0]?.creator._id ? (
          <Link
            href={`profile/edit/${userId}`}
            className="outline__btn edit-profile__btn hover-underline-animation"
          >
            Edit Profile
          </Link>
        ) : null}
      </div>

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
    </section>
  );
};

export default Profile;
