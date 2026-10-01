import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import AdminLoader from "./components/AdminLoader";

const AdminLayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 900);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <AdminLoader />;
    }

    return (
        <div className="min-h-[calc(100vh-65px)] w-full bg-[var(--color-background)]">

            <div className="mx-auto flex w-full max-w-[1488px] flex-col gap-4 px-3 py-4 sm:px-5 sm:py-5 lg:flex-row lg:gap-5 lg:px-[56px] xl:px-[72px]">

                <AdminSidebar />

                <main className="min-w-0 flex-1 overflow-hidden">
                    <Outlet />
                </main>

            </div>

        </div>
    );
};

export default AdminLayout;