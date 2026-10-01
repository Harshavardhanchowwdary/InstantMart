import React, {
    useState,
} from "react";

import {
    useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

import {
    Eye,
    EyeOff,
    Lock,
    Mail,
    UserRound,
} from "lucide-react";


const RegisterForm = () => {

    const navigate = useNavigate();


    const [showPassword, setShowPassword] =
        useState(false);

    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);


    // =====================================================
    // INPUT CLASS
    // =====================================================

    const inputClass = `
        h-[46px]
        w-full
        rounded-[10px]
        border
        border-[var(--color-border)]
        bg-white
        text-[13px]
        text-[var(--color-text-primary)]
        outline-none
        transition-all
        duration-300
        placeholder:text-[var(--color-text-muted)]
        hover:border-[var(--color-primary)]/40
        focus:border-[var(--color-primary)]
        focus:ring-4
        focus:ring-[var(--color-primary)]/10
    `;


    // =====================================================
    // HANDLE SUBMIT
    // =====================================================

    const handleSubmit = (event) => {

        event.preventDefault();


        toast.success(
            "Account created successfully!"
        );


        setTimeout(() => {

            navigate("/", {
                replace: true,
            });

        }, 450);

    };


    return (

        <form
            onSubmit={handleSubmit}
            className="
                mt-7
                space-y-4
                animate-[categoryItemIn_550ms_cubic-bezier(0.22,1,0.36,1)_100ms_both]
            "
        >

            {/* =====================================================
                ACCOUNT DETAILS
            ====================================================== */}

            <div
                className="
                    rounded-[16px]
                    border
                    border-[var(--color-border-light)]
                    bg-white
                    p-4
                    shadow-[0_8px_25px_rgba(24,51,40,0.045)]

                    sm:p-5
                "
            >

                {/* Header */}

                <div
                    className="
                        mb-5
                        flex
                        items-center
                        justify-between
                    "
                >

                    <div>

                        <p
                            className="
                                text-[13px]
                                font-semibold
                                text-[var(--color-text-primary)]
                            "
                        >
                            Account details
                        </p>


                        <p
                            className="
                                mt-1
                                text-[12px]
                                text-[var(--color-text-secondary)]
                            "
                        >
                            Enter your basic information.
                        </p>

                    </div>


                    <span
                        className="
                            flex
                            h-[28px]
                            w-[28px]
                            items-center
                            justify-center
                            rounded-full
                            bg-[var(--color-primary-light)]
                            text-[11px]
                            font-bold
                            text-[var(--color-primary)]
                        "
                    >
                        01
                    </span>

                </div>


                {/* =================================================
                    FULL NAME
                ================================================== */}

                <div>

                    <label
                        htmlFor="name"
                        className="
                            mb-1.5
                            block
                            text-[13px]
                            font-semibold
                            text-[var(--color-text-primary)]
                        "
                    >
                        Full Name
                    </label>


                    <div
                        className="
                            group
                            relative
                        "
                    >

                        <UserRound
                            size={17}
                            strokeWidth={1.6}
                            className="
                                absolute
                                left-3.5
                                top-1/2
                                -translate-y-1/2
                                text-[var(--color-text-secondary)]
                                transition-colors
                                duration-300
                                group-focus-within:text-[var(--color-primary)]
                            "
                        />


                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="Enter your full name"
                            required
                            className={`${inputClass} pl-11 pr-4`}
                        />

                    </div>

                </div>


                {/* =================================================
                    EMAIL
                ================================================== */}

                <div className="mt-4">

                    <label
                        htmlFor="register-email"
                        className="
                            mb-1.5
                            block
                            text-[13px]
                            font-semibold
                            text-[var(--color-text-primary)]
                        "
                    >
                        Email Address
                    </label>


                    <div
                        className="
                            group
                            relative
                        "
                    >

                        <Mail
                            size={17}
                            strokeWidth={1.6}
                            className="
                                absolute
                                left-3.5
                                top-1/2
                                -translate-y-1/2
                                text-[var(--color-text-secondary)]
                                transition-colors
                                duration-300
                                group-focus-within:text-[var(--color-primary)]
                            "
                        />


                        <input
                            id="register-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            required
                            className={`${inputClass} pl-11 pr-4`}
                        />

                    </div>

                </div>

            </div>


            {/* =====================================================
                SECURITY
            ====================================================== */}

            <div
                className="
                    rounded-[16px]
                    border
                    border-[var(--color-border-light)]
                    bg-white
                    p-4
                    shadow-[0_8px_25px_rgba(24,51,40,0.045)]

                    sm:p-5
                "
            >

                {/* Header */}

                <div
                    className="
                        mb-5
                        flex
                        items-center
                        justify-between
                    "
                >

                    <div>

                        <p
                            className="
                                text-[13px]
                                font-semibold
                                text-[var(--color-text-primary)]
                            "
                        >
                            Secure your account
                        </p>


                        <p
                            className="
                                mt-1
                                text-[12px]
                                text-[var(--color-text-secondary)]
                            "
                        >
                            Create a secure password.
                        </p>

                    </div>


                    <span
                        className="
                            flex
                            h-[28px]
                            w-[28px]
                            items-center
                            justify-center
                            rounded-full
                            bg-[var(--color-accent-light)]
                            text-[11px]
                            font-bold
                            text-[var(--color-accent)]
                        "
                    >
                        02
                    </span>

                </div>


                {/* =================================================
                    PASSWORD
                ================================================== */}

                <div>

                    <label
                        htmlFor="register-password"
                        className="
                            mb-1.5
                            block
                            text-[13px]
                            font-semibold
                            text-[var(--color-text-primary)]
                        "
                    >
                        Password
                    </label>


                    <div
                        className="
                            group
                            relative
                        "
                    >

                        <Lock
                            size={17}
                            strokeWidth={1.6}
                            className="
                                absolute
                                left-3.5
                                top-1/2
                                -translate-y-1/2
                                text-[var(--color-text-secondary)]
                                transition-colors
                                duration-300
                                group-focus-within:text-[var(--color-primary)]
                            "
                        />


                        <input
                            id="register-password"
                            name="password"
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            autoComplete="new-password"
                            placeholder="Create a password"
                            required
                            className={`${inputClass} pl-11 pr-11`}
                        />


                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(
                                    (previous) =>
                                        !previous
                                )
                            }
                            className="
                                absolute
                                right-3.5
                                top-1/2
                                -translate-y-1/2
                                text-[var(--color-text-secondary)]
                                transition-colors
                                duration-300
                                hover:text-[var(--color-primary)]
                            "
                        >

                            {showPassword ? (

                                <EyeOff
                                    size={17}
                                    strokeWidth={1.6}
                                />

                            ) : (

                                <Eye
                                    size={17}
                                    strokeWidth={1.6}
                                />

                            )}

                        </button>

                    </div>

                </div>


                {/* =================================================
                    CONFIRM PASSWORD
                ================================================== */}

                <div className="mt-4">

                    <label
                        htmlFor="confirm-password"
                        className="
                            mb-1.5
                            block
                            text-[13px]
                            font-semibold
                            text-[var(--color-text-primary)]
                        "
                    >
                        Confirm Password
                    </label>


                    <div
                        className="
                            group
                            relative
                        "
                    >

                        <Lock
                            size={17}
                            strokeWidth={1.6}
                            className="
                                absolute
                                left-3.5
                                top-1/2
                                -translate-y-1/2
                                text-[var(--color-text-secondary)]
                                transition-colors
                                duration-300
                                group-focus-within:text-[var(--color-primary)]
                            "
                        />


                        <input
                            id="confirm-password"
                            name="confirmPassword"
                            type={
                                showConfirmPassword
                                    ? "text"
                                    : "password"
                            }
                            autoComplete="new-password"
                            placeholder="Confirm your password"
                            required
                            className={`${inputClass} pl-11 pr-11`}
                        />


                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPassword(
                                    (previous) =>
                                        !previous
                                )
                            }
                            className="
                                absolute
                                right-3.5
                                top-1/2
                                -translate-y-1/2
                                text-[var(--color-text-secondary)]
                                transition-colors
                                duration-300
                                hover:text-[var(--color-primary)]
                            "
                        >

                            {showConfirmPassword ? (

                                <EyeOff
                                    size={17}
                                    strokeWidth={1.6}
                                />

                            ) : (

                                <Eye
                                    size={17}
                                    strokeWidth={1.6}
                                />

                            )}

                        </button>

                    </div>

                </div>

            </div>


            {/* =====================================================
                SIGN UP BUTTON
            ====================================================== */}

            <button
                type="submit"
                className="
                    group
                    relative
                    flex
                    h-[50px]
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[11px]
                    bg-[var(--color-primary)]
                    text-[14px]
                    font-semibold
                    text-white
                    shadow-[0_10px_24px_rgba(0,69,33,0.16)]
                    transition-all
                    duration-300
                    hover:-translate-y-[1px]
                    hover:bg-[var(--color-primary-dark)]
                    hover:shadow-[0_15px_30px_rgba(0,69,33,0.20)]
                    active:translate-y-0
                "
            >

                <span
                    className="
                        absolute
                        -left-[100%]
                        top-0
                        h-full
                        w-[55%]
                        skew-x-[-20deg]
                        bg-white/10
                        transition-all
                        duration-700
                        group-hover:left-[130%]
                    "
                />


                <span className="relative z-10">
                    Sign Up
                </span>

            </button>


            {/* =====================================================
                SECURITY NOTE
            ====================================================== */}

            <div
                className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    pt-1
                    text-[12px]
                    text-[var(--color-text-muted)]
                "
            >

                <span
                    className="
                        h-[6px]
                        w-[6px]
                        rounded-full
                        bg-[var(--color-success)]
                    "
                />

                Your information is securely protected.

            </div>

        </form>
    );
};


export default RegisterForm;