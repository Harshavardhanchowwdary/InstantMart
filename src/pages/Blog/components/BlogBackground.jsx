
import React from "react";

const BlogBackground = () => {
    return (
        <div
            aria-hidden="true"
            className="
                pointer-events-none
                absolute
                inset-0
                overflow-hidden
                bg-[var(--color-background)]
            "
        >
            <div
                className="
                    absolute
                    inset-0
                    opacity-40
                    bg-[radial-gradient(circle,rgba(0,69,33,0.12)_1px,transparent_1px)]
                    [background-size:28px_28px]
                "
            />

            <div
                className="
                    absolute
                    left-0
                    top-0
                    h-[320px]
                    w-full
                    bg-gradient-to-b
                    from-[var(--color-primary-light)]/40
                    to-transparent
                "
            />
        </div>
    );
};

export default BlogBackground;
