import React from "react";

import {
    ArrowRight,
    Clock3,
    Leaf,
    Sparkles,
} from "lucide-react";

import {
    useNavigate,
} from "react-router-dom";

import blogPosts, {
    tickerItems,
} from "./blogData";

import BlogBackground from "./components/BlogBackground";
import BlogCard from "./components/BlogCard";

import "./Blogs.css";



const Blogs = () => {

    const navigate =
        useNavigate();



    const featuredPost =
        blogPosts[0];



    const handleOpenArticle = (
        slug
    ) => {

        if (!slug) {
            return;
        }

        navigate(
            `/blogs/${slug}`
        );
    };



    const handleFeaturedKeyDown = (
        event
    ) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            handleOpenArticle(
                featuredPost.slug
            );
        }

    };



    return (

        <main
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[var(--color-background)]
            "
        >

            {/* =================================================
                BACKGROUND
            ================================================= */}

            <BlogBackground />



            {/* =================================================
                CONTENT
            ================================================= */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    w-full
                    max-w-[1488px]
                    px-5
                    pb-20
                    pt-8

                    sm:px-8
                    sm:pt-10

                    lg:px-12
                    lg:pt-12

                    xl:px-[72px]
                "
            >

                {/* =================================================
                    HEADER
                ================================================= */}

                <header
                    className="
                        border-b
                        border-[var(--color-border)]
                        pb-7
                        animate-[blogHeaderReveal_700ms_cubic-bezier(0.22,1,0.36,1)_both]
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.22em]
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

                        Stories & Guides

                    </div>



                    <div
                        className="
                            mt-3
                            flex
                            flex-col
                            gap-5

                            md:flex-row
                            md:items-end
                            md:justify-between
                        "
                    >

                        <div>

                            <h1
                                className="
                                    text-[40px]
                                    font-bold
                                    leading-none
                                    tracking-[-1.8px]
                                    text-[var(--color-primary-dark)]

                                    sm:text-[50px]

                                    lg:text-[58px]
                                "
                            >
                                Fresh Journal
                            </h1>



                            <p
                                className="
                                    mt-4
                                    max-w-[520px]
                                    text-[13px]
                                    leading-[1.8]
                                    text-[var(--color-text-secondary)]

                                    sm:text-[14px]
                                "
                            >
                                Fresh ideas, smarter grocery habits
                                and simple inspiration for everyday
                                living.
                            </p>

                        </div>



                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                text-[11px]
                                font-medium
                                text-[var(--color-text-secondary)]
                            "
                        >

                            <Leaf
                                size={15}
                                strokeWidth={1.7}
                                className="
                                    text-[var(--color-primary)]
                                "
                            />

                            Curated by InstantMart

                        </div>

                    </div>

                </header>



                {/* =================================================
                    TOP TICKER
                ================================================= */}

                <section
                    className="
                        relative
                        overflow-hidden
                        border-b
                        border-[var(--color-border)]
                    "
                >

                    <div
                        className="
                            flex
                            w-max
                            animate-[blogTicker_28s_linear_infinite]
                        "
                    >

                        {[
                            ...tickerItems,
                            ...tickerItems,
                        ].map(
                            (
                                item,
                                index
                            ) => (

                                <div
                                    key={
                                        `${item}-${index}`
                                    }
                                    className="
                                        flex
                                        items-center
                                        gap-5
                                        whitespace-nowrap
                                        py-4
                                        pr-5
                                    "
                                >

                                    <span
                                        className="
                                            text-[10px]
                                            font-bold
                                            uppercase
                                            tracking-[0.18em]
                                            text-[var(--color-primary)]
                                        "
                                    >
                                        {item}
                                    </span>


                                    <span
                                        className="
                                            h-1
                                            w-1
                                            rounded-full
                                            bg-[var(--color-accent)]
                                        "
                                    />

                                </div>

                            )
                        )}

                    </div>

                </section>



                {/* =================================================
                    FEATURED ARTICLE
                ================================================= */}

                <section
                    className="
                        py-10
                        lg:py-14
                    "
                >

                    <article
                        onClick={() =>
                            handleOpenArticle(
                                featuredPost.slug
                            )
                        }
                        onKeyDown={
                            handleFeaturedKeyDown
                        }
                        role="link"
                        tabIndex={0}
                        className="
                            group
                            grid
                            cursor-pointer
                            overflow-hidden
                            rounded-[24px]
                            border
                            border-[var(--color-border-light)]
                            bg-white
                            shadow-[0_15px_55px_rgba(0,69,33,0.07)]
                            transition-all
                            duration-500
                            hover:-translate-y-1
                            hover:shadow-[0_22px_65px_rgba(0,69,33,0.11)]
                            focus:outline-none
                            focus:ring-2
                            focus:ring-[var(--color-primary)]/20

                            lg:grid-cols-[1.2fr_0.8fr]
                        "
                    >

                        {/* =================================================
                            IMAGE
                        ================================================= */}

                        <div
                            className="
                                relative
                                min-h-[300px]
                                overflow-hidden

                                sm:min-h-[400px]

                                lg:min-h-[500px]
                            "
                        >

                            <img
                                src={
                                    featuredPost.image
                                }
                                alt={
                                    featuredPost.title
                                }
                                className="
                                    absolute
                                    inset-0
                                    h-full
                                    w-full
                                    object-cover
                                    scale-[1.02]
                                    animate-[blogImageFloat_16s_ease-in-out_infinite]
                                    transition-transform
                                    duration-[1400ms]
                                    group-hover:scale-[1.07]
                                "
                            />


                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-tr
                                    from-[var(--color-primary-dark)]/70
                                    via-[var(--color-primary)]/10
                                    to-transparent
                                "
                            />


                            <div
                                className="
                                    absolute
                                    left-5
                                    top-5
                                    flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-white/30
                                    bg-white/15
                                    px-3.5
                                    py-2
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.13em]
                                    text-white
                                    backdrop-blur-md
                                "
                            >

                                <Sparkles
                                    size={13}
                                    strokeWidth={1.7}
                                />

                                Featured story

                            </div>


                            <span
                                className="
                                    absolute
                                    bottom-6
                                    left-6
                                    h-[3px]
                                    w-16
                                    rounded-full
                                    bg-[var(--color-accent)]
                                    animate-[blogAccentPulse_3s_ease-in-out_infinite]
                                "
                            />

                        </div>



                        {/* =================================================
                            CONTENT
                        ================================================= */}

                        <div
                            className="
                                flex
                                flex-col
                                justify-center
                                p-7

                                sm:p-9

                                lg:p-12

                                xl:p-14
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.16em]
                                    text-[var(--color-accent)]
                                "
                            >

                                <span>
                                    {
                                        featuredPost.category
                                    }
                                </span>


                                <span
                                    className="
                                        h-1
                                        w-1
                                        rounded-full
                                        bg-[var(--color-primary)]
                                    "
                                />


                                <span>
                                    {
                                        featuredPost.readTime
                                    }
                                </span>

                            </div>



                            <h2
                                className="
                                    mt-5
                                    max-w-[560px]
                                    text-[30px]
                                    font-bold
                                    leading-[1.08]
                                    tracking-[-1px]
                                    text-[var(--color-primary-dark)]

                                    sm:text-[38px]

                                    lg:text-[44px]
                                "
                            >
                                {
                                    featuredPost.title
                                }
                            </h2>



                            <p
                                className="
                                    mt-5
                                    max-w-[500px]
                                    text-[13px]
                                    leading-[1.9]
                                    text-[var(--color-text-secondary)]

                                    sm:text-[14px]
                                "
                            >
                                {
                                    featuredPost.description
                                }
                            </p>



                            <div
                                className="
                                    mt-7
                                    flex
                                    items-center
                                    gap-2
                                    text-[10px]
                                    text-[var(--color-text-muted)]
                                "
                            >

                                <Clock3
                                    size={14}
                                    strokeWidth={1.7}
                                />

                                {
                                    featuredPost.date
                                }

                            </div>



                            <button
                                type="button"
                                onClick={(event) => {

                                    event.stopPropagation();

                                    handleOpenArticle(
                                        featuredPost.slug
                                    );

                                }}
                                className="
                                    group/button
                                    mt-8
                                    flex
                                    w-fit
                                    items-center
                                    gap-3
                                    rounded-[10px]
                                    bg-[var(--color-primary)]
                                    px-5
                                    py-3
                                    text-[11px]
                                    font-bold
                                    uppercase
                                    tracking-[0.08em]
                                    text-white
                                    shadow-[0_10px_25px_rgba(0,69,33,0.15)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:bg-[var(--color-primary-dark)]
                                "
                            >

                                Read article

                                <ArrowRight
                                    size={15}
                                    strokeWidth={1.8}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover/button:translate-x-1
                                    "
                                />

                            </button>

                        </div>

                    </article>

                </section>



                {/* =================================================
                    SECTION HEADER
                ================================================= */}

                <div
                    className="
                        mb-7
                        flex
                        items-end
                        justify-between
                    "
                >

                    <div>

                        <p
                            className="
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-[var(--color-accent)]
                            "
                        >
                            Explore more
                        </p>


                        <h2
                            className="
                                mt-2
                                text-[25px]
                                font-bold
                                tracking-[-0.8px]
                                text-[var(--color-primary-dark)]
                            "
                        >
                            Fresh from the journal
                        </h2>

                    </div>



                    <span
                        className="
                            hidden
                            text-[11px]
                            text-[var(--color-text-muted)]

                            sm:block
                        "
                    >
                        {
                            blogPosts.length - 1
                        } stories
                    </span>

                </div>



                {/* =================================================
                    BLOG GRID
                ================================================= */}

                <section
                    className="
                        grid
                        grid-cols-1
                        gap-5

                        sm:grid-cols-2

                        lg:grid-cols-3
                    "
                >

                    {
                        blogPosts
                            .slice(1)
                            .map(
                                (
                                    post,
                                    index
                                ) => (

                                    <BlogCard
                                        key={post.id}
                                        blog={post}
                                        index={index}
                                    />

                                )
                            )
                    }

                </section>



                {/* =================================================
                    BOTTOM TICKER
                ================================================= */}

                <div
                    className="
                        relative
                        mt-16
                        overflow-hidden
                        rounded-[18px]
                        border
                        border-[var(--color-primary)]/10
                        bg-[var(--color-primary-light)]
                        py-5
                    "
                >

                    <div
                        className="
                            flex
                            w-max
                            animate-[blogTickerReverse_30s_linear_infinite]
                        "
                    >

                        {[
                            ...tickerItems,
                            ...tickerItems,
                        ].map(
                            (
                                item,
                                index
                            ) => (

                                <div
                                    key={
                                        `${item}-bottom-${index}`
                                    }
                                    className="
                                        flex
                                        items-center
                                        gap-5
                                        pr-5
                                        whitespace-nowrap
                                    "
                                >

                                    <span
                                        className="
                                            text-[10px]
                                            font-bold
                                            uppercase
                                            tracking-[0.18em]
                                            text-[var(--color-primary)]
                                        "
                                    >
                                        {item}
                                    </span>


                                    <span
                                        className="
                                            h-1
                                            w-1
                                            rounded-full
                                            bg-[var(--color-accent)]
                                        "
                                    />

                                </div>

                            )
                        )}

                    </div>

                </div>

            </div>

        </main>
    );
};



export default Blogs;