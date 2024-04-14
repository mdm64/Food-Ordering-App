import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useState } from "react";

const DetailedFoodCard = (props) => {
    const {data} = props;
    // console.log(data);

    const dispatch = useDispatch();

    const handleDispatch = (e) => {
        dispatch(addItem(e));
    }

    const {name, price, description, defaultPrice, imageId} = data;

    let imgPath = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCkom1wMfJJeGRc7rwJa-Rkwgk7TkhuuG9w&s"

    if(imageId) imgPath = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId;
    
    return (
        <div className="bg-[#d3ccc7] p-1 m-2 shadow-lg flex justify-between rounded-md cursor-pointer">
            
            <div className="w-9/12">
                <h7 className="text font-bold tracking-tight text-gray-900">{name}</h7>
                <p>Rs.{price / 100 || defaultPrice / 100}</p>
                <p className="">{description}</p>
            </div>

            <div className="p-1 m-1">
                <img 
                className="self-center flex-shrink-0 w-24 h-24 border rounded-md md:justify-self-start dark:bg-gray-500 dark:border-gray-300" 
                src={imgPath} />
                
                {/* if cart is filled add - button + */}

                <button className="mx-6 bg-[#474747] text-white rounded-md p-1 absolute my-[-20]"
                    onClick={() => handleDispatch(data)}
                >
                    Add+
                </button>
            </div>
            
        </div>
    )

}

export default DetailedFoodCard;

