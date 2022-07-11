import React from 'react';
import { HeadphonesServiceConsumer } from '../headphones-service-context';

const withHeadphonesService = () => (Wrapped) => {
    return (props) => {
        return (
            <HeadphonesServiceConsumer>
                {(HeadphonesStoreService) => {
                    return <Wrapped {...props} HeadphonesStoreService={HeadphonesStoreService} />;
                }}
            </HeadphonesServiceConsumer>
        );
    };
};

export default withHeadphonesService;
