import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

const ProductBreadcrumb = () => {
    return (
        <div className="mb-5 flex items-center gap-2 text-[13px] text-[var(--color-text-secondary)] animate-[productBreadcrumbIn_500ms_ease-out_both]">

            <Link
                to="/"
                className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[var(--color-primary)]"
            >
                <Home size={12} />
                Home
            </Link>

            <ChevronRight size={13} />

            <span className="font-semibold text-[var(--color-text-primary)]">
                Products
            </span>

        </div>
    );
};

export default ProductBreadcrumb;