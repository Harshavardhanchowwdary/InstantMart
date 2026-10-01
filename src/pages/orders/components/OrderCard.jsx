import {
    CalendarDays,
    ChevronRight,
    CircleCheck,
    Clock3,
    Package,
    ShoppingBag,
    Truck,
} from "lucide-react";

import OrderProductItem from "./OrderProductItem";
import OrderSummary from "./OrderSummary";


const statusConfig = {
    Placed: {
        icon: Clock3,
        badge: "border-orange-100 bg-orange-50 text-orange-700",
        dot: "bg-orange-500",
    },

    Confirmed: {
        icon: CircleCheck,
        badge: "border-amber-100 bg-amber-50 text-amber-700",
        dot: "bg-amber-500",
    },

    Packed: {
        icon: Package,
        badge: "border-slate-200 bg-slate-100 text-slate-700",
        dot: "bg-slate-500",
    },

    "Out for Delivery": {
        icon: Truck,
        badge: "border-orange-200 bg-orange-100 text-orange-700",
        dot: "bg-orange-500",
    },

    Delivered: {
        icon: CircleCheck,
        badge: "border-green-100 bg-green-50 text-green-700",
        dot: "bg-green-500",
    },

    Cancelled: {
        icon: Clock3,
        badge: "border-red-100 bg-red-50 text-red-700",
        dot: "bg-red-500",
    },
};


const OrderCard = ({
    order,
    index = 0,
}) => {

    const currentStatus =
        statusConfig[order.status] ||
        statusConfig.Placed;

    const StatusIcon =
        currentStatus.icon;


    const orderTotal =
        order.items.reduce(
            (total, item) =>
                total +
                Number(item.product.price || 0) *
                    Number(item.quantity || 0),
            0,
        );


    return (
        <article
            className="
                group
                overflow-hidden
                rounded-[16px]
                border
                border-[#e7e5df]
                bg-white
                opacity-0
                shadow-[0_4px_18px_rgba(23,37,30,0.035)]
                animate-[orderCardIn_500ms_ease-out_forwards]
                transition-all
                duration-300
                ease-out
                hover:-translate-y-[2px]
                hover:border-[#dedbd4]
                hover:shadow-[0_14px_32px_rgba(23,37,30,0.08)]
            "
            style={{
                animationDelay: `${index * 100}ms`,
            }}
        >

            {/* =====================================================
                ORDER HEADER
            ====================================================== */}

            <div
                className="
                    flex
                    flex-col
                    gap-4
                    border-b
                    border-[#eeeae4]
                    px-5
                    py-4
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    sm:px-6
                "
            >

                <div className="flex items-center gap-3">

                    <div
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-[10px]
                            bg-[var(--color-accent-light)]
                            text-[var(--color-accent)]
                            transition-all
                            duration-300
                            group-hover:scale-105
                            group-hover:rotate-[-3deg]
                        "
                    >
                        <ShoppingBag
                            size={16}
                            strokeWidth={1.8}
                        />
                    </div>


                    <div>

                        <p
                            className="
                                text-[11px]
                                font-semibold
                                text-[var(--color-text-dark)]
                            "
                        >
                            Order {order.id}
                        </p>


                        <div
                            className="
                                mt-1
                                flex
                                flex-wrap
                                items-center
                                gap-1.5
                                text-[9px]
                                text-[var(--color-text-muted)]
                            "
                        >

                            <CalendarDays
                                size={11}
                                strokeWidth={1.7}
                            />

                            {order.date}

                            <span className="mx-1">
                                •
                            </span>

                            {order.items.length}{" "}
                            {order.items.length === 1
                                ? "item"
                                : "items"}

                        </div>

                    </div>

                </div>


                {/* STATUS */}

                <div
                    className={`
                        inline-flex
                        w-fit
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        px-3
                        py-1.5
                        text-[9px]
                        font-semibold
                        transition-transform
                        duration-300
                        group-hover:scale-[1.02]
                        ${currentStatus.badge}
                    `}
                >

                    <span
                        className={`
                            relative
                            h-[6px]
                            w-[6px]
                            shrink-0
                            rounded-full
                            ${currentStatus.dot}
                        `}
                    >
                        <span
                            className={`
                                absolute
                                inset-0
                                rounded-full
                                ${currentStatus.dot}
                                animate-ping
                            `}
                        />
                    </span>


                    <StatusIcon
                        size={11}
                        strokeWidth={2}
                    />

                    {order.status}

                </div>

            </div>


            {/* =====================================================
                ORDER BODY
            ====================================================== */}

            <div
                className="
                    grid
                    grid-cols-1
                    lg:grid-cols-[minmax(0,1fr)_250px]
                "
            >

                {/* PRODUCTS */}

                <div
                    className="
                        px-5
                        py-5
                        sm:px-6
                    "
                >

                    <div className="space-y-3">

                        {order.items.map(
                            (item, itemIndex) => (
                                <OrderProductItem
                                    key={`${order.id}-${item.product.id}`}
                                    item={item}
                                    index={itemIndex}
                                />
                            ),
                        )}

                    </div>


                    <button
                        type="button"
                        className="
                            group/details
                            mt-4
                            flex
                            items-center
                            gap-1.5
                            text-[10px]
                            font-semibold
                            text-[var(--color-text-dark)]
                            transition-colors
                            duration-300
                            hover:text-[var(--color-accent)]
                        "
                    >

                        View Order Details

                        <ChevronRight
                            size={12}
                            strokeWidth={2}
                            className="
                                transition-transform
                                duration-300
                                group-hover/details:translate-x-1
                            "
                        />

                    </button>

                </div>


                {/* SUMMARY */}

                <OrderSummary
                    order={order}
                    total={orderTotal}
                />

            </div>

        </article>
    );
};


export default OrderCard;