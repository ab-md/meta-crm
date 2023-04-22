import Link from 'next/link';
import React from 'react';

const Card = () => {
    return (
        <div className="bg-gray-800 flex justify-between items-center p-3 rounded-md my-4">
            <div className="flex text-blue-400">
                <p>name</p>
                <p className="ml-8">example@gmail.com</p>
            </div>
            <div>
                <button 
                className="borders border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                >
                    Delete
                </button>
                <Link
                    className="borders border-green-400 text-green-400 ml-4 hover:bg-green-400 hover:text-white"
                    href="/edit"
                >
                    Edit
                </Link>
                <Link
                    className="borders border-green-400 text-green-400 ml-4 hover:bg-green-400 hover:text-white"
                    href="/customer/details"
                >
                    Details
                </Link>
            </div>
        </div>
    );
};

export default Card;