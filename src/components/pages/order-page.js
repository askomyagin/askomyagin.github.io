import React from 'react';
import './main-page.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import OrderList from '../order-list';

const OrderPage = () => {

  return (
    <div className='main-page'>
      <Header />
        <OrderList />
      <Footer />
    </div>
    
  );
};

export default OrderPage;