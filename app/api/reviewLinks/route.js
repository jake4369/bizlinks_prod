import { connectToDB } from "@utils/database";
import ReviewLink from "@models/reviewLink";

export const GET = async (req) => {
  try {
    await connectToDB();

    const reviewLinks = await ReviewLink.find({}).populate("creator");

    return new Response(JSON.stringify(reviewLinks), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch review links", { status: 500 });
  }
};
