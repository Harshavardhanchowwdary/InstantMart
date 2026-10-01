import {
    Truck,
    Leaf,
    Clock3,
    ShieldCheck,
} from "lucide-react";

import { heroSectionData } from "../../../assets/assets";


const iconMap = {
    TruckIcon: Truck,
    LeafIcon: Leaf,
    ClockIcon: Clock3,
    ShieldCheckIcon: ShieldCheck,
};


const HeroFeatures = () => {

    return (
        <section className="w-full py-4 sm:py-5">

            <div
                className="
        grid
        w-full
        grid-cols-2
        overflow-hidden
        rounded-[12px]
        border
        border-[var(--color-border-light)]
        bg-[var(--color-surface)]
        shadow-[0_2px_10px_rgba(0,0,0,0.03)]

        lg:grid-cols-4
    "
            >
                {heroSectionData.hero_features.map(
                    (feature, index) => {

                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="
                        group
                        relative
                        flex
                        min-h-[105px]
                        cursor-default
                        items-center
                        justify-center
                        gap-3
                        px-3
                        py-4

                        transition-all
                        duration-300
                        ease-out

                        hover:-translate-y-[1px]
                        hover:bg-[var(--color-primary)]
                        hover:shadow-[0_8px_20px_rgba(0,69,33,0.14)]

                        lg:min-h-[82px]
                        lg:justify-start
                        lg:gap-4
                        lg:px-5
                        lg:py-4
                    "
                            >

                                {/* Divider */}

                                {index !== 0 && (
                                    <span
                                        className="
                                absolute
                                left-0
                                top-1/2
                                hidden
                                h-[34px]
                                w-px
                                -translate-y-1/2
                                bg-[var(--color-border-light)]

                                lg:block

                                group-hover:bg-white/10
                            "
                                    />
                                )}

                                {/* Feature Content */}

                                <div
                                    className="
                            flex
                            items-center
                            gap-3
                        "
                                >

                                    {/* Icon */}

                                    <div
                                        className="
                                flex
                                h-[34px]
                                w-[34px]
                                shrink-0
                                items-center
                                justify-center
                                rounded-[8px]
                                bg-[var(--color-primary-light)]
                                text-[var(--color-primary)]

                                transition-all
                                duration-300
                                ease-out

                                group-hover:bg-white/10
                                group-hover:text-white
                                group-hover:rotate-[-4deg]
                            "
                                    >
                                        <Icon
                                            size={17}
                                            strokeWidth={1.7}
                                        />
                                    </div>


                                    {/* Text */}

                                    <div className="min-w-0">

                                        <h3
                                            className="
                                    text-[13px]
                                    font-semibold
                                    leading-[15px]
                                    text-[var(--color-text-primary)]
                                    transition-colors
                                    duration-300
                                    group-hover:text-white
                                "
                                        >
                                            {feature.title}
                                        </h3>

                                        <p
                                            className="
                                    mt-[2px]
                                    text-[12px]
                                    leading-[10px]
                                    text-[var(--color-text-secondary)]
                                    transition-colors
                                    duration-300
                                    group-hover:text-white/70
                                "
                                        >
                                            {feature.desc}
                                        </p>

                                    </div>

                                </div>


                                {/* Animated Accent Line */}

                                <span
                                    className="
                            absolute
                            bottom-0
                            left-1/2
                            h-[2px]
                            w-0
                            -translate-x-1/2
                            rounded-full
                            bg-[var(--color-accent)]
                            transition-all
                            duration-300
                            ease-out
                            group-hover:w-[38px]
                        "
                                />

                            </div>
                        );
                    }
                )}
            </div>

        </section>
    );
};


export default HeroFeatures;