import React from 'react';
import './main-page.css';
import HeadphonesList from '../headphones-list';
import Footer from '../footer/footer';
import Header from '../header/header';

const MainPage = () => {

  return (
    <div className='main'>
      <Header />
      <HeadphonesList />
      <Footer />
    </div>
    
  );
};

export default MainPage;