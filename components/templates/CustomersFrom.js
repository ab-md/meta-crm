import React from 'react';
import Input from '../modules/Input';

const CustomersFrom = () => {
    return (
        <form>
            <p className="topic">Add New Customer</p>
            <Input label="Name" />
            <Input label="Last Name" />
            <Input label="Email" />
            <Input label="Phone" />
            <Input label="Address" />
            <Input label="Postal Code" />
            <div className="flex justify-between">
                <button 
                className="action-btn border-red-500 text-red-500"
                >
                    Cancel
                </button>
                <button 
                className="action-btn rounded-md border-green-300 text-green-300"
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default CustomersFrom;