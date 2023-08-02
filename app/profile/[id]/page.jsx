"use client";

import { useEffect, useState } from "react";

import { getUserData, getReviewLinks } from "@utils/utils";

import Profile from "@components/Profile";
import { useParams } from "next/navigation";

const UserProfile = ({ params }) => {
  const { id } = useParams();

  const [userData, setUserData] = useState({});
  const [userReviewLinks, setUserReviewLinks] = useState([]);

  useEffect(() => {
    getUserData(id, setUserData);
  }, [id]);

  useEffect(() => {
    getReviewLinks(params?.id, setUserReviewLinks);
  }, [params.id]);

  return (
    <Profile
      data={userReviewLinks}
      image={userData.image}
      username={userData.username}
      website={userData.website}
    />
  );
};

export default UserProfile;
