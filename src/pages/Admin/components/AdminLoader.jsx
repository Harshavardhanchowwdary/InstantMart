import React from "react";
import "./AdminLoader.css";

const AdminLoader = () => {
    const letters = [
        { char: "A", color: "#003819" },
        { char: "D", color: "#003819" },
        { char: "M", color: "#003819" },
        { char: "I", color: "#003819" },
        { char: "N", color: "#ff6b00" },
    ];

    return (
        <div className="admin-loader">
            <svg
                viewBox="0 0 430 90"
                xmlns="http://www.w3.org/2000/svg"
                className="admin-loader__svg"
            >
                {letters.map((letter, index) => (
                    <text
                        key={`${letter.char}-${index}`}
                        x={38 + index * 78}
                        y="65"
                        className="admin-loader__letter"
                        style={{
                            fill: letter.color,
                            animationDelay: `${index * 0.1}s`,
                        }}
                    >
                        {letter.char}
                    </text>
                ))}
            </svg>
        </div>
    );
};

export default AdminLoader;