import ReviewLink from "@models/reviewLink";
import { connectToDB } from "@utils/database";

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    const deletedReviewLink = await ReviewLink.findByIdAndRemove(params.id);

    if (!deletedReviewLink) {
      return new Response("Review link not found", { status: 404 });
    }

    return new Response("Review link deleted", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to delete review link", { status: 500 });
  }
};
