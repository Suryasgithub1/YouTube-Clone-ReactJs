import {toggleSidebar} from "../utils/storeSlice"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import HeaderSearchBar from "./HeaderSearchBar";

const Header = () => {

    const dispatch = useDispatch()

    function handleClick() {
        dispatch( toggleSidebar())
    }

    return (
        <div className="flex items-center justify-between px-5 py-3">
            <div className="flex ">
                <button onClick={() => {handleClick()}}><img className = "w-10" src="https://friconix.com/png/fi-xwluxx-three-bars-wide.png " alt="3 Bars" /> </button>
                <Link to = "/"> 
                    <img
                        className="w-40 pl-4"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                        alt="LogoYoutube"
                    />
                </Link>
            </div>
            <HeaderSearchBar />
            <div className="flex ">
                <button><img className = " w-10"  src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="Microphone" /></button>    
            </div>
        </div>
    )
}

export default Header;