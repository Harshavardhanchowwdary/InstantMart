import {
    ArrowRight,
    Sparkles,
} from "lucide-react";

import DealProductCard from "./DealProductCard";

import { dummyProducts } from "../../../assets/assets";


const DealsProductGrid = () => {

    /*
    |--------------------------------------------------------------------------
    | DEAL PRODUCTS
    |--------------------------------------------------------------------------
    | Reuse the existing dummyProducts.
    |
    | Only products with a discount are shown in the Deals page.
    | Higher discount products appear first.
    |--------------------------------------------------------------------------
    */

    const dealsProducts = [...dummyProducts]
        .filter((product) => product.discount > 0)
        .sort((a, b) => b.discount - a.discount)
        .slice(0, 10);


    return (
        <section className="mt-8 pb-10">

            {/* =================================================
                HEADER
            ================================================== */}

            <div
                className="
                    mb-5
                    flex
                    flex-col
                    gap-3

                    sm:flex-row
                    sm:items-end
                    sm:justify-between
                "
            >

                {/* =================================================
                    TITLE
                ================================================== */}

                <div>

                    <div
                        className="
                            mb-1
                            flex
                            items-center
                            gap-2
                        "
                    >
                        <Sparkles
                            size={15}
                            strokeWidth={1.8}
                            className="
                                text-[var(--color-accent)]
                            "
                        />

                        <span
                            className="
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[1.5px]
                                text-[var(--color-accent)]
                            "
                        >
                            Limited Time
                        </span>
                    </div>


                    <h2
                        className="
                            text-[24px]
                            font-bold
                            tracking-[-0.5px]
                            text-[var(--color-text-primary)]

                            sm:text-[28px]
                        "
                    >
                        Deals you'll want to grab
                    </h2>


                    <p
                        className="
                            mt-1
                            text-[10px]
                            text-[var(--color-text-secondary)]

                            sm:text-[11px]
                        "
                    >
                        Fresh prices. Limited stock. Don't wait too long.
                    </p>

                </div>


                {/* =================================================
                    VIEW ALL
                ================================================== */}

                <button
                    type="button"
                    className="
                        group
                        flex
                        w-fit
                        items-center
                        gap-1.5
                        text-[11px]
                        font-semibold
                        text-[var(--color-primary)]
                        transition-all
                        duration-300

                        hover:text-[var(--color-accent)]
                    "
                >
                    View all deals

                    <ArrowRight
                        size={14}
                        strokeWidth={1.8}
                        className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        "
                    />
                </button>

            </div>


            {/* =================================================
                PRODUCTS GRID
            ================================================== */}

            <div
                className="
                    grid
                    grid-cols-1
                    gap-4

                    min-[480px]:grid-cols-2

                    md:grid-cols-3

                    lg:grid-cols-4

                    xl:grid-cols-5
                "
            >

                {dealsProducts.map((product, index) => (
                    <DealProductCard
                        key={product.id}
                        product={product}
                        index={index}
                    />
                ))}

            </div>

        </section>
    );
};


export default DealsProductGrid;