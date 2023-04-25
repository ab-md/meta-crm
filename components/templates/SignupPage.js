import useAuth from '@/hooks/useAuth';
import { signAlert } from '@/utils/alerts';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Input from '../modules/Input';

const SignupPage = () => {

    useAuth(true);
    const [user, setUser] = useState({ email: "", password: "", repassword: "" });
    const router = useRouter();

    const changeHandler = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const signup = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                body: JSON.stringify({ ...user }),
                headers: { "Content-Type": "application/json" }
            })
            const data = await res.json();
            console.log(data);
            if (data.success) {
                signAlert("Signed up successfully", "Sign in now!", "success");
                router.push("/signin");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <form className="#mb-12">

            <Input
                name="email"
                value={user.email}
                changeFunction={changeHandler}
                label="Email"
            />

            <Input
                name="password"
                value={user.password}
                changeFunction={changeHandler}
                label="Password"
                type="password"
            />

            <Input
                name="repassword"
                value={user.repassword}
                changeFunction={changeHandler}
                label="Repeat Password"
                type="password"
            />

            <button
                onClick={signup}
                className="add-btn"
            >
                Sign Up
            </button>

            <div className="flex mt-4">
                <p>Already have an account?</p>
                <Link
                    className="ml-2 text-blue-400"
                    href="/signin">Sign In</Link>
            </div>
        </form>
    );
};

export default SignupPage;