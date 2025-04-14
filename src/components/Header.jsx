import {toggleSidebar} from "../utils/storeSlice"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeaderSearchBar from "./HeaderSearchBar";
import { toggleLoginBtn } from "../utils/loginSlice";
import Login from "../components/Login";

const Header = () => {

    const dispatch = useDispatch()

    const isOpen = useSelector((state) => state.login.isOpen);
    const handleClickUserBtn = () => {
        dispatch (toggleLoginBtn());
    };

    function handleClick(){
        dispatch( toggleSidebar())
    }

    return (
        <div className="flex items-center justify-between px-5 py-3 relative"> {/* Added relative for positioning Login */}
            <div className="flex ">
                <button onClick={() => {handleClick()}}>
                    <img className = "w-10" src="https://friconix.com/png/fi-xwluxx-three-bars-wide.png " alt="3 Bars" />
                </button>
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
                <button onClick={handleClickUserBtn}>
                    <img className = " w-10"  src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="User Icon" />
                </button>
            </div>
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 z-50"> 
                    <Login />
                </div>
            )}
        </div>
    )
}

export default Header;