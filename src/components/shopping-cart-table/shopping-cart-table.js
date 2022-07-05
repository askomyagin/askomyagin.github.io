import React, { useState, useCallback } from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { headphonesRemovedFromCart, headphonesAddedToCart, allHeadphonesRemovedFromCart } from '../../actions';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

  function importAll(r) {
    let images = {};
    r.keys().map((item) => images[item.replace('./', '')] = r(item) );
    return images;
  }
  const images = importAll(require.context('/src/image', false, /\.(png|jpe?g|svg)$/));
  const [emptyShopOrder, setEmptyShopOrder] = useState(false); 

  const handleModalOpen = useCallback(() => {
    setEmptyShopOrder(true);
    setTimeout(() => {
      setEmptyShopOrder(false);
    }, 3500);
  }, []);


  const renderCard = (item) => {
    const { id, title, count, img, price, total } = item;
    return (
      <div className='shop-card'>
        <div className='card-image'>
          <img src={images[img]} alt={img} width='147px' height='136px' />
        </div>
        <div className='shop-info-item'>
          <div className='shop-title-item'>
            {title}
          </div>
          <div className='shop-price-item'>
            {price}₽
          </div>
        </div>
        <div className='button-delete'>
          <img src={images['Button_Delete.png']} alt={'Button_Delete'} width='20px' height='17px' onClick={() => onDelete(id)}/>
        </div>
        <div className='count-items'>
          <div className='button-minus'>
            <img src={images['base_button_plus_and_minus.png']} alt={'base_button_plus_and_minus'} className='base_button' onClick={() => onDecrease(id)}/>
            <img src={images['minus.png']} alt={'minus'} className='button-minus-item' onClick={() => onDecrease(id)}/>
          </div>
          <div className='shop-count-item'>
            {count}
          </div>
          <div className='button-plus'>
            <img src={images['base_button_plus_and_minus.png']} alt={'base_button_plus_and_minus'}  className='base_button' onClick={() => onIncrease(id)}/>
            <img src={images['plus.png']} alt={'plus'} className='button-plus-item' onClick={() => onIncrease(id)}/>
          </div>
        </div>
        <div className='shop-total-item'>
          {total}₽
        </div>
      </div>

    )
  };

  return (
    <div className="shopping-cart">
      <div className='shop-title-cart'>Корзина</div>
      <div className='shop-card-and-total'>
        <div className='thing-in-favorite'>
          {
            items.length > 0 ?
              <div>
                {
                  items.map(item => {
                    return(
                      <div key={item.id}>
                        {renderCard(item)}
                      </div>
                    )
                  })
                }
              </div> : 
              <div className='shop-card'>
                <div className='empty-cart'>В корзине пока нет товаров</div>
                <Link to={'/'}>
                  <button className='empty-cart-button'>
                    <div className='empty-cart-button-text'>
                      Вернуться в магазин
                    </div>
                  </button>
                </Link>
              </div>
          }
        </div>

        <div className="total">
          <div className='text-total'>
            ИТОГО
          </div>
          <div className='total-price'>
            ₽ {total}
          </div>
          
          {
            items.length > 0 ? 
            <Link to={'/order'}>
              <button className='place-order'>
                <div className='text-place-order'>
                  Перейти к оформлению
                </div>
              </button>
            </Link>
            :
            <div>
              <button className='place-order'  onClick={handleModalOpen}>
                <div className='text-place-order'>
                  Перейти к оформлению
                </div>
              </button>
              {
                emptyShopOrder && <div className='empty-shop-order'>
                  В корзине пока нет предметов!
                </div>
              }
            </div>
          
          }
        </div>
      </div>

    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
  onIncrease: headphonesAddedToCart,
  onDecrease: headphonesRemovedFromCart,
  onDelete: allHeadphonesRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);