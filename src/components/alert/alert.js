import React from 'react';
import './alert.css';
import order from '../../image/order.png';
import { Link } from 'react-router-dom';

const Alert = () => {
    var num = Math.floor(Math.random() * 90000) + 10000;

    return (
        <div className="alert-container">
            <div className="alert-second-container">
                <div className="alert-img">
                    <img src={order} alt={'alert-img'} />
                </div>
                <div className="alert-text-button-container">
                    <div className="alert-text">Ваш заказ успешно оформлен.</div>
                    <div className="alert-text">
                        Номер заказа <b>{num}</b>.
                    </div>
                    <Link to={'/'}>
                        <button className="alert-button">Перейти на главную</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Alert;
