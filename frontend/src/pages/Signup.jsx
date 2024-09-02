import {Heading} from '../components/Heading';
import { InputBox} from '../components/InputBox';
import { Button } from '../components/Button';
import { ButtomWarning } from '../components/ButtomWarning';
import { Navbar } from '../components/Navbar';
import { useState ,useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';



export const Signup = ()=>{
    const navigate = useNavigate();
    const [email ,setEmail] = useState("")
    const [password ,setPassword] =useState("")
    const [firstName ,setFirstname] =useState("")
    const [lastName,setLastname] =useState("")
    
    return(
           <div> 
                <Navbar/>
            <div className='flex justify-center'>
                
                <div className='rounded-lg  w-70 text-center p-2 h-max px-4'>
            <Heading title="Signup" label={"Sign up"}/>
        

            <InputBox label={"First Name"} onChange={(e)=>{
                setFirstname(e.target.value)
                 }}/>
            <InputBox label={"Last name"} onChange={(e)=>{
                setLastname(e.target.value)
                    }}/>
            <InputBox label={"Email"} onChange={(e)=>{
                setEmail(e.target.value)
                     }}/>
            <InputBox label={"Password"} onChange={(e)=>{
                setPassword(e.target.value)
                    }}/>
                
            <Button label={"Sign Up"} onClick={ async()=>{
                      try {
                        const response = await axios.post('http://localhost:3000/api/user/signup', {
                            firstName,
                            lastName,
                            email,
                            password
                        });
                        
                        console.log({ firstName, lastName, email, password });

                        localStorage.setItem('token', response.data.token);
                        toast.success("signup success! Redirecting.....")
                        navigate('/');
                    } catch (error) {
                        console.error('Error during signup:', error);
                        toast.error("signup error !please try again")
                    }
                  

            }} />
            <ButtomWarning label={"Alredy have an account?" } buttonText={"SignIn"} to={'/signin'}/>
            <ToastContainer />
                </div>
            </div>
        </div>
         )
}