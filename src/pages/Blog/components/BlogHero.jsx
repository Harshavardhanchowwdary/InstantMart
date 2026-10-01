import React from "react";

import {
    CalendarDays,
    Clock3,
    Leaf,
} from "lucide-react";



const BlogHero = ({
    post,
}) => {

    if (!post) {
        return null;
    }



    return (

        <section
            className="
                grid
                overflow-hidden

                lg:grid-cols-[1.05fr_0.95fr]
            "
        >

            {/* =================================================
                IMAGE
            ================================================= */}

            <div
                className="
                    relative
                    min-h-[320px]
                    overflow-hidden

                    sm:min-h-[420px]

                    lg:min-h-[560px]
                "
            >

                <img
                    src={post.image}
                    alt={post.title}
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        animate-[blogImageFloat_16s_ease-in-out_infinite]
                    "
                />


                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-tr
                        from-[var(--color-primary-dark)]/75
                        via-[var(--color-primary)]/10
                        to-transparent
                    "
                />


                <div
                    className="
                        absolute
                        left-5
                        top-5
                        rounded-full
                        border
                        border-white/30
                        bg-white/15
                        px-3.5
                        py-2
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-white
                        backdrop-blur-md

                        sm:left-7
                        sm:top-7
                    "
                >
                    {post.category}
                </div>


                <span
                    className="
                        absolute
                        bottom-7
                        left-7
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
                        flex-wrap
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
                        {post.category}
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
                        {post.readTime}
                    </span>

                </div>



                <h1
                    className="
                        mt-5
                        text-[31px]
                        font-bold
                        leading-[1.08]
                        tracking-[-1.2px]
                        text-[var(--color-primary-dark)]

                        sm:text-[40px]

                        lg:text-[48px]
                    "
                >
                    {post.title}
                </h1>



                <p
                    className="
                        mt-5
                        max-w-[620px]
                        text-[13px]
                        leading-[1.9]
                        text-[var(--color-text-secondary)]

                        sm:text-[14px]

                        lg:text-[15px]
                    "
                >
                    {post.description}
                </p>



                <div
                    className="
                        mt-7
                        flex
                        flex-wrap
                        items-center
                        gap-x-5
                        gap-y-3
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
                            tracking-[0.08em]
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

                        {post.date}

                    </div>



                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.08em]
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

                        {post.readTime}

                    </div>



                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.08em]
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

                        InstantMart

                    </div>

                </div>

            </div>

        </section>
    );
};



export default BlogHero;