import React from 'react';
import './main-page.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';

const ShopPage = () => {

  return (
    <div className='main'>
      <Header />
      <ShoppingCartTable />
      <Footer />
    </div>
    
  );
};

export default ShopPage;