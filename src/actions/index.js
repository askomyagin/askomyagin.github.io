const headphonesRequested = () => {
    return {
        type: 'FETCH_HEADPHONES_REQUEST',
    };
};

const headphonesLoaded = (newHeadphones) => {
    return {
        type: 'FETCH_HEADPHONES_SUCCESS',
        payload: newHeadphones,
    };
};

const headphonesError = (error) => {
    return {
        type: 'FETCH_HEADPHONES_FAILURE',
        payload: error,
    };
};

const fetchHeadphones = (HeadphonesStoreService, dispatch) => () => {
    dispatch(headphonesRequested());

    HeadphonesStoreService.getHeadphones()
        .then((data) => dispatch(headphonesLoaded(data)))
        .catch((err) => dispatch(headphonesError(err)));
};

const fetchHeadphone = (HeadphonesStoreService, dispatch, headphoneid) => () => {
    dispatch(headphonesRequested());
    HeadphonesStoreService.getHeadphones(headphoneid)
        .then((data) => dispatch(headphonesLoaded(data)))
        .catch((err) => dispatch(headphonesError(err)));
};

const headphonesAddedToCart = (headphonesId) => {
    return {
        type: 'HEADPHONES_ADDED_TO_CART',
        payload: headphonesId,
    };
};

const headphonesRemovedFromCart = (headphoneId) => {
    return {
        type: 'HEADPHONES_REMOVED_FROM_CART',
        payload: headphoneId,
    };
};

const allHeadphonesRemovedFromCart = () => {
    return {
        type: 'ALL_HEADPHONES_REMOVED_FROM_CART',
    };
};

const allHeadphoneRemovedFromCart = (headphoneId) => {
    return {
        type: 'ALL_HEADPHONE_REMOVED_FROM_CART',
        payload: headphoneId,
    };
};

const headphonesAddedToFavorite = (headphoneId) => {
    return {
        type: 'HEADPHONES_ADDED_TO_FAVORITE',
        payload: headphoneId,
    };
};

const headphonesRemovedFromFavorite = (headphonesId) => {
    return {
        type: 'HEADPHONES_REMOVED_FROM_FAVORITE',
        payload: headphonesId,
    };
};

export {
    fetchHeadphones,
    fetchHeadphone,
    headphonesAddedToCart,
    headphonesRemovedFromCart,
    allHeadphonesRemovedFromCart,
    headphonesAddedToFavorite,
    headphonesRemovedFromFavorite,
    allHeadphoneRemovedFromCart,
};
