import UpdateCustomer from '@/components/templates/UpdateCustomer';
import Customer from '@/model/customer';
import connectDB from '@/utils/connectDB';
import { isValidObjectId } from 'mongoose';

const EditCustomer = ({ data }) => {

    return (
        <>
            <UpdateCustomer data={data} />
        </>
    );
};

export default EditCustomer;

export async function getServerSideProps(context) {
    await connectDB();
    const { query: { customerId } } = context;
    if (!isValidObjectId(customerId)) {
        return {
            redirect: { destination: "/", permanent: false }
        }
    }
    const customer = await Customer.findById(customerId);
    if (!customer) return {
        notFound: true
    }
    return {
        props: {
            data: JSON.parse(JSON.stringify(customer))
        }
    }
}