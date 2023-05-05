import DetailsPage from '@/components/templates/DetailsPage';
import Customer from '@/model/customer';
import connectDB from '@/utils/connectDB';
import { isValidObjectId } from 'mongoose';
import React from 'react';

const Details = ({data}) => {
    return (
        <>
            <DetailsPage data={data} />
        </>
    );
};

export default Details;

export async function getServerSideProps(context) {
    try {
        await connectDB();
        const { query: { customerId } } = context;
        if (!isValidObjectId(customerId)) {
            return {
                redirect: { destination: "/", permanent: false }
            }
        }
        const customer = await Customer.findById(customerId);
        if (!customer) {
            return {
                notFound: true
            }
        }
        console.log(customer);
        return {
            props: {
                data: JSON.parse(JSON.stringify(customer))
            }
        }
    } catch (err) {
        return {
            notFound: true
        }
    }
}