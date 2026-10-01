
import React from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { categoriesData } from "../../../assets/assets";

const CategoriesSection = () => {
    return (
        <section className="relative mt-[90px] w-full overflow-hidden bg-[var(--color-primary-light)] px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-14 lg:py-14">

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(0,69,33,0.12)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />

            <div className="pointer-events-none absolute -left-[80px] top-[80px] h-[180px] w-[180px] rounded-full bg-white opacity-40 blur-3xl animate-[categoryOrbFloat_9s_ease-in-out_infinite]" />

            <div className="pointer-events-none absolute -bottom-[40px] -right-[70px] h-[160px] w-[160px] rounded-full bg-[var(--color-accent-light)] opacity-50 blur-3xl animate-[categoryOrbFloat_9s_ease-in-out_-3s_infinite]" />


            <div className="relative z-10 mx-auto mb-10 max-w-[650px] text-center animate-[categoryHeadingIn_600ms_cubic-bezier(0.22,1,0.36,1)_both]">

                <span className="mb-1.5 inline-block text-[14px] font-semibold uppercase tracking-[1.8px] text-[var(--color-accent)]">
                    Shop by category
                </span>

                <h2 className="text-[24px] font-bold leading-tight tracking-[-0.5px] text-[var(--color-text-primary)] sm:text-[27px] md:text-[30px]">
                    Explore Our Categories
                </h2>

                <p className="mx-auto mt-1.5 max-w-[430px] text-[10px] leading-[16px] text-[var(--color-text-secondary)] sm:text-[11px] sm:leading-[18px]">
                    Find exactly what you need using our carefully curated grocery categories.
                </p>

                <div className="mx-auto mt-4 h-[2px] w-[42px] rounded-full bg-[var(--color-accent)] animate-[categoryLinePulse_3s_ease-in-out_infinite]" />

            </div>


            <div className="relative z-10 mx-auto grid w-full max-w-[900px] grid-cols-2 place-items-center gap-x-5 gap-y-12 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-14 md:grid-cols-4 md:gap-x-10 md:gap-y-16 lg:grid-cols-5 lg:gap-x-12 lg:gap-y-16">

                {categoriesData.map((category, index) => (

                    <NavLink
                        key={category.slug}
                        to={`/products/category/${category.slug}`}
                        style={{
                            "--category-delay": `${index * 70}ms`,
                        }}
                        className={({ isActive }) =>
                            `category-item group relative flex w-[120px] flex-col items-center outline-none animate-[categoryItemIn_550ms_cubic-bezier(0.22,1,0.36,1)_var(--category-delay)_both] transition-transform duration-300 ease-out hover:-translate-y-1.5 ${
                                isActive ? "scale-[1.02]" : ""
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>

                                <div className="pointer-events-none absolute left-1/2 top-[78px] z-0 h-[42px] w-[90px] -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                                    <span className="absolute left-1/2 top-0 h-full -translate-x-1/2 border-l border-dashed border-[var(--color-accent)] animate-[categoryDotsMove_700ms_linear_infinite]" />

                                    <span className="absolute bottom-0 left-1/2 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[var(--color-accent)] shadow-[0_0_0_4px_var(--color-accent-light)]" />

                                </div>


                                <div className={`relative z-10 flex h-[82px] w-[82px] items-center justify-center rounded-full border bg-white shadow-[0_4px_14px_rgba(0,69,33,0.06)] transition-all duration-400 ease-out ${isActive ? "border-[var(--color-primary)] shadow-[0_8px_22px_rgba(0,69,33,0.14)]" : "border-white group-hover:border-[var(--color-primary)] group-hover:shadow-[0_12px_28px_rgba(0,69,33,0.15)]"}`}>

                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="h-full w-full rounded-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-2"
                                    />

                                    <span className={`absolute inset-0 rounded-full bg-[var(--color-primary)] transition-opacity duration-300 ${isActive ? "opacity-[0.08]" : "opacity-0 group-hover:opacity-[0.08]"}`} />

                                    <span className="absolute -inset-[6px] rounded-full border border-dashed border-[var(--color-accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-60 group-hover:animate-[categoryRingSpin_6s_linear_infinite]" />

                                </div>


                                <span className={`mt-3 text-center text-[12px] leading-[15px] transition-all duration-300 ${isActive ? "font-semibold text-[var(--color-primary-dark)]" : "font-medium text-[var(--color-primary)] group-hover:font-semibold group-hover:text-[var(--color-primary-dark)]"}`}>
                                    {category.name}
                                </span>


                                <span className={`mt-1 h-[2px] rounded-full bg-[var(--color-accent)] transition-all duration-350 ${isActive ? "w-[28px]" : "w-0 group-hover:w-[26px]"}`} />


                                <span className="absolute -top-[18px] left-1/2 z-30 flex -translate-x-1/2 translate-y-2 items-center gap-1 whitespace-nowrap rounded-full bg-[var(--color-primary)] px-2.5 py-1.5 text-[11px] font-semibold text-white opacity-0 shadow-[0_6px_16px_rgba(0,69,33,0.16)] transition-all duration-250 group-hover:translate-y-0 group-hover:opacity-100">

                                    Explore {category.name}

                                    <ArrowUpRight size={10} strokeWidth={2} />

                                </span>


                                {isActive && (
                                    <span className="mt-1 flex items-center gap-0.5 text-[8px] font-semibold text-[var(--color-accent)] animate-[categoryActiveIn_300ms_ease-out_both]">
                                        Shop now
                                        <ChevronRight size={9} />
                                    </span>
                                )}

                            </>
                        )}
                    </NavLink>

                ))}

            </div>

        </section>
    );
};

export default CategoriesSection;