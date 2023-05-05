import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Input from './Input';

const CustomersFrom = (props) => {

    const router = useRouter();
    const { customer, setCustomer, formAction, title } = props;

    const changeCustomer = e => {
        setCustomer({ ...customer, [e.target.name]: e.target.value })
    }

    const cancelHandler = () => {
        setCustomer({});
        router.push("/");
    }

    return (
        <form>
            <p className="topic">{title}</p>
            <Input
                label="Name"
                name="name"
                value={customer.name}
                changeFunction={changeCustomer}
            />

            <Input
                label="Last Name"
                name="last_name"
                value={customer.last_name}
                changeFunction={changeCustomer}
            />

            <Input
                label="Email"
                name="email"
                value={customer.email}
                changeFunction={changeCustomer}
            />

            <Input
                label="Phone"
                name="phone"
                value={customer.phone}
                changeFunction={changeCustomer}
            />

            <Input
                label="Postal Code"
                name="postal_code"
                value={customer.postal_code}
                changeFunction={changeCustomer}
            />

            <div className="flex justify-between">
                <button
                    onClick={cancelHandler}
                    className="action-btn border-red-500 text-red-500"
                >
                    Cancel
                </button>
                <button
                    onClick={formAction}
                    className="action-btn rounded-md border-green-300 text-green-300"
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default CustomersFrom;