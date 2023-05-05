import useAuth from '@/hooks/useAuth';
import { signAlert, toastAlert } from '@/utils/alerts';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Input from '../modules/Input';

const SigninPage = () => {

    useAuth(true);
    const [user, setUser] = useState({ email: "", password: "" });
    const router = useRouter();

    const changeHandler = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const signin = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch("/api/auth/signin", {
                method: "POST",
                body: JSON.stringify({ ...user }),
                headers: { "Content-Type": "application/json" }
            })
            const data = await res.json();
            console.log(data);
            if (data.success) {
                signAlert("Welcome", "Logged in successfully", "success");
                router.push("/");
            } else {
                toastAlert("warning", `${data.message}`);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <form className="#mb-44">
            <Input
                name="email"
                changeFunction={changeHandler}
                value={user.email}
                label="Email"
            />

            <Input
                name="password"
                changeFunction={changeHandler}
                value={user.password}
                label="Password"
                type="password"
            />

            <button
                onClick={signin}
                className="add-btn"
            >
                Sign In
            </button>

            <div className="flex mt-4">
                <p>Don't have an account?</p>
                <Link
                    className="ml-2 text-blue-400"
                    href="/signup">Sign Up</Link>
            </div>
        </form>
    );
};

export default SigninPage;