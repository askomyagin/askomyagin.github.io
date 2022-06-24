import React from 'react';
import './app.css';
import {MainPage, ShopPage, FavoritePage, OrderPage } from '../pages';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';

const App = () => {

  return (    
    <main role = 'main' className='container'>
            <Routes>
            <Route exac path='/'
                    element = {<MainPage/>} />
              <Route path='/cart'
                    element = {<ShopPage/>} />
            <Route path='/favorite'
                    element = {<FavoritePage />} />  
                <Route path='/order'
                        element = {<OrderPage />} />      

            </Routes>
    </main>
  );
};

export default App;