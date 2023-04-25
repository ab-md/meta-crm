import CustomersFrom from '@/components/templates/CustomersFrom';
import useAuth from '@/hooks/useAuth';
import React from 'react';

const AddCustomer = () => {
    useAuth(false);
    return (
        <>
            <CustomersFrom />
        </>
    );
};

export default AddCustomer;