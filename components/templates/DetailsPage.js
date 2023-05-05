import { signAlert, toastAlert } from '@/utils/alerts';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const DetailsPage = ({ data }) => {

    const router = useRouter();
    const deleteCustomer = async () => {
        if (window.confirm(`Are you sure you want to delete customer ${data.name} ${data.last_name}?`)) {
            const req = await fetch(`/api/customers/${data._id}`, {
                method: "DELETE"
            });
            const res = await req.json();
            console.log(res);
            if (res.success) {
                signAlert("Successfull", `${res.message}`, "success");
                router.push("/");
            } else {
                toastAlert("error", `${res.message}`)
            }
        }
    }

    return (
        <div>
            <p className="topic">Customer's Details</p>
            <div className="data-bg grid grid-cols-1 sm:grid-cols-3">
                <div className="py-4">
                    <span className="text-blue-400">Name: </span>
                    <span>{data.name}</span>
                </div>
                <div className="py-4">
                    <span className="text-blue-400">Last Name: </span>
                    <span>{data.last_name}</span>
                </div>
                <div className="py-4">
                    <span className="text-blue-400">Email: </span>
                    <span>{data.email}</span>
                </div>
                <div className="py-4">
                    <span className="text-blue-400">Phone: </span>
                    <span>{data.phone}</span>
                </div>
                <div className="py-4">
                    <span className="text-blue-400">Postal Code: </span>
                    <span>{
                        data.postal_code.length ? data.postal_code :
                            "_ _ _ _ _"
                    }</span>
                </div>
                <div className="py-4">
                    <span className="text-blue-400">Registration Date: </span>
                    <span>
                        {
                            data.createdAt.split("T").at(0).replaceAll("-", "/")
                        }
                    </span>
                </div>
            </div>
            <div className="data-bg flex justify-between items-center mt-12">
                <p>Edit or Delete?</p>
                <button
                    onClick={deleteCustomer}
                    className="small-btn border-red-500 text-red-500"
                >
                    Delete
                </button>
                <Link
                    className="small-btn border-green-300 text-green-300"
                    href={`/customer/edit/${data._id}`}
                >
                    Edit
                </Link>
            </div>
        </div>
    );
};

export default DetailsPage;