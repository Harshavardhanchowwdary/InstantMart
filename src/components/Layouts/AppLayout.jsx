import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout = () => {
    return (
        <div className="min-h-screen bg-[var(--color-background)]">

            <Navbar />

            <main
                className="
        w-full
        px-4
        sm:px-5
        md:px-9
        lg:px-12
        xl:px-[8vw]
        2xl:px-[9vw]
    "
            >
                <Outlet />
            </main>
            <Footer />
        </div>

    );
};

export default AppLayout;