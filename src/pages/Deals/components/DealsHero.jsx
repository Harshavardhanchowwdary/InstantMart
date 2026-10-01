import {
    Clock3,
    Sparkles,
    Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const DealsHero = () => {
    const [time, setTime] = useState({
        hours: 5,
        minutes: 42,
        seconds: 18,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((current) => {
                let {
                    hours,
                    minutes,
                    seconds,
                } = current;

                if (seconds > 0) {
                    seconds -= 1;
                } else {
                    seconds = 59;

                    if (minutes > 0) {
                        minutes -= 1;
                    } else {
                        minutes = 59;

                        if (hours > 0) {
                            hours -= 1;
                        }
                    }
                }

                return {
                    hours,
                    minutes,
                    seconds,
                };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (value) => {
        return String(value).padStart(2, "0");
    };

    return (
        <section
            className="
                relative
                overflow-hidden
                rounded-[18px]
                bg-[var(--color-accent)]
                px-5
                py-10
                shadow-[0_12px_30px_rgba(255,107,0,0.15)]
                mt-10
                sm:px-8
                sm:py-12

                md:px-12
                md:py-14

                lg:px-16
                lg:py-16
            "
        >

            {/* =================================================
                BACKGROUND GLOW
            ================================================== */}

            <div
                className="
                    absolute
                    -left-[100px]
                    -top-[100px]
                    h-[260px]
                    w-[260px]
                    rounded-full
                    bg-white/10
                    blur-[60px]
                    animate-[dealGlow_5s_ease-in-out_infinite]
                "
            />

            <div
                className="
                    absolute
                    -bottom-[120px]
                    -right-[80px]
                    h-[300px]
                    w-[300px]
                    rounded-full
                    bg-[#ffb347]/20
                    blur-[70px]
                    animate-[dealGlow_6s_ease-in-out_500ms_infinite]
                "
            />


            {/* =================================================
                MOVING LINES
            ================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    overflow-hidden
                "
            >
                <span
                    className="
                        absolute
                        -left-[100px]
                        top-[20%]
                        h-[2px]
                        w-[260px]
                        rotate-[-18deg]
                        bg-white/15
                        animate-[dealLine_5s_linear_infinite]
                    "
                />

                <span
                    className="
                        absolute
                        -left-[180px]
                        top-[65%]
                        h-[2px]
                        w-[320px]
                        rotate-[-18deg]
                        bg-white/10
                        animate-[dealLine_6s_linear_500ms_infinite]
                    "
                />

                <span
                    className="
                        absolute
                        -right-[120px]
                        top-[30%]
                        h-[2px]
                        w-[300px]
                        rotate-[-18deg]
                        bg-white/10
                        animate-[dealLineReverse_6s_linear_infinite]
                    "
                />
            </div>


            {/* =================================================
                FLOATING LIGHTNING
            ================================================== */}

            <Zap
                className="
                    absolute
                    left-[8%]
                    top-[18%]
                    rotate-[-12deg]
                    text-white/15
                    animate-[dealFloat_3s_ease-in-out_infinite]
                "
                size={34}
                fill="currentColor"
            />

            <Zap
                className="
                    absolute
                    right-[10%]
                    bottom-[18%]
                    rotate-[14deg]
                    text-white/15
                    animate-[dealFloat_4s_ease-in-out_500ms_infinite]
                "
                size={28}
                fill="currentColor"
            />


            {/* =================================================
                CONTENT
            ================================================== */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-[850px]
                    text-center
                "
            >

                {/* LIVE BADGE */}

                <div
                    className="
                        mx-auto
                        mb-4
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/20
                        bg-black/10
                        px-4
                        py-1.5
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[1.5px]
                        text-white
                        backdrop-blur-sm

                        animate-[dealBadgeIn_700ms_ease-out_both]
                    "
                >
                    <span
                        className="
                            relative
                            flex
                            h-[7px]
                            w-[7px]
                            items-center
                            justify-center
                        "
                    >
                        <span
                            className="
                                absolute
                                inset-0
                                rounded-full
                                bg-white/40
                                animate-ping
                            "
                        />

                        <span
                            className="
                                relative
                                h-[5px]
                                w-[5px]
                                rounded-full
                                bg-white
                            "
                        />
                    </span>

                    Live Flash Sale
                </div>


                {/* TITLE */}

                <h1
                    className="
                        text-[34px]
                        font-bold
                        leading-tight
                        tracking-[-1px]
                        text-white

                        sm:text-[42px]
                        md:text-[50px]
                        lg:text-[58px]

                        animate-[dealTitleIn_800ms_cubic-bezier(0.22,1,0.36,1)_100ms_both]
                    "
                >
                    <span
                        className="
                            inline-flex
                            items-center
                            gap-2
                        "
                    >
                        <Zap
                            size={30}
                            fill="currentColor"
                            className="
                                animate-[dealZap_1.5s_ease-in-out_infinite]
                            "
                        />

                        Flash Deals

                        <Zap
                            size={30}
                            fill="currentColor"
                            className="
                                animate-[dealZap_1.5s_ease-in-out_300ms_infinite]
                            "
                        />
                    </span>
                </h1>


                {/* DESCRIPTION */}

                <p
                    className="
                        mx-auto
                        mt-4
                        max-w-[560px]
                        text-[11px]
                        leading-[18px]
                        text-white/85

                        sm:text-[12px]
                        sm:leading-[20px]

                        md:text-[14px]

                        animate-[dealFadeIn_800ms_ease-out_250ms_both]
                    "
                >
                    Limited-time offers on your favorite organic
                    products. Grab them before they're gone!
                </p>


                {/* COUNTDOWN */}

                <div
                    className="
                        mx-auto
                        mt-7
                        flex
                        w-fit
                        items-center
                        gap-2

                        animate-[dealFadeIn_800ms_ease-out_400ms_both]
                    "
                >
                    <Clock3
                        size={16}
                        strokeWidth={2}
                        className="text-white/90"
                    />

                    <span
                        className="
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-[1px]
                            text-white/75
                        "
                    >
                        Ends in
                    </span>

                    <div
                        className="
                            flex
                            h-[34px]
                            min-w-[38px]
                            items-center
                            justify-center
                            rounded-[8px]
                            bg-white
                            px-2
                            text-[13px]
                            font-bold
                            text-[#e85e00]
                            shadow-[0_5px_15px_rgba(0,0,0,0.10)]
                        "
                    >
                        {formatTime(time.hours)}
                    </div>

                    <span className="font-bold text-white">
                        :
                    </span>

                    <div
                        className="
                            flex
                            h-[34px]
                            min-w-[38px]
                            items-center
                            justify-center
                            rounded-[8px]
                            bg-white
                            px-2
                            text-[13px]
                            font-bold
                            text-[#e85e00]
                            shadow-[0_5px_15px_rgba(0,0,0,0.10)]
                        "
                    >
                        {formatTime(time.minutes)}
                    </div>

                    <span className="font-bold text-white">
                        :
                    </span>

                    <div
                        className="
                            flex
                            h-[34px]
                            min-w-[38px]
                            items-center
                            justify-center
                            rounded-[8px]
                            bg-white
                            px-2
                            text-[13px]
                            font-bold
                            text-[#e85e00]
                            shadow-[0_5px_15px_rgba(0,0,0,0.10)]
                        "
                    >
                        {formatTime(time.seconds)}
                    </div>
                </div>

            </div>


            {/* =================================================
                SHINE
            ================================================== */}

            <span
                className="
                    pointer-events-none
                    absolute
                    -left-[20%]
                    top-0
                    h-full
                    w-[12%]
                    skew-x-[-18deg]
                    bg-white/10
                    blur-[2px]
                    animate-[dealShine_5s_ease-in-out_infinite]
                "
            />

        </section>
    );
};

export default DealsHero;