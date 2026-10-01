import React from "react";
import "./PageLoader.css";

const PageLoader = () => {
    const letters = [
        { char: "I", color: "#003819" },
        { char: "N", color: "#003819" },
        { char: "S", color: "#003819" },
        { char: "T", color: "#003819" },
        { char: "A", color: "#003819" },
        { char: "N", color: "#003819" },
        { char: "T", color: "#003819" },

        { char: "M", color: "#ff6b00" },
        { char: "A", color: "#ff6b00" },
        { char: "R", color: "#ff6b00" },
        { char: "T", color: "#ff6b00" },
    ];

    return (
        <div className="page-loader">
            <svg
                viewBox="0 0 660 90"
                xmlns="http://www.w3.org/2000/svg"
                className="instantmart-loader"
            >
                {letters.map((letter, index) => (
                    <text
                        key={`${letter.char}-${index}`}
                        x={25 + index * 57}
                        y="65"
                        className="instantmart-letter"
                        style={{
                            fill: letter.color,
                            animationDelay: `${index * 0.08}s`,
                        }}
                    >
                        {letter.char}
                    </text>
                ))}
            </svg>
        </div>
    );
};

export default PageLoader;