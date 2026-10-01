import React from "react";
import {
    Filter,
    Leaf,
    Star,
    X,
} from "lucide-react";

const ProductFilters = ({
    categories,
    categoryLabels,
    selectedCategory,
    setSelectedCategory,
    maxPrice,
    setMaxPrice,
    organicOnly,
    setOrganicOnly,
    discountOnly,
    setDiscountOnly,
    clearFilters,
    mobile = false,
}) => {
    return (
        <div className={`${mobile ? "" : "sticky top-[82px]"} rounded-[16px] border border-[var(--color-border-light)] bg-white p-4 shadow-[0_4px_20px_rgba(24,51,40,0.035)]`}>

            {mobile && (
                <div className="mb-4 flex items-center justify-between">

                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                            Refine
                        </p>

                        <h2 className="mt-1 text-[19px] font-bold text-[var(--color-text-dark)]">
                            Product Filters
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={clearFilters}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-background)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
                    >
                        <X size={15} />
                    </button>

                </div>
            )}

            {!mobile && (
                <div className="flex items-center justify-between border-b border-[var(--color-border-light)] pb-4">

                    <div className="flex items-center gap-2">

                        <div className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                            <Filter size={14} />
                        </div>

                        <h2 className="text-[14px] font-bold text-[var(--color-text-dark)]">
                            Filters
                        </h2>

                    </div>

                    <button
                        type="button"
                        onClick={clearFilters}
                        className="text-[10px] font-semibold text-[var(--color-accent)] transition-colors duration-200 hover:text-[var(--color-accent-dark)]"
                    >
                        Clear
                    </button>

                </div>
            )}


            <div className="border-b border-[var(--color-border-light)] py-4">

                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">
                    Categories
                </p>

                <div className="space-y-1">

                    <button
                        type="button"
                        onClick={() => setSelectedCategory("all")}
                        className={`flex w-full items-center justify-between rounded-[8px] px-2.5 py-2 text-left text-[11px] transition-all duration-300 ${selectedCategory === "all"
                                ? "bg-[var(--color-primary)] font-semibold text-white shadow-[0_5px_12px_rgba(0,69,33,0.12)]"
                                : "text-[var(--color-text-secondary)] hover:translate-x-[2px] hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]"
                            }`}
                    >
                        <span>All Products</span>
                        <span className="text-[9px] opacity-70">
                            All
                        </span>
                    </button>

                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() =>
                                setSelectedCategory(category)
                            }
                            className={`flex w-full items-center rounded-[8px] px-2.5 py-2 text-left text-[11px] transition-all duration-300 ${selectedCategory === category
                                    ? "bg-[var(--color-primary)] font-semibold text-white shadow-[0_5px_12px_rgba(0,69,33,0.12)]"
                                    : "text-[var(--color-text-secondary)] hover:translate-x-[2px] hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]"
                                }`}
                        >
                            {categoryLabels[category] || category}
                        </button>
                    ))}

                </div>

            </div>


            <div className="border-b border-[var(--color-border-light)] py-4">

                <div className="mb-3 flex items-center justify-between">

                    <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">
                        Maximum Price
                    </p>

                    <span className="text-[11px] font-bold text-[var(--color-accent)]">
                        ₹{maxPrice}
                    </span>

                </div>

                <input
                    type="range"
                    min="50"
                    max="600"
                    step="10"
                    value={maxPrice}
                    onChange={(event) =>
                        setMaxPrice(Number(event.target.value))
                    }
                    className="product-range w-full"
                />

                <div className="mt-2 flex justify-between text-[9px] text-[var(--color-text-muted)]">
                    <span>₹50</span>
                    <span>₹600+</span>
                </div>

            </div>


            <div className="space-y-2 py-4">

                <label className="group flex cursor-pointer items-center justify-between rounded-[9px] px-2 py-2 transition-all duration-300 hover:bg-[var(--color-primary-light)]">

                    <span className="flex items-center gap-2 text-[11px] font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)]">
                        <Leaf size={14} />
                        Organic only
                    </span>

                    <input
                        type="checkbox"
                        checked={organicOnly}
                        onChange={(event) =>
                            setOrganicOnly(event.target.checked)
                        }
                        className="product-checkbox"
                    />

                </label>


                <label className="group flex cursor-pointer items-center justify-between rounded-[9px] px-2 py-2 transition-all duration-300 hover:bg-[var(--color-accent-light)]">

                    <span className="flex items-center gap-2 text-[11px] font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)]">
                        <Star size={14} />
                        On discount
                    </span>

                    <input
                        type="checkbox"
                        checked={discountOnly}
                        onChange={(event) =>
                            setDiscountOnly(event.target.checked)
                        }
                        className="product-checkbox"
                    />

                </label>

            </div>

        </div>
    );
};

export default ProductFilters;