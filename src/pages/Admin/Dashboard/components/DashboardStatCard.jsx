import React from "react";

const DashboardStatCard = ({
    title,
    value,
    icon: Icon,
    iconClassName = "",
}) => {
    return (
        <div className="group rounded-[14px] border border-[#e3e5e1] bg-white p-5 shadow-[0_5px_20px_rgba(23,37,30,0.03)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(23,37,30,0.07)]">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-[13px] font-medium text-[var(--color-text-secondary)]">
                        {title}
                    </p>

                    <h2 className="mt-2 text-[24px] font-bold tracking-[-0.5px] text-[var(--color-text-dark)]">
                        {value}
                    </h2>
                </div>

                <div
                    className={`flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-[var(--color-primary-light)] text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-105 ${iconClassName}`}
                >
                    <Icon size={19} strokeWidth={1.8} />
                </div>
            </div>
        </div>
    );
};

export default DashboardStatCard;