import React from "react";

import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    Clock3,
    Leaf,
    Share2,
} from "lucide-react";

import {
    useNavigate,
    useParams,
} from "react-router-dom";

import blogPosts, {
    getBlogBySlug,
    getRelatedBlogs,
} from "./blogData";

import BlogBackground from "./components/BlogBackground";
import BlogHero from "./components/BlogHero";
import BlogTicker from "./components/BlogTicker";
import BlogCard from "./components/BlogCard";

import "./BlogDetails.css";



/* =========================================================
   BLOG DETAILS PAGE
========================================================= */

const BlogDetails = () => {

    const {
        slug,
    } = useParams();

    const navigate = useNavigate();



    /* =====================================================
       FIND CURRENT BLOG
    ===================================================== */

    const blogPost = getBlogBySlug(
        slug
    );



    /* =====================================================
       INVALID BLOG
    ===================================================== */

    if (!blogPost) {

        navigate(
            "/blogs",
            {
                replace: true,
            }
        );

        return null;
    }



    /* =====================================================
       RELATED BLOGS
    ===================================================== */

    const relatedPosts =
        getRelatedBlogs(
            blogPost.id,
            3
        );



    /* =====================================================
       HANDLERS
    ===================================================== */

    const handleBackToJournal = () => {

        navigate(
            "/blogs"
        );
    };



    const handleShare = async () => {

        const shareData = {
            title:
                blogPost.title,

            text:
                blogPost.description,

            url:
                window.location.href,
        };


        try {

            if (
                navigator.share
            ) {

                await navigator.share(
                    shareData
                );

                return;
            }


            if (
                navigator.clipboard
            ) {

                await navigator.clipboard.writeText(
                    window.location.href
                );

                return;
            }

        } catch (error) {

            /*
             * User cancelling native share
             * should not be treated as an
             * application error.
             */

            if (
                error?.name !==
                "AbortError"
            ) {

                console.error(
                    "Unable to share article:",
                    error
                );

            }

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
                ANIMATED BACKGROUND
            ================================================= */}

            <BlogBackground />



            {/* =================================================
                MAIN CONTENT
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
                    TOP NAVIGATION
                ================================================= */}

                <div
                    className="
                        mb-7
                        flex
                        items-center
                        justify-between
                        gap-4
                    "
                >

                    <button
                        type="button"
                        onClick={
                            handleBackToJournal
                        }
                        className="
                            group
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-[var(--color-border)]
                            bg-white/80
                            px-4
                            py-2.5
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-[var(--color-primary)]
                            backdrop-blur-md
                            transition-all
                            duration-300
                            hover:-translate-x-0.5
                            hover:border-[var(--color-primary)]/20
                            hover:bg-white
                        "
                    >

                        <ArrowLeft
                            size={14}
                            strokeWidth={1.8}
                            className="
                                transition-transform
                                duration-300
                                group-hover:-translate-x-0.5
                            "
                        />

                        Back to Journal

                    </button>



                    <button
                        type="button"
                        onClick={
                            handleShare
                        }
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[var(--color-border)]
                            bg-white/80
                            text-[var(--color-primary)]
                            backdrop-blur-md
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:border-[var(--color-primary)]/20
                            hover:bg-white
                        "
                        aria-label="Share article"
                        title="Share article"
                    >

                        <Share2
                            size={15}
                            strokeWidth={1.7}
                        />

                    </button>

                </div>



                {/* =================================================
                    ARTICLE HERO
                ================================================= */}

                <section
                    className="
                        overflow-hidden
                        rounded-[24px]
                        border
                        border-[var(--color-border-light)]
                        bg-white
                        shadow-[0_15px_55px_rgba(0,69,33,0.07)]
                        animate-[blogHeaderReveal_700ms_cubic-bezier(0.22,1,0.36,1)_both]
                    "
                >

                    <BlogHero
                        post={blogPost}
                    />

                </section>



                {/* =================================================
                    ARTICLE META
                ================================================= */}

                <div
                    className="
                        mx-auto
                        flex
                        max-w-[900px]
                        flex-wrap
                        items-center
                        gap-x-6
                        gap-y-3
                        border-b
                        border-[var(--color-border)]
                        px-1
                        py-6
                    "
                >

                    {/* Date */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.1em]
                            text-[var(--color-text-muted)]
                        "
                    >

                        <CalendarDays
                            size={14}
                            strokeWidth={1.7}
                            className="
                                text-[var(--color-primary)]
                            "
                        />

                        {blogPost.date}

                    </div>



                    {/* Reading time */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.1em]
                            text-[var(--color-text-muted)]
                        "
                    >

                        <Clock3
                            size={14}
                            strokeWidth={1.7}
                            className="
                                text-[var(--color-primary)]
                            "
                        />

                        {blogPost.readTime}

                    </div>



                    {/* Author / source */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.1em]
                            text-[var(--color-text-muted)]
                        "
                    >

                        <Leaf
                            size={14}
                            strokeWidth={1.7}
                            className="
                                text-[var(--color-primary)]
                            "
                        />

                        InstantMart Journal

                    </div>

                </div>



                {/* =================================================
                    ARTICLE CONTENT
                ================================================= */}

                <article
                    className="
                        mx-auto
                        max-w-[900px]
                        py-10

                        sm:py-12

                        lg:py-14
                    "
                >

                    {/* =================================================
                        INTRODUCTION
                    ================================================= */}

                    <p
                        className="
                            text-[17px]
                            font-medium
                            leading-[1.85]
                            tracking-[-0.15px]
                            text-[var(--color-text-primary)]

                            sm:text-[19px]
                        "
                    >
                        {
                            blogPost
                                .content
                                .introduction
                        }
                    </p>



                    {/* =================================================
                        ARTICLE SECTIONS
                    ================================================= */}

                    <div
                        className="
                            mt-10
                            space-y-10
                        "
                    >

                        {
                            blogPost
                                .content
                                .sections
                                .map(
                                    (
                                        section,
                                        index
                                    ) => (

                                        <section
                                            key={
                                                `${blogPost.id}-section-${index}`
                                            }
                                            className="
                                                animate-[blogArticleReveal_700ms_cubic-bezier(0.22,1,0.36,1)_both]
                                            "
                                            style={{
                                                animationDelay:
                                                    `${index * 90}ms`,
                                            }}
                                        >

                                            <div
                                                className="
                                                    flex
                                                    items-start
                                                    gap-4
                                                "
                                            >

                                                {/* Section number */}

                                                <span
                                                    className="
                                                        mt-1
                                                        flex
                                                        h-7
                                                        min-w-7
                                                        items-center
                                                        justify-center
                                                        rounded-full
                                                        bg-[var(--color-primary-light)]
                                                        text-[10px]
                                                        font-bold
                                                        text-[var(--color-primary)]
                                                    "
                                                >
                                                    {
                                                        String(
                                                            index + 1
                                                        ).padStart(
                                                            2,
                                                            "0"
                                                        )
                                                    }
                                                </span>



                                                <div
                                                    className="
                                                        min-w-0
                                                        flex-1
                                                    "
                                                >

                                                    <h2
                                                        className="
                                                            text-[23px]
                                                            font-bold
                                                            leading-[1.25]
                                                            tracking-[-0.5px]
                                                            text-[var(--color-primary-dark)]

                                                            sm:text-[27px]
                                                        "
                                                    >
                                                        {
                                                            section.title
                                                        }
                                                    </h2>



                                                    <div
                                                        className="
                                                            mt-4
                                                            space-y-4
                                                        "
                                                    >

                                                        {
                                                            section
                                                                .paragraphs
                                                                .map(
                                                                    (
                                                                        paragraph,
                                                                        paragraphIndex
                                                                    ) => (

                                                                        <p
                                                                            key={
                                                                                `${blogPost.id}-${index}-${paragraphIndex}`
                                                                            }
                                                                            className="
                                                                                text-[13px]
                                                                                leading-[1.9]
                                                                                text-[var(--color-text-secondary)]

                                                                                sm:text-[14px]
                                                                            "
                                                                        >
                                                                            {
                                                                                paragraph
                                                                            }
                                                                        </p>

                                                                    )
                                                                )
                                                        }

                                                    </div>

                                                </div>

                                            </div>

                                        </section>

                                    )
                                )
                        }

                    </div>



                    {/* =================================================
                        CONCLUSION
                    ================================================= */}

                    <div
                        className="
                            relative
                            mt-12
                            overflow-hidden
                            rounded-[20px]
                            border
                            border-[var(--color-primary)]/10
                            bg-[var(--color-primary-light)]
                            p-6

                            sm:p-8
                        "
                    >

                        <span
                            className="
                                absolute
                                -right-10
                                -top-10
                                h-28
                                w-28
                                rounded-full
                                bg-[var(--color-accent-light)]
                                opacity-70
                                blur-2xl
                            "
                        />


                        <div
                            className="
                                relative
                                z-10
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
                                    tracking-[0.18em]
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

                                Final Note

                            </div>


                            <p
                                className="
                                    mt-3
                                    text-[14px]
                                    font-medium
                                    leading-[1.8]
                                    text-[var(--color-primary-dark)]
                                "
                            >
                                {
                                    blogPost
                                        .content
                                        .conclusion
                                }
                            </p>

                        </div>

                    </div>

                </article>



                {/* =================================================
                    ARTICLE TICKER
                ================================================= */}

                <div
                    className="
                        mx-auto
                        max-w-[1100px]
                    "
                >

                    <BlogTicker />

                </div>



                {/* =================================================
                    RELATED ARTICLES
                ================================================= */}

                <section
                    className="
                        mx-auto
                        max-w-[1100px]
                        py-12

                        lg:py-16
                    "
                >

                    <div
                        className="
                            mb-7
                            flex
                            items-end
                            justify-between
                            gap-4
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
                                Keep exploring
                            </p>


                            <h2
                                className="
                                    mt-2
                                    text-[26px]
                                    font-bold
                                    tracking-[-0.8px]
                                    text-[var(--color-primary-dark)]

                                    sm:text-[30px]
                                "
                            >
                                More from the journal
                            </h2>

                        </div>



                        <button
                            type="button"
                            onClick={
                                handleBackToJournal
                            }
                            className="
                                hidden
                                items-center
                                gap-2
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.1em]
                                text-[var(--color-primary)]
                                transition-colors
                                duration-300
                                hover:text-[var(--color-accent)]

                                sm:flex
                            "
                        >

                            View all

                            <ArrowRight
                                size={14}
                                strokeWidth={1.8}
                            />

                        </button>

                    </div>



                    {/* Related cards */}

                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-5

                            sm:grid-cols-2

                            lg:grid-cols-3
                        "
                    >

                        {
                            relatedPosts.map(
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

                    </div>

                </section>



                {/* =================================================
                    BACK TO JOURNAL
                ================================================= */}

                <div
                    className="
                        flex
                        justify-center
                        pt-2
                    "
                >

                    <button
                        type="button"
                        onClick={
                            handleBackToJournal
                        }
                        className="
                            group
                            flex
                            items-center
                            gap-3
                            rounded-[10px]
                            bg-[var(--color-primary)]
                            px-5
                            py-3
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.1em]
                            text-white
                            shadow-[0_10px_25px_rgba(0,69,33,0.15)]
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-[var(--color-primary-dark)]
                        "
                    >

                        <ArrowLeft
                            size={14}
                            strokeWidth={1.8}
                            className="
                                transition-transform
                                duration-300
                                group-hover:-translate-x-1
                            "
                        />

                        Back to Fresh Journal

                    </button>

                </div>

            </div>

        </main>
    );
};


export default BlogDetails;