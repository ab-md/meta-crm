import Link from 'next/link';
import React from 'react';

const DetailsPage = () => {
    return (
        <div>
            <p className="topic">Customer's Details</p>
            <div className="data-bg grid grid-cols-1 sm:grid-cols-3">
                <div className="py-4">
                    <span className="text-blue-400">Name: </span>
                    <span>Ali</span>
                </div>
                <div className="py-4">
                    <span className="text-blue-400">Last Name: </span>
                    <span>Ghassabi</span>
                </div>
                <div className="py-4">
                    <span className="text-blue-400">Email: </span>
                    <span>Alighas@abi.com</span>
                </div>
                <div className="py-4">
                    <span className="text-blue-400">Phone: </span>
                    <span>09328485489</span>
                </div>
                <div className="py-4">
                    <span className="text-blue-400">Postal Code: </span>
                    <span>8328485489</span>
                </div>
                <div className="py-4">
                    <span className="text-blue-400">Registration Date: </span>
                    <span>1387/04/23</span>
                </div>
            </div>
            <div className="data-bg flex justify-between items-center mt-12">
                <p>Edit or Delete?</p>
                <button className="small-btn border-red-500 text-red-500">Delete</button>
                <Link 
                className="small-btn border-green-300 text-green-300"
                href="/edit"
                >
                    Edit
                </Link>
            </div>
        </div>
    );
};

export default DetailsPage;