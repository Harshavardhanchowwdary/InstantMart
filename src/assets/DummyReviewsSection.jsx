
import React, { useState } from "react";
import { Star, ThumbsUp } from "lucide-react";

const sampleReviews = [
    {
        id: 1,
        name: "Arjun R.",
        date: "7 Oct 2026",
        rating: 5,
        comment:
            "Quality is decent and the product was delivered in good condition.",
        helpful: 20,
    },
    {
        id: 2,
        name: "Karan P.",
        date: "3 Oct 2026",
        rating: 4,
        comment:
            "Good value for money. I would consider purchasing it again.",
        helpful: 9,
    },
    {
        id: 3,
        name: "Priya S.",
        date: "28 Sep 2026",
        rating: 5,
        comment:
            "A good product with convenient packaging and quality.",
        helpful: 6,
    },
];

const DummyReviewsSection = ({ product }) => {
    const [helpfulVotes, setHelpfulVotes] = useState([]);

    const reviews = sampleReviews;
    const averageRating = (
        reviews.reduce((sum, review) => sum + review.rating, 0) /
        reviews.length
    ).toFixed(1);

    const ratingCounts = [5, 4, 3, 2, 1].map((rating) => ({
        rating,
        count: reviews.filter((review) => review.rating === rating).length,
    }));

    const toggleHelpful = (reviewId) => {
        setHelpfulVotes((current) =>
            current.includes(reviewId)
                ? current.filter((id) => id !== reviewId)
                : [...current, reviewId]
        );
    };

    return (
        <section className="mt-8">
            <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                        Customer feedback
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-[var(--color-text-primary)]">
                        Customer Reviews
                    </h2>

                    {product?.name && (
                        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                            Reviews for {product.name}
                        </p>
                    )}
                </div>

                <span className="rounded-full bg-[var(--color-primary-light)] px-3 py-2 text-xs font-semibold text-[var(--color-primary)]">
                    {reviews.length} reviews
                </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-white">
                {/* Rating summary */}
                <div className="grid gap-6 border-b border-[var(--color-border-light)] p-5 sm:grid-cols-[170px_minmax(0,1fr)] sm:items-center sm:p-6">
                    <div className="rounded-xl bg-[var(--color-primary-light)] p-5 text-center">
                        <p className="text-4xl font-bold text-[var(--color-primary)]">
                            {averageRating}
                        </p>

                        <div className="mt-2 flex justify-center gap-0.5 text-[var(--color-accent)]">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    size={16}
                                    fill={
                                        star <= Math.round(Number(averageRating))
                                            ? "currentColor"
                                            : "none"
                                    }
                                />
                            ))}
                        </div>

                        <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
                            Based on {reviews.length} reviews
                        </p>
                    </div>

                    <div className="space-y-3">
                        {ratingCounts.map(({ rating, count }) => (
                            <div
                                key={rating}
                                className="flex items-center gap-3 text-xs"
                            >
                                <span className="w-8 shrink-0 text-[var(--color-text-secondary)]">
                                    {rating} star
                                </span>

                                <div
                                    className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100"
                                    role="progressbar"
                                    aria-label={`${rating} star ratings`}
                                    aria-valuemin={0}
                                    aria-valuemax={reviews.length}
                                    aria-valuenow={count}
                                >
                                    <div
                                        className="h-full rounded-full bg-[var(--color-accent)]"
                                        style={{
                                            width: `${
                                                reviews.length
                                                    ? (count / reviews.length) * 100
                                                    : 0
                                            }%`,
                                        }}
                                    />
                                </div>

                                <span className="w-5 text-right text-[var(--color-text-secondary)]">
                                    {count}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Individual reviews */}
                <div>
                    {reviews.map((review) => {
                        const voted = helpfulVotes.includes(review.id);

                        return (
                            <article
                                key={review.id}
                                className="border-b border-[var(--color-border-light)] p-5 last:border-b-0 sm:p-6"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-xs font-bold text-[var(--color-primary)]">
                                        {review.name
                                            .split(" ")
                                            .map((part) => part[0])
                                            .join("")
                                            .replace(".", "")
                                            .slice(0, 2)}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                            <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
                                                {review.name}
                                            </h3>

                                            <span className="text-xs text-[var(--color-text-secondary)]">
                                                {review.date}
                                            </span>
                                        </div>

                                        <div className="mt-1.5 flex gap-0.5 text-[var(--color-accent)]">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    size={13}
                                                    fill={
                                                        star <= review.rating
                                                            ? "currentColor"
                                                            : "none"
                                                    }
                                                />
                                            ))}
                                        </div>

                                        <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                                            {review.comment}
                                        </p>

                                        <button
                                            type="button"
                                            onClick={() => toggleHelpful(review.id)}
                                            aria-pressed={voted}
                                            className={`mt-3 inline-flex items-center gap-2 text-xs transition-colors ${
                                                voted
                                                    ? "font-semibold text-[var(--color-primary)]"
                                                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
                                            }`}
                                        >
                                            <ThumbsUp size={14} />
                                            Helpful (
                                            {review.helpful + (voted ? 1 : 0)})
                                        </button>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DummyReviewsSection;
