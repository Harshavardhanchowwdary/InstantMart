import React, {
    useState,
} from "react";

import {
    ArrowRight,
    ChevronRight,
    CircleHelp,
    FileText,
    MessageCircle,
    Search,
    ShieldCheck,
    ShoppingBag,
    Truck,
    UserRound,
} from "lucide-react";

import {
    dummyProducts,
} from "../../assets/assets";


const HelpCenter = () => {

    const heroProducts = dummyProducts.slice(0, 3);


    const [openFaq, setOpenFaq] = useState(1);


    const helpCategories = [
        {
            icon: ShoppingBag,
            title: "Orders & Shopping",
            description:
                "Track orders, manage purchases and get help with your shopping experience.",
            count: "12 articles",
        },
        {
            icon: Truck,
            title: "Delivery & Tracking",
            description:
                "Find answers about delivery status, timing, tracking and delivery issues.",
            count: "9 articles",
        },
        {
            icon: UserRound,
            title: "Account & Profile",
            description:
                "Manage your account, profile details, addresses and preferences.",
            count: "8 articles",
        },
        {
            icon: ShieldCheck,
            title: "Payments & Security",
            description:
                "Learn about payments, refunds, transactions and account security.",
            count: "11 articles",
        },
        {
            icon: FileText,
            title: "Policies & Returns",
            description:
                "Understand returns, cancellations and important store policies.",
            count: "7 articles",
        },
        {
            icon: MessageCircle,
            title: "Contact Support",
            description:
                "Can't find what you need? Connect directly with our support team.",
            count: "Live support",
        },
    ];


    const faqItems = [
        {
            question: "How can I track my order?",
            answer:
                "You can track your order from the Orders section of your account. Open the order to view its current status, delivery progress and expected arrival.",
        },
        {
            question: "How do I cancel an order?",
            answer:
                "Open your order from the Orders section and select the cancellation option if the order is still eligible for cancellation.",
        },
        {
            question: "How can I change my delivery address?",
            answer:
                "You can manage saved delivery addresses from your account. For an active order, address changes depend on the current order and delivery status.",
        },
        {
            question: "Where can I find my previous orders?",
            answer:
                "Your completed and previous purchases are available in the My Orders section of your account.",
        },
        {
            question: "How do I request a refund?",
            answer:
                "Open the relevant order and follow the available refund or support options. Our support team can also help with order-related refund requests.",
        },
    ];


    return (

        <main
            className="
                min-h-screen
                overflow-hidden
                bg-[var(--color-background)]
                text-[var(--color-text-primary)]
            "
        >

            {/* =================================================
                HERO SECTION
               ================================================= */}

            <section
                className="
                    relative
                    overflow-hidden
                    bg-[var(--color-primary)]
                    px-5
                    pb-24
                    pt-10

                    sm:px-8
                    sm:pb-28
                    sm:pt-12

                    lg:px-14
                    lg:pb-32
                    lg:pt-14
                "
            >

                {/* Background dots */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        opacity-30
                        bg-[radial-gradient(circle,rgba(255,255,255,0.18)_1px,transparent_1px)]
                        [background-size:26px_26px]
                        [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]
                    "
                />


                {/* Background glow */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -left-[120px]
                        -top-[100px]
                        h-[330px]
                        w-[330px]
                        rounded-full
                        bg-[var(--color-primary-dark)]
                        opacity-60
                        blur-3xl
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        -bottom-[150px]
                        right-[8%]
                        h-[360px]
                        w-[360px]
                        rounded-full
                        bg-[var(--color-accent)]
                        opacity-[0.08]
                        blur-[100px]
                    "
                />


                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        max-w-[1280px]
                    "
                >

                    {/* Help Center badge */}

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/15
                            bg-white/[0.07]
                            px-4
                            py-2
                            text-[12px]
                            font-semibold
                            tracking-[0.4px]
                            text-white
                            animate-[categoryItemIn_500ms_cubic-bezier(0.22,1,0.36,1)_both]
                        "
                    >

                        <CircleHelp
                            size={15}
                            strokeWidth={1.8}
                        />

                        Help Center

                    </div>


                    {/* Hero content */}

                    <div
                        className="
                            mt-9
                            grid
                            items-center
                            gap-12

                            lg:grid-cols-[1fr_470px]
                            lg:gap-20
                        "
                    >

                        {/* Hero text */}

                        <div
                            className="
                                animate-[categoryItemIn_550ms_cubic-bezier(0.22,1,0.36,1)_100ms_both]
                            "
                        >

                            <span
                                className="
                                    text-[12px]
                                    font-semibold
                                    uppercase
                                    tracking-[2px]
                                    text-[var(--color-accent-light)]
                                "
                            >
                                We're here to help
                            </span>


                            <h1
                                className="
                                    mt-4
                                    max-w-[650px]
                                    text-[40px]
                                    font-bold
                                    leading-[1.08]
                                    tracking-[-1.2px]
                                    text-white

                                    sm:text-[48px]

                                    lg:text-[58px]
                                "
                            >
                                How can we
                                <br />
                                help you today?
                            </h1>


                            <p
                                className="
                                    mt-5
                                    max-w-[570px]
                                    text-[15px]
                                    leading-[24px]
                                    text-white/70
                                "
                            >
                                Find answers about orders, delivery,
                                payments and your account — all in one
                                place.
                            </p>


                            {/* Search */}

                            <div
                                className="
                                    mt-8
                                    flex
                                    h-[58px]
                                    max-w-[650px]
                                    items-center
                                    gap-3
                                    rounded-[14px]
                                    border
                                    border-white/10
                                    bg-white
                                    px-5
                                    shadow-[0_18px_45px_rgba(0,0,0,0.16)]
                                "
                            >

                                <Search
                                    size={20}
                                    strokeWidth={1.8}
                                    className="
                                        shrink-0
                                        text-[var(--color-text-secondary)]
                                    "
                                />


                                <input
                                    type="text"
                                    placeholder="Search help articles..."
                                    className="
                                        min-w-0
                                        flex-1
                                        bg-transparent
                                        text-[14px]
                                        text-[var(--color-text-primary)]
                                        outline-none
                                        placeholder:text-[var(--color-text-muted)]
                                    "
                                />


                                <button
                                    type="button"
                                    className="
                                        hidden
                                        h-[40px]
                                        rounded-[9px]
                                        bg-[var(--color-accent)]
                                        px-5
                                        text-[13px]
                                        font-semibold
                                        text-white
                                        transition-all
                                        duration-300
                                        hover:-translate-y-[1px]
                                        hover:bg-[var(--color-accent-dark)]
                                        sm:block
                                    "
                                >
                                    Search
                                </button>

                            </div>

                        </div>


                        {/* =================================================
                            HERO PRODUCT VISUAL
                           ================================================= */}

                        <div
                            className="
                                relative
                                mx-auto
                                hidden
                                h-[330px]
                                w-full
                                max-w-[470px]

                                lg:block

                                animate-[categoryItemIn_600ms_cubic-bezier(0.22,1,0.36,1)_180ms_both]
                            "
                        >

                            {/* Main product circle */}

                            <div
                                className="
                                    absolute
                                    left-1/2
                                    top-1/2
                                    flex
                                    h-[245px]
                                    w-[245px]
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/[0.06]
                                    shadow-[0_30px_70px_rgba(0,0,0,0.18)]
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-[205px]
                                        w-[205px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-dashed
                                        border-white/20
                                    "
                                >

                                    {heroProducts[0]?.image && (
                                        <img
                                            src={heroProducts[0].image}
                                            alt=""
                                            className="
                                                h-[175px]
                                                w-[175px]
                                                object-contain
                                                drop-shadow-[0_18px_20px_rgba(0,0,0,0.22)]
                                            "
                                        />
                                    )}

                                </div>

                            </div>


                            {/* Top product */}

                            <div
                                className="
                                    absolute
                                    right-[35px]
                                    top-[8px]
                                    flex
                                    h-[112px]
                                    w-[112px]
                                    rotate-[8deg]
                                    items-center
                                    justify-center
                                    rounded-[24px]
                                    border
                                    border-white/30
                                    bg-[var(--color-accent-light)]
                                    shadow-[0_18px_35px_rgba(0,0,0,0.15)]
                                    animate-[categoryOrbFloat_7s_ease-in-out_infinite]
                                "
                            >

                                {heroProducts[1]?.image && (
                                    <img
                                        src={heroProducts[1].image}
                                        alt=""
                                        className="
                                            h-[85px]
                                            w-[85px]
                                            object-contain
                                        "
                                    />
                                )}

                            </div>


                            {/* Bottom product */}

                            <div
                                className="
                                    absolute
                                    bottom-[8px]
                                    left-[20px]
                                    flex
                                    h-[105px]
                                    w-[105px]
                                    rotate-[-8deg]
                                    items-center
                                    justify-center
                                    rounded-[22px]
                                    border
                                    border-white/20
                                    bg-[var(--color-primary-light)]
                                    shadow-[0_18px_35px_rgba(0,0,0,0.15)]
                                    animate-[categoryOrbFloat_8s_ease-in-out_-3s_infinite]
                                "
                            >

                                {heroProducts[2]?.image && (
                                    <img
                                        src={heroProducts[2].image}
                                        alt=""
                                        className="
                                            h-[78px]
                                            w-[78px]
                                            object-contain
                                        "
                                    />
                                )}

                            </div>


                            {/* Accent dots */}

                            <span
                                className="
                                    absolute
                                    left-[40px]
                                    top-[70px]
                                    h-[10px]
                                    w-[10px]
                                    rounded-full
                                    bg-[var(--color-accent)]
                                    shadow-[0_0_0_6px_rgba(255,107,0,0.12)]
                                "
                            />

                            <span
                                className="
                                    absolute
                                    bottom-[60px]
                                    right-[5px]
                                    h-[7px]
                                    w-[7px]
                                    rounded-full
                                    bg-white/50
                                "
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                HELP CATEGORIES
               ================================================= */}

            <section
                className="
                    relative
                    z-20
                    mx-auto
                    -mt-10
                    max-w-[1280px]
                    px-5

                    sm:px-8

                    lg:px-0
                "
            >

                <div
                    className="
                        grid
                        gap-4

                        sm:grid-cols-2

                        lg:grid-cols-3
                    "
                >

                    {helpCategories.map(
                        (
                            category,
                            index
                        ) => {

                            const Icon =
                                category.icon;

                            return (

                                <button
                                    key={
                                        category.title
                                    }
                                    type="button"
                                    style={{
                                        "--help-delay":
                                            `${index * 70}ms`,
                                    }}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-[18px]
                                        border
                                        border-[var(--color-border-light)]
                                        bg-[var(--color-surface)]
                                        p-5
                                        text-left

                                        shadow-[0_7px_22px_rgba(24,51,40,0.045)]

                                        transition-all
                                        duration-300

                                        hover:-translate-y-1
                                        hover:border-[var(--color-primary)]
                                        hover:shadow-[0_16px_35px_rgba(0,69,33,0.10)]

                                        animate-[categoryItemIn_550ms_cubic-bezier(0.22,1,0.36,1)_var(--help-delay)_both]
                                    "
                                >

                                    {/* Top accent */}

                                    <span
                                        className="
                                            absolute
                                            left-0
                                            top-0
                                            h-[3px]
                                            w-0
                                            bg-[var(--color-accent)]
                                            transition-all
                                            duration-400
                                            group-hover:w-full
                                        "
                                    />


                                    <div
                                        className="
                                            flex
                                            items-start
                                            justify-between
                                        "
                                    >

                                        <span
                                            className="
                                                flex
                                                h-[46px]
                                                w-[46px]
                                                items-center
                                                justify-center
                                                rounded-[13px]
                                                bg-[var(--color-primary-light)]
                                                text-[var(--color-primary)]
                                                transition-all
                                                duration-300
                                                group-hover:bg-[var(--color-primary)]
                                                group-hover:text-white
                                            "
                                        >

                                            <Icon
                                                size={21}
                                                strokeWidth={1.7}
                                            />

                                        </span>


                                        <ArrowRight
                                            size={18}
                                            strokeWidth={1.7}
                                            className="
                                                text-[var(--color-text-muted)]
                                                transition-all
                                                duration-300
                                                group-hover:translate-x-1
                                                group-hover:text-[var(--color-accent)]
                                            "
                                        />

                                    </div>


                                    <h3
                                        className="
                                            mt-5
                                            text-[16px]
                                            font-semibold
                                            text-[var(--color-text-primary)]
                                        "
                                    >
                                        {category.title}
                                    </h3>


                                    <p
                                        className="
                                            mt-2
                                            min-h-[48px]
                                            text-[13px]
                                            leading-[20px]
                                            text-[var(--color-text-secondary)]
                                        "
                                    >
                                        {category.description}
                                    </p>


                                    <span
                                        className="
                                            mt-4
                                            block
                                            text-[12px]
                                            font-semibold
                                            text-[var(--color-accent)]
                                        "
                                    >
                                        {category.count}
                                    </span>

                                </button>

                            );
                        }
                    )}

                </div>

            </section>


            {/* =================================================
                FAQ SECTION
               ================================================= */}

            <section
                className="
                    mx-auto
                    max-w-[1280px]
                    px-5
                    pb-20
                    pt-16

                    sm:px-8
                    sm:pt-20

                    lg:px-0
                    lg:pt-24
                "
            >

                <div
                    className="
                        grid
                        items-center
                        gap-10

                        md:grid-cols-[0.85fr_1.15fr]
                        md:gap-12

                        lg:grid-cols-[460px_minmax(0,1fr)]
                        lg:gap-16
                    "
                >

                    {/* =================================================
                        FAQ VISUAL
                       ================================================= */}

                    <div
                        className="
                            relative
                            mx-auto
                            w-full
                            max-w-[460px]

                            animate-[categoryItemIn_600ms_cubic-bezier(0.22,1,0.36,1)_both]
                        "
                    >

                        <div
                            className="
                                relative
                                aspect-[4/4.25]
                                overflow-hidden
                                rounded-[24px]
                                border
                                border-[var(--color-border-light)]
                                bg-[var(--color-primary-light)]
                                shadow-[0_18px_45px_rgba(0,69,33,0.10)]
                            "
                        >

                            {/* Soft glows */}

                            <span
                                className="
                                    pointer-events-none
                                    absolute
                                    -left-[80px]
                                    -top-[70px]
                                    h-[230px]
                                    w-[230px]
                                    rounded-full
                                    bg-white
                                    opacity-70
                                    blur-3xl
                                "
                            />

                            <span
                                className="
                                    pointer-events-none
                                    absolute
                                    -bottom-[80px]
                                    -right-[70px]
                                    h-[240px]
                                    w-[240px]
                                    rounded-full
                                    bg-[var(--color-accent-light)]
                                    opacity-80
                                    blur-3xl
                                "
                            />


                            {/* Dotted pattern */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    opacity-30
                                    bg-[radial-gradient(circle,rgba(0,69,33,0.18)_1px,transparent_1px)]
                                    [background-size:20px_20px]
                                    [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_82%,transparent)]
                                "
                            />


                            {/* Main product */}

                            <div
                                className="
                                    absolute
                                    left-1/2
                                    top-1/2
                                    flex
                                    h-[250px]
                                    w-[250px]
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white
                                    bg-white/70
                                    shadow-[0_20px_50px_rgba(0,69,33,0.10)]
                                    backdrop-blur-sm

                                    sm:h-[275px]
                                    sm:w-[275px]
                                "
                            >

                                <div
                                    className="
                                        absolute
                                        inset-[18px]
                                        rounded-full
                                        border
                                        border-dashed
                                        border-[var(--color-accent)]
                                        opacity-50
                                        animate-[categoryRingSpin_14s_linear_infinite]
                                    "
                                />

                                {heroProducts[0]?.image && (
                                    <img
                                        src={heroProducts[0].image}
                                        alt="Featured grocery product"
                                        className="
                                            relative
                                            z-10
                                            h-[175px]
                                            w-[175px]
                                            object-contain
                                            drop-shadow-[0_18px_18px_rgba(24,51,40,0.16)]
                                            animate-[categoryOrbFloat_7s_ease-in-out_infinite]

                                            sm:h-[195px]
                                            sm:w-[195px]
                                        "
                                    />
                                )}

                            </div>


                            {/* Floating help icon */}

                            <div
                                className="
                                    absolute
                                    left-[22px]
                                    top-[25px]
                                    z-20
                                    flex
                                    h-[52px]
                                    w-[52px]
                                    items-center
                                    justify-center
                                    rounded-[15px]
                                    bg-[var(--color-primary)]
                                    text-[22px]
                                    font-semibold
                                    text-white
                                    shadow-[0_10px_25px_rgba(0,69,33,0.16)]
                                    animate-[categoryOrbFloat_9s_ease-in-out_-1s_infinite]
                                "
                            >
                                ?
                            </div>


                            {/* Floating product */}

                            <div
                                className="
                                    absolute
                                    right-[20px]
                                    top-[25px]
                                    z-20
                                    flex
                                    h-[82px]
                                    w-[82px]
                                    rotate-[8deg]
                                    items-center
                                    justify-center
                                    rounded-[18px]
                                    border
                                    border-white
                                    bg-white
                                    shadow-[0_12px_28px_rgba(0,69,33,0.12)]
                                    animate-[categoryOrbFloat_8s_ease-in-out_-2s_infinite]
                                "
                            >

                                {heroProducts[1]?.image && (
                                    <img
                                        src={heroProducts[1].image}
                                        alt="Grocery product"
                                        className="
                                            h-[64px]
                                            w-[64px]
                                            object-contain
                                        "
                                    />
                                )}

                            </div>


                            {/* Bottom product */}

                            <div
                                className="
                                    absolute
                                    bottom-[24px]
                                    right-[24px]
                                    z-20
                                    flex
                                    h-[78px]
                                    w-[78px]
                                    rotate-[-7deg]
                                    items-center
                                    justify-center
                                    rounded-[18px]
                                    border
                                    border-white
                                    bg-white
                                    shadow-[0_12px_28px_rgba(0,69,33,0.12)]
                                    animate-[categoryOrbFloat_8s_ease-in-out_-3s_infinite]
                                "
                            >

                                {heroProducts[2]?.image && (
                                    <img
                                        src={heroProducts[2].image}
                                        alt="Grocery product"
                                        className="
                                            h-[60px]
                                            w-[60px]
                                            object-contain
                                        "
                                    />
                                )}

                            </div>


                            {/* Help label */}

                            <div
                                className="
                                    absolute
                                    bottom-[25px]
                                    left-[22px]
                                    z-20
                                    rounded-[14px]
                                    border
                                    border-white
                                    bg-white
                                    px-4
                                    py-3
                                    shadow-[0_10px_25px_rgba(0,69,33,0.10)]
                                "
                            >

                                <p
                                    className="
                                        text-[12px]
                                        font-semibold
                                        text-[var(--color-primary)]
                                    "
                                >
                                    Need help?
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-[12px]
                                        text-[var(--color-text-secondary)]
                                    "
                                >
                                    We're here for you.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        FAQ CONTENT
                       ================================================= */}

                    <div
                        className="
                            w-full
                            animate-[categoryItemIn_600ms_cubic-bezier(0.22,1,0.36,1)_120ms_both]
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
                            FAQ's
                        </span>


                        <h2
                            className="
                                mt-2
                                text-[30px]
                                font-bold
                                leading-[1.12]
                                tracking-[-0.8px]
                                text-[var(--color-text-primary)]

                                sm:text-[36px]

                                lg:text-[42px]
                            "
                        >
                            Looking for answers?
                        </h2>


                        <p
                            className="
                                mt-3
                                max-w-[650px]
                                text-[13px]
                                leading-[21px]
                                text-[var(--color-text-secondary)]

                                sm:text-[14px]
                                sm:leading-[22px]
                            "
                        >
                            Find quick answers to common questions about
                            orders, delivery, payments and your InstantMart
                            account.
                        </p>


                        {/* FAQ Accordion */}

                        <div
                            className="
                                mt-7
                                w-full
                            "
                        >

                            {faqItems.map(
                                (
                                    faq,
                                    index
                                ) => {

                                    const isOpen =
                                        openFaq === index;

                                    return (

                                        <div
                                            key={
                                                faq.question
                                            }
                                            className="
                                                border-b
                                                border-[var(--color-border)]
                                            "
                                        >

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenFaq(
                                                        isOpen
                                                            ? -1
                                                            : index
                                                    )
                                                }
                                                aria-expanded={
                                                    isOpen
                                                }
                                                className="
                                                    group
                                                    flex
                                                    min-h-[68px]
                                                    w-full
                                                    items-center
                                                    justify-between
                                                    gap-5
                                                    py-4
                                                    text-left
                                                "
                                            >

                                                <span
                                                    className={`
                                                        text-[14px]
                                                        font-medium
                                                        leading-[20px]
                                                        transition-colors
                                                        duration-300

                                                        sm:text-[15px]

                                                        ${
                                                            isOpen
                                                                ? "text-[var(--color-primary)]"
                                                                : "text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)]"
                                                        }
                                                    `}
                                                >
                                                    {faq.question}
                                                </span>


                                                {/* Plus / Minus */}

                                                <span
                                                    className={`
                                                        relative
                                                        flex
                                                        h-[28px]
                                                        w-[28px]
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-full
                                                        transition-all
                                                        duration-300

                                                        ${
                                                            isOpen
                                                                ? "bg-[var(--color-primary)] text-white"
                                                                : "bg-[var(--color-primary-light)] text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white"
                                                        }
                                                    `}
                                                >

                                                    <span
                                                        className="
                                                            absolute
                                                            h-[1.5px]
                                                            w-[10px]
                                                            rounded-full
                                                            bg-current
                                                        "
                                                    />

                                                    <span
                                                        className={`
                                                            absolute
                                                            h-[10px]
                                                            w-[1.5px]
                                                            rounded-full
                                                            bg-current
                                                            transition-transform
                                                            duration-300

                                                            ${
                                                                isOpen
                                                                    ? "rotate-90"
                                                                    : "rotate-0"
                                                            }
                                                        `}
                                                    />

                                                </span>

                                            </button>


                                            {/* Answer */}

                                            <div
                                                className={`
                                                    grid
                                                    transition-[grid-template-rows,opacity]
                                                    duration-300
                                                    ease-out

                                                    ${
                                                        isOpen
                                                            ? "grid-rows-[1fr] opacity-100"
                                                            : "grid-rows-[0fr] opacity-0"
                                                    }
                                                `}
                                            >

                                                <div
                                                    className="
                                                        min-h-0
                                                        overflow-hidden
                                                    "
                                                >

                                                    <p
                                                        className="
                                                            max-w-[650px]
                                                            pb-5
                                                            pr-10
                                                            text-[13px]
                                                            leading-[21px]
                                                            text-[var(--color-text-secondary)]

                                                            sm:text-[14px]
                                                            sm:leading-[22px]
                                                        "
                                                    >
                                                        {faq.answer}
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    );

                                }
                            )}

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                SUPPORT CTA
               ================================================= */}

            <section
                className="
                    mx-auto
                    max-w-[1280px]
                    px-5
                    pb-20

                    sm:px-8

                    lg:px-0
                "
            >

                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[22px]
                        bg-[var(--color-primary)]
                        px-7
                        py-8

                        sm:px-10
                        sm:py-10
                    "
                >

                    {/* Decorative rings */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-[80px]
                            -top-[100px]
                            h-[260px]
                            w-[260px]
                            rounded-full
                            border
                            border-white/10
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-[45px]
                            -top-[65px]
                            h-[190px]
                            w-[190px]
                            rounded-full
                            border
                            border-dashed
                            border-[var(--color-accent)]
                            opacity-40
                        "
                    />


                    <div
                        className="
                            relative
                            z-10
                            flex
                            flex-col
                            justify-between
                            gap-7

                            sm:flex-row
                            sm:items-center
                        "
                    >

                        <div>

                            <span
                                className="
                                    text-[12px]
                                    font-semibold
                                    uppercase
                                    tracking-[1.5px]
                                    text-[var(--color-accent-light)]
                                "
                            >
                                Still need help?
                            </span>


                            <h2
                                className="
                                    mt-2
                                    text-[25px]
                                    font-bold
                                    text-white
                                "
                            >
                                Talk to our support team.
                            </h2>


                            <p
                                className="
                                    mt-2
                                    max-w-[500px]
                                    text-[13px]
                                    leading-[20px]
                                    text-white/65
                                "
                            >
                                Tell us what you're facing and we'll
                                help you find the right solution.
                            </p>

                        </div>


                        <button
                            type="button"
                            className="
                                inline-flex
                                h-[46px]
                                shrink-0
                                items-center
                                justify-center
                                gap-2
                                rounded-[10px]
                                bg-white
                                px-6
                                text-[13px]
                                font-semibold
                                text-[var(--color-primary)]
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-[0_10px_25px_rgba(0,0,0,0.16)]
                            "
                        >
                            Contact Support

                            <ArrowRight
                                size={16}
                            />

                        </button>

                    </div>

                </div>

            </section>

        </main>
    );
};


export default HelpCenter;