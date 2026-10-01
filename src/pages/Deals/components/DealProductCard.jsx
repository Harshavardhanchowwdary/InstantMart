import {
    ShoppingCart,
    TrendingDown,
} from "lucide-react";


const DealProductCard = ({
    product,
    index = 0,
}) => {

    /*
    |--------------------------------------------------------------------------
    | DEAL PROGRESS
    |--------------------------------------------------------------------------
    | dummyProducts doesn't contain "sold".
    | Generate a stable visual value from the product id.
    |--------------------------------------------------------------------------
    */

    const soldPercentage =
        55 + (product.id?.charCodeAt?.(0) || 5) % 40;


    return (
        <article
            className="
                group
                relative
                overflow-hidden
                rounded-[16px]
                border
                border-[var(--color-border-light)]
                bg-white
                shadow-[0_3px_12px_rgba(24,51,40,0.06)]

                transition-all
                duration-300
                ease-out

                hover:-translate-y-1
                hover:border-[#ffb067]
                hover:shadow-[0_14px_30px_rgba(24,51,40,0.12)]

                animate-[dealCardIn_600ms_cubic-bezier(0.22,1,0.36,1)_both]
            "
            style={{
                animationDelay: `${index * 80}ms`,
            }}
        >

            {/* =================================================
                DISCOUNT
            ================================================== */}

            <div
                className="
                    absolute
                    left-3
                    top-3
                    z-20
                    flex
                    items-center
                    gap-1
                    rounded-full
                    bg-[var(--color-accent)]
                    px-2.5
                    py-1
                    text-[9px]
                    font-bold
                    text-white
                    shadow-[0_4px_10px_rgba(255,107,0,0.18)]
                "
            >
                <TrendingDown
                    size={10}
                    strokeWidth={2.2}
                />

                {product.discount}% OFF
            </div>


            {/* =================================================
                PRODUCT IMAGE
            ================================================== */}

            <div
                className="
                    relative
                    flex
                    h-[205px]
                    items-center
                    justify-center
                    overflow-hidden
                    bg-[#fffaf5]
                    p-6
                "
            >

                {/* Decorative circle */}

                <div
                    className="
                        absolute
                        h-[135px]
                        w-[135px]
                        rounded-full
                        border
                        border-[#ff8a00]/10
                        bg-[#ff8a00]/[0.025]
                        transition-all
                        duration-500

                        group-hover:scale-125
                        group-hover:border-[#ff8a00]/20
                    "
                />


                {/* ACTUAL PRODUCT IMAGE */}

                <img
                    src={product.image}
                    alt={product.name}
                    className="
                        relative
                        z-10
                        h-full
                        w-full
                        object-contain
                        transition-all
                        duration-500
                        ease-out

                        group-hover:scale-[1.08]
                        group-hover:-translate-y-1
                    "
                />

            </div>


            {/* =================================================
                PRODUCT CONTENT
            ================================================== */}

            <div className="p-4">

                {/* CATEGORY */}

                <p
                    className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[1px]
                        text-[var(--color-accent)]
                    "
                >
                    {product.category.replaceAll("-", " ")}
                </p>


                {/* NAME */}

                <h3
                    className="
                        mt-1
                        truncate
                        text-[14px]
                        font-semibold
                        text-[var(--color-text-primary)]
                    "
                >
                    {product.name}
                </h3>


                {/* UNIT */}

                <p
                    className="
                        mt-0.5
                        text-[10px]
                        text-[var(--color-text-secondary)]
                    "
                >
                    {product.unit}
                </p>


                {/* =================================================
                    RATING
                ================================================== */}

                <div
                    className="
                        mt-2
                        flex
                        items-center
                        gap-1.5
                    "
                >

                    <span
                        className="
                            text-[10px]
                            text-[#f59e0b]
                        "
                    >
                        ★
                    </span>

                    <span
                        className="
                            text-[10px]
                            font-medium
                            text-[var(--color-text-primary)]
                        "
                    >
                        {product.rating}
                    </span>

                    <span
                        className="
                            text-[9px]
                            text-[var(--color-text-muted)]
                        "
                    >
                        ({product.reviewCount})
                    </span>

                </div>


                {/* =================================================
                    PRICE
                ================================================== */}

                <div
                    className="
                        mt-3
                        flex
                        items-end
                        justify-between
                        gap-2
                    "
                >

                    <div>

                        <div
                            className="
                                flex
                                items-baseline
                                gap-1.5
                            "
                        >

                            <span
                                className="
                                    text-[19px]
                                    font-bold
                                    tracking-[-0.4px]
                                    text-[var(--color-text-dark)]
                                "
                            >
                                ₹{product.price}
                            </span>

                            <span
                                className="
                                    text-[10px]
                                    text-[var(--color-text-muted)]
                                    line-through
                                "
                            >
                                ₹{product.originalPrice}
                            </span>

                        </div>


                        <p
                            className="
                                mt-0.5
                                text-[8px]
                                font-medium
                                text-[var(--color-success)]
                            "
                        >
                            Save ₹
                            {product.originalPrice - product.price}
                        </p>

                    </div>


                    {/* =================================================
                        ADD TO CART
                    ================================================== */}

                    <button
                        type="button"
                        aria-label={`Add ${product.name} to cart`}
                        className="
                            group/add
                            relative
                            flex
                            h-[36px]
                            w-[36px]
                            shrink-0
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-full
                            bg-[var(--color-accent)]
                            text-white

                            shadow-[0_5px_12px_rgba(255,107,0,0.18)]

                            transition-all
                            duration-300
                            ease-out

                            hover:-translate-y-1
                            hover:scale-105
                            hover:shadow-[0_8px_16px_rgba(0,69,33,0.20)]

                            active:scale-95
                        "
                    >

                        <span
                            className="
                                absolute
                                inset-0
                                origin-left
                                scale-x-0
                                bg-[var(--color-primary)]
                                transition-transform
                                duration-300
                                ease-out

                                group-hover/add:scale-x-100
                            "
                        />

                        <ShoppingCart
                            size={15}
                            strokeWidth={1.8}
                            className="
                                relative
                                z-10
                                transition-transform
                                duration-300

                                group-hover/add:scale-110
                            "
                        />

                    </button>

                </div>


                {/* =================================================
                    DEAL PROGRESS
                ================================================== */}

                <div className="mt-4">

                    <div
                        className="
                            mb-1
                            flex
                            items-center
                            justify-between
                            text-[8px]
                        "
                    >
                        <span
                            className="
                                text-[var(--color-text-muted)]
                            "
                        >
                            Deal claimed
                        </span>

                        <span
                            className="
                                font-semibold
                                text-[var(--color-accent)]
                            "
                        >
                            {soldPercentage}%
                        </span>
                    </div>


                    <div
                        className="
                            h-[4px]
                            overflow-hidden
                            rounded-full
                            bg-[#f1f2f2]
                        "
                    >
                        <span
                            className="
                                block
                                h-full
                                rounded-full
                                bg-[var(--color-accent)]
                                transition-all
                                duration-700
                            "
                            style={{
                                width: `${soldPercentage}%`,
                            }}
                        />
                    </div>

                </div>

            </div>

        </article>
    );
};


export default DealProductCard;