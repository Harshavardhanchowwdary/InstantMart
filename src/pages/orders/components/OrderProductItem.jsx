const OrderProductItem = ({
    item,
}) => {

    const product = item.product;


    const itemTotal =
        Number(product.price || 0) *
        Number(item.quantity || 0);


    return (
        <div
            className="
                group/product
                flex
                items-center
                gap-3
                rounded-[12px]
                border
                border-[#eeeae4]
                bg-[#fcfbf9]
                p-2.5
                transition-all
                duration-300
                ease-out
                hover:border-[#e5ddd4]
                hover:bg-[#fffaf5]
                hover:shadow-[0_5px_14px_rgba(23,37,30,0.04)]
            "
        >

            {/* =====================================================
                PRODUCT IMAGE
            ====================================================== */}

            <div
                className="
                    flex
                    h-[58px]
                    w-[58px]
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[9px]
                    bg-[#f2f2ef]
                "
            >

                <img
                    src={product.image}
                    alt={product.name}
                    className="
                        h-full
                        w-full
                        object-contain
                        p-1
                        transition-transform
                        duration-500
                        ease-out
                        group-hover/product:scale-110
                    "
                />

            </div>


            {/* =====================================================
                PRODUCT INFORMATION
            ====================================================== */}

            <div className="min-w-0 flex-1">

                <p
                    className="
                        truncate
                        text-[11px]
                        font-semibold
                        text-[var(--color-text-dark)]
                    "
                >
                    {product.name}
                </p>


                <p
                    className="
                        mt-1
                        text-[9px]
                        text-[var(--color-text-muted)]
                    "
                >
                    {product.unit}
                </p>


                <div
                    className="
                        mt-2
                        flex
                        items-center
                        gap-2
                    "
                >

                    <span
                        className="
                            rounded-full
                            bg-[var(--color-text-dark)]
                            px-2
                            py-[3px]
                            text-[8px]
                            font-medium
                            text-white
                        "
                    >
                        Qty {item.quantity}
                    </span>


                    {product.category && (
                        <span
                            className="
                                truncate
                                text-[9px]
                                text-[var(--color-text-muted)]
                            "
                        >
                            {product.category}
                        </span>
                    )}

                </div>

            </div>


            {/* =====================================================
                PRICE
            ====================================================== */}

            <div className="shrink-0 text-right">

                <p
                    className="
                        text-[12px]
                        font-bold
                        text-[var(--color-text-dark)]
                    "
                >
                    ₹{itemTotal.toFixed(2)}
                </p>

                {item.quantity > 1 && (
                    <p
                        className="
                            mt-1
                            text-[8px]
                            text-[var(--color-text-muted)]
                        "
                    >
                        ₹{Number(product.price).toFixed(2)} each
                    </p>
                )}

            </div>

        </div>
    );
};


export default OrderProductItem;