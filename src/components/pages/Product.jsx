import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

const Product = () => {

  // form state
  const [productInput, setProductInput] = useState({
    name: "",
    description: "",
    price: ""
  });

  // product list
  const [products, setProducts] = useState([]);

  // handle input
  const handleChange = (e) => {
    setProductInput({
      ...productInput,
      [e.target.name]: e.target.value
    });
  };

  // add product
  const handleAddProduct = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/products",
        productInput,
        { withCredentials: true }
      );

      toast.success("Product added ✅");
      setProductInput({ name: "", description: "", price: "" });
      getProducts(); // refresh list

    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // get products
  const getProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/products",
        { withCredentials: true }
      );

      setProducts(res.data.products);

    } catch (error) {
      console.log(error);
    }
  };

  // delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/products/${id}`,
        { withCredentials: true }
      );

      toast.success("Deleted 🗑️");
      getProducts();

    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // load products
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <h1 className="text-2xl font-bold mb-5">Product Page</h1>

      {/* Add Product */}
      <div className="space-y-3 mb-6">
        <Input
          name="name"
          placeholder="Product Name"
          value={productInput.name}
          onChange={handleChange}
        />
        <Input
          name="description"
          placeholder="Description"
          value={productInput.description}
          onChange={handleChange}
        />
        <Input
          name="price"
          placeholder="Price"
          value={productInput.price}
          onChange={handleChange}
        />

        <Button onClick={handleAddProduct}>
          Add Product
        </Button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {products.map((item) => (
          <Card key={item._id}>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="font-bold">৳ {item.price}</p>

              <Button
                variant="destructive"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}

      </div>

    </div>
  )
}

export default Product