import React from "react";
import './headphones-list-item.css';

const HeadphonesListItem = ({ headphone, onAddedToCart }) => {
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
                    <button className="buy" type="submit" onClick={onAddedToCart}>
                        <span>Купить</span>   
                    </button>
                </div>

            </div>

        </div>
    );
};

export default HeadphonesListItem;