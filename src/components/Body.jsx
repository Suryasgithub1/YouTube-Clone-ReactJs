import SliderBar from "./SliderBar";
import BtnLists from "./BtnLists";
import VideoComponent from "./VideoComponent";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import Header from "./Header";


const Body = () => {
    return (
        <div className="w-[1400]">
        <Header />
        <div className="flex px-5 mt-2">       
            <SliderBar />
            <Outlet />
        </div>
        </div>
    )
}

export default Body;