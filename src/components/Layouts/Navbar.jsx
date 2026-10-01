import React, {
    useEffect,
    useState,
} from "react";

import {
    ShoppingCart,
    MapPin,
    ChevronDown,
    Menu,
    X,
    Heart,
    LifeBuoy,
} from "lucide-react";

import {
    NavLink,
} from "react-router-dom";

import UserDropdown from "./UserDropdown";


/* =========================================================
   NAVIGATION ITEMS
========================================================= */

const navigationItems = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "Products",
        path: "/products",
    },
    {
        label: "Deals",
        path: "/deals",
    },
    {
        label: "Blogs",
        path: "/blogs",
    },
    {
        label: "Support",
        path: "/help-center",
    },
];


/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {

    const [
        mobileMenuOpen,
        setMobileMenuOpen,
    ] = useState(false);


    /* =====================================================
       CLOSE MOBILE MENU ON DESKTOP RESIZE
    ===================================================== */

    useEffect(() => {

        const handleResize = () => {

            if (window.innerWidth >= 1024) {
                setMobileMenuOpen(false);
            }

        };

        window.addEventListener(
            "resize",
            handleResize
        );

        return () => {

            window.removeEventListener(
                "resize",
                handleResize
            );

        };

    }, []);


    /* =====================================================
       CLOSE MOBILE MENU
    ===================================================== */

    const handleNavigation = () => {

        setMobileMenuOpen(false);

    };


    return (

        <header
            className="
                sticky
                top-0
                z-[100]
                w-full
                border-b
                border-white/[0.08]
                bg-[var(--color-primary)]
                text-white
                shadow-[0_8px_30px_rgba(0,69,33,0.12)]
            "
        >

            {/* =================================================
                MAIN NAVBAR
            ================================================= */}

            <div
                className="
                    mx-auto
                    flex
                    h-[72px]
                    w-full
                    max-w-[1488px]
                    items-center
                    px-4

                    sm:px-6
                    lg:px-10
                    xl:px-[56px]
                "
            >

                {/* =================================================
                    LOGO
                ================================================= */}

                <NavLink
                    to="/"
                    onClick={handleNavigation}
                    className="
                        group
                        flex
                        shrink-0
                        items-center
                        gap-2.5
                        outline-none
                    "
                >

                    {/* Logo Icon */}

                    <span
                        className="
                            relative
                            flex
                            h-[40px]
                            w-[40px]
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-[13px]
                            bg-[var(--color-accent)]
                            text-[var(--color-primary)]
                            shadow-[0_6px_18px_rgba(255,107,0,0.18)]
                            transition-all
                            duration-300
                            ease-out

                            group-hover:-translate-y-0.5
                            group-hover:rotate-[-3deg]
                            group-hover:shadow-[0_9px_24px_rgba(255,107,0,0.28)]
                        "
                    >

                        <span
                            className="
                                absolute
                                inset-0
                                rounded-[13px]
                                border
                                border-white/20
                            "
                        />

                        <span
                            className="
                                text-[19px]
                                leading-none
                                transition-transform
                                duration-300
                                group-hover:scale-110
                            "
                        >
                            🛒
                        </span>

                    </span>


                    {/* Logo Text */}

                    <span
                        className="
                            hidden
                            text-[21px]
                            font-bold
                            tracking-[-0.7px]
                            text-white
                            transition-all
                            duration-300

                            sm:block
                            group-hover:tracking-[-0.9px]
                        "
                    >
                        InstantMart
                    </span>

                </NavLink>


                {/* =================================================
                    LOCATION
                ================================================= */}

                <button
                    type="button"
                    aria-label="Delivery location"
                    className="
                        group
                        ml-7
                        hidden
                        shrink-0
                        items-center
                        gap-2
                        rounded-[11px]
                        px-2
                        py-1.5
                        text-left
                        transition-all
                        duration-300

                        md:flex
                        hover:bg-white/[0.06]
                    "
                >

                    <MapPin
                        size={17}
                        strokeWidth={2}
                        className="
                            shrink-0
                            text-[var(--color-accent)]
                            transition-transform
                            duration-300
                            group-hover:-translate-y-0.5
                        "
                    />

                    <span
                        className="
                            flex
                            flex-col
                            leading-none
                        "
                    >

                        <span
                            className="
                                mb-1
                                text-[9px]
                                font-medium
                                uppercase
                                tracking-[1.15px]
                                text-white/40
                            "
                        >
                            Deliver to
                        </span>

                        <span
                            className="
                                flex
                                items-center
                                gap-1
                                whitespace-nowrap
                                text-[12px]
                                font-semibold
                                text-white/90
                            "
                        >

                            Hyderabad, India

                            <ChevronDown
                                size={12}
                                strokeWidth={2}
                                className="
                                    text-white/45
                                    transition-transform
                                    duration-300
                                    group-hover:translate-y-0.5
                                "
                            />

                        </span>

                    </span>

                </button>


                {/* =================================================
                    DESKTOP NAVIGATION
                ================================================= */}

                <nav
                    className="
                        ml-auto
                        hidden
                        items-center
                        gap-1

                        lg:flex
                    "
                >

                    {navigationItems.map(
                        (item) => (

                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({
                                    isActive,
                                }) =>
                                    `
                                    group
                                    relative
                                    flex
                                    h-[40px]
                                    items-center
                                    gap-1.5
                                    rounded-[10px]
                                    px-3.5
                                    text-[12px]
                                    font-medium
                                    transition-all
                                    duration-300
                                    ease-out

                                    ${
                                        isActive
                                            ? `
                                                bg-white/[0.08]
                                                text-white
                                            `
                                            : `
                                                text-white/65
                                            `
                                    }

                                    hover:-translate-y-0.5
                                    hover:bg-white/[0.06]
                                    hover:text-white
                                    `
                                }
                            >

                                {({
                                    isActive,
                                }) => (
                                    <>

                                        {/* Support indicator */}

                                        {item.label ===
                                            "Support" && (
                                                <span
                                                    className="
                                                        h-[5px]
                                                        w-[5px]
                                                        rounded-full
                                                        bg-[var(--color-accent)]
                                                        opacity-80
                                                        transition-all
                                                        duration-300

                                                        group-hover:scale-125
                                                        group-hover:opacity-100
                                                    "
                                                />
                                            )}


                                        {/* Navigation Text */}

                                        <span
                                            className="
                                                relative
                                                z-10
                                                transition-transform
                                                duration-300
                                                group-hover:translate-x-[1px]
                                            "
                                        >
                                            {item.label}
                                        </span>


                                        {/* Active / Hover Indicator */}

                                        <span
                                            className={`
                                                absolute
                                                bottom-[4px]
                                                left-3.5
                                                right-3.5
                                                h-[2px]
                                                origin-center
                                                rounded-full
                                                bg-[var(--color-accent)]
                                                transition-all
                                                duration-300
                                                ease-out

                                                ${
                                                    isActive
                                                        ? `
                                                            scale-x-100
                                                            opacity-100
                                                        `
                                                        : `
                                                            scale-x-0
                                                            opacity-0
                                                            group-hover:scale-x-100
                                                            group-hover:opacity-100
                                                        `
                                                }
                                            `}
                                        />

                                    </>
                                )}

                            </NavLink>

                        )
                    )}

                </nav>


                {/* =================================================
                    DESKTOP ACTIONS
                ================================================= */}

                <div
                    className="
                        ml-5
                        hidden
                        items-center
                        gap-1

                        lg:flex
                    "
                >

                    {/* =================================================
                        WISHLIST
                    ================================================= */}

                    <NavLink
                        to="/wishlist"
                        aria-label="Wishlist"
                        className="
                            group
                            relative
                            flex
                            h-[42px]
                            w-[42px]
                            items-center
                            justify-center
                            rounded-[12px]
                            text-white/75
                            transition-all
                            duration-300

                            hover:-translate-y-0.5
                            hover:bg-white/[0.07]
                            hover:text-white
                        "
                    >

                        <Heart
                            size={20}
                            strokeWidth={1.8}
                            className="
                                transition-all
                                duration-300
                                group-hover:scale-110
                                group-hover:text-[var(--color-accent)]
                            "
                        />

                    </NavLink>


                    {/* =================================================
                        CART
                    ================================================= */}

                    <NavLink
                        to="/cart"
                        aria-label="Shopping cart"
                        className="
                            group
                            relative
                            flex
                            h-[42px]
                            w-[42px]
                            items-center
                            justify-center
                            rounded-[12px]
                            text-white/85
                            transition-all
                            duration-300

                            hover:-translate-y-0.5
                            hover:bg-white/[0.07]
                            hover:text-white
                        "
                    >

                        <ShoppingCart
                            size={21}
                            strokeWidth={1.8}
                            className="
                                transition-all
                                duration-300

                                group-hover:scale-110
                                group-hover:-rotate-3
                                group-hover:text-[var(--color-accent)]
                            "
                        />


                        {/* =================================================
                            CART NOTIFICATION PING
                        ================================================= */}

                        <span
                            className="
                                absolute
                                right-[7px]
                                top-[6px]
                                flex
                                h-[8px]
                                w-[8px]
                                items-center
                                justify-center
                            "
                        >

                            {/* Animated Ping */}

                            <span
                                className="
                                    absolute
                                    inline-flex
                                    h-full
                                    w-full
                                    animate-ping
                                    rounded-full
                                    bg-[var(--color-accent)]
                                    opacity-60
                                "
                            />

                            {/* Actual Dot */}

                            <span
                                className="
                                    relative
                                    h-[6px]
                                    w-[6px]
                                    rounded-full
                                    border
                                    border-[var(--color-primary)]
                                    bg-[var(--color-accent)]
                                "
                            />

                        </span>

                    </NavLink>


                    {/* =================================================
                        DIVIDER
                    ================================================= */}

                    <span
                        className="
                            mx-2
                            h-[25px]
                            w-px
                            bg-white/10
                        "
                    />


                    {/* =================================================
                        USER DROPDOWN
                    ================================================= */}

                    <UserDropdown />

                </div>


                {/* =================================================
                    MOBILE ACTIONS
                ================================================= */}

                <div
                    className="
                        ml-auto
                        flex
                        items-center
                        gap-1

                        lg:hidden
                    "
                >

                    {/* Mobile Cart */}

                    <NavLink
                        to="/cart"
                        aria-label="Shopping cart"
                        className="
                            group
                            relative
                            flex
                            h-[40px]
                            w-[40px]
                            items-center
                            justify-center
                            rounded-[11px]
                            text-white/90
                            transition-all
                            duration-300

                            hover:bg-white/[0.08]
                        "
                    >

                        <ShoppingCart
                            size={20}
                            strokeWidth={1.8}
                            className="
                                transition-all
                                duration-300
                                group-hover:scale-110
                                group-hover:text-[var(--color-accent)]
                            "
                        />


                        {/* Keep Cart Dot */}

                        <span
                            className="
                                absolute
                                right-[6px]
                                top-[5px]
                                flex
                                h-[8px]
                                w-[8px]
                                items-center
                                justify-center
                            "
                        >

                            <span
                                className="
                                    absolute
                                    h-full
                                    w-full
                                    animate-ping
                                    rounded-full
                                    bg-[var(--color-accent)]
                                    opacity-60
                                "
                            />

                            <span
                                className="
                                    relative
                                    h-[6px]
                                    w-[6px]
                                    rounded-full
                                    border
                                    border-[var(--color-primary)]
                                    bg-[var(--color-accent)]
                                "
                            />

                        </span>

                    </NavLink>


                    {/* Mobile Menu */}

                    <button
                        type="button"
                        onClick={() =>
                            setMobileMenuOpen(
                                (previous) =>
                                    !previous
                            )
                        }
                        aria-label={
                            mobileMenuOpen
                                ? "Close navigation"
                                : "Open navigation"
                        }
                        aria-expanded={
                            mobileMenuOpen
                        }
                        className="
                            flex
                            h-[40px]
                            w-[40px]
                            items-center
                            justify-center
                            rounded-[11px]
                            text-white/85
                            transition-all
                            duration-300

                            hover:bg-white/[0.08]
                            hover:text-white
                        "
                    >

                        {mobileMenuOpen ? (

                            <X
                                size={21}
                                strokeWidth={1.8}
                            />

                        ) : (

                            <Menu
                                size={21}
                                strokeWidth={1.8}
                            />

                        )}

                    </button>

                </div>

            </div>


            {/* =================================================
                MOBILE MENU
            ================================================= */}

            <div
                className={`
                    overflow-hidden
                    border-t
                    border-white/[0.08]
                    transition-all
                    duration-300
                    ease-out

                    lg:hidden

                    ${
                        mobileMenuOpen
                            ? "max-h-[360px] opacity-100"
                            : "max-h-0 opacity-0"
                    }
                `}
            >

                <nav
                    className="
                        mx-auto
                        w-full
                        max-w-[1488px]
                        px-4
                        pb-4
                        pt-3
                    "
                >

                    {/* =================================================
                        MOBILE LOCATION
                    ================================================= */}

                    <div
                        className="
                            mb-3
                            flex
                            items-center
                            gap-2
                            rounded-[10px]
                            bg-white/[0.06]
                            px-3
                            py-2.5
                        "
                    >

                        <MapPin
                            size={16}
                            strokeWidth={1.9}
                            className="
                                text-[var(--color-accent)]
                            "
                        />

                        <span
                            className="
                                text-[11px]
                                font-medium
                                text-white/80
                            "
                        >
                            Deliver to Hyderabad, India
                        </span>

                    </div>


                    {/* =================================================
                        MOBILE NAVIGATION
                    ================================================= */}

                    <div
                        className="
                            grid
                            grid-cols-2
                            gap-1
                        "
                    >

                        {navigationItems.map(
                            (item) => (

                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={
                                        handleNavigation
                                    }
                                    className={({
                                        isActive,
                                    }) =>
                                        `
                                        group
                                        flex
                                        h-[42px]
                                        items-center
                                        rounded-[9px]
                                        px-3
                                        text-[12px]
                                        font-medium
                                        transition-all
                                        duration-300

                                        ${
                                            isActive
                                                ? `
                                                    bg-white/[0.10]
                                                    text-white
                                                `
                                                : `
                                                    text-white/65
                                                `
                                        }

                                        hover:translate-x-1
                                        hover:bg-white/[0.08]
                                        hover:text-white
                                        `
                                    }
                                >

                                    {item.label}

                                    {item.label ===
                                        "Support" && (
                                            <LifeBuoy
                                                size={14}
                                                strokeWidth={1.8}
                                                className="
                                                    ml-auto
                                                    text-[var(--color-accent)]
                                                    transition-transform
                                                    duration-300
                                                    group-hover:rotate-12
                                                "
                                            />
                                        )}

                                </NavLink>

                            )
                        )}

                    </div>

                </nav>

            </div>

        </header>
    );
};


export default Navbar;