import { signAlert, toastAlert } from '@/utils/alerts';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Input from '../modules/Input';
import CustomersFrom from '../modules/CustomersFrom';

const AddCustomerPage = () => {

    const router = useRouter();
    const [customer, setCustomer] = useState({
        name: "",
        last_name: "",
        email: "",
        phone: "",
        postal_code: "",
    })

    const addCustomer = async event => {
        event.preventDefault();
        try {
            const res = await fetch("/api/customers", {
                method: "POST",
                body: JSON.stringify({ ...customer }),
                headers: { "Content-Type": "application/json" }
            })
            const data = await res.json();
            console.log(data);
            if (data.success) {
                signAlert("Successfull", `${data.message}`, "success");
                router.push("/");
            } else {
                toastAlert("error", `${data.message}`)
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <CustomersFrom
                title="Add New Customer"
                customer={customer}
                setCustomer={setCustomer}
                formAction={addCustomer}
            />
        </>
    );
};

export default AddCustomerPage;