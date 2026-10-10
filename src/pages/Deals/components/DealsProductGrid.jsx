
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../../../assets/assets";
import DealProductCard from "./DealProductCard";

const DealsProductGrid = () => {
    const navigate = useNavigate();

    const dealsProducts = [...dummyProducts]
        .filter((product) => Number(product.discount) > 0)
        .sort((a, b) => Number(b.discount) - Number(a.discount))
        .slice(0, 10);

    return (
        <section className="mt-8 pb-10">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <div className="mb-2 flex items-center gap-2 text-[var(--color-accent)]">
                        <Sparkles size={15} />
                        <span className="text-[10px] font-semibold uppercase tracking-[1.5px]">
                            Special offers
                        </span>
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
                        Deals you'll want to grab
                    </h2>

                    <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                        Save on your everyday essentials.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => navigate("/products")}
                    className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]"
                >
                    View all products
                    <ArrowRight size={16} />
                </button>
            </div>

            {dealsProducts.length > 0 ? (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
                    {dealsProducts.map((product) => (
                        <DealProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            ) : (
                <div className="rounded-xl border border-[var(--color-border-light)] bg-white px-5 py-12 text-center">
                    <p className="font-semibold text-[var(--color-text-primary)]">
                        No deals available right now
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                        Please check back later for new offers.
                    </p>
                </div>
            )}
        </section>
    );
};

export default DealsProductGrid;
