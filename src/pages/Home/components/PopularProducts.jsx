import { Star } from "lucide-react";
import Button from "../../../components/ui/Button";
import { dummyProducts } from "../../../assets/assets";


const PopularProducts = () => {

    const popularProducts = dummyProducts.slice(0, 10);

    return (
        <section
            className="
                w-full
                bg-[var(--color-background)]
                px-0
                py-8
                mt-8
                sm:py-9
                md:py-9
                lg:py-10
            "
        >

            {/* =====================================================
                SECTION HEADER
            ====================================================== */}

            <div
                className="
                    mb-6
                    flex
                    items-end
                    justify-between
                "
            >

                <div>

                    <span
                        className="
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[1.8px]
                            text-[var(--color-accent)]
                        "
                    >
                        Fresh picks
                    </span>

                    <h2
                        className="
                            mt-1
                            text-[24px]
                            font-bold
                            tracking-[-0.5px]
                            text-[var(--color-text-primary)]
                            sm:text-[27px]
                        "
                    >
                        Popular Products
                    </h2>

                    <p
                        className="
                            mt-1
                            text-[10px]
                            text-[var(--color-text-secondary)]
                            sm:text-[11px]
                        "
                    >
                        Our most loved picks, fresh and ready for you.
                    </p>

                </div>

            </div>


            {/* =====================================================
                PRODUCTS GRID
            ====================================================== */}

            <div
                className="
                    grid
                    grid-cols-2
                    gap-3
                    sm:grid-cols-3
                    sm:gap-4
                    md:grid-cols-4
                    lg:grid-cols-5
                    lg:gap-5
                "
            >

                {popularProducts.map((product, index) => (

                    <article
                        key={product._id}
                        className="
                            group
                            relative
                            overflow-hidden
                            rounded-[12px]
                            border
                            border-[var(--color-border-light)]
                            bg-[var(--color-surface)]
                            p-3
                            transition-all
                            duration-300
                            ease-out
                            hover:-translate-y-1
                            hover:border-[var(--color-primary)]
                            hover:shadow-[0_10px_25px_rgba(0,69,33,0.10)]
                            animate-[productCardIn_450ms_cubic-bezier(0.22,1,0.36,1)_var(--product-delay)_both]
                        "
                        style={{
                            "--product-delay": `${index * 50}ms`,
                        }}
                    >

                        {/* DISCOUNT */}

                        <span
                            className="
                                absolute
                                left-3
                                top-3
                                z-10
                                rounded-full
                                bg-[var(--color-primary-light)]
                                px-2
                                py-1
                                text-[8px]
                                font-semibold
                                text-[var(--color-primary)]
                            "
                        >
                            - {product.discount}%
                        </span>


                        {/* PRODUCT IMAGE */}

                        <div
                            className="
                                flex
                                h-[145px]
                                w-full
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-[9px]
                                bg-[#fafaf8]
                                sm:h-[155px]
                                lg:h-[165px]
                            "
                        >

                            <img
                                src={product.image}
                                alt={product.name}
                                className="
                                    h-full
                                    w-full
                                    object-contain
                                    p-3
                                    transition-transform
                                    duration-500
                                    ease-out
                                    group-hover:scale-110
                                "
                            />

                        </div>


                        {/* PRODUCT DETAILS */}

                        <div className="pt-3">

                            <h3
                                className="
                                    truncate
                                    text-[12px]
                                    font-semibold
                                    text-[var(--color-text-primary)]
                                    sm:text-[13px]
                                "
                                title={product.name}
                            >
                                {product.name}
                            </h3>


                            <p
                                className="
                                    mt-1
                                    h-[27px]
                                    overflow-hidden
                                    text-[9px]
                                    leading-[13px]
                                    text-[var(--color-text-secondary)]
                                    sm:text-[10px]
                                "
                            >
                                {product.description}
                            </p>


                            {/* RATING */}

                            <div
                                className="
                                    mt-2
                                    flex
                                    items-center
                                    gap-[2px]
                                "
                            >

                                {[1, 2, 3, 4, 5].map((star) => (

                                    <Star
                                        key={star}
                                        size={11}
                                        strokeWidth={1.5}
                                        className="
                                            fill-[#f5b301]
                                            text-[#f5b301]
                                        "
                                    />

                                ))}

                                <span
                                    className="
                                        ml-1
                                        text-[8px]
                                        text-[var(--color-text-muted)]
                                    "
                                >
                                    ({product.reviewCount})
                                </span>

                            </div>


                            {/* PRICE + REUSABLE BUY BUTTON */}

                            <div
                                className="
                                    mt-2
                                    flex
                                    items-end
                                    justify-between
                                    gap-2
                                "
                            >

                                <div className="min-w-0">

                                    <p
                                        className="
                                            text-[14px]
                                            font-bold
                                            text-[var(--color-text-primary)]
                                            sm:text-[15px]
                                        "
                                    >
                                        ₹{product.price}
                                    </p>

                                    <p
                                        className="
                                            text-[8px]
                                            text-[var(--color-text-muted)]
                                            line-through
                                        "
                                    >
                                        ₹{product.originalPrice}
                                    </p>

                                </div>


                                {/* REUSABLE BUTTON */}

                                <Button
                                    onClick={() => {
                                        // Buy now logic
                                    }}
                                />

                            </div>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
};


export default PopularProducts;