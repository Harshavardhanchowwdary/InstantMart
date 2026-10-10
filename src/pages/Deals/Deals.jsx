
import { useEffect, useState } from "react";
import DealsHero from "./components/DealsHero";
import DealsProductGrid from "./components/DealsProductGrid";
import OrderLoader from "../../components/ui/OrderLoader";

const Deals = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center">
                <OrderLoader />
            </div>
        );
    }

    return (
        <main className="mx-auto w-full max-w-[1600px] px-4 pb-8 sm:px-6 lg:px-8">
            <DealsHero />
            <DealsProductGrid />
        </main>
    );
};

export default Deals;
