import useAuth from '@/hooks/useAuth';
import { signAlert, toastAlert } from '@/utils/alerts';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import CustomersFrom from '../modules/CustomersFrom';

const UpdateCustomer = ({ data }) => {

    useAuth(false);
    const router = useRouter();
    const [customer, setCustomer] = useState(data);

    const editCustomer = async (event) => {
        event.preventDefault();
        try {
            const req = await fetch(`/api/customers/${customer._id}`, {
                method: "PUT",
                body: JSON.stringify({ ...customer }),
                headers: { "Content-Type": "application/json" }
            });
            const res = await req.json();
            if (res.success) {
                signAlert("Successfull", `${res.message}`, "success");
                router.push("/");
            } else {
                toastAlert("error", `${res.message}`);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <CustomersFrom
                title="Edit Customer"
                customer={customer}
                setCustomer={setCustomer}
                formAction={editCustomer}
            />
        </>
    );
};

export default UpdateCustomer;