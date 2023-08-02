"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import Profile from "@components/Profile";
import QRCode from "@components/QRCode";
import WebShare from "@components/WebShare";

const MyProfile = () => {
  const { data: session } = useSession();

  const [reviewLinks, setReviewLinks] = useState([]);
  const [showQr, setShowQr] = useState(false);
  const userName = session?.user.name;
  const userId = session?.user.id;

  const [profileUrl, setProfileUrl] = useState("");

  useEffect(() => {
    setProfileUrl(`${window.location.href}/${userId}`);
  }, [userId]);

  useEffect(() => {
    const fetchReviewLinks = async () => {
      const response = await fetch(
        `/api/users/reviewLinks/${session?.user.id}`
      );
      const data = await response.json();

      setReviewLinks(data);
    };

    if (session?.user.id) fetchReviewLinks();
  }, [session?.user.id]);

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
      <header></header>

      <Profile
        username={session?.user.name}
        image={session?.user.image}
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
