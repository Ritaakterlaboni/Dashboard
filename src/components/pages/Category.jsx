import React, { useState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] =useState("")

const navigate = useNavigate();

const formData ={
  name: categoryName,
  description: categoryDescription
}

const handleCategoryBtn = async()=>{
  try {
    await axios.post ("https://ecommarce-backend-rtkt.onrender.com/api/category/createcategory", formData);
    toast.success("Successfully added!");

    //input field clear ar jonno
    setCategoryName("");
    setCategoryDescription("");
    setTimeout(() => {
      navigate("/categorylist");
    }, 1000);
  } catch (error) {
    toast.error("Something went wrong!");
  }
  
}

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

          <FieldGroup>
          <Field>
            <FieldLabel>Category Name</FieldLabel>
            <Input
              value={categoryName}
              placeholder="Category Name"
              className={"text-sm"}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </Field>

           <Field>
            <FieldLabel>Category Description</FieldLabel>
            <Textarea
              value={categoryDescription}
              placeholder="Type your description here..."
              className={"resize-none text-sm"}
              onChange={(e) => setCategoryDescription(e.target.value)}
            />
          </Field>
          <Field orientation="horizontal">
              <Button className={"bg-indigo-600"}
              onClick ={handleCategoryBtn}
              >
                Add Category
              </Button>
            </Field>
          </FieldGroup>
        </div>

        
      </div>

      {/* CATEGORY LIST */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

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

      </div> */}
    </div>
  );
};

export default Category;