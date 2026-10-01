import React, {
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";


import {
    dummyProducts,
} from "../../assets/assets";


import "./Products.css";


import ProductsBackground
    from "./components/ProductsBackground";


import ProductBreadcrumb
    from "./components/ProductBreadcrumb";


import ProductToolbar
    from "./components/ProductToolbar";


import ProductFilters
    from "./components/ProductFilters";


import ProductCard
    from "./components/ProductCard";



const Products = () => {


    // =====================================================
    // FILTER / SEARCH STATE
    // =====================================================

    const [
        selectedCategory,
        setSelectedCategory,
    ] = useState("all");


    const [
        searchQuery,
        setSearchQuery,
    ] = useState("");


    const [
        sortBy,
        setSortBy,
    ] = useState("featured");


    const [
        maxPrice,
        setMaxPrice,
    ] = useState(600);


    const [
        organicOnly,
        setOrganicOnly,
    ] = useState(false);


    const [
        discountOnly,
        setDiscountOnly,
    ] = useState(false);


    const [
        showMobileFilters,
        setShowMobileFilters,
    ] = useState(false);


    const [
        likedProducts,
        setLikedProducts,
    ] = useState([]);



    // =====================================================
    // PRODUCT / FILTER HEIGHT
    // =====================================================

    const sidebarRef = useRef(null);


    const [
        sidebarHeight,
        setSidebarHeight,
    ] = useState(null);



    // =====================================================
    // CATEGORY LABELS
    // =====================================================

    const categoryLabels = {

        "fruits-vegetables":
            "Fruits & Vegetables",

        "pantry-staples":
            "Pantry Staples",

        bakery:
            "Bakery",

        beverages:
            "Beverages",

        "dairy-eggs":
            "Dairy & Eggs",

        snacks:
            "Snacks",

        "frozen-foods":
            "Frozen Foods",

        "baby-care":
            "Baby Care",

    };



    // =====================================================
    // CATEGORIES
    // =====================================================

    const categories = useMemo(
        () =>
            [
                ...new Set(
                    dummyProducts.map(
                        (product) =>
                            product.category
                    )
                ),
            ],
        []
    );



    // =====================================================
    // FILTERED PRODUCTS
    // =====================================================

    const filteredProducts = useMemo(() => {

        const products =
            dummyProducts.filter(
                (product) => {

                    const matchesCategory =
                        selectedCategory === "all" ||
                        product.category ===
                            selectedCategory;


                    const searchValue =
                        searchQuery.toLowerCase();


                    const matchesSearch =
                        product.name
                            .toLowerCase()
                            .includes(
                                searchValue
                            ) ||

                        product.description
                            .toLowerCase()
                            .includes(
                                searchValue
                            );


                    const matchesPrice =
                        product.price <=
                        maxPrice;


                    const matchesOrganic =
                        !organicOnly ||
                        product.isOrganic;


                    const matchesDiscount =
                        !discountOnly ||
                        product.discount > 0;


                    return (
                        matchesCategory &&
                        matchesSearch &&
                        matchesPrice &&
                        matchesOrganic &&
                        matchesDiscount
                    );

                }
            );


        return [...products].sort(
            (first, second) => {

                if (
                    sortBy ===
                    "price-low"
                ) {

                    return (
                        first.price -
                        second.price
                    );

                }


                if (
                    sortBy ===
                    "price-high"
                ) {

                    return (
                        second.price -
                        first.price
                    );

                }


                if (
                    sortBy ===
                    "rating"
                ) {

                    return (
                        second.rating -
                        first.rating
                    );

                }


                if (
                    sortBy ===
                    "discount"
                ) {

                    return (
                        second.discount -
                        first.discount
                    );

                }


                return 0;

            }
        );

    }, [
        selectedCategory,
        searchQuery,
        sortBy,
        maxPrice,
        organicOnly,
        discountOnly,
    ]);



    // =====================================================
    // LIKE / UNLIKE PRODUCT
    // =====================================================

    const toggleLike = (productId) => {

        setLikedProducts(
            (previous) =>

                previous.includes(
                    productId
                )

                    ? previous.filter(
                        (id) =>
                            id !==
                            productId
                    )

                    : [
                        ...previous,
                        productId,
                    ]
        );

    };



    // =====================================================
    // CLEAR FILTERS
    // =====================================================

    const clearFilters = () => {

        setSelectedCategory("all");

        setSearchQuery("");

        setSortBy("featured");

        setMaxPrice(600);

        setOrganicOnly(false);

        setDiscountOnly(false);

    };



    // =====================================================
    // MATCH PRODUCT HEIGHT WITH FILTER HEIGHT
    // =====================================================

    useEffect(() => {

        const updateProductsHeight = () => {

            // ---------------------------------------------
            // MOBILE
            // ---------------------------------------------

            if (
                window.innerWidth < 1024
            ) {

                setSidebarHeight(null);

                return;

            }


            // ---------------------------------------------
            // DESKTOP
            // ---------------------------------------------

            if (!sidebarRef.current) {
                return;
            }


            const height =
                sidebarRef.current.getBoundingClientRect()
                    .height;


            setSidebarHeight(height);

        };


        // Initial calculation
        updateProductsHeight();


        // ---------------------------------------------
        // WATCH SIDEBAR SIZE CHANGES
        // ---------------------------------------------

        const resizeObserver =
            new ResizeObserver(() => {

                updateProductsHeight();

            });


        if (sidebarRef.current) {

            resizeObserver.observe(
                sidebarRef.current
            );

        }


        // ---------------------------------------------
        // WATCH WINDOW RESIZE
        // ---------------------------------------------

        window.addEventListener(
            "resize",
            updateProductsHeight
        );


        // ---------------------------------------------
        // CLEANUP
        // ---------------------------------------------

        return () => {

            resizeObserver.disconnect();

            window.removeEventListener(
                "resize",
                updateProductsHeight
            );

        };

    }, []);



    // =====================================================
    // RENDER
    // =====================================================

    return (

        <section
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[var(--color-background)]
            "
        >

            {/* =================================================
                AMBIENT PRODUCTS BACKGROUND
            ================================================= */}

            <ProductsBackground />



            {/* =================================================
                PRODUCTS CONTENT
            ================================================= */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    w-full
                    max-w-[1488px]
                    px-4
                    pb-12
                    pt-4
                    sm:px-6
                    lg:px-10
                    xl:px-[56px]
                "
            >


                {/* =================================================
                    BREADCRUMB / CATEGORY HEADER
                ================================================= */}

                <ProductBreadcrumb />



                {/* =================================================
                    SEARCH / SORT TOOLBAR
                ================================================= */}

                <ProductToolbar
                    searchQuery={
                        searchQuery
                    }

                    setSearchQuery={
                        setSearchQuery
                    }

                    sortBy={
                        sortBy
                    }

                    setSortBy={
                        setSortBy
                    }

                    resultCount={
                        filteredProducts.length
                    }

                    onFilterClick={() =>
                        setShowMobileFilters(
                            true
                        )
                    }
                />



                {/* =================================================
                    FILTERS + PRODUCT GRID
                ================================================= */}

                <div
                    className="
                        mt-5
                        grid
                        grid-cols-1
                        gap-5

                        lg:grid-cols-[220px_minmax(0,1fr)]
                        lg:items-start
                    "
                >


                    {/* =================================================
                        DESKTOP FILTER SIDEBAR

                        THIS SIDEBAR DEFINES THE HEIGHT
                    ================================================= */}

                    <aside
                        ref={sidebarRef}
                        className="
                            hidden
                            lg:block
                            self-start
                        "
                    >

                        <ProductFilters
                            categories={
                                categories
                            }

                            categoryLabels={
                                categoryLabels
                            }

                            selectedCategory={
                                selectedCategory
                            }

                            setSelectedCategory={
                                setSelectedCategory
                            }

                            maxPrice={
                                maxPrice
                            }

                            setMaxPrice={
                                setMaxPrice
                            }

                            organicOnly={
                                organicOnly
                            }

                            setOrganicOnly={
                                setOrganicOnly
                            }

                            discountOnly={
                                discountOnly
                            }

                            setDiscountOnly={
                                setDiscountOnly
                            }

                            clearFilters={
                                clearFilters
                            }
                        />

                    </aside>



                    {/* =================================================
                        PRODUCTS

                        EXACT SAME HEIGHT AS SIDEBAR

                        ONLY THIS AREA SCROLLS
                    ================================================= */}

                    <main
                        className="
                            min-w-0
                            min-h-0
                            self-start
                            overflow-y-auto
                            pr-2
                            products-scroll
                        "

                        style={
                            sidebarHeight
                                ? {
                                    height:
                                        `${sidebarHeight}px`,
                                }
                                : undefined
                        }
                    >

                        {filteredProducts.length > 0 ? (

                            <div
                                className="
                                    grid
                                    grid-cols-2
                                    gap-3

                                    sm:grid-cols-3
                                    sm:gap-4

                                    xl:grid-cols-4
                                "
                            >

                                {filteredProducts.map(
                                    (
                                        product,
                                        index
                                    ) => (

                                        <ProductCard
                                            key={
                                                product.id ||
                                                product._id
                                            }

                                            product={
                                                product
                                            }

                                            index={
                                                index
                                            }

                                            liked={
                                                likedProducts.includes(
                                                    product.id ||
                                                    product._id
                                                )
                                            }

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

                            /* =================================================
                                EMPTY STATE
                            ================================================= */

                            <div
                                className="
                                    flex
                                    min-h-[360px]
                                    items-center
                                    justify-center
                                    rounded-[16px]
                                    border
                                    border-[var(--color-border-light)]
                                    bg-white
                                "
                            >

                                <div
                                    className="
                                        text-center
                                    "
                                >

                                    <div
                                        className="
                                            mx-auto
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-[14px]
                                            bg-[var(--color-primary-light)]
                                            text-[var(--color-primary)]
                                        "
                                    >
                                        🔎
                                    </div>


                                    <h3
                                        className="
                                            mt-4
                                            text-[16px]
                                            font-bold
                                            text-[var(--color-text-primary)]
                                        "
                                    >
                                        No products found
                                    </h3>


                                    <p
                                        className="
                                            mt-1
                                            text-[12px]
                                            text-[var(--color-text-secondary)]
                                        "
                                    >
                                        Try changing your
                                        filters or search.
                                    </p>


                                    <button
                                        type="button"
                                        onClick={
                                            clearFilters
                                        }
                                        className="
                                            mt-4
                                            rounded-[9px]
                                            bg-[var(--color-primary)]
                                            px-4
                                            py-2
                                            text-[12px]
                                            font-semibold
                                            text-white
                                            transition-all
                                            duration-300
                                            hover:-translate-y-[1px]
                                            hover:bg-[var(--color-primary-dark)]
                                        "
                                    >
                                        Clear Filters
                                    </button>

                                </div>

                            </div>

                        )}

                    </main>

                </div>



                {/* =================================================
                    MOBILE FILTER DRAWER
                ================================================= */}

                {showMobileFilters && (

                    <div
                        className="
                            fixed
                            inset-0
                            z-[100]
                            lg:hidden
                        "
                    >


                        {/* =================================================
                            BACKDROP
                        ================================================= */}

                        <button
                            type="button"
                            aria-label="Close filters"
                            onClick={() =>
                                setShowMobileFilters(
                                    false
                                )
                            }
                            className="
                                absolute
                                inset-0
                                bg-[var(--color-overlay)]
                                opacity-40
                            "
                        />



                        {/* =================================================
                            MOBILE FILTER DRAWER
                        ================================================= */}

                        <div
                            className="
                                absolute
                                bottom-0
                                left-0
                                right-0
                                max-h-[82vh]
                                overflow-y-auto
                                rounded-t-[22px]
                                bg-[var(--color-surface)]
                                p-5
                                shadow-[0_-15px_50px_rgba(6,45,27,0.18)]
                                animate-[productFilterUp_350ms_cubic-bezier(0.22,1,0.36,1)_both]
                            "
                        >

                            <ProductFilters
                                mobile

                                categories={
                                    categories
                                }

                                categoryLabels={
                                    categoryLabels
                                }

                                selectedCategory={
                                    selectedCategory
                                }

                                setSelectedCategory={
                                    setSelectedCategory
                                }

                                maxPrice={
                                    maxPrice
                                }

                                setMaxPrice={
                                    setMaxPrice
                                }

                                organicOnly={
                                    organicOnly
                                }

                                setOrganicOnly={
                                    setOrganicOnly
                                }

                                discountOnly={
                                    discountOnly
                                }

                                setDiscountOnly={
                                    setDiscountOnly
                                }

                                clearFilters={
                                    clearFilters
                                }
                            />


                            {/* =================================================
                                SHOW PRODUCTS
                            ================================================= */}

                            <button
                                type="button"
                                onClick={() =>
                                    setShowMobileFilters(
                                        false
                                    )
                                }
                                className="
                                    mt-5
                                    flex
                                    h-[44px]
                                    w-full
                                    items-center
                                    justify-center
                                    rounded-[10px]
                                    bg-[var(--color-primary)]
                                    text-[13px]
                                    font-semibold
                                    text-white
                                    transition-all
                                    duration-300
                                    hover:bg-[var(--color-primary-dark)]
                                "
                            >
                                Show{" "}

                                {
                                    filteredProducts.length
                                }{" "}

                                Products
                            </button>

                        </div>

                    </div>

                )}

            </div>

        </section>

    );

};


export default Products;