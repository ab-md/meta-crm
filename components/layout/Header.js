import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Header = () => {

    const router = useRouter();
    const [user, setUser] = useState();

    const authurize = async () => {
        try {
            const req = await fetch("/api/auth/user");
            const res = await req.json();
            setUser(res.success);
            console.log(user);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        authurize();
    }, [user, setUser, authurize])

    const logout = async () => {
        try {
            if (window.confirm("Are you sure you want to leave your account?")) {
                const res = await fetch("/api/auth/logout");
                const data = await res.json();
                console.log(data);
                router.reload();
                router.push("/signin");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="layout flex justify-between items-center py-8 px-4">
            <h1 className="font-bold text-xl">
                <Link href="/">META CRM</Link>
            </h1>
            <div>
                {
                    user ? (
                        <>
                            <button
                                onClick={logout}
                                className="bg-red-400 text-black px-3 py-1 rounded-md font-bold mr-2"
                            >
                                Sign Out
                            </button>
                            <Link
                                className="bg-green-400 text-black px-3 py-1 rounded-md font-bold"
                                href="/add-customer"
                            >
                                Add Customer
                            </Link>
                        </>
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