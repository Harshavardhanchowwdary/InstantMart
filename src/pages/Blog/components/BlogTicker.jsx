
import React from "react";
import { tickerItems } from "../blogData";

const BlogTicker = () => {
    return (
        <div className="overflow-hidden border-y border-[var(--color-border)] py-4">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
                {tickerItems.map((item, index) => (
                    <React.Fragment key={`${item}-${index}`}>
                        <span
                            className="
                                whitespace-nowrap text-[10px]
                                font-bold uppercase tracking-[0.14em]
                                text-[var(--color-primary)]
                            "
                        >
                            {item}
                        </span>

                        {index !== tickerItems.length - 1 && (
                            <span
                                aria-hidden="true"
                                className="h-1 w-1 rounded-full bg-[var(--color-accent)]"
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default BlogTicker;
