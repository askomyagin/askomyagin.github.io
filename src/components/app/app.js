import React from 'react';
import './app.css';
import { MainPage, ShopPage, FavoritePage, OrderPage, DescriptionPage } from '../pages';
import { Route, Routes, useParams} from 'react-router-dom';

const App = () => {

        function DescriptionPost() {
                const { id } = useParams();
                return <DescriptionPage headphoneid={id} />;
        }

        return (    
                <main role = 'main'>
                        <Routes>
                                <Route exac path='/'
                                element = {<MainPage/>} />
                                <Route path='/cart'
                                element = {<ShopPage/>} />
                                <Route path='/favorite'
                                element = {<FavoritePage />} />  
                                <Route path='/order'
                                element = {<OrderPage />} /> 
                                <Route path='/description/:id/'
                                element = {<DescriptionPost />}  exact/>    
                        </Routes>
                </main>
        );
};

export default App;