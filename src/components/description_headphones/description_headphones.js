import React, { Component } from "react";
import './description_headphones.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { fetchHeadphone, headphonesAddedToCart, headphonesAddedToFavorite, headphonesRemovedFromFavorite } from "../../actions";
import { withHeadphonesService } from "../hoc";
import { compose } from "../../utilis";
import { connect } from "react-redux";
import DescriptionHeadphonesItem from "../description_headphones_item";

const DescriptionHeadphones = ({ headphones, onAddedToCart, onAddedToFavorite, favoriteItems, onDeleteToFavorite }) => {
    const headphone = headphones[0];

    const favoriteId = favoriteItems.map((item) => item.id);

    var favoriteFlag = false;
                        
    if (favoriteId.includes(headphone.id)){
        favoriteFlag = true;
    }

    return <div className="list-main">
        <DescriptionHeadphonesItem headphone={headphone} onAddedToCart={onAddedToCart} onAddedToFavorite = {onAddedToFavorite} favoriteFlag={favoriteFlag}
        onDeleteToFavorite={onDeleteToFavorite}/>
    </div>
}; 

class DescriptionHeadphonesContainer extends Component{

    componentDidMount(){
        this.props.fetchHeadphone()
    };
    
    render() {
        const { headphones, loading, error, onAddedToCart, onAddedToFavorite, favoriteItems, onDeleteToFavorite } = this.props;

        if(loading){
            return(
                <div className="spinner-container">
                    <Spinner />
                </div>
            )
        }

        if (error) {
            return(
                <div className="spinner-container">
                    <ErrorIndicator />
                </div>
            )
        }

        return <DescriptionHeadphones headphones={headphones} onAddedToCart={onAddedToCart} onAddedToFavorite = {onAddedToFavorite} favoriteItems={favoriteItems}
        onDeleteToFavorite={onDeleteToFavorite}/>
    };
};

const mapStateToProps = ({ HeadphonesList: { headphones, loading, error }, favoriteCart: { favoriteItems } }) => {
    return { headphones, loading, error, favoriteItems };
};

const mapDispatchToProps = (dispatch, { HeadphonesStoreService, headphoneid }) => {
    return {
        fetchHeadphone: fetchHeadphone(HeadphonesStoreService, dispatch, headphoneid),
        onAddedToCart: (id) => dispatch(headphonesAddedToCart(id)),
        onAddedToFavorite: (id) => dispatch(headphonesAddedToFavorite(id)),
        onDeleteToFavorite: (id) => dispatch(headphonesRemovedFromFavorite(id))
    };
};

export default compose(
    withHeadphonesService(),
    connect(mapStateToProps, mapDispatchToProps))(DescriptionHeadphonesContainer);