import React from "react";

import {
    Heart,
    Leaf,
    ShoppingCart,
    Star,
} from "lucide-react";

import {
    useNavigate,
} from "react-router-dom";


const ProductCard = ({
    product,
    index,
    liked,
    onLike,
}) => {

    const navigate = useNavigate();


    /* =====================================================
       PRODUCT DETAILS NAVIGATION
    ===================================================== */

    const productId =
        product?.id ||
        product?._id;


    const handleProductClick = () => {

        if (!productId) {
            return;
        }

        navigate(
            `/products/${productId}`
        );

    };


    /* =====================================================
       KEYBOARD ACCESS
    ===================================================== */

    const handleCardKeyDown = (
        event
    ) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            handleProductClick();

        }

    };


    /* =====================================================
       WISHLIST
       Prevent card navigation
    ===================================================== */

    const handleLikeClick = (
        event
    ) => {

        event.stopPropagation();

        if (onLike) {
            onLike(event);
        }

    };


    /* =====================================================
       CART
       Prevent card navigation
    ===================================================== */

    const handleCartClick = (
        event
    ) => {

        event.stopPropagation();

        /*
         * Connect your cart logic here later.
         */

        console.log(
            "Add to cart:",
            product
        );

    };


    return (
        <article
            role="link"
            tabIndex={0}
            onClick={
                handleProductClick
            }
            onKeyDown={
                handleCardKeyDown
            }
            className="
                product-card
                group
                relative
                cursor-pointer
                overflow-hidden
                rounded-[16px]
                border
                border-[var(--color-border-light)]
                bg-white
                animate-[productCardReveal_500ms_cubic-bezier(0.22,1,0.36,1)_both]
            "
            style={{
                animationDelay:
                    `${Math.min(index * 45, 450)}ms`,
            }}
        >

            {/* =================================================
                CARD ACCENT
            ================================================== */}

            <div
                className="
                    product-card-accent
                    absolute
                    bottom-0
                    left-0
                    z-30
                    h-[3px]
                    w-full
                    origin-left
                    scale-x-0
                    bg-[var(--color-accent)]
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-x-100
                "
            />


            {/* =================================================
                IMAGE AREA
            ================================================== */}

            <div
                className="
                    relative
                    h-[174px]
                    overflow-hidden
                    bg-[var(--color-primary-light)]
                    sm:h-[188px]
                "
            >

                <div
                    className="
                        product-image-glow
                        absolute
                        -right-10
                        -top-10
                        h-[150px]
                        w-[150px]
                        rounded-full
                        bg-white
                        opacity-30
                        blur-3xl
                    "
                />


                <div
                    className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        h-[35%]
                        bg-gradient-to-t
                        from-[rgba(0,69,33,0.06)]
                        to-transparent
                    "
                />


                {/* =================================================
                    DISCOUNT
                ================================================== */}

                {product.discount > 0 && (
                    <div
                        className="
                            product-discount
                            absolute
                            left-3
                            top-3
                            z-20
                            rounded-[7px]
                            bg-[var(--color-accent)]
                            px-2.5
                            py-1.5
                            text-[9px]
                            font-bold
                            text-white
                            shadow-[0_5px_12px_rgba(255,107,0,0.18)]
                        "
                    >
                        {product.discount}% OFF
                    </div>
                )}


                {/* =================================================
                    WISHLIST
                ================================================== */}

                <button
                    type="button"
                    onClick={
                        handleLikeClick
                    }
                    aria-label={
                        liked
                            ? `Remove ${product.name} from wishlist`
                            : `Add ${product.name} to wishlist`
                    }
                    className={`
                        product-wishlist
                        absolute
                        right-3
                        top-3
                        z-20
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/70
                        bg-white/90
                        text-[var(--color-text-secondary)]
                        shadow-[0_5px_15px_rgba(24,51,40,0.08)]
                        backdrop-blur-sm
                        transition-all
                        duration-300
                        ${
                            liked
                                ? "bg-[var(--color-accent-light)] text-[var(--color-accent)]"
                                : ""
                        }
                    `}
                >

                    <Heart
                        size={15}
                        strokeWidth={1.7}
                        fill={
                            liked
                                ? "currentColor"
                                : "none"
                        }
                    />

                </button>


                {/* =================================================
                    PRODUCT IMAGE
                ================================================== */}

                <div
                    className="
                        product-image-frame
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        px-7
                        py-5
                    "
                >

                    <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="
                            product-image
                            relative
                            z-10
                            h-full
                            w-full
                            object-contain
                        "
                    />

                </div>


                {/* =================================================
                    IMAGE SHINE
                ================================================== */}

                <div
                    className="
                        product-image-shine
                        pointer-events-none
                        absolute
                        inset-y-0
                        -left-[80%]
                        z-20
                        w-[45%]
                        skew-x-[-18deg]
                        bg-white/30
                        blur-xl
                    "
                />


                {/* =================================================
                    ORGANIC BADGE
                ================================================== */}

                {product.isOrganic && (
                    <div
                        className="
                            absolute
                            bottom-3
                            left-3
                            z-20
                            flex
                            items-center
                            gap-1.5
                            rounded-full
                            border
                            border-white/60
                            bg-white/90
                            px-2
                            py-1
                            text-[8px]
                            font-bold
                            text-[var(--color-primary)]
                            shadow-sm
                            backdrop-blur-sm
                        "
                    >

                        <Leaf
                            size={9}
                        />

                        Organic

                    </div>
                )}

            </div>


            {/* =================================================
                PRODUCT CONTENT
            ================================================== */}

            <div
                className="
                    relative
                    p-3.5
                    sm:p-4
                "
            >

                {/* CATEGORY */}

                <div
                    className="
                        mb-1.5
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.1em]
                        text-[var(--color-text-muted)]
                    "
                >
                    {product.category
                        .split("-")
                        .join(" ")}
                </div>


                {/* PRODUCT NAME */}

                <h3
                    className="
                        product-title
                        min-h-[35px]
                        text-[13px]
                        font-bold
                        leading-[1.4]
                        tracking-[-0.15px]
                        text-[var(--color-text-dark)]
                        sm:text-[14px]
                    "
                >
                    {product.name}
                </h3>


                {/* =================================================
                    RATING
                ================================================== */}

                <div
                    className="
                        mt-2.5
                        flex
                        items-center
                        gap-2
                    "
                >

                    <span
                        className="
                            flex
                            items-center
                            gap-1
                            rounded-[6px]
                            bg-[var(--color-primary-light)]
                            px-1.5
                            py-1
                            text-[9px]
                            font-bold
                            text-[var(--color-primary)]
                        "
                    >

                        <Star
                            size={9}
                            fill="currentColor"
                        />

                        {product.rating}

                    </span>


                    <span
                        className="
                            text-[9px]
                            text-[var(--color-text-muted)]
                    "
                    >
                        {product.reviewCount}
                        {" "}
                        reviews
                    </span>

                </div>


                {/* =================================================
                    PRICE + CART
                ================================================== */}

                <div
                    className="
                        mt-3.5
                        flex
                        items-end
                        justify-between
                        gap-2
                    "
                >

                    <div
                        className="
                            min-w-0
                        "
                    >

                        <div
                            className="
                                flex
                                items-center
                                gap-1.5
                            "
                        >

                            <span
                                className="
                                    text-[16px]
                                    font-bold
                                    tracking-[-0.3px]
                                    text-[var(--color-text-dark)]
                                "
                            >
                                ₹{product.price}
                            </span>


                            <span
                                className="
                                    text-[9px]
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
                                text-[9px]
                                text-[var(--color-text-secondary)]
                            "
                        >
                            {product.unit}
                        </p>

                    </div>


                    {/* =================================================
                        ADD TO CART
                    ================================================== */}

                    <button
                        type="button"
                        onClick={
                            handleCartClick
                        }
                        aria-label={
                            `Add ${product.name} to cart`
                        }
                        className="
                            product-cart
                            flex
                            h-9
                            items-center
                            justify-center
                            gap-1.5
                            overflow-hidden
                            rounded-[9px]
                            bg-[var(--color-primary)]
                            px-2.5
                            text-white
                            shadow-[0_5px_12px_rgba(0,69,33,0.12)]
                            transition-all
                            duration-350
                            hover:bg-[var(--color-primary-dark)]
                            active:scale-95
                        "
                    >

                        <ShoppingCart
                            size={14}
                            strokeWidth={1.9}
                        />


                        <span
                            className="
                                product-cart-label
                                max-w-0
                                whitespace-nowrap
                                text-[10px]
                                font-semibold
                                opacity-0
                                transition-all
                                duration-300
                            "
                        >
                            Add
                        </span>

                    </button>

                </div>

            </div>

        </article>
    );
};


export default ProductCard;