import { fetchUsers } from '@/app/libs/data';
import Link from 'next/link';
import React from 'react';
import Searchbar from '../../components/dashboard/search'
import Pagination from '../../components/dashboard/pagination'
import { deleteUser } from "@/app/libs/actions";

async function UserPage({ searchParams }) {

  const q = searchParams?.q || "";
  const page = searchParams?.page || "1";
  const { count, users } = await fetchUsers(q, page);
  console.log("users data", users);

  return (
    <>
      <div>User Data Record</div>
      <div className='mt-9'>
        <Link className='text-red-700 bg-black p-4 ' href={"/dashboard/users/adduser"}>Add User</Link>
      </div>
      <div>
        <Searchbar />
        <table>
          <thead>
            <tr>
              <th className='p-2'>ID</th>
              <th className='p-2'>Name</th>
              <th className='p-2'>Email</th>
              <th className='p-2'>Password</th>
              <th className='p-2'>Admin</th>
              <th className='p-2'>State</th>
              <th className='p-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className='p-2'>{user.id}</td>
                <td className='p-2'>{user.username}</td>
                <td className='p-2'>{user.email}</td>
                <td className='p-2'>{user.password}</td>
                <td className='p-2'>{user.isAdmin ? "Admin" : "Client"}</td>
                <td className='p-2'>{user.isActive ? "Active" : "Offline"}</td>
                <td className='p-2'>
                  <div className="btn">
                    <button>
                      <Link href={`/dashboard/users/${user.id}`}>View/Update</Link>
                    </button>
                    <form className='border-2 border-blue-500 rounded-' action={deleteUser}>
                      <input type="hidden" name="id" value={user.id} />
                      <button>Delete</button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <Pagination count={count} />
        </div>
      </div>
    </>
  );
}

export default UserPage;
