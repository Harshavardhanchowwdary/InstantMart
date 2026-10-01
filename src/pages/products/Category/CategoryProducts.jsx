import React, { useMemo, useState } from "react";
import {
    ChevronRight,
    Home,
} from "lucide-react";
import {
    Link,
    useParams,
} from "react-router-dom";
import {
    dummyProducts,
} from "../../../assets/assets";
import ProductCard from "../components/ProductCard";
import ProductsBackground from "../components/ProductsBackground";
import ProductToolbar from "../components/ProductToolbar";
import ProductFilters from "../components/ProductFilters";
import "../Products.css";
import "./CategoryProducts.css";

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

const CategoryProducts = () => {
    const { category } = useParams();

    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("featured");
    const [maxPrice, setMaxPrice] = useState(600);
    const [organicOnly, setOrganicOnly] = useState(false);
    const [discountOnly, setDiscountOnly] = useState(false);
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [likedProducts, setLikedProducts] = useState([]);

    const categoryName =
        categoryLabels[category] ||
        category
            ?.split("-")
            .map(
                (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1)
            )
            .join(" ") ||
        "Products";

    const categoryProducts = useMemo(() => {
        return dummyProducts.filter(
            (product) => product.category === category
        );
    }, [category]);

    const categories = useMemo(() => {
        return [
            ...new Set(
                dummyProducts.map(
                    (product) => product.category
                )
            ),
        ];
    }, []);

    const filteredProducts = useMemo(() => {
        const products = categoryProducts.filter((product) => {
            const searchValue = searchQuery.toLowerCase();

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(searchValue) ||
                product.description
                    .toLowerCase()
                    .includes(searchValue);

            const matchesPrice =
                product.price <= maxPrice;

            const matchesOrganic =
                !organicOnly || product.isOrganic;

            const matchesDiscount =
                !discountOnly || product.discount > 0;

            return (
                matchesSearch &&
                matchesPrice &&
                matchesOrganic &&
                matchesDiscount
            );
        });

        return [...products].sort((first, second) => {
            if (sortBy === "price-low") {
                return first.price - second.price;
            }

            if (sortBy === "price-high") {
                return second.price - first.price;
            }

            if (sortBy === "rating") {
                return second.rating - first.rating;
            }

            if (sortBy === "discount") {
                return second.discount - first.discount;
            }

            return 0;
        });
    }, [
        categoryProducts,
        searchQuery,
        sortBy,
        maxPrice,
        organicOnly,
        discountOnly,
    ]);

    const toggleLike = (productId) => {
        setLikedProducts((previous) =>
            previous.includes(productId)
                ? previous.filter((id) => id !== productId)
                : [...previous, productId]
        );
    };

    const clearFilters = () => {
        setSearchQuery("");
        setSortBy("featured");
        setMaxPrice(600);
        setOrganicOnly(false);
        setDiscountOnly(false);
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-[var(--color-background)]">

            <ProductsBackground />

            <div className="relative z-10 mx-auto w-full max-w-[1488px] px-4 pb-12 pt-4 sm:px-6 lg:px-10 xl:px-[56px]">

                <div className="category-breadcrumb mb-5 flex items-center gap-2 text-[13px] text-[var(--color-text-secondary)]">

                    <Link
                        to="/"
                        className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[var(--color-primary)]"
                    >
                        <Home size={12} />
                        Home
                    </Link>

                    <ChevronRight size={13} />

                    <Link
                        to="/products"
                        className="transition-colors duration-200 hover:text-[var(--color-primary)]"
                    >
                        Products
                    </Link>

                    <ChevronRight size={13} />

                    <span className="font-semibold text-[var(--color-text-dark)]">
                        {categoryName}
                    </span>

                </div>


                <div className="category-heading mb-5">

                    <div className="flex items-end justify-between gap-4">

                        <div>

                            <div className="mb-2 flex items-center gap-2">

                                <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-[var(--color-accent)]" />

                                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                                    Fresh collection
                                </span>

                            </div>

                            <h1 className="text-[25px] font-bold tracking-[-0.6px] text-[var(--color-text-dark)] sm:text-[30px]">
                                {categoryName}
                            </h1>

                            <p className="mt-1.5 max-w-[520px] text-[12px] leading-5 text-[var(--color-text-secondary)]">
                                Explore our carefully selected{" "}
                                {categoryName.toLowerCase()} for your everyday needs.
                            </p>

                        </div>

                        <div className="hidden shrink-0 rounded-full border border-[var(--color-primary-light)] bg-white px-3 py-1.5 text-[10px] font-semibold text-[var(--color-primary)] sm:block">
                            {categoryProducts.length} Products
                        </div>

                    </div>

                    <div className="category-line mt-5" />

                </div>


                <ProductToolbar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    resultCount={filteredProducts.length}
                    onFilterClick={() =>
                        setShowMobileFilters(true)
                    }
                />


                <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">

                    <aside className="hidden lg:block">

                        <ProductFilters
                            categories={categories}
                            categoryLabels={categoryLabels}
                            selectedCategory={category}
                            setSelectedCategory={() => {}}
                            maxPrice={maxPrice}
                            setMaxPrice={setMaxPrice}
                            organicOnly={organicOnly}
                            setOrganicOnly={setOrganicOnly}
                            discountOnly={discountOnly}
                            setDiscountOnly={setDiscountOnly}
                            clearFilters={clearFilters}
                            categoryNavigation
                        />

                    </aside>


                    <main className="min-w-0">

                        {filteredProducts.length > 0 ? (

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4">

                                {filteredProducts.map(
                                    (product, index) => (
                                        <ProductCard
                                            key={
                                                product.id ||
                                                product._id
                                            }
                                            product={product}
                                            index={index}
                                            liked={likedProducts.includes(
                                                product.id ||
                                                    product._id
                                            )}
                                            onLike={() =>
                                                toggleLike(
                                                    product.id ||
                                                        product._id
                                                )
                                            }
                                        />
                                    )
                                )}

                            </div>

                        ) : (

                            <div className="flex min-h-[350px] items-center justify-center rounded-[16px] border border-[var(--color-border-light)] bg-white">

                                <div className="text-center">

                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[14px] bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                                        <span className="text-[20px]">
                                            🛒
                                        </span>
                                    </div>

                                    <h3 className="mt-4 text-[16px] font-bold text-[var(--color-text-dark)]">
                                        No products found
                                    </h3>

                                    <p className="mt-1 text-[12px] text-[var(--color-text-secondary)]">
                                        Try changing your filters.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={clearFilters}
                                        className="mt-4 rounded-[9px] bg-[var(--color-primary)] px-4 py-2 text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-[1px] hover:bg-[var(--color-primary-dark)]"
                                    >
                                        Clear Filters
                                    </button>

                                </div>

                            </div>

                        )}

                    </main>

                </div>

            </div>


            {showMobileFilters && (
                <div className="fixed inset-0 z-[100] lg:hidden">

                    <button
                        type="button"
                        aria-label="Close filters"
                        onClick={() =>
                            setShowMobileFilters(false)
                        }
                        className="absolute inset-0 bg-[var(--color-overlay)] opacity-40"
                    />

                    <div className="absolute bottom-0 left-0 right-0 max-h-[82vh] overflow-y-auto rounded-t-[22px] bg-[var(--color-surface)] p-5 shadow-[0_-15px_50px_rgba(6,45,27,0.18)] animate-[productFilterUp_350ms_cubic-bezier(0.22,1,0.36,1)_both]">

                        <ProductFilters
                            mobile
                            categories={categories}
                            categoryLabels={categoryLabels}
                            selectedCategory={category}
                            setSelectedCategory={() => {}}
                            maxPrice={maxPrice}
                            setMaxPrice={setMaxPrice}
                            organicOnly={organicOnly}
                            setOrganicOnly={setOrganicOnly}
                            discountOnly={discountOnly}
                            setDiscountOnly={setDiscountOnly}
                            clearFilters={clearFilters}
                            categoryNavigation
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowMobileFilters(false)
                            }
                            className="mt-5 flex h-[44px] w-full items-center justify-center rounded-[10px] bg-[var(--color-primary)] text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[var(--color-primary-dark)]"
                        >
                            Show {filteredProducts.length} Products
                        </button>

                    </div>

                </div>
            )}

        </section>
    );
};

export default CategoryProducts;