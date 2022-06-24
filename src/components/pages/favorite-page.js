import React from 'react';
import './main-page.css';
import FavoriteCart from '../favorite-cart';
import Footer from '../footer/footer';
import Header from '../header/header';

const FavoritePage = () => {

  return (
    <div className='main-page'>
      <Header />
      <FavoriteCart />
      <Footer />
    </div>
    
  );
};

export default FavoritePage;