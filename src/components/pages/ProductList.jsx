import React, { useEffect, useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://ecommarce-backend-rtkt.onrender.com/api/product/getproduct")
      .then((res) => {
        setProducts(res.data.data);
      });
  }, []);

  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const editProduct = (id) => {
    alert("Edit feature add korba modal or page diye 😎");
  };

  return (
    <div className="p-6 space-y-6">

      {/* TITLE */}
      <h1 className="text-2xl font-bold text-gray-700">
        Product List
      </h1>

      {/* TABLE */}
      <div className="bg-white border rounded-2xl shadow-sm overflow-x-auto">

        <table className="w-full text-sm text-left">

          {/* HEADER */}
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3">Serial</th>
              <th className="p-3">Name</th>
              <th className="p-3">Description</th>
              <th className="p-3">Price</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>

            {products.map((item, index) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >

                {/* SERIAL */}
                <td className="p-3">{index + 1}</td>

                {/* NAME */}
                <td className="p-3 font-medium">
                  {item.name}
                </td>

                {/* DESCRIPTION */}
                <td className="p-3 text-gray-500">
                  {item.description}
                </td>

                {/* PRICE */}
                <td className="p-3 text-gray-500 font-semibold">
                  {item.price}
                </td>

                {/* ACTION */}
                <td className="p-3">

                  <div className="flex justify-center gap-3">

                    {/* EDIT */}
                    <button
                      onClick={() => editProduct(item.id)}
                      className="text-blue-500 hover:bg-blue-100 p-2 rounded-lg"
                    >
                      <Edit size={18} />
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() => deleteProduct(item.id)}
                      className="text-red-500 hover:bg-red-100 p-2 rounded-lg"
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
  );
};

export default ProductList;