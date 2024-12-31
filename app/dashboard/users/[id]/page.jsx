import React from 'react';
import { updateUser } from "@/app/libs/actions";
import { singleUsers } from '@/app/libs/data';

const UpdateUserPage = async ({ params }) => {
    const { id } = params;
    const user = await singleUsers(id);

    return (
        <div>
            <form action={updateUser} className="flex flex-col">
                <input type="hidden" name="id" value={user.id} /> {/* Include the ID */}
                <input
                    className="border-2 border-blue-800 p-1 mb-4"
                    type="text"
                    defaultValue={user.username}
                    name="username"
                    placeholder="Username"
                />
                <input
                    className="border-2 border-blue-800 p-1 mb-4"
                    type="email"
                    defaultValue={user.email}
                    name="email"
                    placeholder="Email"
                />
                <input
                    className="border-2 border-blue-800 p-1 mb-4"
                    type="password"
                    name="password"
                    placeholder="Password (leave blank to keep current)"
                />
                <input
                    className="border-2 border-blue-800 p-1 mb-4"
                    type="phone"
                    defaultValue={user.phone}
                    name="phone"
                    placeholder="Phone"
                />
                <select
                    className="border-2 border-blue-800 p-1 mb-4"
                    name="isAdmin"
                    defaultValue={user.isAdmin}
                >
                    <option value="false">Is Admin?</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <select
                    className="border-2 border-blue-800 p-1 mb-4"
                    name="isActive"
                    defaultValue={user.isActive}
                >
                    <option value="true">Is Active?</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <textarea
                    className="border-2 border-blue-800 p-1 mb-4"
                    name="address"
                    defaultValue={user.address}
                    rows="4"
                    placeholder="Address"
                ></textarea>
                <button
                    className="border-2 border-blue-800 p-1 mb-4 bg-black text-white font-bold"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UpdateUserPage;
