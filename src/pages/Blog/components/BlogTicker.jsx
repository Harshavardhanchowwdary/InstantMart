import React from "react";

import {
    tickerItems,
} from "../blogData";



const BlogTicker = ({
    reverse = false,
}) => {

    const animationClass =
        reverse
            ? "animate-[blogTickerReverse_30s_linear_infinite]"
            : "animate-[blogTicker_30s_linear_infinite]";



    return (

        <div
            className="
                relative
                overflow-hidden
                rounded-[18px]
                border
                border-[var(--color-primary)]/10
                bg-[var(--color-primary-light)]
                py-5
            "
        >

            <div
                className={`
                    flex
                    w-max
                    ${animationClass}
                `}
            >

                {[
                    ...tickerItems,
                    ...tickerItems,
                ].map(
                    (
                        item,
                        index
                    ) => (

                        <div
                            key={
                                `${item}-${index}-${reverse}`
                            }
                            className="
                                flex
                                items-center
                                gap-5
                                pr-5
                                whitespace-nowrap
                            "
                        >

                            <span
                                className="
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.18em]
                                    text-[var(--color-primary)]
                                "
                            >
                                {item}
                            </span>


                            <span
                                className="
                                    h-1
                                    w-1
                                    rounded-full
                                    bg-[var(--color-accent)]
                                "
                            />

                        </div>

                    )
                )}

            </div>

        </div>
    );
};



export default BlogTicker;