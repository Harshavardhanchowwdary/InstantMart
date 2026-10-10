
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
    Navigate,
    useNavigate,
    useParams,
} from "react-router-dom";

import {
    getBlogBySlug,
    getRelatedBlogs,
} from "./blogData";

import BlogBackground from "./components/BlogBackground";
import BlogHero from "./components/BlogHero";
import BlogTicker from "./components/BlogTicker";
import BlogCard from "./components/BlogCard";

import "./BlogDetails.css";

const BlogDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const blogPost = getBlogBySlug(slug);

    if (!blogPost) {
        return <Navigate to="/blogs" replace />;
    }

    const relatedPosts = getRelatedBlogs(blogPost.id, 3);

    const handleBackToJournal = () => {
        navigate("/blogs");
    };

    const handleShare = async () => {
        const shareData = {
            title: blogPost.title,
            text: blogPost.description,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
                return;
            }

            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(window.location.href);
                return;
            }

            window.prompt("Copy this article URL:", window.location.href);
        } catch (error) {
            // A user cancelling the share dialog is not an application error.
            if (error?.name !== "AbortError") {
                console.error("Unable to share article:", error);
            }
        }
    };

    return (
        <main className="blog-page-enter blog-details-page relative min-h-screen overflow-hidden bg-[var(--color-background)]">
            <BlogBackground />

            <div className="relative z-10 mx-auto w-full max-w-[1488px] px-5 pb-16 pt-8 sm:px-8 sm:pt-10 lg:px-12 lg:pt-12 xl:px-[72px]">
                {/* Navigation */}
                <div className="mb-6 flex items-center justify-between gap-4">
                    <button
                        type="button"
                        onClick={handleBackToJournal}
                        className="
                            flex items-center gap-2 rounded-lg border
                            border-[var(--color-border)] bg-white px-4 py-2.5
                            text-xs font-semibold text-[var(--color-primary)]
                            transition-colors duration-200
                            hover:bg-[var(--color-primary-light)]
                            focus:outline-none focus:ring-2
                            focus:ring-[var(--color-primary)]/30
                        "
                    >
                        <ArrowLeft size={15} />
                        Back to Journal
                    </button>

                    <button
                        type="button"
                        onClick={handleShare}
                        aria-label="Share article"
                        title="Share article"
                        className="
                            flex h-10 w-10 items-center justify-center
                            rounded-lg border border-[var(--color-border)]
                            bg-white text-[var(--color-primary)]
                            transition-colors duration-200
                            hover:bg-[var(--color-primary-light)]
                            focus:outline-none focus:ring-2
                            focus:ring-[var(--color-primary)]/30
                        "
                    >
                        <Share2 size={16} />
                    </button>
                </div>

                {/* Article hero */}
                <section className="blog-details-image overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-white">
                    <BlogHero post={blogPost} />
                </section>

                {/* Article metadata */}
                <div className="mx-auto flex max-w-[900px] flex-wrap items-center gap-x-6 gap-y-3 border-b border-[var(--color-border)] px-1 py-5">
                    <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                        <CalendarDays size={15} className="text-[var(--color-primary)]" />
                        {blogPost.date}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                        <Clock3 size={15} className="text-[var(--color-primary)]" />
                        {blogPost.readTime}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                        <Leaf size={15} className="text-[var(--color-primary)]" />
                        InstantMart Journal
                    </div>
                </div>

                {/* Article body */}
                <article className="mx-auto max-w-[900px] py-9 sm:py-12">
                    <p className="text-base font-medium leading-8 text-[var(--color-text-primary)] sm:text-lg sm:leading-9">
                        {blogPost.content.introduction}
                    </p>

                    <div className="mt-9 space-y-9">
                        {blogPost.content.sections.map((section, index) => (
                            <section
                                key={`${blogPost.id}-section-${index}`}
                            >
                                <div className="flex items-start gap-4">
                                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-xs font-bold text-[var(--color-primary)]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-xl font-bold leading-tight text-[var(--color-primary-dark)] sm:text-2xl">
                                            {section.title}
                                        </h2>

                                        <div className="mt-4 space-y-4">
                                            {section.paragraphs.map(
                                                (paragraph, paragraphIndex) => (
                                                    <p
                                                        key={`${blogPost.id}-${index}-${paragraphIndex}`}
                                                        className="text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base sm:leading-8"
                                                    >
                                                        {paragraph}
                                                    </p>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Conclusion */}
                    <div className="mt-10 rounded-2xl border border-[var(--color-primary)]/10 bg-[var(--color-primary-light)] p-6 sm:p-8">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                            Final Note
                        </div>

                        <p className="mt-3 text-sm leading-7 text-[var(--color-primary-dark)] sm:text-base sm:leading-8">
                            {blogPost.content.conclusion}
                        </p>
                    </div>
                </article>

                {/* Static category strip */}
                <div className="mx-auto max-w-[1100px]">
                    <BlogTicker />
                </div>

                {/* Related articles */}
                <section className="mx-auto max-w-[1100px] py-10 sm:py-14">
                    <div className="mb-6 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                                Keep exploring
                            </p>

                            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-primary-dark)] sm:text-3xl">
                                More from the journal
                            </h2>
                        </div>

                        <button
                            type="button"
                            onClick={handleBackToJournal}
                            className="
                                hidden items-center gap-2 text-xs font-semibold
                                text-[var(--color-primary)]
                                transition-colors duration-200
                                hover:text-[var(--color-accent)] sm:flex
                            "
                        >
                            View all
                            <ArrowRight size={15} />
                        </button>
                    </div>

                    {relatedPosts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {relatedPosts.map((post) => (
                                <BlogCard key={post.id} blog={post} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-[var(--color-text-secondary)]">
                            No related articles are available yet.
                        </p>
                    )}
                </section>

                {/* Back to journal */}
                <div className="flex justify-center pt-2">
                    <button
                        type="button"
                        onClick={handleBackToJournal}
                        className="
                            flex items-center gap-3 rounded-lg
                            bg-[var(--color-primary)] px-5 py-3
                            text-xs font-bold uppercase tracking-[0.08em]
                            text-white transition-colors duration-200
                            hover:bg-[var(--color-primary-dark)]
                            focus:outline-none focus:ring-2
                            focus:ring-[var(--color-accent)] focus:ring-offset-2
                        "
                    >
                        <ArrowLeft size={15} />
                        Back to Fresh Journal
                    </button>
                </div>
            </div>
        </main>
    );
};

export default BlogDetails;
