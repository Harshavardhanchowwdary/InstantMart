import {
    Apple,
    ShoppingBasket,
    Coffee,
    CakeSlice,
    Drumstick,
    Milk,
    Baby,
    Snowflake,
    Cookie,
    Sparkles,
} from "lucide-react";


const marqueeItems = [
    {
        label: "Fruits & Vegetables",
        icon: Apple,
    },
    {
        label: "Personal Care",
        icon: Sparkles,
    },
    {
        label: "Pantry Staples",
        icon: ShoppingBasket,
    },
    {
        label: "Bakery",
        icon: CakeSlice,
    },
    {
        label: "Beverages",
        icon: Coffee,
    },
    {
        label: "Meat & Seafood",
        icon: Drumstick,
    },
    {
        label: "Dairy & Eggs",
        icon: Milk,
    },
    {
        label: "Baby Care",
        icon: Baby,
    },
    {
        label: "Frozen Foods",
        icon: Snowflake,
    },
    {
        label: "Snacks",
        icon: Cookie,
    },
];


const CategoryMarquee = () => {

    const renderItems = (prefix) => {

        return marqueeItems.map(
            (item, index) => {

                const Icon = item.icon;

                return (
                    <div
                        key={`${prefix}-${item.label}-${index}`}
                        className="
                            group
                            relative
                            flex
                            h-[40px]
                            shrink-0
                            items-center
                            gap-2
                            overflow-hidden
                            rounded-full
                           
                            bg-[var(--color-surface)]
                            px-4
                            mt-[80px]

                            transition-all
                            duration-300
                            ease-out

                            hover:-translate-y-[1px]
                            hover:border-[var(--color-primary)]
                            hover:shadow-[0_6px_16px_rgba(0,69,33,0.14)]
                        "
                    >

                        {/* =================================================
                            DARK GREEN HOVER COVER
                        ================================================== */}

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
                                group-hover:w-full
                            "
                        />


                        {/* =================================================
                            ICON
                        ================================================== */}

                        <Icon
                            size={16}
                            strokeWidth={1.8}
                            className="
                                relative
                                z-10
                                shrink-0
                                text-[var(--color-accent)]

                                transition-all
                                duration-300
                                ease-out

                                group-hover:scale-110
                                group-hover:rotate-[-5deg]
                                group-hover:text-white
                            "
                        />


                        {/* =================================================
                            TEXT
                        ================================================== */}

                        <span
                            className="
                                relative
                                z-10
                                whitespace-nowrap
                                text-[11px]
                                font-medium
                                text-[var(--color-text-primary)]

                                transition-colors
                                duration-300

                                group-hover:text-white
                            "
                        >
                            {item.label}
                        </span>

                    </div>
                );
            }
        );

    };


    return (
        <section
            className="
                w-full
                overflow-hidden
                py-4
            "
        >

            <div
                className="
                    relative
                    w-full
                    overflow-hidden
                "
            >

                {/* =====================================================
                    LEFT FADE
                ====================================================== */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        left-0
                        top-0
                        z-20
                        h-full
                        w-[55px]
                        bg-gradient-to-r
                        from-[var(--color-background)]
                        to-transparent
                    "
                />


                {/* =====================================================
                    RIGHT FADE
                ====================================================== */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        right-0
                        top-0
                        z-20
                        h-full
                        w-[55px]
                        bg-gradient-to-l
                        from-[var(--color-background)]
                        to-transparent
                    "
                />


                {/* =====================================================
                    MARQUEE TRACK
                ====================================================== */}

                <div
                    className="
                        flex
                        w-max
                        items-center
                        gap-3

                        animate-[categoryMarquee_32s_linear_infinite]

                        hover:[animation-play-state:paused]
                    "
                >

                    {/* =================================================
                        FIRST SET
                    ================================================== */}

                    <div
                        className="
                            flex
                            items-center
                            gap-3
                        "
                    >
                        {renderItems("first")}
                    </div>


                    {/* =================================================
                        DUPLICATE SET
                    ================================================== */}

                    <div
                        className="
                            flex
                            items-center
                            gap-3
                        "
                        aria-hidden="true"
                    >
                        {renderItems("second")}
                    </div>

                </div>

            </div>

        </section>
    );
};


export default CategoryMarquee;