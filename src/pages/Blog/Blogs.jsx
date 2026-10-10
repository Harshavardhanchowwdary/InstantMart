
import React from "react";
import { ArrowRight, Clock3, Leaf, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

import blogPosts from "./blogData";
import BlogBackground from "./components/BlogBackground";
import BlogCard from "./components/BlogCard";
import BlogTicker from "./components/BlogTicker";

import "./Blogs.css";

const Blogs = () => {
    const navigate = useNavigate();
    const featuredPost = blogPosts[0];
    const otherPosts = blogPosts.slice(1);

    const openArticle = (slug) => {
        if (slug) {
            navigate(`/blogs/${slug}`);
        }
    };

    const handleFeaturedKeyDown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openArticle(featuredPost.slug);
        }
    };

    if (!featuredPost) {
        return (
            <main className="min-h-screen bg-[var(--color-background)] px-5 py-20 text-center">
                <h1 className="text-2xl font-bold text-[var(--color-primary-dark)]">
                    No stories available
                </h1>
                <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                    Please check back soon for fresh articles.
                </p>
            </main>
        );
    }

    return (
        <main className="blog-page-enter relative min-h-screen overflow-hidden bg-[var(--color-background)]">
            <BlogBackground />

            <div className="relative z-10 mx-auto w-full max-w-[1488px] px-5 pb-16 pt-8 sm:px-8 sm:pt-10 lg:px-12 lg:pt-12 xl:px-[72px]">
                {/* Page heading */}
                <header className="border-b border-[var(--color-border)] pb-7">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                        <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                        Stories & Guides
                    </div>

                    <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--color-primary-dark)] sm:text-5xl lg:text-[58px]">
                                Fresh Journal
                            </h1>

                            <p className="mt-4 max-w-[540px] text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                                Fresh ideas, smarter grocery habits and simple
                                inspiration for everyday living.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                            <Leaf
                                size={16}
                                className="text-[var(--color-primary)]"
                            />
                            Curated by InstantMart
                        </div>
                    </div>
                </header>

                {/* Static category strip */}
                <div className="mt-5">
                    <BlogTicker />
                </div>

                {/* Featured story */}
                <section className="py-9 sm:py-12">
                    <article
                        role="link"
                        tabIndex={0}
                        aria-label={`Read featured article: ${featuredPost.title}`}
                        onClick={() => openArticle(featuredPost.slug)}
                        onKeyDown={handleFeaturedKeyDown}
                        className="
                            group grid cursor-pointer overflow-hidden rounded-2xl
                            border border-[var(--color-border-light)] bg-white
                            transition-colors duration-200
                            hover:border-[var(--color-primary)]/30
                            focus:outline-none focus:ring-2
                            focus:ring-[var(--color-primary)]/30
                            lg:grid-cols-[1.15fr_0.85fr]
                        "
                    >
                        {/* Featured image */}
                        <div className="relative min-h-[280px] overflow-hidden bg-[var(--color-primary-light)] sm:min-h-[380px] lg:min-h-[460px]">
                            <img
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                className="
                                    absolute inset-0 h-full w-full object-cover
                                    transition-transform duration-300
                                    group-hover:scale-[1.03]
                                    motion-reduce:transform-none
                                "
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/45 via-transparent to-transparent" />

                            <span className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-primary)]">
                                <Sparkles size={13} />
                                Featured story
                            </span>

                            <span className="absolute bottom-6 left-6 h-[3px] w-16 rounded-full bg-[var(--color-accent)]" />
                        </div>

                        {/* Featured content */}
                        <div className="flex flex-col items-start justify-center p-6 sm:p-9 lg:p-12">
                            <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                                <span>{featuredPost.category}</span>
                                <span className="h-1 w-1 rounded-full bg-[var(--color-primary)]" />
                                <span>{featuredPost.readTime}</span>
                            </div>

                            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[var(--color-primary-dark)] sm:text-4xl lg:text-[44px]">
                                {featuredPost.title}
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                                {featuredPost.description}
                            </p>

                            <div className="mt-5 flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                                <Clock3 size={15} />
                                {featuredPost.date}
                            </div>

                            <button
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    openArticle(featuredPost.slug);
                                }}
                                className="
                                    mt-7 flex items-center gap-3 rounded-lg
                                    bg-[var(--color-primary)] px-5 py-3
                                    text-xs font-bold uppercase tracking-[0.08em]
                                    text-white transition-colors duration-200
                                    hover:bg-[var(--color-primary-dark)]
                                    focus:outline-none focus:ring-2
                                    focus:ring-[var(--color-accent)]
                                    focus:ring-offset-2
                                "
                            >
                                Read article
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </article>
                </section>

                {/* More articles */}
                <section>
                    <div className="mb-6 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                                Explore more
                            </p>

                            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-primary-dark)] sm:text-3xl">
                                Fresh from the journal
                            </h2>
                        </div>

                        <span className="hidden text-xs text-[var(--color-text-muted)] sm:block">
                            {otherPosts.length} stories
                        </span>
                    </div>

                    {otherPosts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {otherPosts.map((post) => (
                                <BlogCard key={post.id} blog={post} />
                            ))}
                        </div>
                    ) : (
                        <p className="rounded-xl border border-[var(--color-border)] bg-white p-6 text-sm text-[var(--color-text-secondary)]">
                            More stories will be available soon.
                        </p>
                    )}
                </section>

                {/* Bottom category strip */}
                <div className="mt-12 rounded-xl bg-[var(--color-primary-light)] px-4">
                    <BlogTicker />
                </div>
            </div>
        </main>
    );
};

export default Blogs;
