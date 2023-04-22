import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="layout mt-12 px-4">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;