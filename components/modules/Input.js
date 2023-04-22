import React from 'react';

const Input = ({ label, type }) => {
    return (
        <div className="flex flex-col">
            <label className="text-blue-400">{label}</label>
            <input
                className="h-16 p-4 rounded-md bg-gray-800 outline-none mt-2 mb-8"
                type={`${type ? type : "text"}`}
            />
        </div>
    );
};

export default Input;