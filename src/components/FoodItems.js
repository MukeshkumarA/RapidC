import { IMG_CDN_URL } from "../config";

const FoodItems = ({name, price, imageId, description}) => {

    return (
        <div className=" p-2 m-5 shadow-lg bg-pink-50">
            {/* <img src={IMG_CDN_URL + imageId} /> */}
            <h2 className="font-medium">{name}</h2>
            <h3>{description}</h3>
            <h4>Rupees: {price/100}</h4>
        </div>
    );
}

export default FoodItems;