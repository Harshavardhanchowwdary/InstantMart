import React, {
    useMemo,
    useState,
} from "react";

import {
    useNavigate,
    useParams,
} from "react-router-dom";

import {
    ArrowLeft,
    ArrowRight,
    Check,
    ChevronRight,
    Heart,
    Minus,
    Plus,
    ShieldCheck,
    ShoppingCart,
    Star,
    Truck,
} from "lucide-react";

import {
    dummyProducts,
} from "../../assets/assets";

import DummyReviewsSection
    from "../../assets/DummyReviewsSection";


/* =========================================================
   CATEGORY LABELS
========================================================= */

const categoryLabels = {
    "fruits-vegetables":
        "Fruits & Vegetables",

    "pantry-staples":
        "Pantry Staples",

    bakery:
        "Bakery",

    beverages:
        "Beverages",

    "dairy-eggs":
        "Dairy & Eggs",

    snacks:
        "Snacks",

    "frozen-foods":
        "Frozen Foods",

    "baby-care":
        "Baby Care",
};


/* =========================================================
   PRODUCT DETAILS
========================================================= */

const ProductDetails = () => {

    const {
        id,
    } = useParams();

    const navigate =
        useNavigate();


    /* =====================================================
       PRODUCT
    ===================================================== */

    const product =
        useMemo(
            () =>
                dummyProducts.find(
                    (item) =>
                        String(
                            item.id ||
                            item._id
                        ) === String(id)
                ),
            [id]
        );


    /* =====================================================
       STATE
    ===================================================== */

    const [
        quantity,
        setQuantity,
    ] = useState(1);

    const [
        liked,
        setLiked,
    ] = useState(false);


    /* =====================================================
       RELATED PRODUCTS
    ===================================================== */

    const relatedProducts =
        useMemo(() => {

            if (!product) {
                return [];
            }

            const sameCategory =
                dummyProducts.filter(
                    (item) =>
                        (
                            item.id ||
                            item._id
                        ) !==
                        (
                            product.id ||
                            product._id
                        ) &&
                        item.category ===
                        product.category
                );

            const otherProducts =
                dummyProducts.filter(
                    (item) =>
                        (
                            item.id ||
                            item._id
                        ) !==
                        (
                            product.id ||
                            product._id
                        ) &&
                        item.category !==
                        product.category
                );

            return [
                ...sameCategory,
                ...otherProducts,
            ].slice(0, 5);

        }, [
            product,
        ]);


    /* =====================================================
       INVALID PRODUCT
    ===================================================== */

    if (!product) {

        return (

            <main
                className="
                    flex
                    min-h-[70vh]
                    items-center
                    justify-center
                    bg-[var(--color-background)]
                    px-4
                "
            >

                <div
                    className="
                        w-full
                        max-w-[420px]
                        rounded-[20px]
                        border
                        border-[var(--color-border-light)]
                        bg-white
                        p-8
                        text-center
                        shadow-[0_12px_35px_rgba(24,51,40,0.07)]
                    "
                >

                    <div
                        className="
                            mx-auto
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-[16px]
                            bg-[var(--color-primary-light)]
                            text-[var(--color-primary)]
                        "
                    >
                        🛒
                    </div>

                    <h1
                        className="
                            mt-5
                            text-xl
                            font-bold
                            text-[var(--color-text-primary)]
                        "
                    >
                        Product not found
                    </h1>

                    <p
                        className="
                            mt-2
                            text-sm
                            leading-6
                            text-[var(--color-text-secondary)]
                        "
                    >
                        The product you are looking
                        for is no longer available.
                    </p>

                    <button
                        type="button"
                        onClick={() =>
                            navigate("/products")
                        }
                        className="
                            mt-6
                            inline-flex
                            items-center
                            gap-2
                            rounded-[10px]
                            bg-[var(--color-primary)]
                            px-5
                            py-2.5
                            text-sm
                            font-semibold
                            text-white
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-[var(--color-primary-dark)]
                        "
                    >
                        <ArrowLeft
                            size={15}
                        />

                        Back to Products

                    </button>

                </div>

            </main>

        );
    }


    /* =====================================================
       VALUES
    ===================================================== */

    const productId =
        product.id ||
        product._id;

    const categoryName =
        categoryLabels[
        product.category
        ] ||
        product.category;

    const discount =
        product.discount || 0;

    const originalPrice =
        product.originalPrice ||
        product.price;

    const isInStock =
        Number(product.stock || 0) > 0;


    /* =====================================================
       QUANTITY
    ===================================================== */

    const increaseQuantity = () => {

        if (
            quantity <
            Number(product.stock || 1)
        ) {
            setQuantity(
                (current) =>
                    current + 1
            );
        }

    };


    const decreaseQuantity = () => {

        setQuantity(
            (current) =>
                Math.max(
                    1,
                    current - 1
                )
        );

    };


    /* =====================================================
       ADD TO CART
    ===================================================== */

    const handleAddToCart = () => {

        /*
         * Frontend placeholder.
         *
         * The actual cart store/API can be connected
         * later without changing this product page.
         */

        console.log(
            "Add to cart:",
            {
                productId,
                quantity,
            }
        );

    };


    return (

        <main
            className="
                min-h-screen
                overflow-hidden
                bg-[var(--color-background)]
            "
        >

            {/* =================================================
                PAGE CONTAINER
            ================================================= */}

            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1488px]
                    px-4
                    pb-14
                    pt-4

                    sm:px-6
                    sm:pt-5

                    lg:px-10
                    lg:pt-6

                    xl:px-[56px]
                "
            >

                {/* =================================================
                    BREADCRUMB
                ================================================= */}

                <div
                    className="
                        mb-4
                        flex
                        items-center
                        gap-1.5
                        overflow-x-auto
                        whitespace-nowrap
                        text-[10px]
                        text-[var(--color-text-secondary)]

                        sm:mb-5
                        sm:text-[11px]
                    "
                >

                    <button
                        type="button"
                        onClick={() =>
                            navigate("/products")
                        }
                        className="
                            transition-colors
                            duration-200
                            hover:text-[var(--color-primary)]
                        "
                    >
                        Products
                    </button>

                    <ChevronRight
                        size={12}
                        className="
                            shrink-0
                            text-[var(--color-text-muted)]
                        "
                    />

                    <span>
                        {categoryName}
                    </span>

                    <ChevronRight
                        size={12}
                        className="
                            shrink-0
                            text-[var(--color-text-muted)]
                        "
                    />

                    <span
                        className="
                            font-medium
                            text-[var(--color-text-primary)]
                        "
                    >
                        {product.name}
                    </span>

                </div>


                {/* =================================================
                    PRODUCT HERO
                ================================================= */}

                <section
                    className="
                        overflow-hidden
                        rounded-[20px]
                        border
                        border-[var(--color-border-light)]
                        bg-white
                        shadow-[0_10px_35px_rgba(24,51,40,0.055)]
                    "
                >

                    <div
                        className="
                            grid
                            grid-cols-1

                            lg:grid-cols-[1.05fr_0.95fr]
                        "
                    >

                        {/* =================================================
                            PRODUCT IMAGE
                        ================================================= */}

                        <div
                            className="
                                relative
                                flex
                                min-h-[300px]
                                items-center
                                justify-center
                                overflow-hidden
                                bg-[var(--color-primary-light)]
                                p-8

                                sm:min-h-[390px]
                                sm:p-12

                                lg:min-h-[500px]
                            "
                        >

                            {/* Soft background circle */}

                            <div
                                className="
                                    absolute
                                    left-1/2
                                    top-1/2
                                    h-[210px]
                                    w-[210px]
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    rounded-full
                                    bg-white/80
                                    blur-[1px]

                                    sm:h-[290px]
                                    sm:w-[290px]

                                    lg:h-[350px]
                                    lg:w-[350px]
                                "
                            />

                            {/* Orange accent ring */}

                            <div
                                className="
                                    absolute
                                    left-1/2
                                    top-1/2
                                    h-[220px]
                                    w-[220px]
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    rounded-full
                                    border
                                    border-dashed
                                    border-[var(--color-accent)]/30

                                    sm:h-[300px]
                                    sm:w-[300px]

                                    lg:h-[365px]
                                    lg:w-[365px]
                                "
                            />

                            {/* Discount */}

                            {discount > 0 && (

                                <div
                                    className="
                                        absolute
                                        left-5
                                        top-5
                                        z-20
                                        rounded-full
                                        bg-[var(--color-accent)]
                                        px-3
                                        py-1.5
                                        text-[10px]
                                        font-bold
                                        text-white
                                        shadow-[0_6px_15px_rgba(255,107,0,0.2)]
                                    "
                                >
                                    {discount}% OFF
                                </div>

                            )}


                            {/* Product image */}

                            <img
                                src={product.image}
                                alt={product.name}
                                className="
                                    relative
                                    z-10
                                    h-[210px]
                                    w-full
                                    max-w-[330px]
                                    object-contain
                                    drop-shadow-[0_18px_18px_rgba(24,51,40,0.14)]
                                    transition-transform
                                    duration-500
                                    ease-out

                                    hover:scale-[1.04]

                                    sm:h-[270px]

                                    lg:h-[330px]
                                "
                            />

                        </div>


                        {/* =================================================
                            PRODUCT INFORMATION
                        ================================================= */}

                        <div
                            className="
                                flex
                                flex-col
                                justify-center
                                p-6

                                sm:p-8

                                lg:p-10
                                xl:p-12
                            "
                        >

                            {/* Category */}

                            <span
                                className="
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[1.6px]
                                    text-[var(--color-accent)]
                                "
                            >
                                {categoryName}
                            </span>


                            {/* Product name */}

                            <h1
                                className="
                                    mt-2
                                    max-w-[560px]
                                    text-[26px]
                                    font-bold
                                    leading-tight
                                    tracking-[-0.7px]
                                    text-[var(--color-text-primary)]

                                    sm:text-[32px]

                                    lg:text-[38px]
                                "
                            >
                                {product.name}
                            </h1>


                            {/* Rating */}

                            <div
                                className="
                                    mt-4
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-2
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-0.5
                                    "
                                >

                                    {[
                                        1,
                                        2,
                                        3,
                                        4,
                                        5,
                                    ].map(
                                        (star) => (

                                            <Star
                                                key={star}
                                                size={14}
                                                strokeWidth={1.8}
                                                className={
                                                    star <=
                                                        Math.round(
                                                            product.rating
                                                        )
                                                        ? `
                                                            fill-[var(--color-accent)]
                                                            text-[var(--color-accent)]
                                                        `
                                                        : `
                                                            text-[var(--color-border)]
                                                        `
                                                }
                                            />

                                        )
                                    )}

                                </div>

                                <span
                                    className="
                                        text-[11px]
                                        font-semibold
                                        text-[var(--color-text-primary)]
                                    "
                                >
                                    {product.rating}
                                </span>

                                <span
                                    className="
                                        text-[11px]
                                        text-[var(--color-text-secondary)]
                                    "
                                >
                                    ({product.reviewCount} reviews)
                                </span>

                            </div>


                            {/* Description */}

                            <p
                                className="
                                    mt-4
                                    max-w-[560px]
                                    text-[13px]
                                    leading-6
                                    text-[var(--color-text-secondary)]
                                "
                            >
                                {product.description}
                            </p>


                            {/* Price */}

                            <div
                                className="
                                    mt-6
                                    flex
                                    flex-wrap
                                    items-end
                                    gap-2.5
                                "
                            >

                                <span
                                    className="
                                        text-[30px]
                                        font-bold
                                        leading-none
                                        text-[var(--color-primary)]
                                    "
                                >
                                    ₹
                                    {product.price}
                                </span>

                                {originalPrice >
                                    product.price && (

                                        <span
                                            className="
                                            pb-0.5
                                            text-sm
                                            text-[var(--color-text-muted)]
                                            line-through
                                        "
                                        >
                                            ₹
                                            {originalPrice}
                                        </span>

                                    )}

                                <span
                                    className="
                                        pb-0.5
                                        text-[11px]
                                        text-[var(--color-text-secondary)]
                                    "
                                >
                                    / {product.unit}
                                </span>

                            </div>


                            {/* Stock */}

                            <div
                                className="
                                    mt-3
                                    flex
                                    items-center
                                    gap-1.5
                                    text-[11px]
                                "
                            >

                                <span
                                    className={`
                                        h-1.5
                                        w-1.5
                                        rounded-full

                                        ${isInStock
                                            ? "bg-[var(--color-success)]"
                                            : "bg-[var(--color-error)]"
                                        }
                                    `}
                                />

                                <span
                                    className={
                                        isInStock
                                            ? "text-[var(--color-success)]"
                                            : "text-[var(--color-error)]"
                                    }
                                >
                                    {isInStock
                                        ? "In stock"
                                        : "Currently unavailable"}
                                </span>

                            </div>


                            {/* Divider */}

                            <div
                                className="
                                    my-6
                                    h-px
                                    w-full
                                    bg-[var(--color-border-light)]
                                "
                            />


                            {/* Quantity + cart */}

                            {/* =================================================
    QUANTITY + CART + WISHLIST
================================================= */}

                            <div
                                className="
        grid
        w-full
        grid-cols-[108px_minmax(0,1fr)_48px]
        items-center
        gap-2

        sm:flex
        sm:gap-3
    "
                            >

                                {/* =================================================
        QUANTITY
    ================================================= */}

                                <div
                                    className="
            flex
            h-[48px]
            w-full
            items-center
            justify-between
            rounded-[12px]
            border
            border-[var(--color-border)]
            bg-white

            sm:h-[50px]
            sm:w-[122px]
            sm:shrink-0
        "
                                >

                                    {/* DECREASE */}

                                    <button
                                        type="button"
                                        onClick={decreaseQuantity}
                                        disabled={quantity <= 1}
                                        aria-label="Decrease quantity"
                                        className="
                flex
                h-full
                w-[34px]
                items-center
                justify-center
                rounded-l-[12px]

                text-[var(--color-text-secondary)]

                transition-all
                duration-200

                hover:bg-[var(--color-primary-light)]
                hover:text-[var(--color-primary)]

                active:scale-90

                disabled:cursor-not-allowed
                disabled:opacity-40
            "
                                    >
                                        <Minus size={14} />
                                    </button>


                                    {/* QUANTITY */}

                                    <span
                                        className="
                min-w-[24px]
                text-center
                text-[14px]
                font-semibold
                text-[var(--color-text-primary)]
            "
                                    >
                                        {quantity}
                                    </span>


                                    {/* INCREASE */}

                                    <button
                                        type="button"
                                        onClick={increaseQuantity}
                                        disabled={
                                            quantity >=
                                            Number(product.stock || 1)
                                        }
                                        aria-label="Increase quantity"
                                        className="
                flex
                h-full
                w-[34px]
                items-center
                justify-center
                rounded-r-[12px]

                text-[var(--color-text-secondary)]

                transition-all
                duration-200

                hover:bg-[var(--color-primary-light)]
                hover:text-[var(--color-primary)]

                active:scale-90

                disabled:cursor-not-allowed
                disabled:opacity-40
            "
                                    >
                                        <Plus size={14} />
                                    </button>

                                </div>


                                {/* =================================================
        ADD TO CART
    ================================================= */}

                                <button
                                    type="button"
                                    disabled={!isInStock}
                                    onClick={handleAddToCart}
                                    aria-label={`Add ${product.name} to cart`}
                                    className="
            group
            flex
            h-[48px]
            min-w-0
            w-full
            items-center
            justify-center
            gap-2

            rounded-[12px]

            bg-[var(--color-primary)]
            px-3

            text-[13px]
            font-semibold
            text-white

            shadow-[0_8px_20px_rgba(0,69,33,0.14)]

            transition-all
            duration-300
            ease-out

            hover:-translate-y-0.5
            hover:bg-[var(--color-primary-dark)]
            hover:shadow-[0_12px_26px_rgba(0,69,33,0.20)]

            active:translate-y-0
            active:scale-[0.98]

            disabled:cursor-not-allowed
            disabled:opacity-50

            sm:h-[50px]
            sm:flex-1
            sm:px-5
        "
                                >

                                    <ShoppingCart
                                        size={17}
                                        strokeWidth={1.9}
                                        className="
                shrink-0
                transition-transform
                duration-300
                group-hover:scale-110
            "
                                    />

                                    <span
                                        className="
                truncate
                whitespace-nowrap
            "
                                    >
                                        Add to Cart
                                    </span>

                                </button>


                                {/* =================================================
        WISHLIST
    ================================================= */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        setLiked(
                                            (current) => !current
                                        )
                                    }
                                    aria-label={
                                        liked
                                            ? "Remove from wishlist"
                                            : "Add to wishlist"
                                    }
                                    className={`
            flex
            h-[48px]
            w-[48px]
            shrink-0
            items-center
            justify-center

            rounded-[12px]

            border

            transition-all
            duration-300
            ease-out

            active:scale-95

            sm:h-[50px]
            sm:w-[50px]

            ${liked
                                            ? `
                        border-[var(--color-accent)]
                        bg-[var(--color-accent-light)]
                        text-[var(--color-accent)]
                    `
                                            : `
                        border-[var(--color-border)]
                        bg-white
                        text-[var(--color-text-secondary)]
                    `
                                        }

            hover:-translate-y-0.5
            hover:border-[var(--color-accent)]
            hover:bg-[var(--color-accent-light)]
            hover:text-[var(--color-accent)]
        `}
                                >

                                    <Heart
                                        size={18}
                                        strokeWidth={1.8}
                                        className={
                                            liked
                                                ? "fill-current"
                                                : ""
                                        }
                                    />

                                </button>

                            </div>


                            {/* =================================================
                                SERVICE POINTS
                            ================================================= */}

                            <div
                                className="
                                    mt-7
                                    grid
                                    grid-cols-1
                                    gap-3

                                    sm:grid-cols-3
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        rounded-[10px]
                                        bg-[var(--color-primary-light)]
                                        px-3
                                        py-2.5
                                    "
                                >

                                    <Truck
                                        size={15}
                                        className="
                                            shrink-0
                                            text-[var(--color-primary)]
                                        "
                                    />

                                    <span
                                        className="
                                            text-[10px]
                                            font-medium
                                            text-[var(--color-text-primary)]
                                        "
                                    >
                                        Fast delivery
                                    </span>

                                </div>


                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        rounded-[10px]
                                        bg-[var(--color-primary-light)]
                                        px-3
                                        py-2.5
                                    "
                                >

                                    <ShieldCheck
                                        size={15}
                                        className="
                                            shrink-0
                                            text-[var(--color-primary)]
                                        "
                                    />

                                    <span
                                        className="
                                            text-[10px]
                                            font-medium
                                            text-[var(--color-text-primary)]
                                        "
                                    >
                                        Quality checked
                                    </span>

                                </div>


                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        rounded-[10px]
                                        bg-[var(--color-primary-light)]
                                        px-3
                                        py-2.5
                                    "
                                >

                                    <Check
                                        size={15}
                                        className="
                                            shrink-0
                                            text-[var(--color-primary)]
                                        "
                                    />

                                    <span
                                        className="
                                            text-[10px]
                                            font-medium
                                            text-[var(--color-text-primary)]
                                        "
                                    >
                                        Fresh selection
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    SIMPLE PRODUCT INFORMATION
                ================================================= */}

                <section
                    className="
                        mt-8
                        rounded-[18px]
                        border
                        border-[var(--color-border-light)]
                        bg-white
                        p-5
                        shadow-[0_8px_25px_rgba(24,51,40,0.04)]

                        sm:p-7
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-3
                        "
                    >

                        <span
                            className="
                                h-7
                                w-1
                                rounded-full
                                bg-[var(--color-accent)]
                            "
                        />

                        <h2
                            className="
                                text-lg
                                font-bold
                                text-[var(--color-text-primary)]
                            "
                        >
                            About this product
                        </h2>

                    </div>


                    <div
                        className="
                            mt-5
                            grid
                            grid-cols-2
                            gap-3

                            sm:grid-cols-4
                        "
                    >

                        <InfoItem
                            label="Category"
                            value={categoryName}
                        />

                        <InfoItem
                            label="Pack size"
                            value={product.unit}
                        />

                        <InfoItem
                            label="Availability"
                            value={
                                isInStock
                                    ? "In stock"
                                    : "Out of stock"
                            }
                        />

                        <InfoItem
                            label="Organic"
                            value={
                                product.isOrganic
                                    ? "Yes"
                                    : "No"
                            }
                        />

                    </div>

                </section>


                {/* =================================================
                    REVIEWS
                ================================================= */}

                <DummyReviewsSection
                    product={product}
                />


                {/* =================================================
                    RELATED PRODUCTS
                ================================================= */}

                <section
                    className="
                        mt-10
                    "
                >

                    <div
                        className="
                            mb-5
                            flex
                            items-end
                            justify-between
                            gap-4
                        "
                    >

                        <div>

                            <span
                                className="
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[1.6px]
                                    text-[var(--color-accent)]
                                "
                            >
                                Keep shopping
                            </span>

                            <h2
                                className="
                                    mt-1
                                    text-xl
                                    font-bold
                                    tracking-[-0.3px]
                                    text-[var(--color-text-primary)]

                                    sm:text-2xl
                                "
                            >
                                Related Products
                            </h2>

                        </div>


                        <button
                            type="button"
                            onClick={() =>
                                navigate(
                                    "/products"
                                )
                            }
                            className="
                                hidden
                                items-center
                                gap-1
                                text-[11px]
                                font-semibold
                                text-[var(--color-primary)]
                                transition-all
                                duration-300
                                hover:gap-2

                                sm:flex
                            "
                        >
                            View all

                            <ArrowRight
                                size={14}
                            />

                        </button>

                    </div>


                    <div
                        className="
                            grid
                            grid-cols-2
                            gap-3

                            sm:grid-cols-3
                            sm:gap-4

                            lg:grid-cols-5
                        "
                    >

                        {relatedProducts.map(
                            (
                                relatedProduct,
                                index
                            ) => (

                                <RelatedProductCard
                                    key={
                                        relatedProduct.id ||
                                        relatedProduct._id
                                    }
                                    product={
                                        relatedProduct
                                    }
                                    index={index}
                                    onClick={() =>
                                        navigate(
                                            `/products/${relatedProduct.id ||
                                            relatedProduct._id
                                            }`
                                        )
                                    }
                                />

                            )
                        )}

                    </div>


                    {/* Mobile view all */}

                    <button
                        type="button"
                        onClick={() =>
                            navigate(
                                "/products"
                            )
                        }
                        className="
                            mx-auto
                            mt-5
                            flex
                            items-center
                            gap-1
                            text-[11px]
                            font-semibold
                            text-[var(--color-primary)]

                            sm:hidden
                        "
                    >
                        View all products

                        <ArrowRight
                            size={13}
                        />

                    </button>

                </section>

            </div>

        </main>
    );
};


/* =========================================================
   INFO ITEM
========================================================= */

const InfoItem = ({
    label,
    value,
}) => {

    return (

        <div
            className="
                rounded-[11px]
                bg-[var(--color-primary-light)]
                px-3
                py-3
            "
        >

            <span
                className="
                    block
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.8px]
                    text-[var(--color-text-secondary)]
                "
            >
                {label}
            </span>

            <span
                className="
                    mt-1
                    block
                    truncate
                    text-[11px]
                    font-semibold
                    text-[var(--color-text-primary)]
                "
            >
                {value}
            </span>

        </div>

    );
};


/* =========================================================
   RELATED PRODUCT CARD
========================================================= */

const RelatedProductCard = ({
    product,
    index,
    onClick,
}) => {

    return (

        <button
            type="button"
            onClick={onClick}
            className="
                group
                relative
                overflow-hidden
                rounded-[15px]
                border
                border-[var(--color-border-light)]
                bg-white
                text-left
                shadow-[0_5px_18px_rgba(24,51,40,0.045)]
                transition-all
                duration-300
                ease-out

                hover:-translate-y-1
                hover:border-[var(--color-primary)]
                hover:shadow-[0_12px_28px_rgba(24,51,40,0.09)]

                animate-[productCardReveal_500ms_cubic-bezier(0.22,1,0.36,1)_both]
            "
            style={{
                animationDelay:
                    `${index * 70}ms`,
            }}
        >

            {/* Discount */}

            {product.discount > 0 && (

                <span
                    className="
                        absolute
                        left-2.5
                        top-2.5
                        z-10
                        rounded-full
                        bg-[var(--color-accent)]
                        px-2
                        py-1
                        text-[8px]
                        font-bold
                        text-white
                    "
                >
                    {product.discount}%
                </span>

            )}


            {/* Image */}

            <div
                className="
                    flex
                    h-[150px]
                    items-center
                    justify-center
                    overflow-hidden
                    bg-[#fffaf5]
                    p-5

                    sm:h-[165px]
                "
            >

                <img
                    src={product.image}
                    alt={product.name}
                    className="
                        h-full
                        w-full
                        object-contain
                        transition-transform
                        duration-400
                        ease-out

                        group-hover:scale-105
                    "
                />

            </div>


            {/* Content */}

            <div
                className="
                    p-3
                "
            >

                <p
                    className="
                        truncate
                        text-[10px]
                        text-[var(--color-text-secondary)]
                    "
                >
                    {product.category}
                </p>

                <h3
                    className="
                        mt-1
                        line-clamp-2
                        min-h-[30px]
                        text-[12px]
                        font-semibold
                        leading-4
                        text-[var(--color-text-primary)]
                    "
                >
                    {product.name}
                </h3>


                {/* Rating */}

                <div
                    className="
                        mt-2
                        flex
                        items-center
                        gap-1
                    "
                >

                    <Star
                        size={11}
                        className="
                            fill-[var(--color-accent)]
                            text-[var(--color-accent)]
                        "
                    />

                    <span
                        className="
                            text-[9px]
                            font-semibold
                            text-[var(--color-text-primary)]
                        "
                    >
                        {product.rating}
                    </span>

                </div>


                {/* Price */}

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
                            text-[13px]
                            font-bold
                            text-[var(--color-primary)]
                        "
                    >
                        ₹
                        {product.price}
                    </span>

                    {product.originalPrice >
                        product.price && (

                            <span
                                className="
                                text-[9px]
                                text-[var(--color-text-muted)]
                                line-through
                            "
                            >
                                ₹
                                {product.originalPrice}
                            </span>

                        )}

                </div>

            </div>

        </button>

    );
};


export default ProductDetails;