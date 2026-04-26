import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({
    email:"", //input field a name 
    password:""
  });
  const handleInputChange = (e)=>{
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginBtn = async()=>{
    try {
      const res =await axios.post("http://localhost:3000/api/auth/login",//url
        loginInput,//data
        {withCredentials:true},
      )
      toast.success("Login successfully done");
       setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error(error.response?.data?.message || error?.message);
    }
    console.log(loginInput);
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4">
     
      <Card className="w-full max-w-sm shadow-2xl rounded-2xl border border-gray-200">
        
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold ">
            Login
          </CardTitle>
         

          <CardAction>
           
          </CardAction>
        </CardHeader>

        <CardContent>
          <form className="space-y-5">
            
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

            <div>
              <div className="flex justify-between items-center">
                <Label>Password</Label>
                <a className="text-sm text-indigo-600 hover:underline cursor-pointer">
                  Forgot?
                </a>
              </div>
              <Input
              name="password"
                type="password"
                placeholder="**********"
                className="mt-1"
                onChange={handleInputChange}
              />
            </div>

          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" onClick={handleLoginBtn}>
            Login
          </Button>

          <Button variant="outline" className="w-full">
            Continue with Google
          </Button>

          <p className="text-sm text-center text-gray-500">
            Don’t have an account?{" "}
            <span
             onClick={() => navigate("/signup")}
             className="text-indigo-600 cursor-pointer hover:underline">
              Sign up
            </span>
          </p>

        </CardFooter>

      </Card>
    </div>
  )
}

export default Login


