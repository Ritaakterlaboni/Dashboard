import React, { useEffect, useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import axios from "axios";

const CategoryList = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("https://ecommarce-backend-rtkt.onrender.com/api/category/getcategory")
      .then((res) => {
        setCategory(res.data.data);
      });
  }, []);

  const deleteProduct = (id) => {
    setCategory(category.filter((item) => item._id !== id));
  };

  const editProduct = (id) => {
    alert("Edit feature add korba modal or page diye 😎");
  };

  return (
    <div className="min-h-screen  p-6">

      {/* TITLE */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Category List
      </h1>

      {/* CARD */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full text-sm text-left">

            {/* HEADER */}
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-4 px-6">Serial</th>
                <th className="p-4 px-6">Name</th>
                <th className="p-4 px-6">Description</th>
                <th className="p-4 px-6 text-center">Action</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>

              {category.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-50 transition"
                >

                  {/* SERIAL */}
                  <td className="p-4 py-2 px-6 text-gray-600">
                    {index + 1}
                  </td>

                  {/* NAME */}
                  <td className="p-4 py-2 px-6 font-semibold text-gray-800">
                    {item.name}
                  </td>

                  {/* DESCRIPTION */}
                  <td className="p-4 py-2 px-6 text-gray-500">
                    {item.description}
                  </td>

                  {/* ACTION */}
                  <td className="p-4 py-2 px-6">

                    <div className="flex justify-center gap-3">

                      {/* EDIT */}
                      <button
                        onClick={() => editProduct(item._id)}
                        className="p-2 rounded-lg  text-blue-600 hover:bg-blue-200 transition"
                      >
                        <Edit size={18} />
                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() => deleteProduct(item._id)}
                        className="p-2 py-3 rounded-lg text-red-600 hover:bg-red-200 transition"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

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

export default CategoryList;