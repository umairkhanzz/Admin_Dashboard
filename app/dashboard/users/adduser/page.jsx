import React from 'react'
import { addUser } from "@/app/libs/actions";

const AddUserPage = () => {
    return (
        <div >
            <form action={addUser} className='flex flex-col'>
                <input className='border-2 border-blue-800 p-1 mb-4' type="text" placeholder="username" name="username" required />
                <input className='border-2 border-blue-800 p-1 mb-4' type="email" placeholder="email" name="email" required />
                <input
                    className='border-2 border-blue-800 p-1 mb-4'
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                />
                <input className='border-2 border-blue-800 p-1 mb-4' t type="phone" placeholder="phone" name="phone" />
                <select className='border-2 border-blue-800 p-1 mb-4' name="isAdmin" id="isAdmin">
                    <option value={false}>
                        Is Admin?
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select className='border-2 border-blue-800 p-1 mb-4' name="isActive" id="isActive">
                    <option value={true}>
                        Is Active?
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea
                    className='border-2 border-blue-800 p-1 mb-4'
                    name="address"
                    id="address"
                    rows="16"
                    placeholder="Address"
                ></textarea>
                <button className='border-2 border-blue-800 p-1 mb-4 bg-black text-white font-bold' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddUserPage;
