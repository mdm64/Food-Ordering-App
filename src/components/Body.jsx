import RestroCard, {restroCardPrmoted} from "./RestroCard";
import { useState, useEffect } from "react";
import {resList} from "../utils/mockData.js"
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";


const RestroCardPrmoted = restroCardPrmoted(RestroCard);

const Body = () => {
    const [listOfrestro, setListOfrestro] = useState([]);
    const [copylistOfRestro, setCopylistOfRestro] = useState([]);
    const [search, setsearch] = useState("");
    const status = useOnlineStatus();


    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        const apiData = await fetch(
            // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            // "https://www.swiggy.com/mapi/homepage/getCards?lat=26.95250&lng=75.71050"
            "https://www.swiggy.com/mapi/homepage/getCards?lat=26.95250&lng=75.71050"
            

        );
        const json = await apiData.json();
        let x = json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
        // let x = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfrestro(x);
        setCopylistOfRestro(x);
        // console.log(x);
    }

    if(status === false) {
        return (
            <h2>You are Offline, please check your internet connection!!!</h2>
        )
    }

    if (listOfrestro.length === 0) {
        return (
            <Shimmer />
        )
    }

    return (
    <div className="p-4 m-4">
        <div className="p-1 m-1 flex justify-center">
            <div className="p-1 m-1">
                <input 
                className="p-1 m-1 bg-[#f3ece7] border-2 rounded-lg" 
                value={search} onChange={(e) => {
                    setsearch(e.target.value);
                }} />

                <button 
                className="px-2 py-1 m-1 bg-[#474747] border-2 rounded-lg text-[#fefbf9] hover:bg-slate-800" 
                onClick={() => {
                    const filteredList = copylistOfRestro.filter((e) => (
                        e.info.name.toLowerCase().includes(search.toLowerCase())
                    ))
                    setListOfrestro(filteredList);
                }}>
                    Search
                </button>
            </div>
            <button className="px-2 m-2 bg-[#474747] border-2 rounded-lg text-[#fefbf9] hover:bg-slate-800"
                onClick={() => {
                    const filterList = listOfrestro.filter((e) => {
                        return e.info.avgRating >= 4.0
                    });
                    setListOfrestro(filterList);
                }}
            >
                Top Restraunts
            </button>
        </div>

        <div className="flex flex-wrap w-7/12 m-auto">
            {
                listOfrestro.map((res) => {
                    return (
                        <div key={res.info.id}>
                            <Link to={"/restraunts/" + res.info.id}>
                                {/* <RestroCardPrmoted resObj={res.info}/> */}
                                {res.info.prmoted ? <RestroCardPrmoted resObj={res.info}/> : <RestroCard resObj={res.info}/> }
                                
                            </Link>
                        </div>
                    
                    )
                })
            }
            
        </div>
    </div>
    )
}

export default Body;