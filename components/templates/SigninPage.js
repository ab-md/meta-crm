import Link from 'next/link';
import React from 'react';
import Input from '../modules/Input';

const SigninPage = () => {
    return (
        <form className="#mb-44">
            <Input label="Email" />
            <Input label="Password" type="password" />
            <button className="add-btn">Sign In</button>
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