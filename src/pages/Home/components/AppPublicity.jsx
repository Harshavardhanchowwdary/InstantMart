import deliveryTruck from "../../../assets/delivery_truck.svg";


const AppPublicity = () => {
    return (
        <section
            className="
                w-full
                overflow-hidden
                rounded-[18px]
                bg-[var(--color-primary)]
                px-6
                py-10
                mt-[100px]
                sm:px-8
                sm:py-12

                md:px-12
                md:py-14

                lg:px-14
                lg:py-16
            "
        >

            <div
                className="
                    mx-auto
                    grid
                    w-full
                    max-w-[1400px]
                    items-center
                    gap-10

                    md:grid-cols-2
                    md:gap-8

                    lg:gap-12
                "
            >

                {/* =====================================================
                    CONTENT
                ====================================================== */}

                <div
                    className="
                        max-w-[620px]
                        animate-[appContentIn_700ms_cubic-bezier(0.22,1,0.36,1)_both]
                    "
                >

                    <span
                        className="
                            inline-block
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[2px]
                            text-[#ffb15c]

                            sm:text-[10px]
                        "
                    >
                        Instant delivery
                    </span>


                    <h2
                        className="
                            mt-3
                            font-serif
                            text-[32px]
                            font-semibold
                            leading-[1.08]
                            tracking-[-0.8px]
                            text-white

                            sm:text-[38px]

                            md:text-[40px]

                            lg:text-[46px]
                        "
                    >
                        Get fresh groceries
                        <br className="hidden sm:block" />
                        <span className="text-[#ffb15c]">
                            {" "}in minutes
                        </span>
                    </h2>


                    <p
                        className="
                            mt-4
                            max-w-[560px]
                            text-[11px]
                            leading-[1.8]
                            text-white/70

                            sm:text-[12px]

                            md:text-[13px]
                        "
                    >
                        Download the InstantMart app for exclusive deals,
                        real-time tracking, and the freshest selection
                        delivered right to your door.
                    </p>


                    {/* =================================================
                        APP BUTTONS
                    ================================================== */}

                    <div
                        className="
                            mt-7
                            flex
                            flex-wrap
                            gap-3

                            sm:mt-8
                            sm:gap-4
                        "
                    >

                        {/* =================================================
                            APP STORE
                        ================================================== */}

                        <button
                            type="button"
                            className="
                                group
                                relative
                                flex
                                h-[48px]
                                min-w-[140px]
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-[11px]
                                bg-white
                                px-6
                                text-[11px]
                                font-semibold
                                text-[var(--color-primary)]

                                transition-all
                                duration-300
                                ease-out

                                hover:-translate-y-1
                                hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)]

                                active:translate-y-0
                                active:scale-[0.97]

                                sm:h-[52px]
                                sm:min-w-[150px]
                                sm:text-[12px]
                            "
                        >

                            {/* Dark green hover cover */}

                            <span
                                className="
                                    absolute
                                    inset-y-0
                                    left-0
                                    w-0
                                    bg-[var(--color-primary-dark)]
                                    transition-all
                                    duration-350
                                    ease-out
                                    group-hover:w-full
                                "
                            />

                            <span
                                className="
                                    relative
                                    z-10
                                    transition-colors
                                    duration-300
                                    group-hover:text-white
                                "
                            >
                                App Store
                            </span>

                        </button>


                        {/* =================================================
                            GOOGLE PLAY
                        ================================================== */}

                        <button
                            type="button"
                            className="
                                group
                                relative
                                flex
                                h-[48px]
                                min-w-[155px]
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-[11px]
                                border
                                border-white/20
                                bg-white/10
                                px-6
                                text-[11px]
                                font-semibold
                                text-white
                                backdrop-blur-sm

                                transition-all
                                duration-300
                                ease-out

                                hover:-translate-y-1
                                hover:border-[#ff8a00]
                                hover:shadow-[0_10px_24px_rgba(255,107,0,0.16)]

                                active:translate-y-0
                                active:scale-[0.97]

                                sm:h-[52px]
                                sm:min-w-[165px]
                                sm:text-[12px]
                            "
                        >

                            {/* Orange hover cover */}

                            <span
                                className="
                                    absolute
                                    inset-y-0
                                    left-0
                                    w-0
                                    bg-[var(--color-accent)]
                                    transition-all
                                    duration-350
                                    ease-out
                                    group-hover:w-full
                                "
                            />

                            <span
                                className="
                                    relative
                                    z-10
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-0.5
                                "
                            >
                                Google Play
                            </span>

                        </button>

                    </div>

                </div>


                {/* =====================================================
                    APP ILLUSTRATION
                ====================================================== */}

                <div
                    className="
                        flex
                        w-full
                        items-center
                        justify-center

                        md:justify-end
                    "
                >

                    <div
                        className="
                            w-full
                            max-w-[560px]

                            animate-[appIllustrationFloat_4s_ease-in-out_infinite]
                        "
                    >


                        <img
                            src={deliveryTruck}
                            alt="Delivery truck"
                            className="
        w-[120px]
        h-auto

        min-[600px]:w-[200px]
        min-[900px]:w-auto

        hover:scale-[1.025]
        transition-transform
        duration-200
    "
                        />



                    </div>

                </div>

            </div>

        </section>
    );
};


export default AppPublicity;