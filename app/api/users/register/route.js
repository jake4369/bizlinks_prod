import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (req, { params }) => {
  const { email, username } = await req.json();

  try {
    await connectToDB();

    const newUser = new User({
      email,
      username: username,
    });

    await newUser.save();

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    return new Response("Failed to register user", { status: 500 });
  }
};
