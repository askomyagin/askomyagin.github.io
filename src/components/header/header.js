import React from 'react';
import './header.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ count_shop, favoriteItems }) => {
    function importAll(r) {
        let images = {};
        r.keys().map((item) => (images[item.replace('./', '')] = r(item)));
        return images;
    }

    const images = importAll(require.context('/src/image', false, /\.(png|jpe?g|svg)$/));
    const favoriteCount = favoriteItems.map((item) => item.id).length;

    return (
        <div className="header">
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <div className="title-site">QPICK</div>
            </Link>
            <div className="buttons-header">
                <div className="header-favourites">
                    <Link to={'/favorite'} style={{ textDecoration: 'none' }}>
                        <img
                            src={images['icon_favourites.png']}
                            alt={'icon_favourites'}
                            className="button-favourites"
                        />
                        <img
                            src={`${
                                favoriteCount === 0
                                    ? images['ellipse_for_header.png']
                                    : images['ellipse_for_header_active.png']
                            }`}
                            alt={'ellipse_for_header'}
                            className="button-favourites-count"
                        />
                    </Link>
                </div>
                <div className="header-cart">
                    <Link to={'/cart'} style={{ textDecoration: 'none' }}>
                        <img
                            src={images['icon_cart.png']}
                            alt={'icon_cart'}
                            className="button-cart"
                        />
                        <img
                            src={`${
                                count_shop === 0
                                    ? images['ellipse_for_header.png']
                                    : images['ellipse_for_header_active.png']
                            }`}
                            alt={'ellipse_for_header'}
                            className={'button-cart-count'}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ shoppingCart: { count }, favoriteCart: { favoriteItems } }) => {
    return {
        count_shop: count,
        favoriteItems: favoriteItems,
    };
};

export default connect(mapStateToProps)(Header);
