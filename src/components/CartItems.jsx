const CartItems = ({items}) => {
    
    const {name, price, description, defaultPrice, imageId} = items;
    // log(key)

    let imgPath = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCkom1wMfJJeGRc7rwJa-Rkwgk7TkhuuG9w&s"

    if(imageId) imgPath = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId;

    return (
        <div className="bg-[#d3ccc7] p-2 m-4 shadow-lg flex justify-between rounded-md cursor-pointer">
            
            <div className="w-9/12">
                <h7 className="text font-bold tracking-tight text-gray-900">{name}</h7>
                <p>Rs.{price / 100 || defaultPrice / 100}</p>
                <p className="">{description}</p>
            </div>

            <div className="p-1 m-1">
                <img 
                className="self-center flex-shrink-0 w-24 h-24 border rounded-md md:justify-self-start dark:bg-gray-500 dark:border-gray-300" 
                src={imgPath} />
            </div>
            
        </div>
    )
}

export default CartItems;