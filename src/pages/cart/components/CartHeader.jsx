const CartHeader = ({
    itemCount,
}) => {

    return (
        <div
            className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-end
                sm:justify-between
            "
        >

            <div>

                <div
                    className="
                        mb-2
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[var(--color-accent)]
                    "
                >
                    Shopping Bag
                </div>

                <h1
                    className="
                        text-[24px]
                        font-bold
                        leading-none
                        tracking-[-0.7px]
                        text-[var(--color-text-dark)]
                        sm:text-[28px]
                    "
                >
                    Your Cart
                </h1>

                <p
                    className="
                        mt-2
                        text-[11px]
                        leading-[1.7]
                        text-[var(--color-text-secondary)]
                        sm:text-[12px]
                    "
                >
                    Review your items before
                    proceeding to checkout.
                </p>

            </div>


            <div
                className="
                    flex
                    h-[32px]
                    w-fit
                    items-center
                    rounded-full
                    border
                    border-[#e7e5df]
                    bg-white
                    px-3
                    text-[9px]
                    font-medium
                    text-[var(--color-text-secondary)]
                "
            >
                <span
                    className="
                        mr-1.5
                        font-semibold
                        text-[var(--color-primary)]
                    "
                >
                    {itemCount}
                </span>

                {itemCount === 1
                    ? "item"
                    : "items"}
            </div>

        </div>
    );
};


export default CartHeader;