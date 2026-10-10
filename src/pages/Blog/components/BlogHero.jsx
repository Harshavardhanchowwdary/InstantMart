
import React from "react";
import { CalendarDays, Clock3, Leaf } from "lucide-react";

const BlogHero = ({ post }) => {
    if (!post) return null;

    return (
        <section className="grid lg:grid-cols-2">
            {/* Article image */}
            <div className="relative min-h-[280px] overflow-hidden bg-[var(--color-primary-light)] sm:min-h-[380px] lg:min-h-[480px]">
                <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/50 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-primary)]">
                    {post.category}
                </span>

                <span className="absolute bottom-6 left-6 h-[3px] w-14 rounded-full bg-[var(--color-accent)]" />
            </div>

            {/* Article heading */}
            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
                <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                    <span>{post.category}</span>
                    <span className="h-1 w-1 rounded-full bg-[var(--color-primary)]" />
                    <span>{post.readTime}</span>
                </div>

                <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[var(--color-primary-dark)] sm:text-4xl lg:text-[44px]">
                    {post.title}
                </h1>

                <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                    {post.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-xs text-[var(--color-text-muted)]">
                    <span className="flex items-center gap-2">
                        <CalendarDays size={15} />
                        {post.date}
                    </span>

                    <span className="flex items-center gap-2">
                        <Clock3 size={15} />
                        {post.readTime}
                    </span>

                    <span className="flex items-center gap-2">
                        <Leaf size={15} />
                        InstantMart
                    </span>
                </div>
            </div>
        </section>
    );
};

export default BlogHero;
