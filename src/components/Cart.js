import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodItems from './FoodItems';
import { clearCart } from '../utils/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon, faTrash } from "./FontAwesome";
import { UserContext } from '../utils/Context';



const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Calculate total number of items in the cart
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    // Calculate total amount in the cart
    const totalAmount = cartItems.reduce((total, item) => total + (item.card.info.price / 100) * item.quantity, 0);

    const handleClick = () => {
        dispatch(clearCart());
    }

    const handleProceedToPay = () => {
        if (!user.isLoggedIn) {
            alert("Please login to proceed to payment");
            navigate('/login');
        }
        else {
            navigate('/payment');
        }
    }


    return (
        <div>
            <div className='relative'>
                <h1 className='p-6 font-semibold text-3xl md:text-4xl text-center'>Cart Items</h1>
                {cartItems.length > 0 && // Check the length of the cartItems array
                    <button className='absolute px-3 py-2 rounded-sm  border  right-[5%] md:right-[15%] top-5' onClick={() => handleClick()}><FontAwesomeIcon className="" icon={faTrash} /></button>
                }
            </div>

            {cartItems.length > 0 ? (
                cartItems.map(item => (
                    <FoodItems key={item?.card?.info?.id} {...item?.card?.info} quantity={item.quantity} />
                ))
            ) : (
                <div className="text-center">
                    <h2 className='my-1 text-xl font-semibold'>Your cart is empty</h2>
                    <h2>You can go to the home page to view more restaurants</h2>
                    <Link to="/">
                        <button className='mt-5 text-xl bg-orange-400 text-white p-2 rounded-sm'>See Restaurants Near You</button>
                    </Link>
                </div>
            )}
            {cartItems.length > 0 && (
                <div className='w-[80%] mb-8  md:w-[50%] mx-auto text-center mt-12'>
                    <div className="mt-4 flex justify-between px-5 md:px-0 font-bold">
                        <p>To Pay</p>
                        <p>₹ {totalAmount.toFixed(2)}</p>
                    </div>
                    <div className="mt-4">
                        <button className='p-3 bg-orange-400 w-full rounded-sm text-white' onClick={handleProceedToPay}>Proceed to pay</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Cart