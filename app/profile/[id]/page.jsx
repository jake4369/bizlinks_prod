"use client";

import { useEffect, useState } from "react";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  console.log(params);
  const [userReviewLinks, setUserReviewLinks] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/reviewLinks/${params?.id}`);
      const data = await response.json();

      setUserReviewLinks(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  return <Profile data={userReviewLinks} />;
};

export default UserProfile;
