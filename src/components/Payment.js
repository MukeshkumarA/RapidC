import React from 'react';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Payment Details</h1>
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
                <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                <p className="text-gray-700 mb-4">
                    Payment functionality has not been implemented yet. 
                    I'm working on it and will update soon. 
                    Thank you for your patience!
                </p>
                <Link to="/" className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-sm hover:bg-orange-600 transition duration-300">Back to Home</Link>
            </div>
        </div>
    );
}

export default PaymentPage;
