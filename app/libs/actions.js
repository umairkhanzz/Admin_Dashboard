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



export const updateUser = async (formData) => {

    const { id , username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData)

    try {
        connectToDB();
        
        const updateFields = { username, email, password, phone, address, isAdmin, isActive };
        Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key]);
        await User.findByIdAndUpdate(id , updateFields);

    } catch (error) {
        console.log("Error while adding user" , error);
        throw new Error("Failed to update  user!");
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}




export const deleteUser = async (formData) => {

    const { id } = Object.fromEntries(formData)

    try {
        connectToDB();
        await User.findByIdAndDelete(id);
    } catch (error) {
        console.log("Error while adding user" , error);
        throw new Error("Failed to delete user!");
    }
    revalidatePath("/dashboard/users");
}