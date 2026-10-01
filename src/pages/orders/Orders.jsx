import {
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    dummyCartData,
} from "../../assets/assets";

import OrdersHeader from "./components/OrdersHeader";
import OrderStatusTabs from "./components/OrderStatusTabs";
import OrderCard from "./components/OrderCard";
import OrderLoader from "../../components/ui/OrderLoader";


const Orders = () => {

    const [activeStatus, setActiveStatus] =
        useState("All Orders");

    const [loading, setLoading] =
        useState(true);


    /*
     * Initial Orders loader.
     *
     * Keeps the loader visible for 1 second
     * to give the Orders page a smooth entrance.
     */
    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };

    }, []);


    /*
     * Temporary UI order data.
     *
     * Products come directly from the existing
     * dummyCartData in assets.
     *
     * No separate ordersData.js required.
     */
    const orders = useMemo(
        () => [
            {
                id: "#ORD-98267DAC",
                date: "Apr 6, 2026",
                status: "Delivered",
                paymentStatus: "Paid",
                delivery: "Free",
                items: [
                    dummyCartData[0],
                    dummyCartData[1],
                ],
            },

            {
                id: "#ORD-967D7AD",
                date: "Apr 2, 2026",
                status: "Out for Delivery",
                paymentStatus: "Paid",
                delivery: "Free",
                items: [
                    dummyCartData[0],
                    dummyCartData[2],
                ],
            },

            {
                id: "#ORD-95482BC",
                date: "Mar 28, 2026",
                status: "Confirmed",
                paymentStatus: "Paid",
                delivery: "Free",
                items: [
                    dummyCartData[1],
                    dummyCartData[2],
                ],
            },

            {
                id: "#ORD-94126FA",
                date: "Mar 22, 2026",
                status: "Packed",
                paymentStatus: "Paid",
                delivery: "Free",
                items: [
                    dummyCartData[0],
                    dummyCartData[1],
                    dummyCartData[2],
                ],
            },
        ],
        [],
    );


    const filteredOrders = useMemo(() => {

        if (activeStatus === "All Orders") {
            return orders;
        }

        return orders.filter(
            (order) =>
                order.status === activeStatus,
        );

    }, [activeStatus, orders]);


    /*
     * Show Orders loader for the first second.
     */

    if (loading) {

        return (
            <div
                className="
                    flex
                    min-h-[70vh]
                    w-full
                    items-center
                    justify-center
                "
            >
                <OrderLoader />
            </div>
        );

    }


    return (
        <div className="w-full py-7 sm:py-8 lg:py-10">

            <OrdersHeader
                totalOrders={orders.length}
            />


            <OrderStatusTabs
                activeStatus={activeStatus}
                onStatusChange={setActiveStatus}
            />


            <div
                className="
                    mt-6
                    space-y-5
                    sm:mt-7
                "
            >

                {filteredOrders.length > 0 ? (

                    filteredOrders.map(
                        (order, index) => (
                            <OrderCard
                                key={order.id}
                                order={order}
                                index={index}
                            />
                        ),
                    )

                ) : (

                    <div
                        className="
                            flex
                            min-h-[240px]
                            flex-col
                            items-center
                            justify-center
                            rounded-[16px]
                            border
                            border-[#e7e5df]
                            bg-white
                        "
                    >

                        <div
                            className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-full
                                bg-[var(--color-accent-light)]
                                text-[var(--color-accent)]
                            "
                        >
                            🛍
                        </div>

                        <h3
                            className="
                                mt-4
                                text-[14px]
                                font-semibold
                                text-[var(--color-text-dark)]
                            "
                        >
                            No orders found
                        </h3>

                        <p
                            className="
                                mt-1
                                text-[11px]
                                text-[var(--color-text-secondary)]
                            "
                        >
                            No orders are available for this status.
                        </p>

                    </div>

                )}

            </div>


            {filteredOrders.length > 0 && (
                <div
                    className="
                        mt-7
                        flex
                        items-center
                        justify-center
                        gap-3
                        text-[10px]
                        text-[var(--color-text-muted)]
                    "
                >

                    <span className="h-px w-8 bg-[#e5e1da]" />

                    Showing {filteredOrders.length}{" "}

                    {filteredOrders.length === 1
                        ? "order"
                        : "orders"}

                    <span className="h-px w-8 bg-[#e5e1da]" />

                </div>
            )}

        </div>
    );
};


export default Orders;