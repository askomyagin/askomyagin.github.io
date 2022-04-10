
const updateShoppingCart = (state, action) => {

    if (state===undefined){
        return {
            cartItems: [],
            orderTotal: 0,
            count:0
        }
    }

    switch (action.type) {
        case 'HEADPHONES_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);

        case 'HEADPHONES_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1);

        case 'ALL_HEADPHONES_REMOVED_FROM_CART':
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);
        
        default:
            return state.shoppingCart;
    }
};
const updateCartItems = (cartItems, item, idx) => {

if (item.count === 0){
    return [
        ...cartItems.slice(0, idx),
        ...cartItems.slice(idx+1)
    ];
}

    if (idx === -1){
        return[
            ...cartItems,
            item
        ];
    };
    return[
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx+1)
    ];
};

const updateOrderTotal = (orderTotal, newItem, quantity) =>{
    return orderTotal+ newItem.price * quantity;    
}

const updateCount = (count, quantity) =>{
    return count + quantity;    
}

const updateOrder = (state, headphoneId, quantity)=>{

    const {HeadphonesList: {headphones}, shoppingCart:{cartItems, orderTotal, count}} = state;

    const headphone = headphones.find(({id}) => id === headphoneId);
    const itemIndex = cartItems.findIndex(({id})=> id === headphoneId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(headphone,item, quantity);

    return{
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        orderTotal: updateOrderTotal(orderTotal, newItem, quantity),
        count: updateCount(count, quantity)
    };
};

const updateCartItem = (headphone, item={}, quantity) => {

    const {
        id = headphone.id, 
        count = 0, 
        img = '',
        price = 0,
        title = headphone.title, 
        total = 0} = item;

    return {
        id, 
        title,
        img: headphone.img,
        price: headphone.price,
        count: count + quantity,
        total: total + quantity * headphone.price
    }
};

export default updateShoppingCart;