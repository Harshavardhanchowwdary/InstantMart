import React from "react";
import { NavLink } from "react-router-dom";
import { categoriesData } from "../../../assets/assets";

const CategoriesSection = () => {
    return (
        <section className="relative mt-12 w-full overflow-hidden bg-[var(--color-primary-light)] px-4 py-9 sm:px-6 md:px-10 md:py-10 lg:px-14">

            {/* Subtle dotted background */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(0,69,33,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />

            {/* Section Heading */}
            <div className="relative mx-auto mb-8 max-w-2xl text-center">

                <span className="text-xs font-semibold uppercase tracking-[2px] text-[var(--color-accent)] sm:text-sm">
                    Shop by Category
                </span>

                <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
                    Explore Our Categories
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[var(--color-text-secondary)]">
                    Find exactly what you need from our carefully curated grocery categories.
                </p>

                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[var(--color-accent)]" />

            </div>

            {/* Categories Grid */}
            <div className="relative mx-auto grid w-full max-w-5xl grid-cols-2 justify-items-center gap-x-4 gap-y-7 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 md:gap-y-8 lg:grid-cols-5">

                {categoriesData.map((category) => (
                    <NavLink
                        key={category.slug}
                        to={`/products/category/${category.slug}`}
                        className={({ isActive }) =>
                            `group flex w-full max-w-[150px] flex-col items-center rounded-xl p-2 text-center transition-transform duration-200 hover:-translate-y-1 ${
                                isActive
                                    ? "text-[var(--color-primary-dark)]"
                                    : "text-[var(--color-primary)]"
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                {/* Category Image */}
                                <div
                                    className={`flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-full bg-white shadow-sm transition-shadow duration-200 group-hover:shadow-md sm:h-[88px] sm:w-[88px] ${
                                        isActive
                                            ? "ring-2 ring-[var(--color-primary)] ring-offset-2"
                                            : ""
                                    }`}
                                >
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        loading="lazy"
                                        className="h-full w-full rounded-full object-cover transition-transform duration-200 group-hover:scale-105"
                                    />
                                </div>

                                {/* Category Name */}
                                <span className="mt-2.5 text-xs font-medium leading-5 sm:text-sm">
                                    {category.name}
                                </span>

                                {/* Simple Active Indicator */}
                                <span
                                    className={`mt-1 h-1 rounded-full bg-[var(--color-accent)] transition-all duration-200 ${
                                        isActive
                                            ? "w-7"
                                            : "w-0 group-hover:w-6"
                                    }`}
                                />
                            </>
                        )}
                    </NavLink>
                ))}

            </div>

        </section>
    );
};

export default CategoriesSection;