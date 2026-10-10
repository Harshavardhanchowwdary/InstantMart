
import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const navigate = useNavigate();

    const handleOpenArticle = () => {
        if (blog?.slug) {
            navigate(`/blogs/${blog.slug}`);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleOpenArticle();
        }
    };

    return (
        <article
            role="link"
            tabIndex={0}
            onClick={handleOpenArticle}
            onKeyDown={handleKeyDown}
            aria-label={`Read article: ${blog.title}`}
            className="
                group cursor-pointer overflow-hidden rounded-2xl
                border border-[var(--color-border-light)] bg-white
                transition-colors duration-200
                hover:border-[var(--color-primary)]/30
                focus:outline-none focus:ring-2
                focus:ring-[var(--color-primary)]/30
            "
        >
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-primary-light)]">
                <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    className="
                        h-full w-full object-cover
                        transition-transform duration-300
                        group-hover:scale-[1.03]
                        motion-reduce:transform-none
                    "
                />

                <span
                    className="
                        absolute left-4 top-4 rounded-full
                        bg-white px-3 py-1.5
                        text-[10px] font-bold uppercase tracking-[0.1em]
                        text-[var(--color-primary)]
                    "
                >
                    {blog.category}
                </span>
            </div>

            <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                    <span>{blog.readTime}</span>
                    <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                    <span>{blog.date}</span>
                </div>

                <h3 className="mt-3 text-lg font-bold leading-snug text-[var(--color-text-primary)] transition-colors duration-200 group-hover:text-[var(--color-primary)] sm:text-xl">
                    {blog.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                    {blog.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-primary)]">
                        Read article
                    </span>

                    <ArrowRight
                        size={16}
                        strokeWidth={1.8}
                        className="text-[var(--color-primary)] transition-transform duration-200 group-hover:translate-x-1"
                    />
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
