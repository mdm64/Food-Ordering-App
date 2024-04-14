import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResPage from "../utils/useResPage";
import ItemCard from "./ItemCard";

const ResPage = () => {

    
    
    const res = useParams().resid;

    const items = useResPage(res);
    

    if (items === null) return <Shimmer />;

    const restInfo = items[2].card.card.info
    const {name, avgRating, costForTwoMessage, cuisines, city, feeDetails} = restInfo;

    const foodDets = items[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards || items[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards || items[5].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards;
    
    const category = items[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    
    // console.log(category);

    return (
        <div className="flex flex-col m-auto p-4 gap-5 w-6/12">
            <div className="bg-[#f3ece7] rounded-2xl">
                <h2 className="px-2 m-1 mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h2>
                <div className="bg-[#d3ccc7] p-4 m-4 rounded-2xl">
                    <div class="flex items-center gap-1">
                        <svg class="w-5 h-5 text-green-800-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <h6 class="text-sm font-bold text-gray-900">{avgRating}</h6>

                        <p className="text-sm font-bold text-gray-900">{" . " + costForTwoMessage}</p>
                    </div>
                    
                    <p className="text-sm font-bold text-gray-900 m-2">{cuisines.join(", ")}</p>
                    <hr className="bg-black"></hr>
                    <p className="text-sm">{feeDetails.message.replace("<b>", "").replace("</b>", "")}</p>
                </div>
                
            </div>
            <div className="cursor-pointer">
                {
                    category.map((item) => {
                        return <ItemCard data={item}/>
                    })
                }
            </div>
        </div>
    )
}

export default ResPage;