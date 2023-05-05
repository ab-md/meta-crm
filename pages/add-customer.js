import AddCustomerPage from '@/components/templates/AddCustomer';
import useAuth from '@/hooks/useAuth';
import React from 'react';

const AddCustomer = () => {
    useAuth(false);
    return (
        <>
            <AddCustomerPage />
        </>
    );
};

export default AddCustomer;