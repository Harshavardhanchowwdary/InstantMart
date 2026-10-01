import {
    useEffect,
    useRef,
    useState,
} from "react";

import {
    ArrowUpRight,
    ChevronDown,
    CircleUserRound,
    LogOut,
    MapPin,
    Package,
    ShoppingCart,
    ShieldCheck,
    Tag,
} from "lucide-react";

import {
    NavLink,useNavigate,
} from "react-router-dom";

const UserDropdown = () => {

    const [open, setOpen] = useState(false);

    const dropdownRef = useRef(null);


    // =========================================================
    // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
    // =========================================================

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }

        };


        document.addEventListener(
            "mousedown",
            handleClickOutside,
        );


        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside,
            );

        };

    }, []);


    // =========================================================
    // LOGOUT
    // =========================================================

    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/login");

        setOpen(false);

    };


    return (

        <div
            ref={dropdownRef}
            className="relative"
        >

            {/* =====================================================
                USER CONTROL
            ====================================================== */}

            <div className="flex items-center gap-1">

                <button
                    type="button"
                    onClick={() => setOpen((previous) => !previous)}
                    aria-label="Open account menu"
                    aria-expanded={open}
                    className="flex items-center gap-2 rounded-full p-0"
                >

                    {/* AVATAR */}

                    <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[var(--color-primary)] text-[13px] font-medium text-white transition-all duration-300 hover:-translate-y-[1px] hover:bg-[var(--color-primary-dark)] hover:shadow-[0_6px_16px_rgba(0,69,33,0.18)]">
                        H
                    </div>


                    {/* CHEVRON */}

                    <ChevronDown
                        size={13}
                        strokeWidth={1.7}
                        className={`text-[var(--color-text-secondary)] transition-transform duration-300 ${
                            open
                                ? "rotate-180 text-[var(--color-primary)]"
                                : ""
                        }`}
                    />

                </button>

            </div>


            {/* =====================================================
                DROPDOWN
            ====================================================== */}

            {open && (

                <div className="absolute right-0 top-[calc(100%+17px)] z-50 w-[235px] overflow-hidden rounded-[14px] border border-[#e0e3e7] bg-[var(--color-surface)] shadow-[0_12px_32px_rgba(0,0,0,0.10)]">


                    {/* =================================================
                        PROFILE HEADER
                    ================================================== */}

                    <div className="px-5 pb-3 pt-4">

                        <div className="flex items-center gap-3">

                            <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[13px] font-semibold text-[var(--color-primary)] animate-[menuItemSlideIn_350ms_cubic-bezier(0.22,1,0.36,1)_0ms_both]">
                                H
                            </div>


                            <div className="min-w-0 animate-[menuItemSlideIn_350ms_cubic-bezier(0.22,1,0.36,1)_30ms_both]">

                                <p className="truncate text-[13px] font-semibold leading-[17px] text-[var(--color-text-primary)] text-[13px]">
                                    Harsha Vardhan
                                </p>

                                <p className="mt-[2px] truncate text-[10px] leading-[15px] text-[var(--color-text-secondary)]">
                                    harsha@gmail.com
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* DIVIDER */}

                    <div className="border-t border-[var(--color-border-light)]" />


                    {/* =================================================
                        CUSTOMER MENU
                    ================================================== */}

                    <div className="py-1">


                        {/* =================================================
                            MY ACCOUNT
                        ================================================== */}

                        <NavLink
                            to="/my-account"
                            onClick={() => setOpen(false)}
                            className="group flex h-[40px] w-full items-center gap-3 px-5 text-left text-[var(--color-text-secondary)] transition-all duration-300 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)] animate-[menuItemSlideIn_350ms_cubic-bezier(0.22,1,0.36,1)_60ms_both]"
                        >

                            <span className="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-[7px] bg-[var(--color-primary-light)] text-[var(--color-primary)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--color-primary)] group-hover:text-white">

                                <CircleUserRound
                                    size={13}
                                    strokeWidth={1.8}
                                />

                            </span>


                            <span className="text-[13px] font-medium">
                                My Account
                            </span>


                            <ArrowUpRight
                                size={12}
                                strokeWidth={1.8}
                                className="ml-auto opacity-0 transition-all duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] group-hover:opacity-100"
                            />

                        </NavLink>


                        {/* =================================================
                            MY ORDERS
                        ================================================== */}

                        <NavLink
                            to="/orders"
                            onClick={() => setOpen(false)}
                            className="group flex h-[40px] w-full items-center gap-3 px-5 text-left text-[var(--color-text-secondary)] transition-all duration-300 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)] animate-[menuItemSlideIn_350ms_cubic-bezier(0.22,1,0.36,1)_90ms_both]"
                        >

                            <span className="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-[7px] bg-[var(--color-background)] text-[var(--color-text-secondary)] transition-all duration-300 group-hover:bg-[var(--color-primary-light)] group-hover:text-[var(--color-primary)]">

                                <Package
                                    size={13}
                                    strokeWidth={1.8}
                                />

                            </span>


                            <span className="text-[13px] font-medium">
                                My Orders
                            </span>

                        </NavLink>


                        {/* =================================================
                            MY CART
                        ================================================== */}

                        <NavLink
                            to="/cart"
                            onClick={() => setOpen(false)}
                            className="group flex h-[40px] w-full items-center gap-3 px-5 text-left text-[var(--color-text-secondary)] transition-all duration-300 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)] animate-[menuItemSlideIn_350ms_cubic-bezier(0.22,1,0.36,1)_120ms_both]"
                        >

                            <span className="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-[7px] bg-[var(--color-background)] text-[var(--color-text-secondary)] transition-all duration-300 group-hover:bg-[var(--color-primary-light)] group-hover:text-[var(--color-primary)]">

                                <ShoppingCart
                                    size={13}
                                    strokeWidth={1.8}
                                />

                            </span>


                            <span className="text-[13px] font-medium">
                                My Cart
                            </span>

                        </NavLink>


                        {/* =================================================
                            ADDRESSES
                        ================================================== */}

                        <NavLink
                            to="/addresses"
                            onClick={() => setOpen(false)}
                            className="group flex h-[40px] w-full items-center gap-3 px-5 text-left text-[var(--color-text-secondary)] transition-all duration-300 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)] animate-[menuItemSlideIn_350ms_cubic-bezier(0.22,1,0.36,1)_150ms_both]"
                        >

                            <span className="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-[7px] bg-[var(--color-background)] text-[var(--color-text-secondary)] transition-all duration-300 group-hover:bg-[var(--color-primary-light)] group-hover:text-[var(--color-primary)]">

                                <MapPin
                                    size={13}
                                    strokeWidth={1.8}
                                />

                            </span>


                            <span className="text-[13px] font-medium">
                                Addresses
                            </span>

                        </NavLink>


                        {/* =================================================
                            PRODUCTS
                        ================================================== */}

                        <NavLink
                            to="/products"
                            onClick={() => setOpen(false)}
                            className="group flex h-[40px] w-full items-center gap-3 px-5 text-left text-[var(--color-text-secondary)] transition-all duration-300 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)] animate-[menuItemSlideIn_350ms_cubic-bezier(0.22,1,0.36,1)_180ms_both]"
                        >

                            <span className="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-[7px] bg-[var(--color-background)] text-[var(--color-text-secondary)] transition-all duration-300 group-hover:bg-[var(--color-primary-light)] group-hover:text-[var(--color-primary)]">

                                <ShoppingCart
                                    size={13}
                                    strokeWidth={1.8}
                                />

                            </span>


                            <span className="text-[13px] font-medium">
                                Products
                            </span>

                        </NavLink>


                        {/* =================================================
                            DEALS
                        ================================================== */}

                        <NavLink
                            to="/deals"
                            onClick={() => setOpen(false)}
                            className="group flex h-[40px] w-full items-center gap-3 px-5 text-left text-[var(--color-text-secondary)] transition-all duration-300 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)] animate-[menuItemSlideIn_350ms_cubic-bezier(0.22,1,0.36,1)_210ms_both]"
                        >

                            <span className="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-[7px] bg-[var(--color-background)] text-[var(--color-text-secondary)] transition-all duration-300 group-hover:bg-[var(--color-primary-light)] group-hover:text-[var(--color-primary)]">

                                <Tag
                                    size={13}
                                    strokeWidth={1.8}
                                />

                            </span>


                            <span className="text-[13px] font-medium">
                                Deals
                            </span>

                        </NavLink>

                    </div>


                    {/* =================================================
                        ADMIN
                    ================================================== */}

                    <div className="border-t border-[var(--color-border-light)] py-1">

                        <NavLink
                            to="/admin"
                            onClick={() => setOpen(false)}
                            className="group flex h-[40px] w-full items-center gap-3 px-5 text-left text-[var(--color-accent)] transition-all duration-300 hover:bg-[var(--color-accent-light)] animate-[menuItemSlideIn_350ms_cubic-bezier(0.22,1,0.36,1)_240ms_both]"
                        >

                            <span className="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-[7px] bg-[var(--color-accent-light)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--color-accent)] group-hover:text-white">

                                <ShieldCheck
                                    size={13}
                                    strokeWidth={1.8}
                                />

                            </span>


                            <span className="text-[13px] font-semibold">
                                Admin Panel
                            </span>


                            <ArrowUpRight
                                size={12}
                                strokeWidth={1.8}
                                className="ml-auto opacity-0 transition-all duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] group-hover:opacity-100"
                            />

                        </NavLink>

                    </div>


                    {/* =================================================
                        LOGOUT
                    ================================================== */}

                    <div className="border-t border-[var(--color-border-light)]">

                        <button
                            type="button"
                            onClick={handleLogout}
                            className="group flex h-[44px] w-full items-center gap-3 px-5 text-left text-red-500 transition-all duration-300 hover:bg-red-50 animate-[menuItemSlideIn_350ms_cubic-bezier(0.22,1,0.36,1)_270ms_both]"
                        >

                            <span className="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-[7px] bg-red-50 transition-all duration-300 group-hover:scale-105">

                                <LogOut
                                    size={13}
                                    strokeWidth={1.8}
                                />

                            </span>


                            <span className="text-[13px] font-medium">
                                Logout
                            </span>

                        </button>

                    </div>

                </div>

            )}

        </div>
    );
};


export default UserDropdown;