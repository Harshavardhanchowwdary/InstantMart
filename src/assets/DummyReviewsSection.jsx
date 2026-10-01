import React, {
    useMemo,
} from "react";

import {
    Star,
    ThumbsUp,
} from "lucide-react";


/* =========================================================
   DUMMY REVIEWERS
========================================================= */

const REVIEWERS = [
    {
        name: "Ananya S.",
        avatar: "AS",
    },
    {
        name: "Rahul M.",
        avatar: "RM",
    },
    {
        name: "Priya K.",
        avatar: "PK",
    },
    {
        name: "Vikram J.",
        avatar: "VJ",
    },
    {
        name: "Meera D.",
        avatar: "MD",
    },
    {
        name: "Arjun R.",
        avatar: "AR",
    },
    {
        name: "Sneha T.",
        avatar: "ST",
    },
    {
        name: "Karan P.",
        avatar: "KP",
    },
];


/* =========================================================
   DUMMY COMMENTS
========================================================= */

const COMMENTS = [
    "Absolutely love this product! Fresh and great quality. Will definitely order again.",

    "Good value for the price. Packaging was neat and delivery was on time.",

    "Quality is decent but I expected it to be a bit fresher. Still a solid buy overall.",

    "This has become a staple in my kitchen now. Highly recommended for everyone!",

    "Exceeded my expectations. The taste and freshness were top-notch. Five stars!",

    "Pretty good! Not the absolute best I've had, but definitely worth the price.",

    "Arrived in perfect condition. Very satisfied with the purchase, ordering more soon.",

    "Great product, my family loved it. The quality really shows in the taste.",
];


/* =========================================================
   SEEDED RANDOM
========================================================= */

function seededRandom(seed) {

    let hash = 0;

    for (
        let index = 0;
        index < seed.length;
        index++
    ) {

        hash =
            (
                Math.imul(
                    31,
                    hash
                ) +
                seed.charCodeAt(index)
            ) | 0;

    }

    return () => {

        hash =
            (
                hash ^
                (hash >>> 16)
            ) *
            0x45d9f3b;

        hash =
            (
                hash ^
                (hash >>> 16)
            ) *
            0x45d9f3b;

        hash ^=
            hash >>> 16;

        return (
            hash >>> 0
        ) /
        0xffffffff;

    };
}


/* =========================================================
   REVIEWS
========================================================= */

const DummyReviewsSection = ({
    product,
}) => {

    const reviews =
        useMemo(() => {

            const rng =
                seededRandom(
                    String(
                        product?._id ||
                        product?.id ||
                        "product"
                    )
                );

            const count =
                Math.min(
                    Number(
                        product?.reviewCount ||
                        0
                    ),
                    6
                );

            const daysAgo = [
                3,
                7,
                14,
                21,
                35,
                48,
            ];

            return Array.from(
                {
                    length: count,
                },
                (_, index) => {

                    const reviewer =
                        REVIEWERS[
                            (
                                Math.floor(
                                    rng() *
                                    REVIEWERS.length
                                ) +
                                index
                            ) %
                            REVIEWERS.length
                        ];


                    const rating =
                        Math.max(
                            3,
                            Math.min(
                                5,
                                Math.round(
                                    Number(
                                        product?.rating ||
                                        0
                                    ) +
                                    (
                                        rng() -
                                        0.5
                                    ) *
                                    2
                                )
                            )
                        );


                    const date =
                        new Date();

                    date.setDate(
                        date.getDate() -
                        daysAgo[
                            index %
                            daysAgo.length
                        ]
                    );


                    return {
                        id: index,

                        ...reviewer,

                        rating,

                        date:
                            date.toLocaleDateString(
                                "en-IN",
                                {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                }
                            ),

                        comment:
                            COMMENTS[
                                (
                                    Math.floor(
                                        rng() *
                                        COMMENTS.length
                                    ) +
                                    index
                                ) %
                                COMMENTS.length
                            ],

                        helpful:
                            Math.floor(
                                rng() * 20
                            ) + 1,
                    };

                }
            );

        }, [
            product,
        ]);


    /* =====================================================
       BREAKDOWN
    ===================================================== */

    const breakdown =
        useMemo(() => {

            const counts = [
                0,
                0,
                0,
                0,
                0,
            ];

            reviews.forEach(
                (review) => {

                    counts[
                        review.rating - 1
                    ]++;

                }
            );

            return counts.reverse();

        }, [
            reviews,
        ]);


    const maxCount =
        Math.max(
            ...breakdown,
            1
        );


    return (

        <section
            className="
                mt-10
            "
        >

            {/* =================================================
                HEADER
            ================================================= */}

            <div
                className="
                    mb-5
                    flex
                    items-end
                    justify-between
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
                        Customer feedback
                    </span>

                    <h2
                        className="
                            mt-1
                            text-xl
                            font-bold
                            text-[var(--color-text-primary)]

                            sm:text-2xl
                        "
                    >
                        Customer Reviews
                    </h2>

                </div>

                <span
                    className="
                        hidden
                        rounded-full
                        bg-[var(--color-primary-light)]
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        text-[var(--color-primary)]

                        sm:block
                    "
                >
                    {product.reviewCount} reviews
                </span>

            </div>


            {/* =================================================
                REVIEW BOX
            ================================================= */}

            <div
                className="
                    overflow-hidden
                    rounded-[18px]
                    border
                    border-[var(--color-border-light)]
                    bg-white
                    shadow-[0_8px_25px_rgba(24,51,40,0.045)]
                "
            >

                {/* =================================================
                    SUMMARY
                ================================================= */}

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-6
                        border-b
                        border-[var(--color-border-light)]
                        p-5

                        sm:p-7

                        md:grid-cols-[150px_minmax(0,1fr)]
                        md:gap-8
                    "
                >

                    {/* Average */}

                    <div
                        className="
                            flex
                            flex-col
                            items-center
                            justify-center
                            rounded-[14px]
                            bg-[var(--color-primary-light)]
                            py-5

                            md:py-4
                        "
                    >

                        <span
                            className="
                                text-4xl
                                font-bold
                                leading-none
                                text-[var(--color-primary)]
                            "
                        >
                            {product.rating}
                        </span>

                        <div
                            className="
                                mt-2
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
                                        size={13}
                                        className={
                                            star <=
                                            Math.round(
                                                Number(
                                                    product.rating ||
                                                    0
                                                )
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
                                mt-1
                                text-[9px]
                                text-[var(--color-text-secondary)]
                            "
                        >
                            Based on {product.reviewCount} reviews
                        </span>

                    </div>


                    {/* Breakdown */}

                    <div
                        className="
                            flex
                            flex-col
                            justify-center
                            gap-2
                        "
                    >

                        {breakdown.map(
                            (
                                count,
                                index
                            ) => (

                                <div
                                    key={index}
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                    "
                                >

                                    <span
                                        className="
                                            w-7
                                            shrink-0
                                            text-[9px]
                                            font-medium
                                            text-[var(--color-text-secondary)]
                                        "
                                    >
                                        {5 - index} ★
                                    </span>

                                    <div
                                        className="
                                            h-[5px]
                                            flex-1
                                            overflow-hidden
                                            rounded-full
                                            bg-[var(--color-border-light)]
                                        "
                                    >

                                        <div
                                            className="
                                                h-full
                                                rounded-full
                                                bg-[var(--color-accent)]
                                                transition-all
                                                duration-500
                                            "
                                            style={{
                                                width: `${
                                                    (
                                                        count /
                                                        maxCount
                                                    ) *
                                                    100
                                                }%`,
                                            }}
                                        />

                                    </div>

                                    <span
                                        className="
                                            w-5
                                            text-right
                                            text-[9px]
                                            text-[var(--color-text-muted)]
                                        "
                                    >
                                        {count}
                                    </span>

                                </div>

                            )
                        )}

                    </div>

                </div>


                {/* =================================================
                    REVIEWS
                ================================================= */}

                <div
                    className="
                        divide-y
                        divide-[var(--color-border-light)]
                    "
                >

                    {reviews.map(
                        (review) => (

                            <article
                                key={review.id}
                                className="
                                    flex
                                    gap-3
                                    p-5
                                    transition-colors
                                    duration-200
                                    hover:bg-[var(--color-primary-light)]/30

                                    sm:p-6
                                "
                            >

                                {/* Avatar */}

                                <div
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[var(--color-primary-light)]
                                        text-[9px]
                                        font-bold
                                        text-[var(--color-primary)]
                                    "
                                >
                                    {review.avatar}
                                </div>


                                {/* Content */}

                                <div
                                    className="
                                        min-w-0
                                        flex-1
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            flex-wrap
                                            items-center
                                            gap-x-2
                                            gap-y-1
                                        "
                                    >

                                        <span
                                            className="
                                                text-[10px]
                                                font-semibold
                                                text-[var(--color-text-primary)]
                                            "
                                        >
                                            {review.name}
                                        </span>

                                        <span
                                            className="
                                                text-[9px]
                                                text-[var(--color-text-muted)]
                                            "
                                        >
                                            ·
                                        </span>

                                        <span
                                            className="
                                                text-[9px]
                                                text-[var(--color-text-muted)]
                                            "
                                        >
                                            {review.date}
                                        </span>

                                    </div>


                                    {/* Stars */}

                                    <div
                                        className="
                                            mt-1
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
                                                    size={10}
                                                    className={
                                                        star <=
                                                        review.rating
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


                                    {/* Comment */}

                                    <p
                                        className="
                                            mt-2
                                            text-[10px]
                                            leading-5
                                            text-[var(--color-text-secondary)]
                                        "
                                    >
                                        {review.comment}
                                    </p>


                                    {/* Helpful */}

                                    <button
                                        type="button"
                                        className="
                                            mt-1.5
                                            flex
                                            items-center
                                            gap-1
                                            text-[9px]
                                            text-[var(--color-text-muted)]
                                            transition-colors
                                            duration-200
                                            hover:text-[var(--color-primary)]
                                        "
                                    >

                                        <ThumbsUp
                                            size={10}
                                        />

                                        Helpful (
                                        {review.helpful}
                                        )

                                    </button>

                                </div>

                            </article>

                        )
                    )}

                </div>

            </div>

        </section>
    );
};


export default DummyReviewsSection;