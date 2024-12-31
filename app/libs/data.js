import { User } from "./modals";
import { connectToDB } from "./utils";

export const fetchUsers = async (q , page) => {
  const regex = new RegExp(q , "i");
  const item_per_page = 4;
  try {
    await connectToDB();
    const count = await User.find({ username: { $regex: regex } }).countDocuments(); // Correct count logic
    const users = await User.find({username: {$regex: regex}}).limit(item_per_page).skip(item_per_page*(page-1));
    return {count , users};

  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export const singleUsers = async (id) => {
  try {
    await connectToDB();
    const singleUser = await User.findById(id);
    return singleUser;

  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
