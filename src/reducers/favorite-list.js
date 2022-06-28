const updateFavorite = (state, action) => {

    if (state===undefined){
        return {
            favoriteItems: [],
        }
    }

    switch (action.type) {
        case 'HEADPHONES_ADDED_TO_FAVORITE':
            return updateFavoriteOrder(state, action.payload, 1);

        case 'HEADPHONES_REMOVED_FROM_FAVORITE':
            return updateFavoriteOrder(state, action.payload, -1);
        
        default:
            return state.favoriteCart;
    }
};

const updateFavoriteCartItems = (favoriteItems, item, idx) => {

    if (item.count === 0){
        return [
            ...favoriteItems.slice(0, idx),
            ...favoriteItems.slice(idx+1)
        ];
    }
    
    if (idx === -1){
        return[
            ...favoriteItems,
            item
        ];
    };

    return[
        ...favoriteItems.slice(0, idx),
        item,
        ...favoriteItems.slice(idx+1)
    ];
};
    
const updateFavoriteOrder = (state, headphoneId, quantity)=>{

    const {HeadphonesList: {headphones}, favoriteCart:{favoriteItems}} = state;

    const headphone = headphones.find(({id}) => id === headphoneId);
    const itemIndex = favoriteItems.findIndex(({id})=> id === headphoneId);
    const item = favoriteItems[itemIndex];

    const newItem = updateFavoriteCartItem(headphone,item, quantity);

    return{
        favoriteItems: updateFavoriteCartItems(favoriteItems, newItem, itemIndex),
    };
};

const updateFavoriteCartItem = (headphone, item={}, quantity) => {

    const {
        id = headphone.id, 
        count = 0, 
        title = headphone.title} = item;
    
    if (count === 1 && quantity === 1){
        return {
            id, 
            title,
            img: headphone.img,
            oldprice: headphone.oldprice,
            discount: headphone.discount,
            price: headphone.price,
            rate: headphone.rate,
            count: count,
        }
    }

    return {
        id, 
        title,
        img: headphone.img,
        oldprice: headphone.oldprice,
        discount: headphone.discount,
        price: headphone.price,
        rate: headphone.rate,
        count: count + quantity,
    }
};

export default updateFavorite;