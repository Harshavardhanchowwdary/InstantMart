
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../../../assets/assets";

const PromoProducts = () => {
    const navigate = useNavigate();
    const promoProducts = dummyProducts.slice(0, 2);

    return (
        <section className="w-full bg-[var(--color-background)] py-8 sm:py-10">
            {/* Section heading */}
            <div className="mb-5">
                <span className="text-[10px] font-semibold uppercase tracking-[1.6px] text-[var(--color-accent)]">
                    Special offers
                </span>

                <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-[27px]">
                    Fresh Deals
                </h2>
            </div>

            {/* Promotional cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {promoProducts.map((product, index) => (
                    <article
                        key={product._id ?? product.id ?? product.name}
                        className={`group relative flex min-h-[190px] items-center overflow-hidden rounded-2xl p-5 transition-transform duration-200 hover:-translate-y-0.5 sm:min-h-[210px] sm:p-6 ${
                            index === 0
                                ? "bg-[#f5f2e9]"
                                : "bg-[#e5f2e2]"
                        }`}
                    >
                        {/* Product details */}
                        <div className="relative z-10 w-[65%] sm:w-[62%]">
                            <span className="inline-flex rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-[var(--color-primary)] shadow-sm">
                                {product.discount > 0
                                    ? `Save ${product.discount}%`
                                    : "Special offer"}
                            </span>

                            <h3 className="mt-4 line-clamp-2 text-xl font-bold leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-2xl">
                                {product.name}
                            </h3>

                            <p className="mt-2 line-clamp-2 text-xs leading-5 text-[var(--color-text-secondary)]">
                                {product.description}
                            </p>

                            <button
                                type="button"
                                onClick={() =>
                                    navigate(
                                        `/products/category/${product.category}`
                                    )
                                }
                                className={`mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-200 ${
                                    index === 0
                                        ? "bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)]"
                                        : "bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)]"
                                }`}
                            >
                                Shop now
                                <ArrowRight size={14} />
                            </button>
                        </div>

                        {/* Product image */}
                        <div className="absolute inset-y-0 right-0 flex w-[39%] items-center justify-center p-3 sm:w-[40%] sm:p-4">
                            <img
                                src={product.image}
                                alt={product.name}
                                loading="lazy"
                                className="max-h-[145px] w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105 sm:max-h-[165px]"
                            />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default PromoProducts;
