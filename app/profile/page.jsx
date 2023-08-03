"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { getUserData, getReviewLinks } from "@utils/utils";

import Profile from "@components/Profile";
import QRCode from "@components/QRCode";
import WebShare from "@components/WebShare";

const MyProfile = () => {
  const { data: session } = useSession();

  const [userData, setUserData] = useState({});
  const [reviewLinks, setReviewLinks] = useState([]);
  const [showQr, setShowQr] = useState(false);
  const userName = session?.user.name;
  const userId = session?.user.id;

  const [profileUrl, setProfileUrl] = useState("");

  useEffect(() => {
    getUserData(session?.user.id, setUserData);
  }, [session?.user.id]);

  useEffect(() => {
    getReviewLinks(session?.user.id, setReviewLinks);
  }, [session?.user.id]);

  useEffect(() => {
    setProfileUrl(`${window.location.href}/${userId}`);
  }, [userId]);

  const handleDeleteReviewLink = async (id) => {
    const hasConfirmed = confirm("Are you sure you want to delete this link?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/reviewLinks/${id}`, {
          method: "DELETE",
        });

        // Remove the deleted review link from the state
        const filteredReviewLinks = reviewLinks.filter((obj) => obj._id !== id);
        setReviewLinks(filteredReviewLinks);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className="my__profile">
      <header className="profile__header"></header>
      <Profile
        userId={userId}
        username={userData.username}
        website={userData.website}
        image={userData.image}
        data={reviewLinks}
        handleDelete={handleDeleteReviewLink}
      />

      {reviewLinks.length > 0 ? (
        <div className="my-profile__share-btns">
          <button className="blue__btn" onClick={() => setShowQr(true)}>
            Show QR
          </button>

          <WebShare
            className="blue__btn"
            profileUrl={profileUrl}
            userName={userName}
          />
        </div>
      ) : null}

      {showQr && (
        <div className="qr__modal">
          <QRCode
            profileUrl={profileUrl}
            userName={userName}
            setShowQr={setShowQr}
          />
        </div>
      )}
    </section>
  );
};

export default MyProfile;
