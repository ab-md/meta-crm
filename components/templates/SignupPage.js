import Link from 'next/link';
import React from 'react';
import Input from '../modules/Input';

const SignupPage = () => {
    return (
        <form className="#mb-12">
            <Input label="Email" />
            <Input label="Password" type="password" />
            <Input label="Repeat Password" type="password" />
            <button className="add-btn">Sign Up</button>
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