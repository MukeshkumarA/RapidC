import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodItems from './FoodItems';
import { clearCart } from '../utils/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clearCart());
    }

    return (
        <div>
            <div className='relative'>
                <h1 className='p-6 font-bold text-3xl text-center'>Cart Items</h1>
                {cartItems.length > 0 &&
                    <button className='absolute p-2 rounded-lg text-xl bg-green-300 right-[15%] top-5' onClick={() => handleClick()}>Clear cart</button>
                }

            </div>


            {cartItems.length > 0 ? (
                cartItems.map(item => (
                    <FoodItems key={item?.card?.info?.id} {...item?.card?.info} />
                ))
            ) : (
                <div className="text-center">
                    <h2 className='my-1 text-xl font-semibold'>Your cart is empty</h2>
                    <h2>You can go to home page to view more restaurants</h2>
                    <Link to="/">
                        <button className='mt-5 text-xl bg-orange-400 text-white p-2 rounded-sm'>See Restaurants Near You</button>
                    </Link>

                </div>

            )}

        </div>
    )
}

export default Cart