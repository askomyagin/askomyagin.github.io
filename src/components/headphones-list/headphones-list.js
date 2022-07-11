import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withHeadphonesService } from '../hoc';
import {
    fetchHeadphones,
    headphonesAddedToCart,
    headphonesAddedToFavorite,
    headphonesRemovedFromFavorite,
} from '../../actions';
import { compose } from '../../utilis';
import ErrorIndicator from '../error-indicator';
import { HeadphonesListItem } from '../headphones-list-item';
import './headphones-list.css';
import Spinner from '../spinner';

const HeadphonesList = ({
    headphones,
    onAddedToCart,
    onAddedToFavorite,
    favoriteItems,
    onDeleteToFavorite,
}) => {
    const favoriteId = favoriteItems.map((item) => item.id);

    var favoriteFlag = false;

    return (
        <div className="list-main">
            <div className="type-headphones">Наушники</div>
            <div className="headphones-list">
                {headphones
                    .filter((headphone) => headphone.type === 'wired')
                    .map((headphone) => {
                        favoriteFlag = false;

                        if (favoriteId.includes(headphone.id)) {
                            favoriteFlag = true;
                        }

                        return (
                            <div key={headphone.id}>
                                <HeadphonesListItem
                                    headphone={headphone}
                                    onAddedToCart={() => onAddedToCart(headphone.id)}
                                    onAddedToFavorite={() => onAddedToFavorite(headphone.id)}
                                    favoriteFlag={favoriteFlag}
                                    onDeleteToFavorite={() => onDeleteToFavorite(headphone.id)}
                                />
                            </div>
                        );
                    })}
            </div>
            <div className="type-headphones">Беспроводные наушники</div>
            <div className="headphones-list">
                {headphones
                    .filter((headphone) => headphone.type === 'wireless')
                    .map((headphone) => {
                        favoriteFlag = false;

                        if (favoriteId.includes(headphone.id)) {
                            favoriteFlag = true;
                        }

                        return (
                            <i key={headphone.id}>
                                <HeadphonesListItem
                                    headphone={headphone}
                                    onAddedToCart={() => onAddedToCart(headphone.id)}
                                    onAddedToFavorite={() => onAddedToFavorite(headphone.id)}
                                    favoriteFlag={favoriteFlag}
                                    onDeleteToFavorite={() => onDeleteToFavorite(headphone.id)}
                                />
                            </i>
                        );
                    })}
            </div>
        </div>
    );
};

class HeadphonesListContainer extends Component {
    componentDidMount() {
        this.props.fetchHeadphones();
    }

    render() {
        const {
            headphones,
            loading,
            error,
            onAddedToCart,
            onAddedToFavorite,
            onDeleteToFavorite,
            favoriteItems,
        } = this.props;

        if (loading) {
            return (
                <div className="spinner-container">
                    <Spinner />
                </div>
            );
        }

        if (error) {
            return (
                <div className="spinner-container">
                    <ErrorIndicator />
                </div>
            );
        }

        return (
            <HeadphonesList
                headphones={headphones}
                onAddedToCart={onAddedToCart}
                onAddedToFavorite={onAddedToFavorite}
                favoriteItems={favoriteItems}
                onDeleteToFavorite={onDeleteToFavorite}
            />
        );
    }
}

const mapStateToProps = ({
    HeadphonesList: { headphones, loading, error },
    favoriteCart: { favoriteItems },
}) => {
    return { headphones, loading, error, favoriteItems };
};

const mapDispatchToProps = (dispatch, { HeadphonesStoreService }) => {
    return {
        fetchHeadphones: fetchHeadphones(HeadphonesStoreService, dispatch),
        onAddedToCart: (id) => dispatch(headphonesAddedToCart(id)),
        onAddedToFavorite: (id) => dispatch(headphonesAddedToFavorite(id)),
        onDeleteToFavorite: (id) => dispatch(headphonesRemovedFromFavorite(id)),
    };
};

export default compose(
    withHeadphonesService(),
    connect(mapStateToProps, mapDispatchToProps)
)(HeadphonesListContainer);
