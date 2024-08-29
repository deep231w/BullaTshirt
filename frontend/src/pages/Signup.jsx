import {Heading} from '../components/Heading';
import { InputBox} from '../components/InputBox';
import { Button } from '../components/Button';
import { ButtomWarning } from '../components/ButtomWarning';



export const Signup = ()=>{
    return(
            <div className='flex justify-center'>
                <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
            <Heading title="Signup" label={"Sign up"}/>
        

            <InputBox label={"First Name"} onChange={(e)=>{
                console.log(e.target.value)
                 }}/>
            <InputBox label={"Last name"} onChange={(e)=>{
                console.log(e.target.value)
                    }}/>
            <InputBox label={"Email"} onChange={(e)=>{
                console.log(e.target.value)
                     }}/>
            <InputBox label={"Password"} onChange={(e)=>{
                console.log(e.target.value)
                    }}/>
                
            <Button />
            <ButtomWarning label={"Alredy have an account?" } buttonText={"SignIn"} to={'/signin'}/>
                </div>
            </div>
         )
}