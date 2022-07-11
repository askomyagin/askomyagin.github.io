import React from 'react';
import './description_headphones_item.css';

const DescriptionHeadphonesItem = ({
    headphone,
    onAddedToCart,
    onAddedToFavorite,
    favoriteFlag,
    onDeleteToFavorite,
}) => {
    const { id, img, title, discount, oldprice, price, specification, about_product } = headphone;
    const { country, ear_pads_material, guarantee, service_life, frequency_range, sensitivity } =
        specification;

    function importAll(r) {
        let images = {};
        r.keys().map((item) => (images[item.replace('./', '')] = r(item)));
        return images;
    }

    function makePrice(price) {
        if (price !== '') {
            price += '₽';
        }
        return price;
    }

    function makeDiscount(discount) {
        if (discount !== '') {
            discount = '-' + discount + '%';
        }
        return discount;
    }

    const oldprice_new = makePrice(oldprice);
    const discount_new = makeDiscount(discount);

    const images = importAll(require.context('/src/image', false, /\.(png|jpe?g|svg)$/));

    const rus_characteristics = [
        'Страна производства',
        'Материал амбушюров',
        'Гарантия',
        'Срок службы',
        'Частотный диапазон',
        'Чувствительность',
    ];
    const characteristics_item = [
        country,
        ear_pads_material,
        guarantee,
        service_life,
        frequency_range,
        sensitivity,
    ];

    const renderFavorite = (favoriteFlag) => {
        if (favoriteFlag) {
            return (
                <button className="favorite" type="submit" onClick={() => onDeleteToFavorite(id)}>
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
            <button className="favorite" type="submit" onClick={() => onAddedToFavorite(id)}>
                <div className={'favorite-flag-false'}>
                    <img src={images['icon_favourites.png']} alt={'icon_favourites'} />
                </div>
            </button>
        );
    };

    return (
        <div className="description-container">
            <div className="description-container-item-image">
                <div className="description-item-image">
                    <img src={images[img]} alt={img} />
                </div>
            </div>
            <div className="title-specification-container">
                <div className="description-container-item-title">{title}</div>
                <div className="description-specifications">
                    <div className="description-specifications-title">Характеристики</div>
                    <div className="description-brief-characteristics">
                        <div className="description-rus-characteristics">
                            {rus_characteristics.map((item) => (
                                <div key={item} className="description-rus-characteristics">
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className="description-characteristics">
                            {characteristics_item.map((item) => (
                                <div key={item} className="description-characteristics-item">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="description_all_characteristics">Все характеристики</button>
                </div>
            </div>
            <div className="about-product-favorite-buy-container">
                <div className="about-product-container">
                    <div className="about-product-title">О товаре</div>
                    {about_product.split('\n').map((product) => (
                        <div key={product} className="description-about-product">
                            {product}
                        </div>
                    ))}
                </div>
                <div className="favorite-buy-container">
                    <div className="description-price-container">
                        <div className="description-with-discount-container">
                            <div className="description-with-discount">
                                <div
                                    className={`${
                                        discount_new
                                            ? 'description-price-with-discount'
                                            : 'description-headphone-price'
                                    }`}
                                >
                                    {price}₽
                                </div>
                                {discount_new && (
                                    <div className="description-headphone-discount">
                                        {discount_new}
                                    </div>
                                )}
                            </div>
                            <div className="description-headphone-old-price">{oldprice_new}</div>
                        </div>
                    </div>
                    <div className="description-buy-favorite">
                        {renderFavorite(favoriteFlag)}
                        <button
                            className="description-place-order"
                            onClick={() => onAddedToCart(id)}
                        >
                            <div className="text-place-order">Купить</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DescriptionHeadphonesItem;
