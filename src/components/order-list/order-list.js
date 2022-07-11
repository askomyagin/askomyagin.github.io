import React, { useState } from 'react';
import './order-list.css';
import { connect } from 'react-redux';
import Alert from '../alert';
import { allHeadphonesRemovedFromCart } from '../../actions';

const OrderList = ({ items, total, onDelete }) => {
    const [delivery, setDelivery] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    function importAll(r) {
        let images = {};
        r.keys().map((item) => (images[item.replace('./', '')] = r(item)));
        return images;
    }
    const images = importAll(require.context('/src/image', false, /\.(png|jpe?g|svg)$/));

    const renderCard = (item) => {
        const { title, count, img, price, total } = item;
        return (
            <div className="order-shop-card">
                <div className="order-card-image">
                    <img src={images[img]} alt={img} width="147px" height="136px" />
                </div>
                <div className="order-shop-info-item">
                    <div className="oreder-shop-title-item">{title}</div>
                    <div className="oder-shop-price-item">Цена: {price}₽</div>
                    <div className="order-shop-count-item">Количество: {count}</div>
                    <div className="order-shop-total-item">Общая стоимость: {total}₽</div>
                </div>
            </div>
        );
    };

    return (
        <div className="order-list">
            <div className="order-list-title">Заказ</div>
            <div className="order-list-body">
                <form className="order-fields">
                    <div className="order-container">
                        <div className="order-field order-surname">
                            <div className="title-order-item">Фамилия</div>
                            <input type="text" placeholder="Surname" name="surname" />
                        </div>

                        <div className="order-field order-name">
                            <div className="title-order-item">Имя</div>
                            <input type="text" placeholder="Name" name="name" />
                        </div>

                        <div className="order-field order-patronymic">
                            <div className="title-order-item">Отчество</div>
                            <input type="text" placeholder="Patronymic" name="patronymic" />
                        </div>

                        <div className="order-field order-city">
                            <div className="title-order-item">Город / населенный пункт</div>
                            <input id="city" name="city" placeholder="City" type="text" />
                        </div>

                        <div className="order-field order-delivery">
                            <div className="title-order-item">Способ доставки</div>
                            <input
                                className="order-delivery-item-input"
                                type="radio"
                                id="contactChoice1"
                                name="contact"
                                onChange={() => setDelivery(false)}
                                defaultChecked
                            />
                            <label className="order-delivery-item-label" for="contactChoice1">
                                Самовывоз
                            </label>

                            <input
                                className="order-delivery-item-input"
                                type="radio"
                                id="contactChoice2"
                                name="contact"
                                onChange={() => setDelivery(true)}
                            />
                            <label className="order-delivery-item-label" for="contactChoice2">
                                Курьерская доставка
                            </label>
                        </div>

                        {delivery && (
                            <div className="order-field order-address">
                                <div className="order-field order-patronymic">
                                    <div className="title-order-item">Улица:</div>
                                    <input
                                        className="order-delivery-item-input"
                                        id="street"
                                        placeholder="Street"
                                        name="street"
                                        type="text"
                                    />
                                </div>
                                <div className="order-field order-patronymic">
                                    <div className="title-order-item">Дом:</div>
                                    <input
                                        className="order-delivery-item-input"
                                        id="building"
                                        placeholder="Building"
                                        name="building"
                                        type="text"
                                    />
                                </div>
                                <div className="order-field order-patronymic">
                                    <div className="title-order-item">Квартира:</div>
                                    <input
                                        className="order-delivery-item-input"
                                        id="flat"
                                        placeholder="Flat"
                                        name="flat"
                                        type="text"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="order-field order-tel-number">
                            <div className="title-order-item">Номер телефона</div>
                            <input
                                type="tel"
                                placeholder="+7(xxx)-xxx-xx-xx"
                                id="phone"
                                name="tel-number"
                            />
                        </div>

                        <div className="order-field order-email">
                            <div className="title-order-item">Электронная почта</div>
                            <input type="email" id="email" placeholder="Email" name="order-email" />
                        </div>

                        <div className="order-field order-comment">
                            <div className="title-order-item">Комментарий</div>
                            <textarea rows="7" cols="50" name="comment" />
                        </div>
                    </div>
                    <div className="button-container">
                        <button
                            type={'button'}
                            className="button-order"
                            onClick={() => {
                                setShowAlert(true);
                                onDelete();
                            }}
                        >
                            <div className="text-button-order">Оформить заказ</div>
                        </button>
                    </div>
                </form>

                <div className="order-shop-cart">
                    {
                        <div className="title-order-item">
                            {(items.length % 10 !== 1 || items.length === 11) && (
                                <div>
                                    В вашем заказе {items.length} различных{' '}
                                    {items.length >= 5 ? 'товаров' : 'товара'}
                                </div>
                            )}
                            {items.length === 1 && <div>В вашем заказе {items.length} товар</div>}
                            {items.length % 10 === 1 &&
                                items.length !== 11 &&
                                items.length !== 1 && (
                                    <div>В вашем заказе {items.length} различный товар</div>
                                )}
                            {items.map((item) => {
                                return <div key={item.id}>{renderCard(item)}</div>;
                            })}
                            <div> Стоимость всего заказа: {total}₽</div>
                        </div>
                    }
                </div>
                {showAlert && Alert()}
            </div>
        </div>
    );
};
const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal,
    };
};

const mapDispatchToProps = {
    onDelete: allHeadphonesRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
