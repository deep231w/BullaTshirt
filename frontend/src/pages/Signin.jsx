import { ButtomWarning } from "../components/ButtomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Navbar } from "../components/Navbar";


export const Signin =()=>{
    return (
        <div>
            <Navbar/>
        <div className=" flex justify-center">
            <div className="rounded-lg text-center p-20 h-max px-4">
                <Heading label={"Sign In"}/>
                <InputBox label={"Email"}/>
                <InputBox label={"Password"}/>
                <Button label={"Sign In"}/>
                <ButtomWarning label={"Dont have an account ?"} buttonText={"SignUp"} to={'/signup'}/>
            </div>
        </div>
    </div>
    )
}