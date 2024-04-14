import { LOGO_URL } from "../utils/static"
import UserContext from "../utils/UserContext.jsx";
import { useContext } from "react"
import {useDispatch, useSelector} from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const dispatch = useDispatch();

    const handleUseName = (e) => {
        dispatch(addUser(e));
    }

    const userData = useSelector((store) => store.user.username);

    let navigate = useNavigate(); 

    const routeChange = () =>{ 
      let path = "../"; 
      navigate(path);
    }


    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-[#f3ece7] m-auto w-6/12 rounded-lg my-3">
            <div className="m-auto w-6/12 bg-[#474747] p-4 rounded-lg">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-20 w-auto rounded-lg" src={LOGO_URL} alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#f3ece7]">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                <div>
                    <label for="email" className="block text-sm font-medium leading-6text-[#f3ece7] text-[#f3ece7]">Username</label>
                    <div className="mt-2">
                    <input id="username" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label for="password" className="block text-sm font-medium leading-6text-[#f3ece7] text-[#f3ece7]">Password</label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-[#f3ece7] hover:text-[#d3ccc7]">Forgot password?</a>
                    </div>
                    </div>
                    <div className="mt-2">
                    <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-red-700 px-3 py-1.5 text-sm font-semibold leading-6 text-[#d3ccc7] hadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={() => {
                                let inputValue = document.getElementById("username").value;
                                if(inputValue === "") alert("Please Provide username")
                                handleUseName(inputValue);
                                routeChange();
                            }}>
                            
                                Sign in
                            
                        </button>
                </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default LoginPage;



