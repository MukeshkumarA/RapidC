import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { removeFromCart, handleQuantity } from "../utils/cartSlice";
import { FontAwesomeIcon, faTrash } from "./FontAwesome";


const FoodItems = ({ name, price, imageId, description, quantity }) => {

    price = parseInt(price);
    const dispatch = useDispatch();

    const handleAction = (action) => {
        if (action == "remove" && quantity == 1)
            dispatch(removeFromCart(name));
        else
            dispatch(handleQuantity({ itemName: name, itemAction: action }));
    };

    const handleRemove = () => {
        dispatch(removeFromCart(name));
    };

    return (
        <div className="food-item p-5 m-8 shadow-lg bg-pink-50 w-[80%] md:w-[60%] mx-auto md:flex md:justify-between items-center">
            <div className="md:w-[50%] flex items-center mb-3 md:mb-0">
                <img src={IMG_CDN_URL + imageId} className="w-12" alt={name} />
                <h2 className="font-medium ml-2 text-wrap">{name}</h2>
            </div>
            <div className="flex justify-center w-[25%] md:w-[15%] items-center border border-black">
                <button className="mx-2" onClick={() => handleAction("add")}>+</button>
                <h2 className="px-2">{quantity}</h2>
                <button className="mx-2" onClick={() => handleAction("remove")}>-</button>
            </div>
            <h3 className="my-2 md:my-0">₹{(price / 100 * quantity).toFixed(2)}</h3>
            <button className="mx-2" onClick={handleRemove}>
                <FontAwesomeIcon className="text-green-800" icon={faTrash} />
            </button>
        </div>

    );
}

export default FoodItems;

// w-[12%] flex border border-green-500 text-center


{/* <div className=" p-5 m-8 shadow-lg bg-pink-50 w-[50%] mx-auto flex justify-between">
            <div className="flex-grow-0">
                <img src={IMG_CDN_URL + imageId} className="w-12" />
                <h2 className="font-medium">{name}</h2>
            </div>
            <div className="content-center">
                <div className="flex justify-center border border-green-400">
                    <button className="mx-2" onClick={() => handleAction("add")}>+</button>
                    <h2>{quantity}</h2>
                    <button className="mx-2" onClick={() => handleAction("remove")}>-</button>
                </div>
            </div>
            <h4>₹ {((Math.round(price) / 100) * quantity).toFixed(2)}</h4>
            <button className="mx-2" onClick={handleRemove}><FontAwesomeIcon className="text-green-800" icon={faTrash}/></button>
        </div> */}


