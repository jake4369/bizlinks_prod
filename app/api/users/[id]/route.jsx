import { connectToDB } from "@utils/database";
import User from "@models/user";

export const GET = async (req, { params }) => {
  await connectToDB();

  try {
    const user = await User.findById(params.id);

    if (!user) {
      return new Response("No user found", { status: 404 });
    }

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Error finding user", { status: 500 });
  }
};
