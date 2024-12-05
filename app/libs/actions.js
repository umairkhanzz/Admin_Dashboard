"use server"
import { User } from "./modals";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const addUser = async (formData) => {

    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData)

    try {
        connectToDB();
        const newUser = new User({
            username, email, password, phone, address, isAdmin, isActive
        });
        await newUser.save();
    } catch (error) {
        console.log("Error while adding user" , error);
        throw new Error("Failed to create user!");
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}