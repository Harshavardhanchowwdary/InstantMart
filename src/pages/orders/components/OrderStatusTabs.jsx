import {
    CheckCircle2,
    Clock3,
    Package,
    ShoppingBag,
    Truck,
} from "lucide-react";


const statusTabs = [
    {
        label: "All Orders",
        icon: ShoppingBag,
    },
    {
        label: "Placed",
        icon: Clock3,
    },
    {
        label: "Confirmed",
        icon: CheckCircle2,
    },
    {
        label: "Packed",
        icon: Package,
    },
    {
        label: "Out for Delivery",
        icon: Truck,
    },
    {
        label: "Delivered",
        icon: CheckCircle2,
    },
];


const OrderStatusTabs = ({
    activeStatus,
    onStatusChange,
}) => {

    return (
        <div
            className="
                mt-6
                flex
                flex-wrap
                gap-2
                pb-1
                sm:mt-7
            "
        >

            {statusTabs.map((tab) => {

                const Icon = tab.icon;

                const isActive =
                    activeStatus === tab.label;

                return (

                    <button
                        key={tab.label}
                        type="button"
                        onClick={() =>
                            onStatusChange(tab.label)
                        }
                        className={`
                            group/status
                            relative
                            flex
                            h-[42px]
                            shrink-0
                            items-center
                            gap-1.5
                            overflow-hidden
                            rounded-full
                            border
                            px-4
                            text-[10px]
                            font-medium
                            transition-all
                            duration-300
                            ease-out
                            hover:-translate-y-[1px]

                            ${
                                isActive
                                    ? `
                                        border-[var(--color-primary)]
                                        bg-[var(--color-primary)]
                                        text-white
                                        shadow-[0_6px_16px_rgba(0,69,33,0.18)]
                                    `
                                    : `
                                        border-[#e6e3dd]
                                        bg-white
                                        text-[var(--color-text-secondary)]
                                        hover:border-[var(--color-primary)]
                                        hover:shadow-[0_6px_16px_rgba(0,69,33,0.14)]
                                    `
                            }
                        `}
                    >

                        {/* HOVER SWEEP */}

                        {!isActive && (
                            <span
                                className="
                                    absolute
                                    inset-y-0
                                    left-0
                                    z-0
                                    w-0
                                    bg-[var(--color-primary)]
                                    transition-all
                                    duration-300
                                    ease-[cubic-bezier(0.22,1,0.36,1)]
                                    group-hover/status:w-full
                                "
                            />
                        )}


                        {/* ICON */}

                        <Icon
                            size={12}
                            strokeWidth={1.8}
                            className={`
                                relative
                                z-10
                                shrink-0
                                transition-all
                                duration-300
                                ease-out

                                ${
                                    isActive
                                        ? "text-white"
                                        : "text-[var(--color-accent)] group-hover/status:scale-110 group-hover/status:text-white"
                                }
                            `}
                        />


                        {/* LABEL */}

                        <span
                            className={`
                                relative
                                z-10
                                whitespace-nowrap
                                transition-colors
                                duration-300

                                ${
                                    isActive
                                        ? "text-white"
                                        : "group-hover/status:text-white"
                                }
                            `}
                        >
                            {tab.label}
                        </span>

                    </button>

                );

            })}

        </div>
    );
};


export default OrderStatusTabs;