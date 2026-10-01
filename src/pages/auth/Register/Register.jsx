import React from "react";

import {
    useNavigate,
} from "react-router-dom";

import {
    assets,
} from "../../../assets/assets";

import RegisterForm from "./Components/RegisterForm";


const Register = () => {

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
                MAIN REGISTER SHELL
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

                    {/* Background grid */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            opacity-20
                            bg-[linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)]
                            [background-size:34px_34px]
                        "
                    />


                    {/* Top glow */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -left-[120px]
                            -top-[120px]
                            h-[360px]
                            w-[360px]
                            rounded-full
                            bg-[var(--color-primary-dark)]
                            blur-3xl
                        "
                    />


                    {/* Bottom glow */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -bottom-[100px]
                            -right-[100px]
                            h-[330px]
                            w-[330px]
                            rounded-full
                            bg-[var(--color-accent)]
                            opacity-[0.08]
                            blur-3xl
                        "
                    />


                    {/* Rotating ring */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            right-[55px]
                            top-[75px]
                            h-[100px]
                            w-[100px]
                            rounded-full
                            border
                            border-dashed
                            border-white/20
                            animate-[categoryRingSpin_15s_linear_infinite]
                        "
                    />


                    {/* Floating ring */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            bottom-[85px]
                            left-[50px]
                            h-[75px]
                            w-[75px]
                            rounded-full
                            border
                            border-white/10
                            animate-[categoryOrbFloat_9s_ease-in-out_infinite]
                        "
                    />


                    {/* Left content */}

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
                            MAIN MESSAGE
                        ================================================== */}

                        <div
                            className="
                                animate-[categoryItemIn_600ms_cubic-bezier(0.22,1,0.36,1)_100ms_both]
                            "
                        >

                            <h1
                                className="
                                    max-w-[400px]
                                    text-[38px]
                                    font-bold
                                    leading-[1.08]
                                    tracking-[-1px]
                                    text-white

                                    xl:text-[45px]
                                "
                            >
                                Start your
                                <br />
                                fresh journey.
                            </h1>


                            <p
                                className="
                                    mt-5
                                    max-w-[380px]
                                    text-[14px]
                                    leading-[23px]
                                    text-white/65
                                "
                            >
                                Create your account once and make
                                every grocery run simpler, faster
                                and more convenient.
                            </p>


                            {/* =================================================
                                PROGRESS
                            ================================================== */}

                            <div
                                className="
                                    mt-9
                                    space-y-4
                                "
                            >

                                {/* Step 01 */}

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >

                                    <span
                                        className="
                                            flex
                                            h-[30px]
                                            w-[30px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-white
                                            text-[12px]
                                            font-bold
                                            text-[var(--color-primary)]
                                        "
                                    >
                                        01
                                    </span>


                                    <div>

                                        <p
                                            className="
                                                text-[12px]
                                                font-semibold
                                                text-white
                                            "
                                        >
                                            Create your account
                                        </p>

                                        <p
                                            className="
                                                mt-0.5
                                                text-[12px]
                                                text-white/45
                                            "
                                        >
                                            A few details to get started
                                        </p>

                                    </div>

                                </div>


                                <div
                                    className="
                                        ml-[14px]
                                        h-[20px]
                                        w-px
                                        bg-white/15
                                    "
                                />


                                {/* Step 02 */}

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >

                                    <span
                                        className="
                                            flex
                                            h-[30px]
                                            w-[30px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-white/20
                                            text-[12px]
                                            font-semibold
                                            text-white/50
                                        "
                                    >
                                        02
                                    </span>


                                    <p
                                        className="
                                            text-[12px]
                                            font-medium
                                            text-white/65
                                        "
                                    >
                                        Choose your preferences
                                    </p>

                                </div>


                                <div
                                    className="
                                        ml-[14px]
                                        h-[20px]
                                        w-px
                                        bg-white/15
                                    "
                                />


                                {/* Step 03 */}

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >

                                    <span
                                        className="
                                            flex
                                            h-[30px]
                                            w-[30px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-white/20
                                            text-[12px]
                                            font-semibold
                                            text-white/50
                                        "
                                    >
                                        03
                                    </span>


                                    <p
                                        className="
                                            text-[12px]
                                            font-medium
                                            text-white/65
                                        "
                                    >
                                        Start shopping
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


                            <span>
                                © InstantMart
                            </span>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    REGISTER FORM AREA
                ================================================== */}

                <section
                    className="
                        relative
                        flex
                        w-full
                        items-center
                        justify-center
                        bg-[var(--color-background)]
                        px-5
                        py-8

                        sm:px-10

                        lg:w-[58%]
                        lg:px-14

                        xl:px-20
                    "
                >

                    {/* Mobile dots */}

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


                    {/* Mobile glow */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-[90px]
                            -top-[90px]
                            h-[250px]
                            w-[250px]
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
                                mb-7
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
                                Step 01 · Account
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
                                Let's get you started.
                            </h2>


                            <p
                                className="
                                    mt-2
                                    max-w-[410px]
                                    text-[13px]
                                    leading-[21px]
                                    text-[var(--color-text-secondary)]
                                "
                            >
                                Create your InstantMart account and
                                get ready for a smarter grocery
                                shopping experience.
                            </p>

                        </div>


                        {/* =================================================
                            REGISTER FORM
                        ================================================== */}

                        <RegisterForm />


                        {/* =================================================
                            LOGIN
                        ================================================== */}

                        <div
                            className="
                                mt-6
                                text-center
                                text-[13px]
                                text-[var(--color-text-secondary)]
                            "
                        >

                            Already have an account?{" "}


                            <button
                                type="button"
                                onClick={() =>
                                    navigate("/login")
                                }
                                className="
                                    font-semibold
                                    text-[var(--color-accent)]
                                    transition-colors
                                    duration-300
                                    hover:text-[var(--color-accent-dark)]
                                "
                            >
                                Sign in
                            </button>

                        </div>

                    </div>

                </section>

            </div>

        </main>
    );
};


export default Register;