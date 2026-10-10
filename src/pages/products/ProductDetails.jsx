
import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Check,
    ChevronRight,
    Heart,
    Minus,
    Plus,
    ShieldCheck,
    ShoppingCart,
    Star,
    Truck,
} from "lucide-react";

import { dummyProducts } from "../../assets/assets";
import DummyReviewsSection from "../../assets/DummyReviewsSection";

const categoryLabels = {
    "fruits-vegetables": "Fruits & Vegetables",
    "pantry-staples": "Pantry Staples",
    bakery: "Bakery",
    beverages: "Beverages",
    "dairy-eggs": "Dairy & Eggs",
    snacks: "Snacks",
    "frozen-foods": "Frozen Foods",
    "baby-care": "Baby Care",
};

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);
    const [liked, setLiked] = useState(false);
    const [cartMessage, setCartMessage] = useState("");

    const product = useMemo(
        () =>
            dummyProducts.find(
                (item) => String(item.id || item._id) === String(id)
            ),
        [id]
    );

    const relatedProducts = useMemo(() => {
        if (!product) return [];

        return dummyProducts
            .filter(
                (item) =>
                    String(item.id || item._id) !==
                    String(product.id || product._id)
            )
            .sort(
                (a, b) =>
                    Number(b.category === product.category) -
                    Number(a.category === product.category)
            )
            .slice(0, 5);
    }, [product]);

    if (!product) {
        return (
            <main className="flex min-h-[60vh] items-center justify-center bg-[var(--color-background)] px-4">
                <div className="max-w-sm rounded-2xl border border-[var(--color-border-light)] bg-white p-8 text-center">
                    <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
                        Product not found
                    </h1>

                    <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                        This product may no longer be available.
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate("/products")}
                        className="mt-5 rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)]"
                    >
                        Back to Products
                    </button>
                </div>
            </main>
        );
    }

    const productId = product.id || product._id;
    const categoryName =
        categoryLabels[product.category] || product.category;

    const discount = Number(product.discount || 0);
    const originalPrice = Number(
        product.originalPrice || product.price
    );
    const stock = Number(product.stock || 0);
    const isInStock = stock > 0;

    const increaseQuantity = () => {
        if (quantity < stock) {
            setQuantity((current) => current + 1);
        }
    };

    const decreaseQuantity = () => {
        setQuantity((current) => Math.max(1, current - 1));
    };

    const handleAddToCart = () => {
        // Connect your existing cart store/API here.
        console.log("Add to cart:", { productId, quantity });

        setCartMessage(
            `${quantity} × ${product.name} selected. Connect your cart API to save this item.`
        );
    };

    return (
        <main className="min-h-screen bg-[var(--color-background)]">
            <div className="mx-auto w-full max-w-[1440px] px-4 py-5 sm:px-6 lg:px-10">
                {/* Breadcrumb */}
                <nav
                    aria-label="Breadcrumb"
                    className="mb-5 flex flex-wrap items-center gap-2 text-xs text-[var(--color-text-secondary)]"
                >
                    <button
                        type="button"
                        onClick={() => navigate("/products")}
                        className="hover:text-[var(--color-primary)]"
                    >
                        Products
                    </button>

                    <ChevronRight size={14} />

                    <span>{categoryName}</span>

                    <ChevronRight size={14} />

                    <span className="font-medium text-[var(--color-text-primary)]">
                        {product.name}
                    </span>
                </nav>

                {/* Main product card */}
                <section className="grid overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-white md:grid-cols-2">
                    {/* Product image */}
                    <div className="relative flex min-h-[280px] items-center justify-center bg-[#EEF5EF] p-8 sm:min-h-[380px] lg:min-h-[440px]">
                        {discount > 0 && (
                            <span className="absolute left-4 top-4 rounded-md bg-[var(--color-accent)] px-3 py-1.5 text-xs font-semibold text-white">
                                {discount}% OFF
                            </span>
                        )}

                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-[220px] w-full max-w-[300px] object-contain sm:h-[280px] lg:h-[320px]"
                        />
                    </div>

                    {/* Product information */}
                    <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                            {categoryName}
                        </p>

                        <h1 className="mt-2 text-2xl font-bold leading-tight text-[var(--color-text-primary)] sm:text-3xl">
                            {product.name}
                        </h1>

                        {/* Rating */}
                        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                            <div className="flex items-center gap-0.5 text-[var(--color-accent)]">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={15}
                                        fill={
                                            star <= Math.round(
                                                Number(product.rating || 0)
                                            )
                                                ? "currentColor"
                                                : "none"
                                        }
                                    />
                                ))}
                            </div>

                            <span className="font-semibold text-[var(--color-text-primary)]">
                                {product.rating || "New"}
                            </span>

                            <span className="text-xs text-[var(--color-text-secondary)]">
                                ({product.reviewCount || 0} reviews)
                            </span>
                        </div>

                        {product.description && (
                            <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--color-text-secondary)]">
                                {product.description}
                            </p>
                        )}

                        {/* Price */}
                        <div className="mt-5 flex flex-wrap items-baseline gap-3">
                            <span className="text-3xl font-bold text-[var(--color-primary)]">
                                ₹{product.price}
                            </span>

                            {originalPrice > Number(product.price) && (
                                <span className="text-sm text-[var(--color-text-muted)] line-through">
                                    ₹{originalPrice}
                                </span>
                            )}

                            {product.unit && (
                                <span className="text-sm text-[var(--color-text-secondary)]">
                                    / {product.unit}
                                </span>
                            )}
                        </div>

                        {/* Availability */}
                        <p
                            className={`mt-2 flex items-center gap-2 text-sm ${
                                isInStock
                                    ? "text-green-700"
                                    : "text-red-600"
                            }`}
                        >
                            <span className="h-2 w-2 rounded-full bg-current" />
                            {isInStock
                                ? "In stock"
                                : "Currently unavailable"}
                        </p>

                        <div className="my-5 border-t border-[var(--color-border-light)]" />

                        {/* Quantity, cart and wishlist */}
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="flex h-11 items-center rounded-lg border border-[var(--color-border)]">
                                <button
                                    type="button"
                                    onClick={decreaseQuantity}
                                    disabled={quantity <= 1}
                                    aria-label="Decrease quantity"
                                    className="px-3 text-slate-600 hover:text-[var(--color-primary)] disabled:opacity-40"
                                >
                                    <Minus size={15} />
                                </button>

                                <span className="min-w-6 text-center text-sm font-semibold">
                                    {quantity}
                                </span>

                                <button
                                    type="button"
                                    onClick={increaseQuantity}
                                    disabled={!isInStock || quantity >= stock}
                                    aria-label="Increase quantity"
                                    className="px-3 text-slate-600 hover:text-[var(--color-primary)] disabled:opacity-40"
                                >
                                    <Plus size={15} />
                                </button>
                            </div>

                            <button
                                type="button"
                                onClick={handleAddToCart}
                                disabled={!isInStock}
                                className="flex h-11 min-w-[150px] flex-1 items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <ShoppingCart size={17} />
                                Add to Cart
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    setLiked((current) => !current)
                                }
                                aria-label={
                                    liked
                                        ? "Remove from wishlist"
                                        : "Add to wishlist"
                                }
                                className={`flex h-11 w-11 items-center justify-center rounded-lg border ${
                                    liked
                                        ? "border-[var(--color-accent)] text-[var(--color-accent)]"
                                        : "border-[var(--color-border)] text-slate-500 hover:text-[var(--color-accent)]"
                                }`}
                            >
                                <Heart
                                    size={18}
                                    fill={liked ? "currentColor" : "none"}
                                />
                            </button>
                        </div>

                        {cartMessage && (
                            <p
                                role="status"
                                className="mt-3 rounded-lg bg-[var(--color-primary-light)] p-3 text-xs leading-5 text-[var(--color-primary)]"
                            >
                                {cartMessage}
                            </p>
                        )}

                        {/* Simple service information */}
                        <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px] text-[var(--color-text-secondary)]">
                            <div className="rounded-lg bg-[var(--color-primary-light)] p-3">
                                <Truck
                                    size={17}
                                    className="mx-auto mb-1 text-[var(--color-primary)]"
                                />
                                Fast delivery
                            </div>

                            <div className="rounded-lg bg-[var(--color-primary-light)] p-3">
                                <ShieldCheck
                                    size={17}
                                    className="mx-auto mb-1 text-[var(--color-primary)]"
                                />
                                Quality checked
                            </div>

                            <div className="rounded-lg bg-[var(--color-primary-light)] p-3">
                                <Check
                                    size={17}
                                    className="mx-auto mb-1 text-[var(--color-primary)]"
                                />
                                Fresh selection
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product information */}
                <section className="mt-6 rounded-2xl border border-[var(--color-border-light)] bg-white p-5 sm:p-7">
                    <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
                        About this product
                    </h2>

                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        <InfoItem
                            label="Category"
                            value={categoryName}
                        />

                        <InfoItem
                            label="Pack size"
                            value={product.unit || "Not specified"}
                        />

                        <InfoItem
                            label="Availability"
                            value={isInStock ? "In stock" : "Out of stock"}
                        />

                        <InfoItem
                            label="Organic"
                            value={product.isOrganic ? "Yes" : "No"}
                        />
                    </div>
                </section>

                {/* Reviews */}
                <DummyReviewsSection product={product} />

                {/* Related products */}
                <section className="mt-8">
                    <div className="mb-4 flex items-end justify-between gap-3">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                                Keep shopping
                            </p>

                            <h2 className="mt-1 text-xl font-bold text-[var(--color-text-primary)]">
                                You may also like
                            </h2>
                        </div>

                        <button
                            type="button"
                            onClick={() => navigate("/products")}
                            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
                        >
                            View all
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
                        {relatedProducts.map((item) => (
                            <button
                                key={item.id || item._id}
                                type="button"
                                onClick={() =>
                                    navigate(
                                        `/products/${item.id || item._id}`
                                    )
                                }
                                className="overflow-hidden rounded-xl border border-[var(--color-border-light)] bg-white text-left transition-colors hover:border-[var(--color-primary)]"
                            >
                                <div className="flex h-32 items-center justify-center bg-[#EEF5EF] p-4 sm:h-40">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        loading="lazy"
                                        className="h-full w-full object-contain"
                                    />
                                </div>

                                <div className="p-3">
                                    <p className="line-clamp-2 min-h-10 text-sm font-semibold text-[var(--color-text-primary)]">
                                        {item.name}
                                    </p>

                                    <div className="mt-2 flex items-center justify-between gap-2">
                                        <span className="text-base font-bold text-[var(--color-primary)]">
                                            ₹{item.price}
                                        </span>

                                        <span className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)]">
                                            <Star
                                                size={12}
                                                fill="currentColor"
                                                className="text-[var(--color-accent)]"
                                            />
                                            {item.rating || "New"}
                                        </span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

const InfoItem = ({ label, value }) => (
    <div className="rounded-lg bg-[var(--color-primary-light)] p-3">
        <p className="text-xs text-[var(--color-text-secondary)]">
            {label}
        </p>

        <p className="mt-1 truncate text-sm font-semibold text-[var(--color-text-primary)]">
            {value}
        </p>
    </div>
);

export default ProductDetails;
