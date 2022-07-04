import React from 'react';
import './main-page.css';
import DescriptionHeadphones from '../description_headphones';
import Footer from '../footer/footer';
import Header from '../header/header';

const DescriptionPage = ({headphoneid}) => {

  return (
    <div className='main-page'>
      <Header />
      <DescriptionHeadphones headphoneid={headphoneid}/>
      <Footer />
    </div>
    
  );
};

export default DescriptionPage;