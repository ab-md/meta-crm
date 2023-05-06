import Link from 'next/link';
import React from 'react';
import Card from '../modules/Card';

const HomePage = ({ data }) => {

    return (
        <div className="min-h-screen">
            {
                data.length ? data.map(customer => (
                    <Card key={customer._id} data={customer} />
                )) : (
                    <div className="font-bold text-xl h-64 flex flex-col justify-center items-center">
                        <p>No Customers Yet?</p>
                        <Link href="/add-customer" className="text-blue-400 cursor-pointer">Add Some</Link>
                    </div>
                )
            }
        </div>
    );
};

export default HomePage;