import { signAlert, toastAlert } from '@/utils/alerts';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Card = ({ data }) => {

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
        <div className="bg-gray-800 flex justify-between items-center p-3 rounded-md my-4">
            <div className="flex text-blue-400">
                <p>{data.name}</p>
                <p className="ml-8">{data.email}</p>
            </div>
            <div>
                <button
                    onClick={deleteCustomer}
                    className="borders border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                >
                    Delete
                </button>
                <Link
                    className="borders border-green-400 text-green-400 ml-4 hover:bg-green-400 hover:text-white"
                    href={`/customer/edit/${data._id}`}
                >
                    Edit
                </Link>
                <Link
                    className="borders border-green-400 text-green-400 ml-4 hover:bg-green-400 hover:text-white"
                    href={`/customer/${data._id}`}
                >
                    Details
                </Link>
            </div>
        </div>
    );
};

export default Card;