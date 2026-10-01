import React from "react";



const BlogBackground = () => {

    return (

        <div
            className="
                pointer-events-none
                absolute
                inset-0
                overflow-hidden
            "
        >

            {/* =================================================
                DOT FIELD
            ================================================= */}

            <div
                className="
                    absolute
                    inset-0
                    opacity-35
                    animate-[blogDotDrift_24s_ease-in-out_infinite]
                    bg-[radial-gradient(circle,rgba(0,69,33,0.18)_1.2px,transparent_1.2px)]
                    [background-size:28px_28px]
                "
            />



            {/* =================================================
                PRIMARY ORB
            ================================================= */}

            <div
                className="
                    absolute
                    -left-[180px]
                    top-[160px]
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-[var(--color-primary-light)]
                    opacity-70
                    blur-3xl
                    animate-[blogOrbFloat_18s_ease-in-out_infinite]
                "
            />



            {/* =================================================
                ORANGE ORB
            ================================================= */}

            <div
                className="
                    absolute
                    -right-[160px]
                    top-[420px]
                    h-[340px]
                    w-[340px]
                    rounded-full
                    bg-[var(--color-accent-light)]
                    opacity-60
                    blur-3xl
                    animate-[blogOrbFloatReverse_22s_ease-in-out_infinite]
                "
            />



            {/* =================================================
                FLOATING DOTS
            ================================================= */}

            <span
                className="
                    absolute
                    left-[12%]
                    top-[20%]
                    h-2
                    w-2
                    rounded-full
                    bg-[var(--color-accent)]
                    opacity-50
                    animate-[blogDotFloat_8s_ease-in-out_infinite]
                "
            />


            <span
                className="
                    absolute
                    right-[18%]
                    top-[28%]
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[var(--color-primary)]
                    opacity-40
                    animate-[blogDotFloat_11s_ease-in-out_infinite_1s]
                "
            />


            <span
                className="
                    absolute
                    left-[7%]
                    top-[62%]
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[var(--color-primary)]
                    opacity-40
                    animate-[blogDotFloat_10s_ease-in-out_infinite_2s]
                "
            />



            <span
                className="
                    absolute
                    right-[9%]
                    top-[76%]
                    h-2
                    w-2
                    rounded-full
                    bg-[var(--color-accent)]
                    opacity-30
                    animate-[blogDotFloat_12s_ease-in-out_infinite_1.5s]
                "
            />

        </div>
    );
};



export default BlogBackground;