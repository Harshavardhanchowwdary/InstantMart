
import { Clock3, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const INITIAL_TIME = 5 * 60 * 60 + 42 * 60 + 18;

const DealsHero = () => {
    const [remaining, setRemaining] = useState(INITIAL_TIME);

    useEffect(() => {
        const timer = setInterval(() => {
            setRemaining((current) => Math.max(0, current - 1));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = String(Math.floor(remaining / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, "0");
    const seconds = String(remaining % 60).padStart(2, "0");

    return (
        <section className="mt-6 rounded-2xl bg-[var(--color-accent)] px-5 py-9 text-center text-white sm:px-8 sm:py-11">
            <div className="mx-auto max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1.5 text-xs font-semibold">
                    <Zap size={14} />
                    Special offers
                </span>

                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                    Flash Deals
                </h1>

                <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/90">
                    Great prices on your everyday favourites.
                    Find your deals before they're gone.
                </p>

                <div className="mt-6 flex items-center justify-center gap-3">
                    <Clock3 size={17} />

                    <span className="text-xs font-medium">
                        Ends in
                    </span>

                    <div className="flex items-center gap-1.5 font-bold tabular-nums">
                        <span className="rounded-md bg-white px-3 py-2 text-sm text-[var(--color-accent)]">
                            {hours}
                        </span>
                        <span>:</span>
                        <span className="rounded-md bg-white px-3 py-2 text-sm text-[var(--color-accent)]">
                            {minutes}
                        </span>
                        <span>:</span>
                        <span className="rounded-md bg-white px-3 py-2 text-sm text-[var(--color-accent)]">
                            {seconds}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DealsHero;
