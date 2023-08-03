import ReviewLink from "@models/reviewLink";
import { connectToDB } from "@utils/database";

// export const PATCH = async (req, { params }) => {
//   const { textColor, backgroundColor } = await req.json();

//   try {
//     await connectToDB();

//     const reviewLink = await ReviewLink.findById(params.id);

//     if (!reviewLink) {
//       return new Response("Review link not found", { status: 404 });
//     }

//     if (textColor !== undefined && textColor !== null && textColor !== "") {
//       existingUser.textColor = textColor;
//     }

//     if (
//       backgroundColor !== undefined &&
//       backgroundColor !== null &&
//       backgroundColor !== ""
//     ) {
//       existingUser.backgroundColor = backgroundColor;
//     }

//     await reviewLink.save();

//     return new Response("Successfully updated the review link", {
//       status: 200,
//     });
//   } catch (error) {
//     return new Response("Error updating review link", { status: 500 });
//   }
// };

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
