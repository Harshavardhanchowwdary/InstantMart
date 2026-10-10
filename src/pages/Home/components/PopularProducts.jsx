
import { Star } from "lucide-react";
import Button from "../../../components/ui/Button";
import { dummyProducts } from "../../../assets/assets";

const PopularProducts = () => {
    const popularProducts = dummyProducts.slice(0, 10);

    return (
        <section className="mt-6 w-full bg-[var(--color-background)] py-8 sm:py-10">
            {/* Section heading */}
            <div className="mb-6">
                <span className="text-[10px] font-semibold uppercase tracking-[1.6px] text-[var(--color-accent)]">
                    Fresh picks
                </span>

                <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-[27px]">
                    Popular Products
                </h2>

                <p className="mt-2 text-xs text-[var(--color-text-secondary)] sm:text-sm">
                    Our most loved picks, fresh and ready for you.
                </p>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 xl:grid-cols-5">
                {popularProducts.map((product) => (
                    <article
                        key={product._id ?? product.id ?? product.name}
                        className="group overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-white transition-colors duration-200 hover:border-[var(--color-primary)]/40"
                    >
                        {/* Product image */}
                        <div className="relative flex h-36 items-center justify-center bg-[#f7f8f5] p-4 sm:h-44">
                            {product.discount > 0 && (
                                <span className="absolute left-3 top-3 rounded-full bg-[var(--color-primary-light)] px-2.5 py-1 text-[10px] font-semibold text-[var(--color-primary)]">
                                    {product.discount}% OFF
                                </span>
                            )}

                            <img
                                src={product.image}
                                alt={product.name}
                                loading="lazy"
                                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        {/* Product details */}
                        <div className="p-3 sm:p-4">
                            <h3
                                title={product.name}
                                className="truncate text-sm font-semibold text-[var(--color-text-primary)]"
                            >
                                {product.name}
                            </h3>

                            <p className="mt-1 min-h-8 line-clamp-2 text-xs leading-4 text-[var(--color-text-secondary)]">
                                {product.description}
                            </p>

                            {/* Rating */}
                            <div className="mt-3 flex items-center gap-1.5">
                                <Star
                                    size={13}
                                    fill="#f5b301"
                                    stroke="#f5b301"
                                />

                                <span className="text-xs font-medium text-[var(--color-text-primary)]">
                                    4.5
                                </span>

                                <span className="text-[10px] text-[var(--color-text-muted)]">
                                    ({product.reviewCount ?? 0} reviews)
                                </span>
                            </div>

                            {/* Price and action */}
                            <div className="mt-3 flex items-center justify-between gap-2">
                                <div className="min-w-0">
                                    <p className="text-base font-bold text-[var(--color-text-primary)]">
                                        ₹{product.price}
                                    </p>

                                    {product.originalPrice > product.price && (
                                        <p className="mt-0.5 text-xs text-[var(--color-text-muted)] line-through">
                                            ₹{product.originalPrice}
                                        </p>
                                    )}
                                </div>

                                <div className="shrink-0">
                                    <Button
                                        onClick={() => {
                                            // Connect your existing add-to-cart logic here.
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default PopularProducts;
