import { User } from "./modals";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
  try {
    await connectToDB();
    const users = await User.find();
    return users;

  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
