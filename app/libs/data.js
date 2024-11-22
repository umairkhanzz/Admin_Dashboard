import { User } from "./modals";
import { connectToDB } from "./utils";

export const fetchUsers = async (q , page) => {
  const regex = new RegExp(q , "i");
  const item_per_page = 2;
  try {
    await connectToDB();
    const users = await User.find({username: {$regex: regex}}).limit(item_per_page).skip(item_per_page*(page-1));
    return users;

  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
