import {
    Minus,
    Plus,
    Trash2,
} from "lucide-react";


const CartItem = ({
    item,
    index,
    onQuantityChange,
    onRemove,
}) => {

    const {
        product,
        quantity,
    } = item;


    const itemTotal =
        product.price * quantity;


    return (
        <div
            className="
                group
                min-h-[185px]
                border-b
                border-[#eeeae4]
                px-7
                py-7
                transition-colors
                duration-300
                last:border-b-0
                hover:bg-[#fdfefc]
                lg:grid
                lg:grid-cols-[minmax(360px,1fr)_150px_110px_45px]
                lg:items-center
                lg:gap-8
            "
            style={{
                animation:
                    `orderCardIn 400ms cubic-bezier(0.22,1,0.36,1) ${index * 70}ms both`,
            }}
        >

            {/* =================================================
                PRODUCT
            ================================================== */}

            <div
                className="
                    flex
                    min-w-0
                    items-center
                    gap-5
                "
            >

                <div
                    className="
                        flex
                        h-[92px]
                        w-[92px]
                        shrink-0
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-[12px]
                        bg-[#f7f7f5]
                        ring-1
                        ring-[#efeee9]
                    "
                >

                    <img
                        src={product.image}
                        alt={product.name}
                        className="
                            h-full
                            w-full
                            object-contain
                            p-2.5
                            transition-transform
                            duration-500
                            group-hover:scale-105
                        "
                    />

                </div>


                <div
                    className="
                        min-w-0
                        flex-1
                    "
                >

                    <div
                        className="
                            text-[13px]
                            font-semibold
                            leading-[1.4]
                            text-[var(--color-text-dark)]
                        "
                    >
                        {product.name}
                    </div>


                    <div
                        className="
                            mt-1.5
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.1em]
                            text-[var(--color-text-muted)]
                        "
                    >
                        {product.category}
                    </div>


                    <p
                        className="
                            mt-2
                            max-w-[340px]
                            text-[9px]
                            leading-[1.6]
                            text-[var(--color-text-secondary)]
                        "
                    >
                        {product.description}
                    </p>


                    {product.isOrganic && (
                        <span
                            className="
                                mt-2.5
                                inline-flex
                                rounded-full
                                bg-[var(--color-primary-light)]
                                px-2.5
                                py-1
                                text-[8px]
                                font-semibold
                                text-[var(--color-primary)]
                            "
                        >
                            Organic
                        </span>
                    )}

                </div>

            </div>


            {/* =================================================
                MOBILE QUANTITY + PRICE
            ================================================== */}

            <div
                className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    lg:hidden
                "
            >

                <div
                    className="
                        flex
                        items-center
                        rounded-full
                        border
                        border-[#deded8]
                        bg-white
                    "
                >

                    <button
                        type="button"
                        onClick={() =>
                            onQuantityChange(
                                product.id,
                                quantity - 1,
                            )
                        }
                        className="
                            flex
                            h-[32px]
                            w-[32px]
                            items-center
                            justify-center
                            rounded-full
                            text-[var(--color-text-secondary)]
                            transition-all
                            duration-200
                            hover:bg-[var(--color-primary-light)]
                            hover:text-[var(--color-primary)]
                        "
                    >
                        <Minus
                            size={11}
                            strokeWidth={2}
                        />
                    </button>


                    <span
                        className="
                            min-w-[28px]
                            text-center
                            text-[10px]
                            font-semibold
                            text-[var(--color-text-dark)]
                        "
                    >
                        {quantity}
                    </span>


                    <button
                        type="button"
                        onClick={() =>
                            onQuantityChange(
                                product.id,
                                quantity + 1,
                            )
                        }
                        className="
                            flex
                            h-[32px]
                            w-[32px]
                            items-center
                            justify-center
                            rounded-full
                            text-[var(--color-text-secondary)]
                            transition-all
                            duration-200
                            hover:bg-[var(--color-primary-light)]
                            hover:text-[var(--color-primary)]
                        "
                    >
                        <Plus
                            size={11}
                            strokeWidth={2}
                        />
                    </button>

                </div>


                <div
                    className="
                        text-right
                    "
                >

                    <div
                        className="
                            text-[14px]
                            font-bold
                            text-[var(--color-text-dark)]
                        "
                    >
                        ₹{itemTotal.toLocaleString(
                            "en-IN",
                        )}
                    </div>

                </div>

            </div>


            {/* =================================================
                DESKTOP QUANTITY
            ================================================== */}

            <div
                className="
                    hidden
                    justify-center
                    lg:flex
                "
            >

                <div
                    className="
                        flex
                        h-[40px]
                        items-center
                        rounded-full
                        border
                        border-[#deded8]
                        bg-white
                        px-1
                    "
                >

                    <button
                        type="button"
                        onClick={() =>
                            onQuantityChange(
                                product.id,
                                quantity - 1,
                            )
                        }
                        className="
                            flex
                            h-[32px]
                            w-[32px]
                            items-center
                            justify-center
                            rounded-full
                            text-[var(--color-text-secondary)]
                            transition-all
                            duration-200
                            hover:bg-[var(--color-primary-light)]
                            hover:text-[var(--color-primary)]
                        "
                    >
                        <Minus
                            size={11}
                            strokeWidth={2}
                        />
                    </button>


                    <span
                        className="
                            min-w-[30px]
                            text-center
                            text-[10px]
                            font-semibold
                            text-[var(--color-text-dark)]
                        "
                    >
                        {quantity}
                    </span>


                    <button
                        type="button"
                        onClick={() =>
                            onQuantityChange(
                                product.id,
                                quantity + 1,
                            )
                        }
                        className="
                            flex
                            h-[32px]
                            w-[32px]
                            items-center
                            justify-center
                            rounded-full
                            text-[var(--color-text-secondary)]
                            transition-all
                            duration-200
                            hover:bg-[var(--color-primary-light)]
                            hover:text-[var(--color-primary)]
                        "
                    >
                        <Plus
                            size={11}
                            strokeWidth={2}
                        />
                    </button>

                </div>

            </div>


            {/* =================================================
                DESKTOP PRICE
            ================================================== */}

            <div
                className="
                    hidden
                    text-right
                    lg:block
                "
            >

                <div
                    className="
                        text-[14px]
                        font-bold
                        tracking-[-0.2px]
                        text-[var(--color-text-dark)]
                    "
                >
                    ₹{itemTotal.toLocaleString(
                        "en-IN",
                    )}
                </div>

            </div>


            {/* =================================================
                DELETE
            ================================================== */}

            <div
                className="
                    hidden
                    justify-end
                    lg:flex
                "
            >

                <button
                    type="button"
                    onClick={() =>
                        onRemove(product.id)
                    }
                    title="Remove item"
                    aria-label={`Remove ${product.name}`}
                    className="
                        group/delete
                        flex
                        h-[36px]
                        w-[36px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-transparent
                        text-[#9da39f]
                        transition-all
                        duration-300
                        hover:border-[var(--color-accent-light)]
                        hover:bg-[var(--color-accent-light)]
                        hover:text-[var(--color-accent)]
                        hover:scale-105
                    "
                >

                    <Trash2
                        size={15}
                        strokeWidth={1.7}
                        className="
                            transition-transform
                            duration-300
                            group-hover/delete:rotate-6
                        "
                    />

                </button>

            </div>


            {/* =================================================
                MOBILE DELETE
            ================================================== */}

            <div
                className="
                    mt-4
                    flex
                    justify-end
                    lg:hidden
                "
            >

                <button
                    type="button"
                    onClick={() =>
                        onRemove(product.id)
                    }
                    title="Remove item"
                    aria-label={`Remove ${product.name}`}
                    className="
                        group/delete
                        flex
                        h-[34px]
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-transparent
                        px-3
                        text-[9px]
                        font-medium
                        text-[#9da39f]
                        transition-all
                        duration-300
                        hover:border-[var(--color-accent-light)]
                        hover:bg-[var(--color-accent-light)]
                        hover:text-[var(--color-accent)]
                    "
                >

                    <Trash2
                        size={13}
                        strokeWidth={1.7}
                        className="
                            transition-transform
                            duration-300
                            group-hover/delete:rotate-6
                        "
                    />

                    Remove

                </button>

            </div>

        </div>
    );
};


export default CartItem;