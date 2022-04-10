const updateHeadphonesList = (state, action) => {

    if (state === undefined){
        return {
            headphones: [],
            loading: true,
            error: null
        };
    }
    switch(action.type){
        case 'FETCH_HEADPHONES_REQUEST':
            return{
                headphones: [],
                loading:true,
                error: null,
            };
        case 'FETCH_HEADPHONES_SUCCESS':
            return{
                headphones: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_HEADPHONES_FAILURE':
            return{
                headphones: [],
                loading: false,
                error: action.payload
            };
        default: 
            return state.HeadphonesList;
    }
};

export default updateHeadphonesList;