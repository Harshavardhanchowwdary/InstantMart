import React from "react";

const RecentOrders = ({ orders = [] }) => {
    return (
        <div className="overflow-hidden rounded-[14px] border border-[#e3e5e1] bg-white shadow-[0_5px_20px_rgba(23,37,30,0.03)]">
            <div className="flex items-center justify-between border-b border-[#e5e7e3] px-5 py-4">
                <div>
                    <h2 className="text-[16px] font-bold text-[var(--color-text-dark)]">
                        Recent Orders
                    </h2>

                    <p className="mt-1 text-[12px] text-[var(--color-text-secondary)]">
                        Latest customer orders
                    </p>
                </div>
            </div>

            <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[760px] border-collapse">
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
                        </tr>
                    </thead>

                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order, index) => {
                                const firstItem = order.items?.[0];

                                return (
                                    <tr
                                        key={order._id}
                                        className="border-b border-[#eef0ed] last:border-b-0 transition-colors duration-200 hover:bg-[#fbfcfa]"
                                        style={{
                                            animation: "adminRowIn 0.4s ease-out both",
                                            animationDelay: `${index * 80}ms`,
                                        }}
                                    >
                                        <td className="px-5 py-4">
                                            <div>
                                                <p className="text-[13px] font-semibold text-[var(--color-text-dark)]">
                                                    #{order._id?.slice(-8)}
                                                </p>

                                                <p className="mt-1 text-[12px] text-[var(--color-text-secondary)]">
                                                    {firstItem?.name || "No items"}
                                                    {order.items?.length > 1
                                                        ? ` +${order.items.length - 1} more`
                                                        : ""}
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
                                                ₹{Number(order.total || 0).toFixed(2)}
                                            </span>
                                        </td>

                                        <td className="px-5 py-4">
                                            <span className="text-[13px] text-[var(--color-text-dark)]">
                                                {order.deliveryPartner?.name || "Not Assigned"}
                                            </span>
                                        </td>

                                        <td className="px-5 py-4">
                                            <span
                                                className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                                                    order.status === "Delivered"
                                                        ? "bg-green-50 text-green-700"
                                                        : order.status === "Out for Delivery"
                                                          ? "bg-orange-50 text-orange-700"
                                                          : "bg-gray-100 text-gray-600"
                                                }`}
                                            >
                                                {order.status || "Pending"}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="px-5 py-10 text-center text-[13px] text-[var(--color-text-secondary)]"
                                >
                                    No recent orders found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentOrders;