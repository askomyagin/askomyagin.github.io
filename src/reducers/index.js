import updateShoppingCart from './shopping-cart';
import updateHeadphonesList from './headphones-list'
import updateFavorite from './favorite-list';


const reducer = (state, action) => {
    return{
        HeadphonesList: updateHeadphonesList(state, action),
        shoppingCart: updateShoppingCart(state, action),
        favoriteCart: updateFavorite(state, action)
    }
};


export default reducer;