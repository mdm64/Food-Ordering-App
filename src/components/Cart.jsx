import { useSelector, useDispatch } from "react-redux";
import DetailedFoodCard from "./DetailedFoodCard";
import CartItems from "./CartItems";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = (e) => {
        dispatch(clearItem());
    }

    
    
    if(cartItems.length === 0) {
        return(
            <div className="p-2 my-2">
                <h1 className="text-center text-xl font-bold tracking-tight text-gray-900 my-2">Cart</h1>
                <div className="bg-[#f3ece7] rounded-lg p-2 m-auto w-6/12">
                    <h2 className="text-center p-2 m-2">Your cart is empty please choose some items!!!</h2>
                </div>
            </div>
            
        )
    }
    return (
        <div className="p-2 my-2">
                <h1 className="text-center text-xl font-bold tracking-tight text-gray-900 my-2">Cart</h1>
                
                <div className="bg-[#f3ece7] rounded-lg p-2 m-auto w-6/12">
                    <div className="w-2/12 m-auto">
                        <button
                            className=" p-2 m-2 bg-black text-white rounded-lg"
                            onClick={handleClearCart}
                            >
                            Clear Cart
                        </button>
                    </div>
                    {
                        cartItems.map((item) => {
                            return (
                                <CartItems items={item} />
                            )
                        })
                    }
                </div>
            </div>
        // <FoodCard itemParam = {cartItems} />
    )
}

export default Cart;