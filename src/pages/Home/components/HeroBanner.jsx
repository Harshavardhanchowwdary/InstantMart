import { assets } from "../../../assets/assets";

const HeroBanner = () => {
    return (
        <section className="w-full py-6 sm:py-8 mt-3">

            <div
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-[1488px]
                    overflow-hidden
                    rounded-[16px]
                    sm:rounded-[18px]
                "
            >

                {/* =================================================
                    BANNER IMAGE
                ================================================== */}

                <img
                    src={assets.hero_bg}
                    alt="Fresh organic groceries"
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        object-center
                    "
                />


                {/* =================================================
                    DARK OVERLAY
                ================================================== */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-[#062d1b]/95
                        via-[#062d1b]/70
                        to-transparent
                    "
                />


                {/* =================================================
                    CONTENT
                ================================================== */}

                <div
                    className="
                        relative
                        z-10
                        flex
                        min-h-[360px]
                        items-center
                        px-6
                        py-12

                        sm:min-h-[400px]
                        sm:px-10
                        sm:py-14

                        md:min-h-[430px]
                        md:px-12

                        lg:min-h-[470px]
                        lg:px-[48px]

                        xl:px-[48px]
                    "
                >

                    <div
                        className="
                            w-full
                            max-w-[520px]
                        "
                    >

                        {/* =================================================
                            SMALL LABEL
                        ================================================== */}

                        <div
                            className="
                                mb-5
                                inline-flex
                                items-center
                                rounded-full
                                bg-[#b98522]/20
                                px-3
                                py-1
                                text-[9px]
                                font-medium
                                tracking-wide
                                text-[#f2bd58]

                                sm:mb-6
                                sm:text-[10px]
                            "
                        >

                            {/* =================================================
                                PULSING STATUS DOT
                            ================================================== */}

                            <span
                                className="
                                    relative
                                    mr-2
                                    flex
                                    h-[14px]
                                    w-[14px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#004521]
                                "
                            >
                                {/* Outer pulse ring */}

                                <span
                                    className="
                                        absolute
                                        inset-0
                                        rounded-full
                                        border
                                        border-[#ff8a00]/50
                                        animate-ping
                                    "
                                />

                                {/* Orange center */}

                                <span
                                    className="
                                        relative
                                        h-[7px]
                                        w-[7px]
                                        rounded-full
                                        bg-[#ff8a00]
                                        shadow-[0_0_8px_rgba(255,138,0,0.85)]
                                        animate-pulse
                                    "
                                />
                            </span>


                            Farm-Fresh &amp; Organic

                        </div>


                        {/* =================================================
                            HEADING
                        ================================================== */}

                        <h1
                            className="
                                max-w-[500px]
                                font-serif
                                text-[34px]
                                font-semibold
                                leading-[1.05]
                                tracking-[-1px]
                                text-white

                                sm:text-[42px]
                                sm:leading-[1.08]

                                md:text-[48px]

                                lg:text-[52px]
                            "
                        >
                            Nourish your home

                            <br />

                            with{" "}

                            <span className="text-[#ffbd63]">
                                Earth's finest
                            </span>
                        </h1>


                        {/* =================================================
                            DESCRIPTION
                        ================================================== */}

                        <p
                            className="
                                mt-5
                                max-w-[430px]
                                text-[11px]
                                leading-[1.7]
                                text-white/70

                                sm:mt-6
                                sm:text-[12px]
                                sm:leading-[1.65]
                            "
                        >
                            Fresh, organic groceries delivered from local
                            farms to your doorstep. Quality you can taste,
                            convenience you deserve.
                        </p>


                        {/* =================================================
                            ACTION BUTTONS
                        ================================================== */}

                        <div
                            className="
                                mt-8
                                flex
                                flex-wrap
                                items-center
                                gap-3

                                sm:mt-9
                                sm:gap-4
                            "
                        >

                            {/* =================================================
                                SHOP NOW
                            ================================================== */}

                            <button
                                type="button"
                                className="
                                    group
                                    flex
                                    h-[48px]
                                    min-w-[150px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#ff8a00]
                                    px-7
                                    text-[12px]
                                    font-semibold
                                    text-white
                                    shadow-[0_8px_20px_rgba(255,138,0,0.22)]
                                    transition-all
                                    duration-300
                                    ease-out

                                    hover:-translate-y-1
                                    hover:bg-[#e97800]
                                    hover:shadow-[0_12px_26px_rgba(255,138,0,0.32)]

                                    active:translate-y-0
                                    active:scale-[0.97]

                                    sm:h-[50px]
                                    sm:min-w-[165px]
                                    sm:px-8
                                    sm:text-[13px]
                                "
                            >
                                <span>
                                    Shop Now
                                </span>

                                <span
                                    className="
                                        ml-2
                                        inline-block
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                >
                                    →
                                </span>
                            </button>


                            {/* =================================================
                                BROWSE CATEGORIES
                            ================================================== */}

                            <button
                                type="button"
                                className="
                                    group
                                    flex
                                    h-[48px]
                                    min-w-[175px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/25
                                    bg-white/10
                                    px-7
                                    text-[12px]
                                    font-medium
                                    text-white
                                    backdrop-blur-md
                                    transition-all
                                    duration-300
                                    ease-out

                                    hover:-translate-y-1
                                    hover:border-white/40
                                    hover:bg-white/20
                                    hover:shadow-[0_10px_24px_rgba(0,0,0,0.15)]

                                    active:translate-y-0
                                    active:scale-[0.97]

                                    sm:h-[50px]
                                    sm:min-w-[190px]
                                    sm:px-8
                                    sm:text-[13px]
                                "
                            >
                                <span
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-0.5
                                    "
                                >
                                    Browse Categories
                                </span>
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default HeroBanner;