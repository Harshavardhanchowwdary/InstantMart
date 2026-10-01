import { ArrowRight } from "lucide-react";
import { dummyProducts } from "../../../assets/assets";


const PromoProducts = () => {

    const promoProducts = dummyProducts.slice(0, 2);

    return (
        <section
            className="
                w-full
                bg-[var(--color-background)]
                py-8
                sm:py-9
                lg:py-10
            "
        >

            {/* HEADER */}
            <div className="mb-5">

                <span
                    className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[1.8px]
                        text-[var(--color-accent)]
                    "
                >
                    Special Offers
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
                    Fresh Deals
                </h2>

            </div>


            {/* PROMO CARDS */}
            <div
                className="
                    grid
                    grid-cols-1
                    gap-4
                    sm:grid-cols-2
                "
            >

                {promoProducts.map((product, index) => (

                    <article
                        key={product._id}
                        className={`
                            group
                            relative
                            min-h-[185px]
                            overflow-hidden
                            rounded-[18px]
                            p-5
                            transition-all
                            duration-500
                            hover:-translate-y-1
                            hover:shadow-[0_12px_25px_rgba(0,69,33,0.10)]
                            sm:min-h-[210px]
                            sm:p-6
                            ${
                                index === 0
                                    ? "bg-[#f7f3e9]"
                                    : "bg-[#e1f1dc]"
                            }
                        `}
                    >

                        {/* CONTENT */}

                        <div
                            className="
                                relative
                                z-10
                                w-[55%]
                            "
                        >

                            {/* DISCOUNT */}

                            <span
                                className="
                                    inline-flex
                                    rounded-full
                                    bg-white
                                    px-3
                                    py-1
                                    text-[8px]
                                    font-semibold
                                    text-[var(--color-text-primary)]
                                    shadow-sm
                                "
                            >
                                Flat {product.discount}% Discount
                            </span>


                            {/* PRODUCT NAME */}

                            <h3
                                className="
                                    mt-4
                                    text-[21px]
                                    font-bold
                                    leading-[1.05]
                                    tracking-[-0.5px]
                                    text-[var(--color-text-primary)]
                                    sm:text-[25px]
                                "
                            >
                                {product.name}
                            </h3>


                            {/* DESCRIPTION */}

                            <p
                                className="
                                    mt-2
                                    hidden
                                    max-w-[220px]
                                    text-[10px]
                                    leading-4
                                    text-[var(--color-text-secondary)]
                                    sm:block
                                "
                            >
                                {product.description}
                            </p>


                            {/* SHOP NOW */}

                            <button
                                type="button"
                                className="
                                    mt-4
                                    flex
                                    items-center
                                    gap-1.5
                                    rounded-full
                                    bg-[var(--color-primary)]
                                    px-4
                                    py-2
                                    text-[9px]
                                    font-semibold
                                    text-white
                                    transition-all
                                    duration-300
                                    hover:bg-[var(--color-accent)]
                                    hover:gap-2.5
                                "
                            >
                                <span className="text-[12px]">Shop Now</span>

                                <ArrowRight
                                    size={11}
                                    strokeWidth={2}
                                />
                            </button>

                        </div>


                        {/* PRODUCT IMAGE */}

                        <div
                            className="
                                absolute
                                bottom-0
                                right-[-10px]
                                flex
                                h-full
                                w-[50%]
                                items-end
                                justify-end
                            "
                        >

                            <img
                                src={product.image}
                                alt={product.name}
                                className="
                                    h-[90%]
                                    w-full
                                    object-contain
                                    object-right-bottom
                                    transition-transform
                                    duration-500
                                    ease-out
                                    group-hover:scale-110
                                "
                            />

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
};

export default PromoProducts;