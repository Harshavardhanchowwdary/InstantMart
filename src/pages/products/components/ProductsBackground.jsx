import React from "react";

const ProductsBackground = () => {
    return (
        <div
            className="
                pointer-events-none
                absolute
                inset-0
                z-0
                overflow-hidden
            "
            aria-hidden="true"
        >

            {/* =================================================
                SOFT GREEN AMBIENT GLOW
               ================================================= */}

            <span
                className="
                    products-bg-glow
                    products-bg-glow-green
                "
            />


            {/* =================================================
                SOFT ORANGE AMBIENT GLOW
               ================================================= */}

            <span
                className="
                    products-bg-glow
                    products-bg-glow-orange
                "
            />


            {/* =================================================
                DIAGONAL ANIMATED LINES
               ================================================= */}

            <span className="products-bg-line products-bg-line-1" />

            <span className="products-bg-line products-bg-line-2" />

            <span className="products-bg-line products-bg-line-3" />

            <span className="products-bg-line products-bg-line-4" />

            <span className="products-bg-line products-bg-line-5" />

            <span className="products-bg-line products-bg-line-6" />

            <span className="products-bg-line products-bg-line-7" />

            <span className="products-bg-line products-bg-line-8" />


            {/* =================================================
                SMALL FLOATING DOTS
               ================================================= */}

            <span className="products-bg-dot products-bg-dot-1" />

            <span className="products-bg-dot products-bg-dot-2" />

            <span className="products-bg-dot products-bg-dot-3" />

        </div>
    );
};

export default ProductsBackground;