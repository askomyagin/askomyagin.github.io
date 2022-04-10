import updateShoppingCart from './shopping-cart';
import updateHeadphonesList from './headphones-list'


const reducer = (state, action) => {
    return{
        HeadphonesList: updateHeadphonesList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
};


export default reducer;