import { connectToDB } from "@utils/database";
import User from "@models/user";

export const PATCH = async (req, { params }) => {
  const { username, website } = await req.json();

  try {
    await connectToDB();

    const existingUser = await User.findById(params.id);

    if (!existingUser) {
      return new Response("User not found", { status: 404 });
    }

    if (username !== undefined && username !== null && username !== "") {
      existingUser.username = username;
    }

    if (website !== undefined && website !== null && website !== "") {
      existingUser.website = website;
    }

    await existingUser.save();

    return new Response("Successfully updated the user", { status: 200 });
  } catch (error) {
    return new Response("Error updating user", { status: 500 });
  }
};
