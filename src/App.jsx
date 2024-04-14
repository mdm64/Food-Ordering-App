import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Errorpage from "./components/Errorpage";
import ResPage from "./components/ResPage";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import {Provider} from "react-redux";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";
// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        // fetch api
        const data = "Mayank";
        setUserName(data)
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{userData: userName, setUserName}}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
        
        
    )
}

const BrowserRoute = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h2>Loading....</h2>}><Grocery /></Suspense>
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/contacts",
                element: <ContactUs />
            },
            {
                path: "/restraunts/:resid",
                element: <ResPage />
            },
            {
                path: "/cart",
                element: <Cart />,
            },
           
        ],
        errorElement: <Errorpage />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={BrowserRoute}/>);