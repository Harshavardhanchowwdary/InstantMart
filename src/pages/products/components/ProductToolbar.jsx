
import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const ProductToolbar = ({
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    resultCount,
    onFilterClick,
}) => {
    return (
        <section className="rounded-xl border border-[var(--color-border-light)] bg-white p-4 sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-xs font-medium text-[var(--color-accent)]">
                        Fresh selection
                    </p>

                    <h1 className="mt-1 text-2xl font-bold text-[var(--color-text-dark)]">
                        All Products
                    </h1>

                    <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                        {resultCount} products available
                    </p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                    <label className="relative min-w-0 sm:w-64">
                        <Search
                            size={17}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                            type="search"
                            value={searchQuery}
                            onChange={(event) =>
                                setSearchQuery(event.target.value)
                            }
                            placeholder="Search products..."
                            aria-label="Search products"
                            className="
                                h-11 w-full rounded-lg border
                                border-[var(--color-border)]
                                bg-white pl-9 pr-3 text-sm
                                outline-none
                                focus:border-[var(--color-primary)]
                                focus:ring-2
                                focus:ring-[var(--color-primary-light)]
                            "
                        />
                    </label>

                    <select
                        value={sortBy}
                        onChange={(event) => setSortBy(event.target.value)}
                        aria-label="Sort products"
                        className="
                            h-11 rounded-lg border
                            border-[var(--color-border)]
                            bg-white px-3 text-sm
                            text-[var(--color-text-dark)]
                            outline-none
                            focus:border-[var(--color-primary)]
                        "
                    >
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                        <option value="discount">Best Discount</option>
                    </select>

                    <button
                        type="button"
                        onClick={onFilterClick}
                        className="
                            flex h-11 items-center justify-center gap-2
                            rounded-lg border
                            border-[var(--color-border)]
                            px-4 text-sm font-medium
                            text-[var(--color-text-dark)]
                            hover:bg-[var(--color-primary-light)]
                            lg:hidden
                        "
                    >
                        <SlidersHorizontal size={16} />
                        Filters
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductToolbar;
