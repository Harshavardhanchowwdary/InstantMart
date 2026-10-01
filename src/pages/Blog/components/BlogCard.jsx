import React from "react";

import {
    ArrowRight,
    ArrowUpRight,
} from "lucide-react";

import {
    useNavigate,
} from "react-router-dom";



const BlogCard = ({
    blog,
    index = 0,
}) => {

    const navigate =
        useNavigate();



    const handleOpenArticle = () => {

        if (!blog?.slug) {
            return;
        }

        navigate(
            `/blogs/${blog.slug}`
        );
    };



    const handleKeyDown = (
        event
    ) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            handleOpenArticle();
        }

    };



    return (

        <article
            onClick={
                handleOpenArticle
            }
            onKeyDown={
                handleKeyDown
            }
            role="link"
            tabIndex={0}
            className="
                group
                relative
                cursor-pointer
                overflow-hidden
                rounded-[20px]
                border
                border-[var(--color-border-light)]
                bg-white
                shadow-[0_8px_30px_rgba(0,69,33,0.045)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[var(--color-primary)]/20
                hover:shadow-[0_20px_45px_rgba(0,69,33,0.12)]
                animate-[blogCardReveal_700ms_cubic-bezier(0.22,1,0.36,1)_both]
                focus:outline-none
                focus:ring-2
                focus:ring-[var(--color-primary)]/20
            "
            style={{
                animationDelay:
                    `${index * 80}ms`,
            }}
        >

            {/* =================================================
                IMAGE
            ================================================= */}

            <div
                className="
                    relative
                    aspect-[16/10]
                    overflow-hidden
                    bg-[var(--color-primary-light)]
                "
            >

                <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-[1200ms]
                        ease-out
                        group-hover:scale-[1.06]
                    "
                />


                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[var(--color-primary-dark)]/60
                        via-transparent
                        to-transparent
                        opacity-50
                        transition-opacity
                        duration-500
                        group-hover:opacity-80
                    "
                />


                {/* Category */}

                <div
                    className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        border
                        border-white/50
                        bg-white/90
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[var(--color-primary)]
                        backdrop-blur-md
                    "
                >
                    {blog.category}
                </div>


                {/* Arrow */}

                <div
                    className="
                        absolute
                        bottom-4
                        right-4
                        flex
                        h-9
                        w-9
                        translate-y-2
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-[var(--color-primary)]
                        opacity-0
                        shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                        transition-all
                        duration-500
                        group-hover:translate-y-0
                        group-hover:opacity-100
                    "
                >

                    <ArrowUpRight
                        size={16}
                        strokeWidth={1.8}
                    />

                </div>

            </div>



            {/* =================================================
                CONTENT
            ================================================= */}

            <div
                className="
                    p-5
                    sm:p-6
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.12em]
                        text-[var(--color-text-muted)]
                    "
                >

                    <span>
                        {blog.readTime}
                    </span>


                    <span
                        className="
                            h-1
                            w-1
                            rounded-full
                            bg-[var(--color-accent)]
                        "
                    />


                    <span>
                        {blog.date}
                    </span>

                </div>



                <h3
                    className="
                        mt-3
                        text-[18px]
                        font-bold
                        leading-[1.25]
                        tracking-[-0.3px]
                        text-[var(--color-text-primary)]
                        transition-colors
                        duration-300
                        group-hover:text-[var(--color-primary)]
                        sm:text-[20px]
                    "
                >
                    {blog.title}
                </h3>



                <p
                    className="
                        mt-3
                        text-[12px]
                        leading-[1.8]
                        text-[var(--color-text-secondary)]
                        sm:text-[13px]
                    "
                >
                    {blog.description}
                </p>



                <div
                    className="
                        mt-5
                        flex
                        items-center
                        justify-between
                    "
                >

                    <span
                        className="
                            relative
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.1em]
                            text-[var(--color-primary)]
                        "
                    >

                        Read article

                        <span
                            className="
                                absolute
                                -bottom-1
                                left-0
                                h-px
                                w-0
                                bg-[var(--color-accent)]
                                transition-all
                                duration-500
                                group-hover:w-full
                            "
                        />

                    </span>



                    <ArrowRight
                        size={16}
                        strokeWidth={1.7}
                        className="
                            text-[var(--color-primary)]
                            transition-transform
                            duration-500
                            group-hover:translate-x-1
                        "
                    />

                </div>

            </div>

        </article>
    );
};



export default BlogCard;