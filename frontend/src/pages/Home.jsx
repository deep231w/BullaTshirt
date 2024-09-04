import { Navbar } from "../components/Navbar";
import { MySwiper} from "../components/Swiper";
import { Catagories } from "../components/Catagories";
import {Footr} from '../components/Footr'
export const Home=()=>{
    return (
        <div>
            <Navbar/>
            <div className="flex justify-center  pt-10 ">
                <MySwiper/></div>
            <div>
                <Catagories/>
            </div>
            <Footr/>
            
        </div>
    )
}