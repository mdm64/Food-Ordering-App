import FoodCard from "./FoodCard";
import { useState } from "react";

const ItemCard = (props) => {
    const {data} = props;
    // console.log(data);
    const [toggle, setToggle] = useState(false);

    const accordian = () => {
        setToggle(!toggle);
    }

    return (
        <div className="bg-[#f3ece7] rounded-lg p-2 m-2">
            <div className="flex justify-between" onClick={() => accordian()}>
                <h5 className="px-1 m-1 mb-2 text-sm font-bold text-gray-900">{data.card.card.title} {"(" + data.card.card.itemCards.length + ")"}</h5>
                <h5>⬇️</h5>
            </div>

            <div>
                {
                    toggle && <FoodCard key={data.card.card.title} itemParam = {data.card.card} />
                }
                
            </div>
            
        </div>
    )
}

export default ItemCard;
