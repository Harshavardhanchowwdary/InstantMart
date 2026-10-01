import React from "react";

import {
    ArrowRight,
    ShoppingBasket,
    Sparkles,
} from "lucide-react";

import {
    assets,
} from "../../../../assets/assets";


const LoginBranding = () => {

    return (

        <section
            className="
                relative
                hidden
                min-h-screen
                w-1/2
                overflow-hidden
                bg-[var(--color-primary)]
                md:block
            "
        >

            {/* =====================================================
                BACKGROUND IMAGE
            ====================================================== */}

            <img
                src={assets.hero_bg}
                alt="Fresh groceries"
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    scale-[1.03]
                "
            />


            {/* =====================================================
                GREEN OVERLAY
            ====================================================== */}

            <div
                className="
                    absolute
                    inset-0
                    bg-[var(--color-overlay)]/80
                "
            />


            {/* =====================================================
                GRADIENT DEPTH
            ====================================================== */}

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


            {/* =====================================================
                DOT PATTERN
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-20
                    bg-[radial-gradient(circle,rgba(255,255,255,0.28)_1px,transparent_1px)]
                    [background-size:25px_25px]
                "
            />


            {/* =====================================================
                DECORATIVE ORBS
            ====================================================== */}

            <div
                className="
                    absolute
                    -left-[90px]
                    -top-[90px]
                    h-[280px]
                    w-[280px]
                    rounded-full
                    border
                    border-white/10
                    animate-[categoryOrbFloat_9s_ease-in-out_infinite]
                "
            />

            <div
                className="
                    absolute
                    -bottom-[100px]
                    -right-[80px]
                    h-[300px]
                    w-[300px]
                    rounded-full
                    border
                    border-[var(--color-accent)]/20
                    animate-[categoryOrbFloat_11s_ease-in-out_-3s_infinite]
                "
            />


            {/* =====================================================
                CONTENT
            ====================================================== */}

            <div
                className="
                    relative
                    z-10
                    flex
                    min-h-screen
                    items-center
                    px-10
                    lg:px-16
                    xl:px-20
                "
            >

                <div
                    className="
                        max-w-[520px]
                        animate-[categoryItemIn_650ms_cubic-bezier(0.22,1,0.36,1)_both]
                    "
                >

                    {/* Small label */}

                    <div
                        className="
                            mb-6
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/15
                            bg-white/10
                            px-4
                            py-2
                            text-[12px]
                            font-medium
                            text-white/90
                            backdrop-blur-sm
                        "
                    >

                        <Sparkles
                            size={14}
                            strokeWidth={1.7}
                        />

                        Fresh groceries, delivered

                    </div>


                    {/* Main heading */}

                    <h2
                        className="
                            text-[42px]
                            font-bold
                            leading-[1.08]
                            tracking-[-1px]
                            text-white

                            lg:text-[48px]

                            xl:text-[54px]
                        "
                    >
                        Welcome back
                        <br />
                        to InstantMart.
                    </h2>


                    {/* Description */}

                    <p
                        className="
                            mt-5
                            max-w-[450px]
                            text-[15px]
                            leading-[24px]
                            text-white/70
                        "
                    >
                        Fresh groceries, everyday essentials and
                        everything you need — delivered straight to
                        your doorstep.
                    </p>


                    {/* Feature */}

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
                                text-[var(--color-accent)]
                                backdrop-blur-sm
                            "
                        >

                            <ShoppingBasket
                                size={20}
                                strokeWidth={1.7}
                            />

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
                                    text-white/55
                                "
                            >
                                Everything at your fingertips.
                            </p>

                        </div>

                    </div>


                    {/* Bottom indicator */}

                    <div
                        className="
                            mt-10
                            flex
                            items-center
                            gap-2
                            text-[12px]
                            font-medium
                            text-white/55
                        "
                    >

                        Continue shopping

                        <ArrowRight
                            size={14}
                            strokeWidth={1.8}
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};


export default LoginBranding;