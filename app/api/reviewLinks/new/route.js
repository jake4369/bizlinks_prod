import { connectToDB } from "@utils/database";
import ReviewLink from "@models/reviewLink";

export const POST = async (req, res) => {
  const { userId, reviewSiteMainUrl, reviewSiteProfileUrl, siteIcon } =
    await req.json();

  try {
    await connectToDB();
    const newLink = new ReviewLink({
      creator: userId,
      reviewSiteMainUrl,
      reviewSiteProfileUrl,
      siteIcon,
    });

    await newLink.save();

    return new Response(JSON.stringify(newLink), { status: 201 });
  } catch (error) {
    console.error("Error creating Review Link:", error);
    return new Response("Failed to create Review Link", { status: 500 });
  }
};
