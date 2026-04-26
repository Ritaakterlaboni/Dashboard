import React, { useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProduct = () => {
    if (!form.name || !form.price) return;

    setProducts([...products, form]);

    setForm({
      name: "",
      price: "",
      description: "",
      image: "",
    });
  };

  return (
    <div className="p-6 space-y-6">

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-700">
        Product Management
      </h1>

      {/* Add Product Form */}
      <div className="bg-white border shadow-sm rounded-2xl p-5 space-y-4">

        <h2 className="font-semibold text-lg">
          Add New Product
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="border p-2 rounded-lg outline-none"
          />

          <input
            type="text"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="border p-2 rounded-lg outline-none"
          />

          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="border p-2 rounded-lg outline-none md:col-span-2"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="border p-2 rounded-lg outline-none md:col-span-2"
          />

        </div>

        <button
          onClick={handleAddProduct}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          Add Product
        </button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
          >

            <img
              src={
                item.image ||
                "https://via.placeholder.com/300"
              }
              alt="product"
              className="h-40 w-full object-cover"
            />

            <div className="p-4 space-y-2">

              <h2 className="font-semibold text-lg">
                {item.name}
              </h2>

              <p className="text-sm text-gray-500">
                {item.description}
              </p>

              <div className="flex justify-between items-center pt-2">

                <span className="text-indigo-600 font-bold">
                  {item.price}
                </span>

                <button className="text-red-500 text-sm hover:underline">
                  Delete
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Product;