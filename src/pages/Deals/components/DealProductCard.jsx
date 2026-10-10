
import { ShoppingCart, TrendingDown } from "lucide-react";

const DealProductCard = ({ product }) => {
    const category = (product.category || "").replaceAll("-", " ");
    const savings = Number(product.originalPrice) - Number(product.price);

    return (
        <article className="group overflow-hidden rounded-xl border border-[var(--color-border-light)] bg-white transition duration-200 hover:-translate-y-1 hover:shadow-md">
            {/* Product image */}
            <div className="relative flex h-[165px] items-center justify-center bg-[#f3f7f3] p-5 sm:h-[180px]">
                <span className="absolute left-3 top-3 rounded-full bg-[var(--color-accent)] px-2.5 py-1 text-[10px] font-bold text-white">
                    <TrendingDown className="mr-1 inline" size={11} />
                    {product.discount}% OFF
                </span>

                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
                />
            </div>

            {/* Product details */}
            <div className="p-4">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                    {category}
                </p>

                <h3
                    title={product.name}
                    className="mt-1.5 min-h-[40px] text-sm font-semibold leading-5 text-[var(--color-text-primary)]"
                >
                    {product.name}
                </h3>

                <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                    {product.unit}
                </p>

                <div className="mt-3 flex items-center gap-2 text-xs">
                    <span className="text-amber-500">★</span>
                    <span className="font-semibold text-[var(--color-text-primary)]">
                        {product.rating}
                    </span>
                    <span className="text-[var(--color-text-secondary)]">
                        ({product.reviewCount} reviews)
                    </span>
                </div>

                <div className="mt-4 flex items-end justify-between gap-2">
                    <div>
                        <div className="flex flex-wrap items-baseline gap-2">
                            <span className="text-xl font-bold text-[var(--color-primary)]">
                                ₹{product.price}
                            </span>

                            <span className="text-xs text-gray-400 line-through">
                                ₹{product.originalPrice}
                            </span>
                        </div>

                        {savings > 0 && (
                            <p className="mt-1 text-xs text-[var(--color-primary)]">
                                Save ₹{savings}
                            </p>
                        )}
                    </div>

                    <button
                        type="button"
                        aria-label={`Add ${product.name} to cart`}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white transition-colors hover:bg-[var(--color-primary-dark)] active:scale-95"
                    >
                        <ShoppingCart size={17} />
                    </button>
                </div>
            </div>
        </article>
    );
};

export default DealProductCard;
