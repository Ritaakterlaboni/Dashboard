import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user/users")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen p-6">

      {/* TITLE */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        User List
      </h1>

      {/* CARD */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full text-sm text-left">

            {/* HEADER */}
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-4 px-6">Serial</th>
                <th className="p-4 px-6">Full Name</th>
                <th className="p-4 px-6">Email</th>
                <th className="p-4 px-6">Created At</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {users.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  {/* SERIAL */}
                  <td className="p-4 px-6 text-gray-600">
                    {index + 1}
                  </td>

                  {/* NAME */}
                  <td className="p-4 px-6 font-semibold text-gray-800">
                    {item.fullname}
                  </td>

                  {/* EMAIL */}
                  <td className="p-4 px-6 text-gray-500">
                    {item.email}
                  </td>

                  {/* CREATED AT */}
                  <td className="p-4 px-6 text-gray-500">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default UserList;