import {
    ArrowRight,
    CheckCircle2,
    CreditCard,
    Truck,
} from "lucide-react";


const OrderSummary = ({
    order,
    total,
}) => {

    return (
        <div
            className="
                border-t
                border-[#eeeae4]
                bg-[#fcfbf9]
                px-5
                py-5
                lg:border-l
                lg:border-t-0
                sm:px-6
            "
        >

            {/* =====================================================
                TOTAL
            ====================================================== */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                "
            >

                <span
                    className="
                        text-[10px]
                        font-medium
                        text-[var(--color-text-secondary)]
                    "
                >
                    Order Total
                </span>


                <span
                    className="
                        text-[17px]
                        font-bold
                        tracking-[-0.5px]
                        text-[var(--color-text-dark)]
                    "
                >
                    ₹{total.toFixed(2)}
                </span>

            </div>


            <div
                className="
                    mt-4
                    h-px
                    bg-[#e7e3dc]
                "
            />


            {/* =====================================================
                ORDER DETAILS
            ====================================================== */}

            <div className="mt-4 space-y-3">

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        text-[10px]
                    "
                >

                    <span className="text-[#8b958f]">
                        Items
                    </span>

                    <span
                        className="
                            font-medium
                            text-[var(--color-text-dark)]
                        "
                    >
                        {order.items.length}
                    </span>

                </div>


                <div
                    className="
                        flex
                        items-center
                        justify-between
                        text-[10px]
                    "
                >

                    <span
                        className="
                            flex
                            items-center
                            gap-1.5
                            text-[#8b958f]
                        "
                    >
                        <Truck
                            size={11}
                            strokeWidth={1.7}
                        />

                        Delivery
                    </span>

                    <span
                        className="
                            font-medium
                            text-green-600
                        "
                    >
                        {order.delivery}
                    </span>

                </div>


                <div
                    className="
                        flex
                        items-center
                        justify-between
                        text-[10px]
                    "
                >

                    <span
                        className="
                            flex
                            items-center
                            gap-1.5
                            text-[#8b958f]
                        "
                    >
                        <CreditCard
                            size={11}
                            strokeWidth={1.7}
                        />

                        Payment
                    </span>

                    <span
                        className="
                            flex
                            items-center
                            gap-1
                            font-medium
                            text-[var(--color-text-dark)]
                        "
                    >
                        <CheckCircle2
                            size={11}
                            strokeWidth={2}
                            className="text-green-600"
                        />

                        {order.paymentStatus}
                    </span>

                </div>

            </div>


            {/* =====================================================
                TRACK ORDER
            ====================================================== */}

            <button
                type="button"
                className="
                    group/track
                    relative
                    mt-5
                    flex
                    h-[35px]
                    w-full
                    items-center
                    justify-center
                    gap-1.5
                    overflow-hidden
                    rounded-[9px]
                    bg-[var(--color-accent)]
                    text-[9px]
                    font-semibold
                    text-white
                    shadow-[0_5px_14px_rgba(255,107,0,0.15)]
                    transition-all
                    duration-300
                    hover:-translate-y-[1px]
                    hover:shadow-[0_8px_18px_rgba(23,37,30,0.16)]
                    active:translate-y-0
                "
            >

                <span
                    className="
                        absolute
                        inset-y-0
                        left-0
                        w-0
                        bg-[var(--color-text-dark)]
                        transition-all
                        duration-300
                        ease-out
                        group-hover/track:w-full
                    "
                />


                <span className="relative z-10">
                    Track Order
                </span>


                <ArrowRight
                    size={12}
                    strokeWidth={2}
                    className="
                        relative
                        z-10
                        transition-transform
                        duration-300
                        group-hover/track:translate-x-1
                    "
                />

            </button>

        </div>
    );
};


export default OrderSummary;