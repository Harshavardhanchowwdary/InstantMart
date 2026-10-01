import React from "react";
import {
    ClipboardList,
    Package,
    Users,
    IndianRupee,
} from "lucide-react";

import DashboardStatCard from "./components/DashboardStatCard";
import RecentOrders from "./components/RecentOrders";

import { dummyProducts } from "../../../assets/assets";
import { dummyDashboardOrdersData } from "../../../assets/assets";

const Dashboard = () => {
    const totalOrders = dummyDashboardOrdersData.length;

    const totalUsers = new Set(
        dummyDashboardOrdersData
            .map((order) => order.user?._id)
            .filter(Boolean)
    ).size;

    const totalProducts = dummyProducts.length;

    const totalRevenue = dummyDashboardOrdersData.reduce(
        (total, order) => total + Number(order.total || 0),
        0
    );

    const stats = [
        {
            title: "Total Orders",
            value: totalOrders,
            icon: ClipboardList,
        },
        {
            title: "Total Users",
            value: totalUsers,
            icon: Users,
        },
        {
            title: "Total Products",
            value: totalProducts,
            icon: Package,
        },
        {
            title: "Total Revenue",
            value: `₹${totalRevenue.toFixed(2)}`,
            icon: IndianRupee,
        },
    ];

    return (
        <section className="w-full">
            <div className="mb-5">
                <h1 className="text-[22px] font-bold tracking-[-0.4px] text-[var(--color-text-dark)]">
                    Dashboard
                </h1>

                <p className="mt-1 text-[13px] text-[var(--color-text-secondary)]">
                    Manage your grocery store from here.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat, index) => (
                    <div
                        key={stat.title}
                        style={{
                            animation: "adminCardIn 0.45s ease-out both",
                            animationDelay: `${index * 80}ms`,
                        }}
                    >
                        <DashboardStatCard
                            title={stat.title}
                            value={stat.value}
                            icon={stat.icon}
                        />
                    </div>
                ))}
            </div>

            <div
                className="mt-5"
                style={{
                    animation: "adminCardIn 0.45s ease-out both",
                    animationDelay: "320ms",
                }}
            >
                <RecentOrders orders={dummyDashboardOrdersData} />
            </div>
        </section>
    );
};

export default Dashboard;