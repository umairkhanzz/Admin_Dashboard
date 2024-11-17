import { fetchUsers } from '@/app/libs/data';
import Link from 'next/link';
import React from 'react';
import Searchbar from '../../components/dashboard/search'

async function UserPage({ searchParams }) {

  const q = searchParams?.q || "";
  const users = await fetchUsers(q);
  console.log("users data", users);

  return (
    <>
      <div>User Data Record</div>
      <div>
        <Searchbar />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Admin</th>
              <th>State</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.isAdmin ? "Admin" : "Client"}</td>
                <td>{user.isActive ? "Active" : "Offline"}</td>
                <td>
                  <div className="btn">
                    <button>
                      <Link href="/dashboard">View/Update</Link>
                    </button>
                    <button>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserPage;
