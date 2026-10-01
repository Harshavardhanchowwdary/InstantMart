import React from "react";
import {
    LayoutDashboard,
    Package,
    ShoppingBag,
    Truck,
    Plus,
    LogOut,
    Shield,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const menuItems = [
    {
        label: "Dashboard",
        path: "/admin",
        icon: LayoutDashboard,
    },
    {
        label: "Add Product",
        path: "/admin/products/add",
        icon: Plus,
    },
    {
        label: "Products",
        path: "/admin/products",
        icon: Package,
    },
    {
        label: "Orders",
        path: "/admin/orders",
        icon: ShoppingBag,
    },
    {
        label: "Delivery Partners",
        path: "/admin/delivery-partners",
        icon: Truck,
    },
];

const AdminSidebar = () => {
    const navigate = useNavigate();

    const handleExit = () => {
        navigate("/");
    };

    return (
        <aside className="w-full shrink-0 lg:w-[220px]">

            <div className="rounded-[16px] border border-[#e3e5e1] bg-white p-4 shadow-[0_6px_24px_rgba(23,37,30,0.035)] lg:sticky lg:top-[85px]">

                <div className="flex items-center gap-2.5 border-b border-[#e5e7e3] px-2 pb-4 lg:flex">

                    <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[8px] bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                        <Shield
                            size={16}
                            strokeWidth={1.8}
                        />
                    </div>

                    <span className="text-[16px] font-bold tracking-[-0.3px] text-[var(--color-text-dark)]">
                        Admin Panel
                    </span>

                </div>


                <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1.5 lg:overflow-visible">

                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end
                                className={({ isActive }) =>
                                    `group relative flex h-[42px] shrink-0 items-center gap-2.5 rounded-[9px] px-3 text-[13px] font-medium transition-all duration-300 ease-out lg:w-full ${
                                        isActive
                                            ? "bg-[var(--color-primary)] text-white shadow-[0_6px_16px_rgba(0,69,33,0.14)]"
                                            : "text-[var(--color-text-secondary)] hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className={`absolute inset-y-0 left-0 w-[3px] rounded-r-full bg-[var(--color-accent)] transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"}`} />

                                        <Icon
                                            size={16}
                                            strokeWidth={1.8}
                                            className={`relative z-10 shrink-0 transition-all duration-300 ease-out ${isActive ? "scale-105 text-white" : "group-hover:translate-x-[2px] group-hover:scale-105"}`}
                                        />

                                        <span className={`relative z-10 whitespace-nowrap transition-all duration-300 ease-out ${isActive ? "translate-x-[1px]" : "group-hover:translate-x-[2px]"}`}>
                                            {item.label}
                                        </span>
                                    </>
                                )}
                            </NavLink>
                        );
                    })}


                    <button
                        type="button"
                        onClick={handleExit}
                        className="group flex h-[42px] shrink-0 items-center gap-2.5 rounded-[9px] px-3 text-left text-[13px] font-medium text-[var(--color-text-secondary)] transition-all duration-300 ease-out hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)] lg:w-full"
                    >
                        <LogOut
                            size={16}
                            strokeWidth={1.8}
                            className="shrink-0 transition-all duration-300 ease-out group-hover:translate-x-[2px] group-hover:scale-105"
                        />

                        <span className="whitespace-nowrap transition-transform duration-300 ease-out group-hover:translate-x-[2px]">
                            Exit
                        </span>
                    </button>

                </nav>

            </div>

        </aside>
    );
};

export default AdminSidebar;