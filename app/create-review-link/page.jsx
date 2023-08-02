"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreateLink = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [reviewLink, setReviewLink] = useState({
    reviewSiteMainUrl: "",
    reviewSiteProfileUrl: "",
    siteIcon: "",
  });

  const createLink = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/reviewLinks/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          reviewSiteMainUrl: reviewLink.reviewSiteMainUrl,
          reviewSiteProfileUrl: reviewLink.reviewSiteProfileUrl,
          siteIcon: reviewLink.siteIcon,
        }),
      });

      if (response.ok) {
        router.push("/profile");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      reviewLink={reviewLink}
      setReviewLink={setReviewLink}
      submitting={submitting}
      handleSubmit={createLink}
    >
      CreateLink
    </Form>
  );
};

export default CreateLink;
