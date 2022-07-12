import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './headphones-list-item.css';
import AlertPurchased from '../alert-purchased';

const HeadphonesListItem = ({
    headphone,
    onAddedToCart,
    onAddedToFavorite,
    favoriteFlag,
    onDeleteToFavorite,
}) => {
    const { id, img, title, discount, oldprice, price, rate } = headphone;

    const [showAlert, setShowAlert] = useState(false);

    function makePrice(price) {
        if (price !== '') {
            price += '₽';
        }
        return price;
    }

    const handleModalOpen = useCallback(() => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    }, []);

    function makeDiscount(discount) {
        if (discount !== '') {
            discount = '-' + discount + '%';
        }
        return discount;
    }

    function importAll(r) {
        let images = {};
        r.keys().map((item) => (images[item.replace('./', '')] = r(item)));
        return images;
    }

    const images = importAll(require.context('/src/image', false, /\.(png|jpe?g|svg)$/));

    const oldprice_new = makePrice(oldprice);
    const discount_new = makeDiscount(discount);

    const renderFavorite = (favoriteFlag) => {
        if (favoriteFlag) {
            return (
                <button className="favorite" type="submit" onClick={onDeleteToFavorite}>
                    <div className={'favorite-flag-true'}>
                        <img
                            src={images['icon_favourites_true.png']}
                            alt={'icon_favourites_true'}
                        />
                    </div>
                </button>
            );
        }
        return (
            <button className="favorite" type="submit" onClick={onAddedToFavorite}>
                <div className={'favorite-flag-false'}>
                    <img src={images['icon_favourites.png']} alt={'icon_favourites'} />
                </div>
            </button>
        );
    };

    return (
        <div className="headphone-list-item">
            <div className="headphone-image">
                <img src={images[img]} alt={img} />
            </div>
            <div className="information-sale">
                <Link to={`/description/${id}/`}>
                    <div className="headphone-title">{title}</div>
                </Link>
                {discount_new && <div className="headphone-discount">{discount_new}</div>}
                <div className={`${discount_new ? 'price-with-discount' : 'headphone-price'}`}>
                    {price}₽
                </div>
                <div className="headphone-old-price">{oldprice_new}</div>
                <div className="headphone-rate">
                    <div className="headphone-vector">★</div>
                    <div className="headphone-rate-estimation">{rate}</div>
                </div>
                <div className="button-buy">
                    {renderFavorite(favoriteFlag)}
                    <button
                        className="buy"
                        onClick={() => {
                            handleModalOpen();
                            onAddedToCart();
                        }}
                    >
                        <span>Купить</span>
                    </button>
                </div>
                {showAlert && AlertPurchased()}
            </div>
        </div>
    );
};

export default HeadphonesListItem;
