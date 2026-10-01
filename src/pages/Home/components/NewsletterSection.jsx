import {
    Mail,
    ArrowRight,
    Sparkles,
    Rocket,
    Send,
} from "lucide-react";

const NewsletterSection = () => {
    return (
        <section
            className="
                relative
                w-full
                overflow-hidden
                rounded-[18px]
                bg-[var(--color-primary)]
                px-5
                py-10
                mt-10
                mb-10

                sm:px-8
                sm:py-12

                md:px-12
                md:py-14

                lg:px-14
                lg:py-14

                xl:px-16
                xl:py-16
            "
        >
            {/* =====================================================
                MAIN LAYOUT
            ====================================================== */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    w-full
                    max-w-[1200px]
                    flex-col
                    items-center
                    gap-10

                    lg:flex-row
                    lg:items-center
                    lg:gap-8

                    xl:gap-14
                "
            >
                {/* =================================================
                    LEFT CONTENT
                ================================================== */}

                <div
                    className="
                        w-full
                        max-w-[680px]
                        text-center

                        lg:w-[58%]
                        lg:max-w-none
                        lg:text-left

                        animate-[newsletterContentIn_800ms_cubic-bezier(0.22,1,0.36,1)_both]
                    "
                >
                    {/* =================================================
                        LABEL
                    ================================================== */}

                    <div
                        className="
                            mb-4
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-full
                            border
                            border-[#ff8a00]/25
                            bg-[#ff8a00]/10
                            px-3
                            py-1

                            lg:mb-3
                        "
                    >
                        <Sparkles
                            size={12}
                            strokeWidth={1.8}
                            className="text-[#ff8a00]"
                        />

                        <span
                            className="
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[1.5px]
                                text-[#ffb15c]
                            "
                        >
                            Stay in the loop
                        </span>
                    </div>


                    {/* =================================================
                        HEADING
                    ================================================== */}

                    <h2
                        className="
                            text-[28px]
                            font-bold
                            leading-[1.08]
                            tracking-[-0.8px]
                            text-white

                            sm:text-[32px]
                            md:text-[36px]

                            lg:text-[38px]
                            xl:text-[42px]
                        "
                    >
                        Fresh deals.

                        <span className="text-[#ff9a2e]">
                            {" "}Straight to your inbox.
                        </span>
                    </h2>


                    {/* =================================================
                        DESCRIPTION
                    ================================================== */}

                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-[560px]
                            text-[10px]
                            leading-[17px]
                            text-white/65

                            sm:text-[11px]
                            sm:leading-[19px]

                            md:text-[12px]

                            lg:mx-0
                            lg:max-w-[540px]
                        "
                    >
                        Subscribe for exclusive grocery deals, seasonal
                        offers, new arrivals, and fresh updates from
                        InstantMart.
                    </p>


                    {/* =================================================
                        SUBSCRIBE FORM
                    ================================================== */}

                    <form
                        className="
                            mx-auto
                            mt-7
                            flex
                            w-full
                            max-w-[580px]
                            flex-col
                            gap-2.5

                            sm:mt-8
                            sm:flex-row
                            sm:gap-3

                            lg:mx-0
                            lg:mt-7
                        "
                    >
                        {/* =================================================
                            EMAIL INPUT
                        ================================================== */}

                        <div
                            className="
        flex
        h-[52px]
        w-full
        flex-1
        items-center
        gap-2.5
        rounded-[10px]
        border
        border-white/15
        bg-white/[0.08]
        px-4
        backdrop-blur-sm

        transition-all
        duration-300

        focus-within:border-[#ff8a00]/60
        focus-within:bg-white/[0.12]
        focus-within:shadow-[0_0_0_3px_rgba(255,138,0,0.08)]

        sm:h-[46px]
    "
                        >
                            <Mail
                                size={18}
                                strokeWidth={1.7}
                                className="
            shrink-0
            text-[#ff8a00]
        "
                            />

                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="
            min-w-0
            w-full
            bg-transparent
            text-[13px]
            text-white
            outline-none
            placeholder:text-white/40
            h-[46px]
        "
                            />
                        </div>


                        {/* =================================================
                            SUBSCRIBE BUTTON
                        ================================================== */}

                        <button
                            type="submit"
                            className="
                                group
                                relative
                                flex
                                h-[48px]
                                w-full
                                shrink-0
                                items-center
                                justify-center
                                gap-2
                                overflow-hidden
                                rounded-[10px]
                                bg-[var(--color-accent)]
                                px-6
                                text-[12px]
                                font-semibold
                                text-white

                                shadow-[0_6px_16px_rgba(255,107,0,0.20)]

                                transition-all
                                duration-300
                                ease-out

                                hover:-translate-y-1
                                hover:shadow-[0_10px_22px_rgba(0,69,33,0.25)]

                                active:translate-y-0
                                active:scale-[0.98]

                                sm:h-[46px]
                                sm:w-auto
                                sm:px-8
                            "
                        >
                            <span
                                className="
                                    absolute
                                    inset-y-0
                                    left-0
                                    z-0
                                    w-0
                                    bg-[var(--color-primary-dark)]

                                    transition-all
                                    duration-400
                                    ease-[cubic-bezier(0.22,1,0.36,1)]

                                    group-hover:w-full
                                "
                            />

                            <span className="relative z-10">
                                Subscribe
                            </span>

                            <ArrowRight
                                size={15}
                                strokeWidth={1.8}
                                className="
                                    relative
                                    z-10
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            />
                        </button>
                    </form>


                    {/* =================================================
                        FOOTER NOTE
                    ================================================== */}

                    <p
                        className="
                            mt-3
                            text-[13px]
                            text-white/35

                            lg:text-[9px]
                        "
                    >
                        No spam. Just fresh offers and useful updates.
                    </p>
                </div>


                {/* =================================================
                    RIGHT ANIMATED VISUAL
                ================================================== */}

                <div
                    className="
                        relative
                        h-[190px]
                        w-full
                        max-w-[500px]
                        shrink-0

                        sm:h-[210px]

                        lg:h-[230px]
                        lg:w-[42%]
                        lg:max-w-none

                        animate-[newsletterVisualIn_900ms_cubic-bezier(0.22,1,0.36,1)_300ms_both]
                    "
                >
                    {/* =================================================
                        SOFT GLOW
                    ================================================== */}

                    <div
                        className="
                            absolute
                            right-[18%]
                            top-[18%]
                            h-[120px]
                            w-[120px]
                            rounded-full
                            bg-[#ff8a00]/[0.05]
                            blur-[35px]
                            animate-[newsletterAmbientGlow_4s_ease-in-out_infinite]
                        "
                    />


                    {/* =================================================
                        CLEAN FLIGHT PATH

                        Plane
                          ↓
                        smooth curve
                          ↓
                        rocket

                        NO CIRCULAR LOOP
                    ================================================== */}

                    <svg
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            overflow-visible
                        "
                        viewBox="0 0 500 230"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Soft glow */}

                        <path
                            d="
                                M 35 118

                                C 75 78,
                                  125 52,
                                  180 62

                                C 235 72,
                                  270 105,
                                  315 83

                                C 350 66,
                                  370 35,
                                  410 38

                                C 445 41,
                                  470 58,
                                  478 76

                                C 484 89,
                                  489 91,
                                  498 88
                            "
                            stroke="#ff8a00"
                            strokeWidth="7"
                            strokeDasharray="2 10"
                            strokeLinecap="round"
                            opacity="0.07"
                        />


                        {/* Main dotted path */}

                        <path
                            d="
                                M 35 118

                                C 75 78,
                                  125 52,
                                  180 62

                                C 235 72,
                                  270 105,
                                  315 83

                                C 350 66,
                                  370 35,
                                  410 38

                                C 445 41,
                                  470 58,
                                  478 76

                                C 484 89,
                                  489 91,
                                  498 88
                            "
                            stroke="#ff8a00"
                            strokeWidth="2"
                            strokeDasharray="2 8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="
                                animate-[newsletterTrailMove_5s_linear_infinite]
                            "
                        />
                    </svg>


                    {/* =================================================
                        PAPER PLANE
                    ================================================== */}

                    <div
                        className="
                            absolute
                            left-[5%]
                            top-[42%]
                            flex
                            h-[48px]
                            w-[48px]
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#ff8a00]/25
                            bg-[#ff8a00]/[0.07]
                            shadow-[0_0_22px_rgba(255,138,0,0.10)]

                            animate-[newsletterPlaneFloat_3s_ease-in-out_infinite]
                        "
                    >
                        <Send
                            size={24}
                            strokeWidth={1.7}
                            className="
                                rotate-[-18deg]
                                text-[#ff8a00]
                                drop-shadow-[0_4px_8px_rgba(255,138,0,0.30)]
                            "
                        />
                    </div>


                    {/* =================================================
                        ORANGE PARTICLES
                    ================================================== */}

                    <span
                        className="
                            absolute
                            left-[27%]
                            top-[30%]
                            h-[6px]
                            w-[6px]
                            rounded-full
                            bg-[#ff8a00]
                            shadow-[0_0_10px_rgba(255,138,0,0.8)]
                            animate-[newsletterParticle_2.8s_ease-in-out_infinite]
                        "
                    />

                    <span
                        className="
                            absolute
                            left-[51%]
                            top-[38%]
                            h-[7px]
                            w-[7px]
                            rounded-full
                            bg-[#ff8a00]/90
                            shadow-[0_0_10px_rgba(255,138,0,0.7)]
                            animate-[newsletterParticle_3.1s_ease-in-out_300ms_infinite]
                        "
                    />

                    <span
                        className="
                            absolute
                            left-[73%]
                            top-[23%]
                            h-[6px]
                            w-[6px]
                            rounded-full
                            bg-[#ff8a00]
                            shadow-[0_0_10px_rgba(255,138,0,0.7)]
                            animate-[newsletterParticle_2.5s_ease-in-out_600ms_infinite]
                        "
                    />

                    <span
                        className="
                            absolute
                            right-[14%]
                            top-[60%]
                            h-[7px]
                            w-[7px]
                            rounded-full
                            bg-white/55
                            animate-pulse
                        "
                    />


                    {/* =================================================
                        SMALL ORANGE DOT
                    ================================================== */}

                    <span
                        className="
                            absolute
                            right-[21%]
                            top-[72%]
                            h-[5px]
                            w-[5px]
                            rounded-full
                            bg-[#ff8a00]/70
                            animate-pulse
                            [animation-delay:400ms]
                        "
                    />


                    {/* =================================================
                        ROCKET
                    ================================================== */}

                    <div
                        className="
                            absolute
                            right-[3%]
                            top-[17%]
                            flex
                            h-[78px]
                            w-[78px]
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#ff8a00]/35
                            bg-[#ff8a00]/[0.08]
                            shadow-[0_0_30px_rgba(255,138,0,0.10)]

                            animate-[newsletterRocketFloat_3s_ease-in-out_infinite]
                        "
                    >
                        <span
                            className="
                                absolute
                                inset-[7px]
                                rounded-full
                                border
                                border-[#ff8a00]/15
                            "
                        />

                        <Rocket
                            size={35}
                            strokeWidth={1.6}
                            className="
                                rotate-[-12deg]
                                text-[#ff8a00]
                                drop-shadow-[0_5px_12px_rgba(255,138,0,0.35)]
                            "
                        />
                    </div>


                    {/* =================================================
                        SMALL DECORATIVE RINGS
                    ================================================== */}

                    <span
                        className="
                            absolute
                            right-[32%]
                            bottom-[18%]
                            h-[12px]
                            w-[12px]
                            rounded-full
                            border
                            border-[#ff8a00]/25
                            animate-[newsletterRingPulse_3s_ease-in-out_infinite]
                        "
                    />

                    <span
                        className="
                            absolute
                            right-[8%]
                            bottom-[10%]
                            h-[7px]
                            w-[7px]
                            rounded-full
                            bg-white/45
                            animate-pulse
                            [animation-delay:700ms]
                        "
                    />
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;