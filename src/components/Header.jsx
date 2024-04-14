import { useState, useContext } from "react"
import { LOGO_URL } from "../utils/static"
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    // const { userData } = useContext(UserContext);
    const userData = useSelector((store) => store.user.username);

    const [logBtn, setLogBtn] = useState("LogIn");

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-[#474747] shadow-lg">
            <div className="p-1">
                <img className="w-28 rounded-lg" alt="logo-image" src= {LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 items-center">
                    <li className="px-2 text-lg text-[#fefbf9] font-thin shadow-md"><Link to="/">Home</Link></li>
                    <li className="px-2 text-lg text-[#fefbf9] font-thin shadow-md"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-2 text-lg text-[#fefbf9] font-thin shadow-md"><Link to="/about">About Us</Link></li>
                    <li className="px-2 text-lg text-[#fefbf9] font-thin shadow-md"><Link to="/contacts">Contact Us</Link></li>


                    <Link to="/cart">
                        <div className="w-6 h-3 mx-3 rounded-md py-6 bg-[#fefbf9] flex justify-center items-center">
                            <div className="relative py-2">
                                <div className="t-0 absolute left-3">
                                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartItems.length}</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    
                    <Link to="./login">
                        <button className="px-2 text-lg text-[#fefbf9] font-thin shadow-md"

                            onClick={() => {
                                if (logBtn === "LogIn") setLogBtn("LogOut")
                                else setLogBtn("LogIn")
                            }} 
                            >
                            {logBtn}
                        </button>
                    </Link>

                    
                    <li className="px-2 text-lg text-[#fefbf9] font-thin shadow-md">{userData}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header