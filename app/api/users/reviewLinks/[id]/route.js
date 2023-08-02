import ReviewLink from "@models/reviewLink";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const reviewLinks = await ReviewLink.find({
      creator: params.id,
    }).populate("creator");

    return new Response(JSON.stringify(reviewLinks), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all links", {
      status: 500,
    });
  }
};
