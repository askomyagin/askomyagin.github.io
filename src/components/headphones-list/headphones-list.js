import React, { Component } from "react";
import { connect } from 'react-redux';
import { withHeadphonesService } from '../hoc';
import { fetchHeadphones, headphonesAddedToCart } from '../../actions';
import { compose } from '../../utilis';
import ErrorIndicator from '../error-indicator';
import { HeadphonesListItem } from "../headphones-list-item";
import './headphones-list.css';


const HeadphonesList = ({ headphones, onAddedToCart }) => {
    return (
        <div className="list-main">
            <div className="type-headphones">Наушники</div>
            <div className="headphones-list">
                {
                    headphones.map((headphone) => {
                        if (headphone.type == 'wired') {
                            return (
                                <i key={headphone.id}>
                                    <HeadphonesListItem
                                        headphone={headphone}
                                        onAddedToCart={() => onAddedToCart(headphone.id)}
                                    />
                                </i>
                            );
                        };

                    })
                }
            </div>
            <div className="type-headphones">Беспроводные наушники</div>
            <div className="headphones-list">
                {
                    headphones.map((headphone) => {
                        if (headphone.type == 'wireless') {
                            return (
                                <i key={headphone.id}>
                                    <HeadphonesListItem
                                        headphone={headphone}
                                        onAddedToCart={() => onAddedToCart(headphone.id)}
                                    />
                                </i>
                            );
                        };

                    })
                }
            </div>
        </div>

    );
};


class HeadphonesListContainer extends Component {

    componentDidMount() {
        this.props.fetchHeadphones();
    };

    render() {
        const { headphones, loading, error, onAddedToCart } = this.props;

        if(loading){
            return <div></div>
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <HeadphonesList headphones={headphones} onAddedToCart={onAddedToCart} />
    };
};

const mapStateToProps = ({ HeadphonesList: { headphones, loading, error } }) => {
    return { headphones, loading, error };
};

const mapDispatchToProps = (dispatch, { HeadphonesStoreService }) => {
    return {
        fetchHeadphones: fetchHeadphones(HeadphonesStoreService, dispatch),
        onAddedToCart: (id) => dispatch(headphonesAddedToCart(id))
    };
};

export default compose(
    withHeadphonesService(),
    connect(mapStateToProps, mapDispatchToProps)
)(HeadphonesListContainer);