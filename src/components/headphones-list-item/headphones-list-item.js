import React from "react";
import './headphones-list-item.css';

const HeadphonesListItem = ({ headphone, onAddedToCart, onAddedToFavorite, favoriteFlag, onDeleteToFavorite}) => {
    const { img, title, discount, oldprice, price, rate } = headphone;

    function makePrice(price) {
        if (price != '') {
            price += '₽'
        }
        return price;
    }

    function makeDiscount(discount) {
        if (discount != '') {
            discount = '-' + discount + '%'
        }
        return discount;
    }

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('/src/image', false, /\.(png|jpe?g|svg)$/));

    const oldprice_new = makePrice(oldprice);
    const discount_new = makeDiscount(discount);

    const renderFavorite = (favoriteFlag) => {
        if(favoriteFlag){
            return(
                <button className="favorite" type="submit" onClick={onDeleteToFavorite}>
                    <div className={'favorite-flag-true'}>
                    <img src={images['icon_favourites_true.png']}/>
                    </div>
                </button>
            )
        }
        return(
            <button className="favorite" type="submit" onClick={onAddedToFavorite}>
                <div className={'favorite-flag-false'}>
                    <img src={images['icon_favourites.png']}/>
                </div>
            </button>
        )
    }

    return (
        <div className="headphone-list-item">
            <div className="headphone-image">
                <img src={images[img]} />
            </div>
            <div className="information-sale">
                <div className="headphone-title">
                    {title}
                </div>
                {
                    discount_new && <div className="headphone-discount">
                        {discount_new}
                    </div>
                }
                <div className={`${discount_new ? 'price-with-discount' : 'headphone-price'}`}>
                    {price}₽
                </div>
                <div className="headphone-old-price">
                    {oldprice_new}
                </div>
                <div className="headphone-rate">
                    <div className="headphone-vector">
                        ★
                    </div>
                    <div className="headphone-rate-estimation">
                        {rate}
                    </div>
                </div>
                <div className="button-buy">
                    {renderFavorite(favoriteFlag)}
                    <button className="buy" type="submit" onClick={onAddedToCart}>
                        <span>Купить</span>   
                    </button>
                </div>

            </div>

        </div>
    );
};

export default HeadphonesListItem;