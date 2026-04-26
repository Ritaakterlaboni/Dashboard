import React, { useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addCategory = () => {
    if (!form.name) return;

    setCategories([...categories, form]);

    setForm({
      name: "",
      description: "",
    });
  };

  const deleteCategory = (index) => {
    const updated = categories.filter((_, i) => i !== index);
    setCategories(updated);
  };

  return (
    <div className="p-6 space-y-6">

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-700">
        Category Management
      </h1>

      {/* FORM */}
      <div className="bg-white border shadow-sm rounded-2xl p-5 space-y-4">

        <h2 className="font-semibold text-lg">
          Add New Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Category Name"
            className="border p-2 rounded-lg outline-none"
          />

          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="border p-2 rounded-lg outline-none"
          />

        </div>

        <button
          onClick={addCategory}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          Add Category
        </button>
      </div>

      {/* CATEGORY LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white border shadow-sm rounded-2xl p-4 hover:shadow-md transition"
          >

            <h2 className="text-lg font-semibold">
              {item.name}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {item.description || "No description"}
            </p>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => deleteCategory(index)}
                className="text-red-500 text-sm hover:underline"
              >
                Delete
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Category;