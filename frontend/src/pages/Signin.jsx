import axios from "axios";
import { ButtomWarning } from "../components/ButtomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import { toast,ToastContainer } from "react-toastify";
import { auth ,googleProvider  } from "../firebase-auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Signin =()=>{
            const navigate =useNavigate();
            const [email, setEmail]= useState();
            const [password , setPassword] =useState();
    return (
        <div>
            <Navbar/>
        <div className=" flex justify-center">
            <div className="rounded-lg text-center p-20 h-max px-4">
                <Heading label={"Sign In"}/>
                <InputBox label={"Email"} onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                <InputBox label={"Password"} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                <Button label={"Sign In"} onClick={async()=>{
                  try { const response= await axios.post('http://localhost:3000/api/user/signin',{
                        email,
                        password
                    })
                    localStorage.setItem('token',response.data.token)
                    toast.success("Login successful! Redirecting....")
                    navigate('/')
                }
                    catch(error){
                        toast.error("Login failed! Try again")
                    }
                }}/>
                <ButtomWarning label={"Dont have an account ?"} buttonText={"SignUp"} to={'/signup'}/>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    </div>
    )
}