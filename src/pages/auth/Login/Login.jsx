import React from "react";

import {
    useNavigate,
} from "react-router-dom";

import {
    assets,
} from "../../../assets/assets";

import LoginForm from "./Components/LoginForm";


const Login = () => {

    const navigate = useNavigate();


    return (
        <main
            className="
                min-h-screen
                overflow-hidden
                bg-[var(--color-background)]
                px-4
                py-5

                sm:px-6
                sm:py-7

                lg:px-8
                lg:py-8
            "
        >

            {/* =====================================================
                MAIN LOGIN SHELL
            ====================================================== */}

            <div
                className="
                    mx-auto
                    flex
                    min-h-[calc(100vh-40px)]
                    w-full
                    max-w-[1180px]
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-[var(--color-border-light)]
                    bg-white
                    shadow-[0_24px_70px_rgba(0,69,33,0.10)]

                    sm:min-h-[calc(100vh-56px)]

                    lg:min-h-[calc(100vh-64px)]
                "
            >

                {/* =================================================
                    LEFT BRAND PANEL
                ================================================== */}

                <section
                    className="
                        relative
                        hidden
                        w-[42%]
                        overflow-hidden
                        bg-[var(--color-primary)]
                        lg:block
                    "
                >

                    {/* =================================================
                        BACKGROUND IMAGE
                    ================================================== */}

                    <img
                        src={assets.hero_bg}
                        alt="Fresh groceries"
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            scale-[1.03]
                            object-cover
                        "
                    />


                    {/* =================================================
                        GREEN OVERLAY
                    ================================================== */}

                    <div
                        className="
                            absolute
                            inset-0
                            bg-[var(--color-overlay)]/80
                        "
                    />


                    {/* =================================================
                        GREEN GRADIENT
                    ================================================== */}

                    <div
                        className="
                            absolute
                            inset-0
                            bg-gradient-to-br
                            from-[var(--color-primary-dark)]/80
                            via-transparent
                            to-[var(--color-primary)]/40
                        "
                    />


                    {/* =================================================
                        BACKGROUND DOTS
                    ================================================== */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            opacity-20
                            bg-[radial-gradient(circle,rgba(255,255,255,0.28)_1px,transparent_1px)]
                            [background-size:28px_28px]
                        "
                    />


                    {/* =================================================
                        AMBIENT ORBS
                    ================================================== */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -left-[130px]
                            -top-[100px]
                            h-[330px]
                            w-[330px]
                            rounded-full
                            bg-[var(--color-primary)]
                            opacity-50
                            blur-3xl
                            animate-[categoryOrbFloat_10s_ease-in-out_infinite]
                        "
                    />


                    <div
                        className="
                            pointer-events-none
                            absolute
                            -bottom-[110px]
                            -right-[100px]
                            h-[320px]
                            w-[320px]
                            rounded-full
                            bg-[var(--color-accent)]
                            opacity-[0.07]
                            blur-3xl
                            animate-[categoryOrbFloat_12s_ease-in-out_-3s_infinite]
                        "
                    />


                    {/* =================================================
                        ROTATING RING
                    ================================================== */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            bottom-[45px]
                            right-[35px]
                            h-[190px]
                            w-[190px]
                            rounded-full
                            border
                            border-dashed
                            border-[var(--color-accent)]/20
                            animate-[categoryRingSpin_18s_linear_infinite]
                        "
                    />


                    {/* =================================================
                        LEFT CONTENT
                    ================================================== */}

                    <div
                        className="
                            relative
                            z-10
                            flex
                            h-full
                            flex-col
                            justify-between
                            p-10

                            xl:p-12
                        "
                    >

                        {/* =================================================
                            BRAND
                        ================================================== */}

                        <div
                            className="
                                flex
                                items-center
                                gap-2.5
                                animate-[categoryItemIn_500ms_cubic-bezier(0.22,1,0.36,1)_both]
                            "
                        >

                            {/* Brand icon */}

                            <div
                                className="
                                    flex
                                    h-[38px]
                                    w-[38px]
                                    items-center
                                    justify-center
                                    rounded-[11px]
                                    bg-white/10
                                    text-white
                                    backdrop-blur-sm
                                    shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                                "
                            >
                                <span
                                    className="
                                        text-[19px]
                                        leading-none
                                    "
                                >
                                    🛒
                                </span>
                            </div>


                            {/* Brand name */}

                            <span
                                className="
                                    text-[22px]
                                    font-bold
                                    tracking-[-0.6px]
                                    text-white
                                "
                            >
                                InstantMart
                            </span>

                        </div>


                        {/* =================================================
                            MAIN CONTENT
                        ================================================== */}

                        <div
                            className="
                                animate-[categoryItemIn_600ms_cubic-bezier(0.22,1,0.36,1)_100ms_both]
                            "
                        >

                            <h1
                                className="
                                    max-w-[410px]
                                    text-[40px]
                                    font-bold
                                    leading-[1.08]
                                    tracking-[-1px]
                                    text-white

                                    xl:text-[46px]
                                "
                            >
                                Welcome back
                                <br />
                                to InstantMart.
                            </h1>


                            <p
                                className="
                                    mt-5
                                    max-w-[390px]
                                    text-[14px]
                                    leading-[23px]
                                    text-white/65
                                "
                            >
                                Your fresh groceries and everyday
                                essentials are waiting. Sign in and
                                continue your shopping journey.
                            </p>


                            {/* =================================================
                                FEATURE
                            ================================================== */}

                            <div
                                className="
                                    mt-8
                                    flex
                                    items-center
                                    gap-3
                                "
                            >

                                <span
                                    className="
                                        flex
                                        h-[42px]
                                        w-[42px]
                                        items-center
                                        justify-center
                                        rounded-[12px]
                                        bg-white/10
                                        text-[18px]
                                        backdrop-blur-sm
                                    "
                                >
                                    🛒
                                </span>


                                <div>

                                    <p
                                        className="
                                            text-[13px]
                                            font-semibold
                                            text-white
                                        "
                                    >
                                        Everything fresh.
                                    </p>


                                    <p
                                        className="
                                            mt-0.5
                                            text-[12px]
                                            text-white/45
                                        "
                                    >
                                        Everything at your fingertips.
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            BOTTOM
                        ================================================== */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                text-[12px]
                                text-white/40
                            "
                        >

                            <span>
                                Freshness delivered.
                            </span>


                            <button
                                type="button"
                                onClick={() => navigate("/")}
                                className="
                                    transition-colors
                                    duration-300
                                    hover:text-white
                                "
                            >
                                Continue shopping →
                            </button>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    RIGHT LOGIN AREA
                ================================================== */}

                <section
                    className="
                        relative
                        flex
                        min-h-[calc(100vh-40px)]
                        w-full
                        items-center
                        justify-center
                        overflow-hidden
                        bg-[var(--color-background)]
                        px-5
                        py-8

                        sm:px-10

                        lg:min-h-0
                        lg:w-[58%]
                        lg:px-14

                        xl:px-20
                    "
                >

                    {/* =================================================
                        MOBILE DOTS
                    ================================================== */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            opacity-30
                            bg-[radial-gradient(circle,rgba(0,69,33,0.12)_1px,transparent_1px)]
                            [background-size:24px_24px]
                            lg:hidden
                        "
                    />


                    {/* =================================================
                        MOBILE GLOW
                    ================================================== */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-[100px]
                            -top-[100px]
                            h-[260px]
                            w-[260px]
                            rounded-full
                            bg-[var(--color-primary-light)]
                            blur-3xl
                            lg:hidden
                        "
                    />


                    <div
                        className="
                            relative
                            z-10
                            w-full
                            max-w-[470px]
                        "
                    >

                        {/* =================================================
                            MOBILE LOGO
                        ================================================== */}

                        <div
                            className="
                                mb-6
                                flex
                                justify-center
                                lg:hidden
                            "
                        >

                            <img
                                src={assets.AuthLogo}
                                alt="InstantMart"
                                className="
                                    h-[45px]
                                    w-auto
                                "
                            />

                        </div>


                        {/* =================================================
                            HEADER
                        ================================================== */}

                        <div
                            className="
                                animate-[categoryItemIn_550ms_cubic-bezier(0.22,1,0.36,1)_both]
                            "
                        >

                            <span
                                className="
                                    text-[12px]
                                    font-semibold
                                    uppercase
                                    tracking-[1.8px]
                                    text-[var(--color-accent)]
                                "
                            >
                                Welcome back
                            </span>


                            <h2
                                className="
                                    mt-2
                                    text-[30px]
                                    font-bold
                                    leading-tight
                                    tracking-[-0.7px]
                                    text-[var(--color-text-primary)]

                                    sm:text-[34px]
                                "
                            >
                                Sign in to your account
                            </h2>


                            <p
                                className="
                                    mt-2
                                    max-w-[420px]
                                    text-[13px]
                                    leading-[21px]
                                    text-[var(--color-text-secondary)]
                                "
                            >
                                Welcome back! Enter your details
                                to continue shopping with InstantMart.
                            </p>

                        </div>


                        {/* =================================================
                            LOGIN FORM CARD
                        ================================================== */}

                        <div
                            className="
                                mt-6
                                rounded-[16px]
                                border
                                border-[var(--color-border-light)]
                                bg-white
                                p-4
                                shadow-[0_8px_25px_rgba(24,51,40,0.045)]

                                sm:p-5

                                animate-[categoryItemIn_550ms_cubic-bezier(0.22,1,0.36,1)_100ms_both]
                            "
                        >

                            <div
                                className="
                                    mb-5
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                <div>

                                    <p
                                        className="
                                            text-[13px]
                                            font-semibold
                                            text-[var(--color-text-primary)]
                                        "
                                    >
                                        Account access
                                    </p>


                                    <p
                                        className="
                                            mt-1
                                            text-[12px]
                                            text-[var(--color-text-secondary)]
                                        "
                                    >
                                        Sign in securely to your account.
                                    </p>

                                </div>


                                <span
                                    className="
                                        flex
                                        h-[28px]
                                        w-[28px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[var(--color-primary-light)]
                                        text-[11px]
                                        font-bold
                                        text-[var(--color-primary)]
                                    "
                                >
                                    01
                                </span>

                            </div>


                            <LoginForm
                                onSuccess={() =>
                                    navigate("/")
                                }
                            />

                        </div>


                        {/* =================================================
                            REGISTER
                        ================================================== */}

                        <div
                            className="
                                mt-5
                                text-center
                                text-[13px]
                                text-[var(--color-text-secondary)]
                                animate-[categoryItemIn_500ms_cubic-bezier(0.22,1,0.36,1)_280ms_both]
                            "
                        >

                            Don't have an account?{" "}


                            <button
                                type="button"
                                onClick={() =>
                                    navigate("/register")
                                }
                                className="
                                    font-semibold
                                    text-[var(--color-accent)]
                                    transition-colors
                                    duration-300
                                    hover:text-[var(--color-accent-dark)]
                                "
                            >
                                Create one
                            </button>

                        </div>

                    </div>

                </section>

            </div>

        </main>
    );
};


export default Login;