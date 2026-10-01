import {
    ArrowRight,
    ShieldCheck,
    Truck,
} from "lucide-react";


const CartSummary = ({
    subtotal,
    itemCount,
}) => {

    const delivery = 0;
    const total = subtotal + delivery;


    return (
        <aside
            className="
                h-fit
                rounded-[16px]
                border
                border-[#e7e5df]
                bg-white
                p-5
                shadow-[0_8px_30px_rgba(23,37,30,0.035)]
                sm:p-6
                xl:sticky
                xl:top-[85px]
            "
        >

            <div
                className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[var(--color-accent)]
                "
            >
                Order Summary
            </div>


            <h2
                className="
                    mt-1.5
                    text-[17px]
                    font-bold
                    tracking-[-0.3px]
                    text-[var(--color-text-dark)]
                "
            >
                Checkout
            </h2>


            {/* =================================================
                SUMMARY ROWS
            ================================================== */}

            <div
                className="
                    mt-6
                    space-y-4
                "
            >

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        text-[11px]
                    "
                >

                    <span
                        className="
                            text-[var(--color-text-secondary)]
                        "
                    >
                        Items ({itemCount})
                    </span>

                    <span
                        className="
                            font-medium
                            text-[var(--color-text-dark)]
                        "
                    >
                        ₹{subtotal.toLocaleString(
                            "en-IN",
                        )}
                    </span>

                </div>


                <div
                    className="
                        flex
                        items-center
                        justify-between
                        text-[11px]
                    "
                >

                    <span
                        className="
                            text-[var(--color-text-secondary)]
                        "
                    >
                        Delivery
                    </span>

                    <span
                        className="
                            font-semibold
                            text-[var(--color-primary)]
                        "
                    >
                        FREE
                    </span>

                </div>

            </div>


            <div
                className="
                    my-5
                    h-px
                    bg-[#eeeae4]
                "
            />


            {/* TOTAL */}

            <div
                className="
                    flex
                    items-end
                    justify-between
                "
            >

                <div>

                    <div
                        className="
                            text-[10px]
                            text-[var(--color-text-secondary)]
                        "
                    >
                        Total Amount
                    </div>

                    <div
                        className="
                            mt-1
                            text-[22px]
                            font-bold
                            tracking-[-0.6px]
                            text-[var(--color-text-dark)]
                        "
                    >
                        ₹{total.toLocaleString(
                            "en-IN",
                        )}
                    </div>

                </div>

                <span
                    className="
                        mb-1
                        rounded-full
                        bg-[var(--color-primary-light)]
                        px-2
                        py-1
                        text-[8px]
                        font-semibold
                        text-[var(--color-primary)]
                    "
                >
                    Free Delivery
                </span>

            </div>


            {/* =================================================
                CHECKOUT BUTTON
            ================================================== */}

            <button
                type="button"
                className="
                    group/checkout
                    relative
                    mt-6
                    flex
                    h-[45px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    rounded-[10px]
                    bg-[var(--color-primary)]
                    text-[10px]
                    font-semibold
                    text-white
                    shadow-[0_7px_18px_rgba(0,69,33,0.16)]
                    transition-all
                    duration-300
                    hover:-translate-y-[1px]
                    hover:shadow-[0_10px_24px_rgba(0,69,33,0.22)]
                    active:translate-y-0
                "
            >

                <span
                    className="
                        absolute
                        inset-y-0
                        left-0
                        z-0
                        w-0
                        bg-[var(--color-accent)]
                        transition-all
                        duration-300
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover/checkout:w-full
                    "
                />

                <span className="relative z-10">
                    Proceed to Checkout
                </span>

                <ArrowRight
                    size={13}
                    strokeWidth={1.8}
                    className="
                        relative
                        z-10
                        transition-transform
                        duration-300
                        group-hover/checkout:translate-x-1
                    "
                />

            </button>


            {/* =================================================
                TRUST INFORMATION
            ================================================== */}

            <div
                className="
                    mt-5
                    grid
                    grid-cols-2
                    gap-2
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-[9px]
                        bg-[#fafbf9]
                        px-3
                        py-2.5
                    "
                >

                    <Truck
                        size={13}
                        strokeWidth={1.7}
                        className="
                            shrink-0
                            text-[var(--color-primary)]
                        "
                    />

                    <span
                        className="
                            text-[8px]
                            leading-[1.4]
                            text-[var(--color-text-secondary)]
                        "
                    >
                        Same day
                        delivery
                    </span>

                </div>


                <div
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-[9px]
                        bg-[#fafbf9]
                        px-3
                        py-2.5
                    "
                >

                    <ShieldCheck
                        size={13}
                        strokeWidth={1.7}
                        className="
                            shrink-0
                            text-[var(--color-primary)]
                        "
                    />

                    <span
                        className="
                            text-[8px]
                            leading-[1.4]
                            text-[var(--color-text-secondary)]
                        "
                    >
                        Secure
                        checkout
                    </span>

                </div>

            </div>

        </aside>
    );
};


export default CartSummary;