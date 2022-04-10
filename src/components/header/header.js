import React from 'react';
import './header.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({count}) => {

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('/src/image', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="header">
        <Link to={'/'}>
          <div className='title-site'>
              QPICK
          </div>
        </Link>
        <div className='buttons-header'>
          <div className='header-favourites'>
            <Link to={''} style={{ textDecoration: 'none' }}>
              <img src={images['icon_favourites.png']} className='button-favourites'/>
              <img src={images['ellipse_for_header.png']} className='button-favourites-count'/>
              <span className='button-favourites-count-number'>2</span>
            </Link>
          </div>
          <div className='header-cart'>
            <Link to={'/cart'} style={{ textDecoration: 'none' }}>
              <img src={images['icon_cart.png']} className='button-cart'/>
              <img src={images['ellipse_for_header.png']} className='button-cart-count'/>
              <span className='button-cart-count-number'>{count}</span>
            </Link>
          </div>
        </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { count} }) => {
  return {
    count: count
  };
};

export default connect(mapStateToProps)(Header);