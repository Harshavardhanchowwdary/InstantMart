import React, { useEffect, useRef, useState } from "react";
import {
    Check,
    ChevronDown,
    Search,
    SlidersHorizontal,
} from "lucide-react";

const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Top Rated" },
    { value: "discount", label: "Best Discount" },
];

const ProductToolbar = ({
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    resultCount,
    onFilterClick,
}) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const selectedOption =
        sortOptions.find((option) => option.value === sortBy) ||
        sortOptions[0];

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const handleSortChange = (value) => {
        setSortBy(value);
        setOpen(false);
    };

    return (
        <div className="rounded-[16px] border border-[var(--color-border-light)] bg-[var(--color-surface)] px-4 py-4 shadow-[0_4px_20px_rgba(24,51,40,0.035)] animate-[productToolbarIn_600ms_cubic-bezier(0.22,1,0.36,1)_both]">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div>

                    <div className="flex items-center gap-2">

                        <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-[var(--color-accent)]" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                            Fresh selection
                        </span>

                    </div>

                    <h1 className="mt-1 text-[22px] font-bold tracking-[-0.5px] text-[var(--color-text-dark)] sm:text-[25px]">
                        All Products
                    </h1>

                    <p className="mt-1 text-[12px] text-[var(--color-text-secondary)]">
                        {resultCount} products available for you
                    </p>

                </div>


                <div className="flex flex-col gap-2 sm:flex-row">

                    <div className="relative flex h-[40px] min-w-0 sm:w-[250px]">

                        <Search
                            size={15}
                            className="absolute left-3.5 top-1/2 z-10 -translate-y-1/2 text-[var(--color-text-muted)]"
                        />

                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(event) =>
                                setSearchQuery(event.target.value)
                            }
                            placeholder="Search products..."
                            className="h-full w-full rounded-[10px] border border-[var(--color-border)] bg-[var(--color-background)] pl-10 pr-3 text-[12px] outline-none transition-all duration-300 focus:border-[var(--color-primary)] focus:bg-white focus:shadow-[0_0_0_3px_var(--color-primary-light)]"
                        />

                    </div>


                    <div
                        ref={dropdownRef}
                        className="relative h-[40px] sm:w-[190px]"
                    >
                        <button
                            type="button"
                            onClick={() => setOpen((previous) => !previous)}
                            className={`flex h-full w-full items-center justify-between rounded-[11px] border bg-[var(--color-background)] px-3.5 text-left text-[12px] font-medium text-[var(--color-text-dark)] transition-all duration-300 ${open
                                    ? "border-[var(--color-primary)] bg-white shadow-[0_0_0_3px_var(--color-primary-light)]"
                                    : "border-[var(--color-border)] hover:border-[var(--color-primary)] hover:bg-white"
                                }`}
                        >
                            <span className="flex items-center gap-2 whitespace-nowrap">
                                <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--color-accent)]" />
                                {selectedOption.label}
                            </span>

                            <ChevronDown
                                size={14}
                                strokeWidth={1.8}
                                className={`shrink-0 text-[var(--color-text-secondary)] transition-transform duration-300 ${open ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <div
                            className={`absolute right-0 top-[calc(100%+6px)] z-50 w-[210px] origin-top-right overflow-hidden rounded-[12px] border border-[var(--color-border-light)] bg-white p-1.5 shadow-[0_14px_35px_rgba(24,51,40,0.12)] transition-all duration-200 ${open
                                    ? "visible translate-y-0 scale-100 opacity-100"
                                    : "invisible -translate-y-1 scale-[0.98] opacity-0"
                                }`}
                        >
                            {sortOptions.map((option) => {
                                const isSelected = sortBy === option.value;

                                return (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => handleSortChange(option.value)}
                                        className={`group flex min-h-[36px] w-full items-center justify-between rounded-[8px] px-3 text-left text-[11px] font-medium leading-none transition-all duration-200 ${isSelected
                                                ? "bg-[var(--color-primary)] text-white shadow-[0_4px_10px_rgba(0,69,33,0.12)]"
                                                : "text-[var(--color-text-dark)] hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]"
                                            }`}
                                    >
                                        <span className="flex items-center gap-2 whitespace-nowrap">
                                            <span
                                                className={`h-[5px] w-[5px] shrink-0 rounded-full transition-all duration-200 ${isSelected
                                                        ? "bg-[var(--color-accent)]"
                                                        : "bg-[var(--color-accent)] opacity-60 group-hover:opacity-100"
                                                    }`}
                                            />

                                            {option.label}
                                        </span>

                                        {isSelected && (
                                            <Check
                                                size={13}
                                                strokeWidth={2.5}
                                                className="shrink-0 text-white"
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>


                    <button
                        type="button"
                        onClick={onFilterClick}
                        className="flex h-[40px] items-center justify-center gap-2 rounded-[10px] border border-[var(--color-border)] bg-white px-4 text-[12px] font-semibold text-[var(--color-text-primary)] transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)] lg:hidden"
                    >
                        <SlidersHorizontal size={15} />
                        Filters
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ProductToolbar;