// import React from "react";
// import { ShoppingCart } from "lucide-react";

// const Button = ({ onClick }) => {
//     return (
//         <div className="group relative inline-block">

//             <button
//                 type="button"
//                 onClick={onClick}
//                 className="
//                     flex
//                     h-10
//                     w-10
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-[var(--color-primary-light)]
//                     text-[var(--color-primary)]
//                     transition-all
//                     duration-300
//                     hover:scale-110
//                     hover:bg-[var(--color-primary)]
//                     hover:text-white
//                     focus:outline-none
//                 "
//             >
//                 <ShoppingCart
//                     size={19}
//                     strokeWidth={1.8}
//                     className="
//                         transition-transform
//                         duration-300
//                         group-hover:scale-110
//                     "
//                 />
//             </button>

//             {/* Buy Now Tooltip */}
//             <span
//                 className="
//                     pointer-events-none
//                     absolute
//                     -top-12
//                     left-1/2
//                     z-20
//                     -translate-x-1/2
//                     whitespace-nowrap
//                     rounded-lg
//                     bg-[var(--color-text-primary)]
//                     px-4
//                     py-2
//                     text-sm
//                     font-bold
//                     text-white
//                     shadow-lg
//                     transition-transform
//                     duration-300
//                     ease-in-out
//                     scale-0
//                     group-hover:scale-100
//                 "
//             >
//                 Buy Now
//             </span>

//         </div>
//     );
// };

// export default Button;
import React from "react";
import { ShoppingCart } from "lucide-react";

const Button = ({ onClick }) => {
    return (
        <div className="group relative inline-block">

            <button
                type="button"
                onClick={onClick}
                className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[var(--color-accent)]
                    text-white
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:bg-[var(--color-primary)]
                    focus:outline-none
                "
            >
                <ShoppingCart
                    size={19}
                    strokeWidth={1.8}
                    className="
                        transition-transform
                        duration-300
                        group-hover:scale-110
                    "
                />
            </button>

            {/* Buy Now Tooltip */}
            <span
                className="
                    pointer-events-none
                    absolute
                    -top-12
                    left-1/2
                    z-20
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-lg
                    bg-[var(--color-text-primary)]
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    transition-transform
                    duration-300
                    ease-in-out
                    scale-0
                    group-hover:scale-100
                "
            >
                Buy Now
            </span>

        </div>
    );
};

export default Button;