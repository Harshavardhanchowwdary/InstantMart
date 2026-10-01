import React from "react";
import { Eye } from "lucide-react";

import {
    dummyDashboardOrdersData,
    statusColors,
} from "../../../assets/assets";

const Orders = () => {
    return (
        <section className="w-full">
            <div className="mb-5">
                <h1 className="text-[22px] font-bold tracking-[-0.4px] text-[var(--color-text-dark)]">
                    Orders
                </h1>

                <p className="mt-1 text-[13px] text-[var(--color-text-secondary)]">
                    Manage and track customer orders.
                </p>
            </div>

            <div className="overflow-hidden rounded-[14px] border border-[#e3e5e1] bg-white shadow-[0_5px_20px_rgba(23,37,30,0.03)]">
                <div className="w-full overflow-x-auto">
                    <table className="w-full min-w-[850px] border-collapse">
                        <thead>
                            <tr className="border-b border-[#e5e7e3] bg-[#fafbf9]">
                                <th className="px-5 py-3 text-left text-[12px] font-semibold text-[var(--color-text-secondary)]">
                                    Order Details
                                </th>

                                <th className="px-5 py-3 text-left text-[12px] font-semibold text-[var(--color-text-secondary)]">
                                    Customer
                                </th>

                                <th className="px-5 py-3 text-left text-[12px] font-semibold text-[var(--color-text-secondary)]">
                                    Total
                                </th>

                                <th className="px-5 py-3 text-left text-[12px] font-semibold text-[var(--color-text-secondary)]">
                                    Delivery Partner
                                </th>

                                <th className="px-5 py-3 text-left text-[12px] font-semibold text-[var(--color-text-secondary)]">
                                    Status
                                </th>

                                <th className="px-5 py-3 text-right text-[12px] font-semibold text-[var(--color-text-secondary)]">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {dummyDashboardOrdersData.map((order, index) => {
                                const firstItem = order.items?.[0];

                                const status = statusColors[order.status] || {
                                    badge: "bg-gray-100",
                                    text: "text-gray-600",
                                    dot: "bg-gray-500",
                                };

                                return (
                                    <tr
                                        key={order._id}
                                        className="border-b border-[#eef0ed] last:border-b-0 transition-colors duration-200 hover:bg-[#fbfcfa]"
                                        style={{
                                            animation:
                                                "adminRowIn 0.4s ease-out both",
                                            animationDelay: `${index * 80}ms`,
                                        }}
                                    >
                                        <td className="px-5 py-4">
                                            <div>
                                                <p className="text-[13px] font-semibold text-[var(--color-text-dark)]">
                                                    #{order._id?.slice(-8)}
                                                </p>

                                                <p className="mt-1 text-[12px] text-[var(--color-text-secondary)]">
                                                    {firstItem?.name ||
                                                        "No items"}
                                                    {order.items?.length > 1
                                                        ? ` +${order.items
                                                            .length - 1
                                                        } more`
                                                        : ""}
                                                </p>

                                                <p className="mt-0.5 text-[11px] text-[var(--color-text-muted)]">
                                                    {order.items?.length || 0}{" "}
                                                    {order.items?.length === 1
                                                        ? "item"
                                                        : "items"}
                                                </p>
                                            </div>
                                        </td>

                                        <td className="px-5 py-4">
                                            <p className="text-[13px] font-medium text-[var(--color-text-dark)]">
                                                {order.user?.name || "Unknown"}
                                            </p>

                                            <p className="mt-1 text-[12px] text-[var(--color-text-secondary)]">
                                                {order.user?.email || "-"}
                                            </p>
                                        </td>

                                        <td className="px-5 py-4">
                                            <span className="text-[13px] font-semibold text-[var(--color-text-dark)]">
                                                ₹
                                                {Number(
                                                    order.total || 0
                                                ).toFixed(2)}
                                            </span>
                                        </td>

                                        <td className="px-5 py-4">
                                            <span className="text-[13px] text-[var(--color-text-dark)]">
                                                {order.deliveryPartner?.name ||
                                                    "Not Assigned"}
                                            </span>
                                        </td>

                                        <td className="px-5 py-4">
                                            <span
                                                className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold ${statusColors[order.status] || "bg-gray-100 text-gray-600"}`}
                                            >
                                                <span className="relative flex h-2 w-2">
                                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-50" />

                                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
                                                </span>

                                                <span>
                                                    {order.status || "Pending"}
                                                </span>
                                            </span>
                                        </td>

                                        <td className="px-5 py-4">
                                            <div className="flex justify-end">
                                                <button
                                                    type="button"
                                                    title="View Order"
                                                    onClick={() =>
                                                        console.log(
                                                            "View order:",
                                                            order
                                                        )
                                                    }
                                                    className="flex h-[32px] w-[32px] items-center justify-center rounded-[7px] text-[var(--color-text-secondary)] transition-all duration-200 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]"
                                                >
                                                    <Eye
                                                        size={16}
                                                        strokeWidth={1.8}
                                                    />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Orders;