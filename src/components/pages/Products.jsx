import React, { useState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Product = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const[category, setCategory] = useState("")
  const[price, setPrice] = useState("")
  const[size, setSize] = useState("")
  const[color, setColor] = useState("")
  const[ram, setRam] = useState("")
  const[storage, setStorage] = useState("")
  const[image, setImage] = useState("")

  const [getCategory, setGetCategory] = useState([]);


  const handleCreateProduct = () => {
    console.log("Product Added");
  };

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold text-gray-700">
        Product Management
      </h1>

      <div className="bg-white border shadow-sm rounded-2xl p-5 space-y-4">

        <h2 className="font-semibold text-lg">
          Add New Product
        </h2>

        <div className="md:max-w-1/3 mt-4">

          <FieldGroup>
            {/* product Name */}
            <Field>
              <FieldLabel>Product Name</FieldLabel>
              <Input placeholder="Product Name" className="text-sm" 
              value={productName}   //useState ar productName
              onChange={(e) => setProductName(e.target.value)}
              />
            </Field>
            {/* product  Description*/}
            <Field>
              <FieldLabel>Product Description</FieldLabel>
              <Textarea
                placeholder="Type your description "
                className="resize-none text-sm"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </Field>
             {/* Category*/}
                <Field>
            <FieldLabel>Category</FieldLabel>
            <select
              className="border border-gray-200 rounded-sm p-2"
              onChange={(e) => setSelectedCategory(e.target.value)}>
              {getCategory.map((item) => (
                <option
                  className={"dark:bg-blue-900"}
                  key={item._id}
                  value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </Field>
            {/* Price*/}
            <Field>
              <FieldLabel>Price</FieldLabel>
              <Input
                placeholder="Price "
                className=" text-sm"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Field>
             {/* Size*/}
            <Field>
              <FieldLabel>Size</FieldLabel>
              <Input
                placeholder="Size "
                className=" text-sm"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </Field>
             {/* Color*/}
            <Field>
              <FieldLabel>Color</FieldLabel>
              <Input
                placeholder="Color "
                className=" text-sm"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </Field>
             {/* Ram*/}
            <Field>
              <FieldLabel>Ram</FieldLabel>
              <Input
                placeholder="Ram "
                className=" text-sm"
                value={ram}
                onChange={(e) => setRam(e.target.value)}
              />
            </Field>
               {/* Storage*/}
            <Field>
              <FieldLabel>Storage</FieldLabel>
              <Input
                placeholder="Storage "
                className=" text-sm"
                value={storage}
                onChange={(e) => setStorage(e.target.value)}
              />
            </Field>
            {/* product  Image*/}

            <Field>
            <FieldLabel>Product Image</FieldLabel>
            <Input
              type={"file"}
              placeholder="Product Image"
              className={"text-sm"}
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Field>

            <Field orientation="horizontal">
              <Button className={"bg-indigo-600"} onClick={handleCreateProduct}>
                Add Product
              </Button>
            </Field>
          </FieldGroup>

        </div>

      </div>
    </div>
  );
};

export default Product;