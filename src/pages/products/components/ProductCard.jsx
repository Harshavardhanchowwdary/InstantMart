
import React from "react";
import { Heart, Leaf, ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, liked, onLike }) => {
    const navigate = useNavigate();

    const productId = product?.id || product?._id;

    const handleProductClick = () => {
        if (productId) {
            navigate(`/products/${productId}`);
        }
    };

    const handleLikeClick = (event) => {
        event.stopPropagation();
        onLike?.(event);
    };

    const handleCartClick = (event) => {
        event.stopPropagation();

        // Connect your existing cart function here.
        console.log("Add to cart:", product);
    };

    const categoryName = (product.category || "")
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <article
            className="
                group flex h-full min-w-0 flex-col overflow-hidden
                rounded-xl border border-[var(--color-border-light)]
                bg-white transition-colors duration-200
                hover:border-[var(--color-primary)]/40
            "
        >
            {/* Product image */}
            <div
                onClick={handleProductClick}
                onKeyDown={(event) => {
                    if (event.key === "Enter") handleProductClick();
                }}
                role={productId ? "link" : undefined}
                tabIndex={productId ? 0 : undefined}
                className="
                    relative flex h-[150px] cursor-pointer items-center
                    justify-center bg-[#F0F6F1] p-5
                    sm:h-[175px] sm:p-6
                "
            >
                {product.discount > 0 && (
                    <span className="absolute left-3 top-3 rounded-md bg-[var(--color-accent)] px-2 py-1 text-[10px] font-semibold text-white">
                        {product.discount}% OFF
                    </span>
                )}

                <button
                    type="button"
                    onClick={handleLikeClick}
                    aria-label={
                        liked
                            ? `Remove ${product.name} from wishlist`
                            : `Add ${product.name} to wishlist`
                    }
                    className={`
                        absolute right-3 top-3 flex h-8 w-8
                        items-center justify-center rounded-full
                        border border-[var(--color-border-light)]
                        bg-white
                        ${liked
                            ? "text-[var(--color-accent)]"
                            : "text-slate-500 hover:text-[var(--color-accent)]"}
                    `}
                >
                    <Heart
                        size={16}
                        fill={liked ? "currentColor" : "none"}
                    />
                </button>

                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="
                        h-full max-h-[125px] w-full object-contain
                        sm:max-h-[145px]
                    "
                />

                {product.isOrganic && (
                    <span className="absolute bottom-2 left-3 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[10px] font-medium text-[var(--color-primary)]">
                        <Leaf size={12} />
                        Organic
                    </span>
                )}
            </div>

            {/* Product details */}
            <div className="flex flex-1 flex-col p-3 sm:p-4">
                <p className="mb-1 text-[10px] font-medium uppercase tracking-wide text-[var(--color-text-secondary)]">
                    {categoryName}
                </p>

                <button
                    type="button"
                    onClick={handleProductClick}
                    className="
                        text-left text-sm font-semibold leading-5
                        text-[var(--color-text-dark)]
                        hover:text-[var(--color-primary)]
                    "
                >
                    {product.name}
                </button>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-1.5 text-xs">
                    <span className="flex items-center gap-1 font-medium text-[var(--color-primary)]">
                        <Star size={13} fill="currentColor" />
                        {product.rating ?? "New"}
                    </span>

                    {product.reviewCount != null && (
                        <span className="text-[var(--color-text-muted)]">
                            ({product.reviewCount})
                        </span>
                    )}
                </div>

                {/* Price and cart */}
                <div className="mt-auto flex items-end justify-between gap-2 pt-4">
                    <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline gap-2">
                            <span className="text-lg font-bold text-[var(--color-text-dark)]">
                                ₹{product.price}
                            </span>

                            {product.originalPrice > product.price && (
                                <span className="text-xs text-[var(--color-text-muted)] line-through">
                                    ₹{product.originalPrice}
                                </span>
                            )}
                        </div>

                        {product.unit && (
                            <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">
                                {product.unit}
                            </p>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={handleCartClick}
                        className="
                            flex h-9 shrink-0 items-center gap-1.5
                            rounded-lg bg-[var(--color-primary)]
                            px-3 text-xs font-semibold text-white
                            hover:bg-[var(--color-primary-dark)]
                            active:scale-[0.98]
                        "
                        aria-label={`Add ${product.name} to cart`}
                    >
                        <ShoppingCart size={15} />
                        <span>Add</span>
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
