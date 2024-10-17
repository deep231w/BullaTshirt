import {Heading} from '../components/Heading';
import { InputBox} from '../components/InputBox';
import { Button } from '../components/Button';
import { ButtomWarning } from '../components/ButtomWarning';
import { Navbar } from '../components/Navbar';
import { useState ,useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth, googleProvider} from '../firebase-auth/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';



export const Signup = ()=>{
    const navigate = useNavigate();
    const [email ,setEmail] = useState("")
    const [password ,setPassword] =useState("")
    const [firstName ,setFirstname] =useState("")
    const [lastName,setLastname] =useState("")

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email format
        return re.test(String(email).toLowerCase());
      };
      
      const userHandler = async (e) => {
        e.preventDefault();
        
        // Check if email and password are valid
        if (!validateEmail(email)) {
          toast.error("Please enter a valid email address");
          return;
        }
      
        if (password.length < 6) {
          toast.error("Password should be at least 6 characters long");
          return;
        }
      
        try {
          const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredentials.user;
          console.log("user uid", user.uid);
          console.log("successful");
      
          const response = await axios.post('http://localhost:3000/api/user/signup', {
            firstName,
            lastName,
            email,
            password,
            firebaseuid: user.uid
          });
      
          localStorage.setItem('token', response.data.token);
          toast.success("Signup successful, Redirecting.......");
          navigate('/');
        } catch (err) {
          console.log(err);
          toast.error("Signup failed!!");
        }
      };
      
      const googleLoginHandler = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
    
            const response = await axios.post('http://localhost:3000/api/user/signup', {
                firstName: user.displayName.split(" ")[0],
                lastName: user.displayName.split(" ")[1],
                email: user.email,
                firebaseuid: user.uid
            });
    
            localStorage.setItem('token', response.data.token);
            toast.success("Google Signup successful!");
            navigate('/');
        } catch (err) {
            if (err.response) {
                console.error("Backend error:", err.response.data);
                toast.error(`Google signup failed: ${err.response.data.error}`);
            } else {
                console.error("Network error:", err);
                toast.error("Google signup failed due to network error");
            }
        }
    };
    
    
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
            <InputBox label={"Email"} value={email} onChange={(e)=>{
                setEmail(e.target.value)
                     }}/>
            <InputBox label={"Password"} onChange={(e)=>{
                setPassword(e.target.value)
                    }}/>
                
            <Button label={"Sign Up"} onClick={ userHandler} />
            <ButtomWarning label={"Alredy have an account?" } buttonText={"SignIn"} to={'/signin'}/>
            <ToastContainer />
            <Button label={"google"} onClick={googleLoginHandler}/>
                </div>
            </div>
        </div>
         )
}




// async()=>{
//     try {
//       const response = await axios.post('http://localhost:3000/api/user/signup', {
//           firstName,
//           lastName,
//           email,
//           password
//       });
      
//       console.log({ firstName, lastName, email, password });

//       localStorage.setItem('token', response.data.token);
//       toast.success("signup success! Redirecting.....")
//       navigate('/');
//   } catch (error) {
//       console.error('Error during signup:', error);
//       toast.error("signup error !please try again")
//   }


// }