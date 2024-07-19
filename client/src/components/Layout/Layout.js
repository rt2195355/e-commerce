import React from 'react'
import Header from './Header'
import Footer from './Footer';
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title = "Ecommerce App", description = "MERN Application", keywords = "react, node, mern, mongodb", author = "rt2195355" }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: "70vh" }}>
                {children}
                <ToastContainer />
            </main>
            <Footer />

        </div>
    )
}

export default Layout
