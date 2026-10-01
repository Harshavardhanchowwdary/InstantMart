import React, {
    useState,
} from "react";

import toast from "react-hot-toast";

import {
    Eye,
    EyeOff,
    Lock,
    Mail,
} from "lucide-react";


const LoginForm = ({
    onSuccess,
}) => {

    const [showPassword, setShowPassword] =
        useState(false);

    const [rememberMe, setRememberMe] =
        useState(false);


    const handleSubmit = (event) => {

        event.preventDefault();

        toast.success(
            "Signed in successfully!"
        );

        setTimeout(() => {
            onSuccess();
        }, 450);

    };


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


    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-5"
        >

            {/* =====================================================
                EMAIL
            ====================================================== */}

            <div>

                <label
                    htmlFor="email"
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
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        required
                        className={`${inputClass} pl-11 pr-4`}
                    />

                </div>

            </div>


            {/* =====================================================
                PASSWORD
            ====================================================== */}

            <div>

                <div
                    className="
                        mb-1.5
                        flex
                        items-center
                        justify-between
                    "
                >

                    <label
                        htmlFor="password"
                        className="
                            text-[13px]
                            font-semibold
                            text-[var(--color-text-primary)]
                        "
                    >
                        Password
                    </label>


                    <button
                        type="button"
                        onClick={() =>
                            toast(
                                "Password recovery will be available soon."
                            )
                        }
                        className="
                            text-[12px]
                            font-medium
                            text-[var(--color-primary)]
                            transition-colors
                            duration-300
                            hover:text-[var(--color-accent)]
                        "
                    >
                        Forgot password?
                    </button>

                </div>


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
                        id="password"
                        name="password"
                        type={
                            showPassword
                                ? "text"
                                : "password"
                        }
                        autoComplete="current-password"
                        placeholder="Enter your password"
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
                        aria-label={
                            showPassword
                                ? "Hide password"
                                : "Show password"
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


            {/* =====================================================
                REMEMBER ME
            ====================================================== */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                "
            >

                <label
                    className="
                        flex
                        cursor-pointer
                        items-center
                        gap-2.5
                        text-[12px]
                        text-[var(--color-text-secondary)]
                    "
                >

                    <span
                        className={`
                            flex
                            h-[17px]
                            w-[17px]
                            items-center
                            justify-center
                            rounded-[5px]
                            border
                            transition-all
                            duration-200

                            ${
                                rememberMe
                                    ? "border-[var(--color-primary)] bg-[var(--color-primary)]"
                                    : "border-[var(--color-border)] bg-white"
                            }
                        `}
                    >

                        {rememberMe && (
                            <span
                                className="
                                    h-[7px]
                                    w-[7px]
                                    rounded-[2px]
                                    bg-white
                                "
                            />
                        )}

                    </span>


                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(event) =>
                            setRememberMe(
                                event.target.checked
                            )
                        }
                        className="sr-only"
                    />

                    Remember me

                </label>


                <span
                    className="
                        text-[12px]
                        text-[var(--color-text-muted)]
                    "
                >
                    Secure login
                </span>

            </div>


            {/* =====================================================
                SIGN IN
            ====================================================== */}

            <button
                type="submit"
                className="
                    group
                    relative
                    flex
                    h-[48px]
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[10px]
                    bg-[var(--color-primary)]
                    text-[14px]
                    font-semibold
                    text-white
                    shadow-[0_9px_22px_rgba(0,69,33,0.15)]
                    transition-all
                    duration-300
                    hover:-translate-y-[1px]
                    hover:bg-[var(--color-primary-dark)]
                    hover:shadow-[0_13px_28px_rgba(0,69,33,0.20)]
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
                    Sign In
                </span>

            </button>


            {/* =====================================================
                DIVIDER
            ====================================================== */}

            <div
                className="
                    flex
                    items-center
                    gap-3
                    py-1
                "
            >

                <span
                    className="
                        h-px
                        flex-1
                        bg-[var(--color-border)]
                    "
                />

                <span
                    className="
                        text-[11px]
                        font-medium
                        text-[var(--color-text-muted)]
                    "
                >
                    OR
                </span>

                <span
                    className="
                        h-px
                        flex-1
                        bg-[var(--color-border)]
                    "
                />

            </div>


            {/* =====================================================
                SOCIAL LOGIN
            ====================================================== */}

            <div
                className="
                    grid
                    grid-cols-2
                    gap-3
                "
            >

                <button
                    type="button"
                    onClick={() =>
                        toast(
                            "Google sign in will be available soon."
                        )
                    }
                    className="
                        flex
                        h-[43px]
                        items-center
                        justify-center
                        gap-2
                        rounded-[9px]
                        border
                        border-[var(--color-border)]
                        bg-white
                        text-[12px]
                        font-medium
                        text-[var(--color-text-primary)]
                        transition-all
                        duration-300
                        hover:-translate-y-[1px]
                        hover:border-[var(--color-primary)]/30
                        hover:shadow-[0_6px_16px_rgba(24,51,40,0.06)]
                    "
                >

                    <span
                        className="
                            text-[14px]
                            font-bold
                            text-[var(--color-primary)]
                        "
                    >
                        G
                    </span>

                    Google

                </button>


                <button
                    type="button"
                    onClick={() =>
                        toast(
                            "Facebook sign in will be available soon."
                        )
                    }
                    className="
                        flex
                        h-[43px]
                        items-center
                        justify-center
                        gap-2
                        rounded-[9px]
                        border
                        border-[var(--color-border)]
                        bg-white
                        text-[12px]
                        font-medium
                        text-[var(--color-text-primary)]
                        transition-all
                        duration-300
                        hover:-translate-y-[1px]
                        hover:border-[var(--color-primary)]/30
                        hover:shadow-[0_6px_16px_rgba(24,51,40,0.06)]
                    "
                >

                    <span
                        className="
                            flex
                            h-[16px]
                            w-[16px]
                            items-center
                            justify-center
                            rounded-full
                            bg-[var(--color-primary)]
                            text-[9px]
                            font-bold
                            text-white
                        "
                    >
                        f
                    </span>

                    Facebook

                </button>

            </div>

        </form>
    );
};


export default LoginForm;