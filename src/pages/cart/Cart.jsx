import {
    useEffect,
    useMemo,
    useState,
} from "react";

import toast from "react-hot-toast";

import {
    dummyCartData,
} from "../../assets/assets";

import OrderLoader from "../../components/ui/OrderLoader";

import CartHeader from "./components/CartHeader";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";


const Cart = () => {

    const [cartItems, setCartItems] =
        useState(() =>
            dummyCartData.map((item) => ({
                ...item,
            })),
        );

    const [loading, setLoading] =
        useState(true);


    /* =========================================================
       INITIAL LOADER
    ========================================================= */

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);

    }, []);


    /* =========================================================
       SUBTOTAL
    ========================================================= */

    const subtotal = useMemo(
        () =>
            cartItems.reduce(
                (total, item) =>
                    total +
                    item.product.price *
                    item.quantity,
                0,
            ),
        [cartItems],
    );


    /* =========================================================
       QUANTITY UPDATE
    ========================================================= */

    const handleQuantityChange = (
        productId,
        quantity,
    ) => {

        const currentItem = cartItems.find(
            (item) =>
                item.product.id === productId,
        );

        if (!currentItem) {
            return;
        }


        /* =========================================================
           REMOVE WHEN QUANTITY REACHES ZERO
        ========================================================= */

        if (quantity <= 0) {

            handleRemove(productId);

            return;
        }


        /* =========================================================
           UPDATE QUANTITY
        ========================================================= */

        setCartItems((previous) =>
            previous.map((item) =>
                item.product.id === productId
                    ? {
                        ...item,
                        quantity,
                    }
                    : item,
            ),
        );


        /* =========================================================
           QUANTITY TOAST
        ========================================================= */

        if (quantity > currentItem.quantity) {

            toast.success(
                `${currentItem.product.name} quantity increased to ${quantity}`,
            );

        } else if (
            quantity < currentItem.quantity
        ) {

            toast.success(
                `${currentItem.product.name} quantity decreased to ${quantity}`,
            );

        }

    };


    /* =========================================================
       REMOVE ITEM
    ========================================================= */

    const handleRemove = (productId) => {

        const removedItem =
            cartItems.find(
                (item) =>
                    item.product.id ===
                    productId,
            );

        setCartItems((previous) =>
            previous.filter(
                (item) =>
                    item.product.id !==
                    productId,
            ),
        );

        toast.success(
            removedItem
                ? `${removedItem.product.name} removed from cart`
                : "Item removed from cart",
        );
    };


    /* =========================================================
       LOADER
    ========================================================= */

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


    /* =========================================================
       EMPTY CART
    ========================================================= */

    if (cartItems.length === 0) {

        return (
            <div
                className="
                    flex
                    min-h-[calc(100vh-65px)]
                    w-full
                    items-center
                    justify-center
                    px-4
                    py-10
                "
            >

                <div
                    className="
                        flex
                        max-w-[420px]
                        flex-col
                        items-center
                        text-center
                    "
                >

                    <div
                        className="
                            flex
                            h-[76px]
                            w-[76px]
                            items-center
                            justify-center
                            rounded-full
                            bg-[var(--color-accent-light)]
                            text-[32px]
                        "
                    >
                        🛒
                    </div>

                    <h2
                        className="
                            mt-5
                            text-[20px]
                            font-bold
                            tracking-[-0.4px]
                            text-[var(--color-text-dark)]
                        "
                    >
                        Your cart is empty
                    </h2>

                    <p
                        className="
                            mt-2
                            text-[11px]
                            leading-[1.7]
                            text-[var(--color-text-secondary)]
                        "
                    >
                        Looks like you haven't added
                        anything to your cart yet.
                    </p>

                    <button
                        type="button"
                        onClick={() => {
                            window.location.href =
                                "/InstantMart/products";
                        }}
                        className="
                            mt-6
                            h-[40px]
                            rounded-[10px]
                            bg-[var(--color-primary)]
                            px-6
                            text-[10px]
                            font-semibold
                            text-white
                            shadow-[0_6px_16px_rgba(0,69,33,0.14)]
                            transition-all
                            duration-300
                            hover:-translate-y-[1px]
                            hover:bg-[var(--color-primary-dark)]
                        "
                    >
                        Continue Shopping
                    </button>

                </div>

            </div>
        );
    }


    return (
        <div
            className="
                w-full
                min-h-[calc(100vh-65px)]
                py-7
                sm:py-8
                lg:py-10
            "
        >

            <CartHeader
                itemCount={cartItems.length}
            />


            <div
                className="
                    mt-7
                    grid
                    grid-cols-1
                    gap-6
                    xl:grid-cols-[minmax(0,1fr)_340px]
                    xl:gap-7
                "
            >

                {/* =================================================
                    CART ITEMS
                ================================================== */}

                <section
                    className="
                        overflow-hidden
                        rounded-[16px]
                        border
                        border-[#e7e5df]
                        bg-white
                        shadow-[0_8px_30px_rgba(23,37,30,0.035)]
                    "
                >

                    {/* DESKTOP HEADER */}

                    <div
                        className="
                            hidden
                            min-h-[43px]
                            border-b
                            border-[#eeeae4]
                            bg-[#fcfbf9]
                            px-7
                            lg:grid
                            lg:grid-cols-[minmax(360px,1fr)_150px_110px_45px]
                            lg:items-center
                            lg:gap-8
                        "
                    >

                        <span
                            className="
                                text-[8px]
                                font-semibold
                                uppercase
                                tracking-[0.22em]
                                text-[var(--color-text-secondary)]
                            "
                        >
                            Product
                        </span>

                        <span
                            className="
                                text-center
                                text-[8px]
                                font-semibold
                                uppercase
                                tracking-[0.22em]
                                text-[var(--color-text-secondary)]
                            "
                        >
                            Quantity
                        </span>

                        <span
                            className="
                                text-right
                                text-[8px]
                                font-semibold
                                uppercase
                                tracking-[0.22em]
                                text-[var(--color-text-secondary)]
                            "
                        >
                            Price
                        </span>

                        <span />

                    </div>


                    <div>
                        {cartItems.map(
                            (item, index) => (
                                <CartItem
                                    key={
                                        item.product.id
                                    }
                                    item={item}
                                    index={index}
                                    onQuantityChange={
                                        handleQuantityChange
                                    }
                                    onRemove={
                                        handleRemove
                                    }
                                />
                            ),
                        )}
                    </div>


                    {/* CONTINUE SHOPPING */}

                    <div
                        className="
                            border-t
                            border-[#eeeae4]
                            px-7
                            py-5
                        "
                    >

                        <button
                            type="button"
                            onClick={() => {
                                window.location.href =
                                    "/InstantMart/products";
                            }}
                            className="
                                group
                                inline-flex
                                items-center
                                gap-2
                                text-[10px]
                                font-semibold
                                text-[var(--color-primary)]
                            "
                        >

                            <span
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:-translate-x-1
                                "
                            >
                                ←
                            </span>

                            <span
                                className="
                                    relative
                                    after:absolute
                                    after:bottom-[-3px]
                                    after:left-0
                                    after:h-px
                                    after:w-full
                                    after:origin-left
                                    after:scale-x-0
                                    after:bg-[var(--color-primary)]
                                    after:transition-transform
                                    after:duration-300
                                    group-hover:after:scale-x-100
                                "
                            >
                                Continue Shopping
                            </span>

                        </button>

                    </div>

                </section>


                {/* =================================================
                    SUMMARY
                ================================================== */}

                <CartSummary
                    subtotal={subtotal}
                    itemCount={cartItems.length}
                />

            </div>

        </div>
    );
};


export default Cart;