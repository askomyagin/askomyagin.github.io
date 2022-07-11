import React from 'react';
import './app.css';
import { Route, Routes, useParams } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import HeadphonesList from '../headphones-list';
import FavoriteCart from '../favorite-cart';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';
import OrderList from '../order-list';
import DescriptionHeadphones from '../description_headphones';

const App = () => {
    function DescriptionPost() {
        const { id } = useParams();
        return <DescriptionHeadphones headphoneid={id} />;
    }

    return (
        <main className="main">
            <Header />
            <Routes>
                <Route exac path="/" element={<HeadphonesList />} />
                <Route path="/cart" element={<ShoppingCartTable />} />
                <Route path="/favorite" element={<FavoriteCart />} />
                <Route path="/order" element={<OrderList />} />
                <Route path="/description/:id/" element={<DescriptionPost />} exact />
            </Routes>
            <Footer />
        </main>
    );
};

export default App;
