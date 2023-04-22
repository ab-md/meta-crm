import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {

    const [user, setUser] = useState(false);

    return (
        <div className="layout flex justify-between items-center py-8 px-4">
            <h1 className="font-bold text-xl">
                <Link href="/">META CRM</Link>
            </h1>
            <div>
                <button 
                className="mr-2 bg-red-400 px-2 rounded-full h-fit"
                onClick={() => setUser(!user)}
                >
                    X
                </button>
                {
                    user ? (
                        <Link
                            className="bg-green-400 text-black px-3 py-1 rounded-md font-bold"
                            href="/add-customer"
                        >
                            Add Customer
                        </Link>
                    ) : (
                        <Link
                            className="bg-green-400 text-black px-3 py-1 rounded-md font-bold"
                            href="/signin"
                        >
                            Sign in
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Header;