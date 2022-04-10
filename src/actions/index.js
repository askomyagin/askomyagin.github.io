const headphonesRequested = () => {
    return{
        type: 'FETCH_HEADPHONES_REQUEST'
    };
};

const headphonesLoaded = (newHeadphones) => {
    return{
        type: 'FETCH_HEADPHONES_SUCCESS',
        payload: newHeadphones
    };
};

const headphonesError = (error) => {
    return{
        type: 'FETCH_HEADPHONES_FAILURE',
        payload: error
    }
}

const fetchHeadphones = (HeadphonesStoreService, dispatch) => () => {

    dispatch(headphonesRequested());

    HeadphonesStoreService.getHeadphones()
        .then((data)=>dispatch(headphonesLoaded(data)))
        .catch((err) => dispatch(headphonesError(err)));
};

const headphonesAddedToCart = (headphonesId) => {
    return{
        type: 'HEADPHONES_ADDED_TO_CART',
        payload: headphonesId
    };
};

const headphonesRemovedFromCart = (headphonesId) => {
    return{
        type: 'HEADPHONES_REMOVED_FROM_CART',
        payload: headphonesId
    };
};

const allHeadphonesRemovedFromCart = (headphonesId) => {
    return{
        type: 'ALL_HEADPHONES_REMOVED_FROM_CART',
        payload: headphonesId
    };
};

export {
    fetchHeadphones,
    headphonesAddedToCart,
    headphonesRemovedFromCart,
    allHeadphonesRemovedFromCart
};