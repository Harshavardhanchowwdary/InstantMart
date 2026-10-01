import {
    Package,
    ShoppingBag,
} from "lucide-react";


const OrdersHeader = ({
    totalOrders,
}) => {

    return (
        <div
            className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-end
                sm:justify-between
            "
        >

            {/* =====================================================
                TITLE
            ====================================================== */}

            <div>

                <div
                    className="
                        mb-2
                        flex
                        items-center
                        gap-2
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[var(--color-accent)]
                    "
                >
                    <ShoppingBag
                        size={13}
                        strokeWidth={2}
                    />

                    Order History
                </div>


                <h1
                    className="
                        text-[24px]
                        font-bold
                        leading-none
                        tracking-[-0.7px]
                        text-[var(--color-text-dark)]
                        sm:text-[28px]
                    "
                >
                    My Orders
                </h1>


                <p
                    className="
                        mt-2
                        max-w-[500px]
                        text-[11px]
                        leading-[1.7]
                        text-[var(--color-text-secondary)]
                        sm:text-[12px]
                    "
                >
                    Track your purchases, check delivery
                    status, and view your order details.
                </p>

            </div>


            {/* =====================================================
                ORDER COUNT
            ====================================================== */}

            <div
                className="
                    flex
                    w-fit
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#e7e5df]
                    bg-white
                    px-3.5
                    py-2
                    shadow-[0_3px_12px_rgba(23,37,30,0.04)]
                "
            >

                <span
                    className="
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-full
                        bg-[var(--color-accent-light)]
                        text-[var(--color-accent)]
                    "
                >
                    <Package
                        size={11}
                        strokeWidth={2}
                    />
                </span>


                <span
                    className="
                        text-[10px]
                        font-medium
                        text-[var(--color-text-secondary)]
                    "
                >
                    {totalOrders} Orders
                </span>

            </div>

        </div>
    );
};


export default OrdersHeader;