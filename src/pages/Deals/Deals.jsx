import DealsHero from "./components/DealsHero";
import DealsProductGrid from "./components/DealsProductGrid";
import OrderLoader from "../../components/ui/OrderLoader";
import {useState, useEffect} from "react";
const Deals = () => {


    const [loading, setLoading] =
        useState(true);


    /* =========================================================
       INITIAL LOADER
    ========================================================= */

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);

    }, []);

    if (loading) {

        return (
            <div
                className="
                        flex
                        min-h-[70vh]
                        w-full
                        items-center
                        justify-center
                    "
            >
                <OrderLoader />
            </div>
        );
    }
    return (
        <div className="w-full">

            {/* Flash Deals Banner */}
            <DealsHero />

            {/* Deals Products */}
            <DealsProductGrid />

        </div>
    );
};

export default Deals;