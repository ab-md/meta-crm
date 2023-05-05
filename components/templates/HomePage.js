import React from 'react';
import Card from '../modules/Card';

const HomePage = ({ data }) => {

    return (
        <div className="h-screen">
            {
                data?.map(customer => (
                    <Card key={customer._id} data={customer} />
                ))
            }
        </div>
    );
};

export default HomePage;