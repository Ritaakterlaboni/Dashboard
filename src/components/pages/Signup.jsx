import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate();

  const [signupInput, setSignupInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    setSignupInput({
      ...signupInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupBtn = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/auth/signup",
        signupInput,
        { withCredentials: true }
      );

      toast.success("Signup successful 🎉");

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (error) {
      toast.error(error.response?.data?.message || error?.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4">

      <Card className="w-full max-w-sm shadow-2xl rounded-2xl border border-gray-200">

        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Create Your Account
          </CardTitle>
          <p className="text-sm text-gray-500 mt-1 text-center leading-5">
            Fill your information bellow or register <br />
            with your account.
          </p>
        </CardHeader>

        <CardContent>
          <form className="space-y-5">

            {/* First + Last Name */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>First Name</Label>
                <Input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="mt-1"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <Label>Last Name</Label>
                <Input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="mt-1"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <Label>Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="abc@gmail.com"
                className="mt-1"
                onChange={handleInputChange}
              />
            </div>

            {/* Password */}
            <div>
              <Label>Password</Label>
              <Input
                name="password"
                type="password"
                placeholder="********"
                className="mt-1"
                onChange={handleInputChange}
              />
            </div>

          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">

          <Button
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
            onClick={handleSignupBtn}
          >
            Sign Up
          </Button>

          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-indigo-600 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>

        </CardFooter>

      </Card>
    </div>
  )
}

export default Signup