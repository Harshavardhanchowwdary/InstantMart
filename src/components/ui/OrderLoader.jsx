import {
    useEffect,
} from "react";

import "./OrderLoader.css";


const OrderLoader = ({
    duration = 1000,
    onComplete,
}) => {

    useEffect(() => {

        const timer = setTimeout(() => {

            if (onComplete) {
                onComplete();
            }

        }, duration);

        return () => clearTimeout(timer);

    }, [duration, onComplete]);


    return (
        <div className="order-loader">

            {/* =================================================
                RIPPLE BOXES
            ================================================== */}

            <div className="order-loader__box">

                <div className="order-loader__logo">
                    InstantMart
                </div>

            </div>

            <div className="order-loader__box" />
            <div className="order-loader__box" />
            <div className="order-loader__box" />
            <div className="order-loader__box" />

        </div>
    );
};


export default OrderLoader;