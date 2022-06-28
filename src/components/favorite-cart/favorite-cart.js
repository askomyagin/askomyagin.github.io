import React from "react";
import { headphonesRemovedFromFavorite, headphonesAddedToCart } from "../../actions";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './favorite-cart.css';


const FavoriteCart = ({items, onDeleteFromFavorite, onAddedToCart}) => {

  function importAll(r) {
    let images = {};
    r.keys().map((item) => images[item.replace('./', '')] = r(item) );
    return images;
  }
        
    const images = importAll(require.context('/src/image', false, /\.(png|jpe?g|svg)$/));

  const renderFavoriteCard = (item) => {

    function makePrice(price) {
      if (price !== '') {
          price += '₽'
      }
      return price;
  }

  function makeDiscount(discount) {
      if (discount !== '') {
          discount = '-' + discount + '%'
      }
      return discount;
  }

  const { id, discount, img, oldprice, price, rate, title} = item;
  const oldprice_new = makePrice(oldprice);
  const discount_new = makeDiscount(discount);
    
  return (
    <div className='favorite-card'>
      <div className="headphone-favorite-cart-image">
        <img src={images[img]} alt={img}/>
      </div>
      <div className="description-favorite-cart-item">
        <div className="title-favorite-item">
          {title}
        </div>
        <div className="favorite-rate-and-price">
          <div className="headphone-favorite-rate">
              <div className="rate-favorite-item-vector">
                  ★
              </div>
              <div className="rate-favorite-item">
                {rate}
              </div>
          </div>
          <div className="favorite-price-and-discount">
            <div className={`${discount_new ? 'price-favorite-with-discount' : 'favorite-price'}`}>
              {price}₽
            </div>
            {
              discount_new && <div className="favorite-discount">
                {discount_new}
              </div>
            }
          </div>
          <div className="favorite-old-price">
            {oldprice_new}
          </div>
        </div>  
        <div className="add-favorite-in-shop">
          <div className="favorite-button-buy">
            <button className="favorite-buy" type="submit" onClick={() => onAddedToCart(id)}>
                <span>Купить</span>   
            </button>
          </div>
        </div>      
      </div>
      <div className='button-delete'>
        <img src={images['Button_Delete.png']} alt={'Button_Delete'} width='20px' height='17px' onClick={() => onDeleteFromFavorite(id)}/>
      </div>
    </div>
    )
  };

    return (
      <div className="favorite-cart">
      <div className='favorite-title-cart'>Избранное</div>
        <div className='favorite-cart-all'>
          <div className='thing-in-favorite'>
            {
              items.length > 0 ?
                <div>
                  {
                    items.map(item => {
                      return(
                        <div key={item.id}>
                          {renderFavoriteCard(item)}
                        </div>
                      )
                    })
                  }
                </div> : 
                <div className='favorite-card' style={{height: "200px"}}>
                  <div className='empty-favorite-cart'>В избранном пока нет товаров</div>
                  <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <div className="favorite-button-container">
                      <button className='empty-favorite-cart-button'>
                        <div className='empty-favorite-cart-button-text'>
                          Вернуться в магазин
                        </div>
                      </button>
                    </div>
                  </Link>
                </div>
            }
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = ({ favoriteCart: { favoriteItems} }) => {
    return {
      items: favoriteItems
    };
  };
  
  const mapDispatchToProps = {
        onAddedToCart: headphonesAddedToCart,
        onDeleteFromFavorite: headphonesRemovedFromFavorite
};
  
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCart);

