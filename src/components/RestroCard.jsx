
import {CDN_URL} from "../utils/static"

const RestroCard = (props) => {
    const { resObj } = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
      } = resObj;
      
    return (
        <div className="m-1 p-1 w-[250px] rounded-lg bg-[#f3ece7] hover:bg-[#d3ccc7]">
            <img 
                className="rounded-lg w-full h-40 object-cover"
                alt="res-logo" 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
            />

            <div className="flex-1">
                <h5 className="font-bold py-1 text-lg">
                    {name}
                </h5>

                <h6 className="my-1">
                    {cuisines.join(", ")}
                </h6>

                <div class="flex items-center">
                    <svg class="w-4 h-4 text-yellow-600 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>

                    <h6 class="ms-2 text-sm font-bold text-gray-900">
                        {avgRating}
                    </h6>

                </div>

                <h6 className="font-bold ">
                    {costForTwo}
                </h6>
            </div>
            
            

        </div>
    )
}

export const restroCardPrmoted = (RestroCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Prmoted</label>
                <RestroCard {...props}/>
            </div>
        )
    }
}
export default RestroCard;