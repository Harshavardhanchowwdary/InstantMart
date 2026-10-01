import React from "react";
import {
    Star,
    Quote,
    BadgeCheck,
    UserRound,
} from "lucide-react";


import {customerReviews} from "../../../assets/assets";


const CustomerReviews = () => {

    return (
        <section
            className="
                w-full
                bg-[var(--color-background)]
                px-0
                py-10
                mt-10
                sm:py-12
                lg:py-14
            "
        >

            {/* =====================================================
                HEADER
            ====================================================== */}

            <div
                className="
                    mx-auto
                    mb-8
                    max-w-[700px]
                    text-center
                "
            >

                <span
                    className="
                        inline-flex
                        items-center
                        gap-1.5
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[2px]
                        text-[var(--color-accent)]
                    "
                >
                    <span
                        className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-[var(--color-accent)]
                        "
                    />

                    Customer love
                </span>


                <h2
                    className="
                        mt-2
                        text-[26px]
                        font-bold
                        tracking-[-0.7px]
                        text-[var(--color-text-primary)]
                        sm:text-[30px]
                        lg:text-[34px]
                    "
                >
                    What our customers say
                </h2>


                <p
                    className="
                        mx-auto
                        mt-2
                        max-w-[580px]
                        text-[11px]
                        leading-5
                        text-[var(--color-text-secondary)]
                        sm:text-[12px]
                    "
                >
                    Real experiences from customers who shop fresh
                    with InstantMart.
                </p>

            </div>


            {/* =====================================================
                REVIEW GRID
            ====================================================== */}

            <div
                className="
                    grid
                    grid-cols-1
                    gap-4
                    sm:grid-cols-2
                    lg:grid-cols-3
                "
            >

                {customerReviews.map((customer, index) => (

                    <article
                        key={customer.id}
                        className="
                            group
                            relative
                            overflow-hidden
                            rounded-[16px]
                            border
                            border-[var(--color-border-light)]
                            bg-[var(--color-surface)]
                            p-5
                            transition-all
                            duration-300
                            ease-out

                            hover:-translate-y-1
                            hover:border-[#ffb47a]
                            hover:shadow-[0_12px_30px_rgba(0,69,33,0.09)]
                        "
                    >

                        {/* =================================================
                            ORANGE HOVER ACCENT
                        ================================================== */}

                        <div
                            className="
                                absolute
                                left-0
                                top-0
                                h-[3px]
                                w-0
                                bg-[var(--color-accent)]
                                transition-all
                                duration-500
                                ease-out
                                group-hover:w-full
                            "
                        />


                        {/* =================================================
                            QUOTE ICON
                        ================================================== */}

                        <div
                            className="
                                absolute
                                right-5
                                top-5
                                opacity-10
                                transition-all
                                duration-300
                                group-hover:scale-110
                                group-hover:opacity-20
                            "
                        >
                            <Quote
                                size={32}
                                fill="currentColor"
                            />
                        </div>


                        {/* =================================================
                            CUSTOMER
                        ================================================== */}

                        <div
                            className="
                                relative
                                z-10
                                flex
                                items-center
                                gap-3
                            "
                        >

                            {/* Avatar */}

                            <div
                                className={`
                                    flex
                                    h-11
                                    w-11
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    ${customer.avatarBg}
                                    text-[var(--color-primary)]
                                    ring-2
                                    ring-white
                                    shadow-sm
                                    transition-transform
                                    duration-300
                                    group-hover:scale-105
                                `}
                            >
                                <UserRound
                                    size={21}
                                    strokeWidth={1.8}
                                />
                            </div>


                            {/* Name */}

                            <div className="min-w-0">

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-1
                                    "
                                >

                                    <h3
                                        className="
                                            truncate
                                            text-[13px]
                                            font-bold
                                            text-[var(--color-text-primary)]
                                        "
                                    >
                                        {customer.name}
                                    </h3>

                                    <BadgeCheck
                                        size={13}
                                        fill="var(--color-accent)"
                                        className="
                                            shrink-0
                                            text-white
                                        "
                                    />

                                </div>


                                <p
                                    className="
                                        mt-0.5
                                        text-[10px]
                                        text-[var(--color-text-muted)]
                                    "
                                >
                                    {customer.username}
                                </p>

                            </div>

                        </div>


                        {/* =================================================
                            RATING
                        ================================================== */}

                        <div
                            className="
                                mt-4
                                flex
                                items-center
                                gap-[2px]
                            "
                        >

                            {[1, 2, 3, 4, 5].map((star) => (

                                <Star
                                    key={star}
                                    size={13}
                                    strokeWidth={1.5}
                                    className={`
                                        transition-transform
                                        duration-200
                                        group-hover:scale-105
                                        ${
                                            star <= customer.rating
                                                ? "fill-[#f5a623] text-[#f5a623]"
                                                : "text-[#d9d9d9]"
                                        }
                                    `}
                                />

                            ))}

                            <span
                                className="
                                    ml-1
                                    text-[9px]
                                    font-medium
                                    text-[var(--color-text-muted)]
                                "
                            >
                                {customer.rating}.0
                            </span>

                        </div>


                        {/* =================================================
                            REVIEW
                        ================================================== */}

                        <p
                            className="
                                relative
                                z-10
                                mt-3
                                min-h-[58px]
                                text-[11px]
                                leading-[18px]
                                text-[var(--color-text-secondary)]
                                sm:text-[12px]
                            "
                        >
                            "{customer.review}"
                        </p>


                        {/* =================================================
                            VERIFIED
                        ================================================== */}

                        <div
                            className="
                                mt-4
                                flex
                                items-center
                                gap-1.5
                                border-t
                                border-[var(--color-border-light)]
                                pt-3
                            "
                        >

                            <BadgeCheck
                                size={12}
                                className="text-[var(--color-accent)]"
                            />

                            <span
                                className="
                                    text-[9px]
                                    font-medium
                                    text-[var(--color-text-muted)]
                                "
                            >
                                Verified customer
                            </span>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
};


export default CustomerReviews;