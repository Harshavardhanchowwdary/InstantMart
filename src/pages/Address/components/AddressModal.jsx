import {
    useEffect,
    useState,
} from "react";

import {
    Check,
    RotateCcw,
    X,
} from "lucide-react";


const emptyForm = {
    label: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    isDefault: false,
};


const AddressModal = ({
    address,
    onClose,
    onSave,
}) => {

    const [form, setForm] =
        useState(emptyForm);

    const [resetting, setResetting] =
        useState(false);


    /* =========================================================
       LOAD EDIT DATA
    ========================================================= */

    useEffect(() => {

        if (address) {

            setForm({
                label: address.label || "",
                address: address.address || "",
                city: address.city || "",
                state: address.state || "",
                zip: address.zip || "",
                isDefault:
                    address.isDefault || false,
            });

        } else {

            setForm(emptyForm);

        }

    }, [address]);


    /* =========================================================
       INPUT CHANGE
    ========================================================= */

    const handleChange = (event) => {

        const {
            name,
            value,
            type,
            checked,
        } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        }));

    };


    /* =========================================================
       RESET
    ========================================================= */

    const handleReset = () => {

        setResetting(true);

        setForm(emptyForm);

        setTimeout(() => {
            setResetting(false);
        }, 500);

    };


    /* =========================================================
       SUBMIT
    ========================================================= */

    const handleSubmit = (event) => {

        event.preventDefault();

        onSave(form);

    };


    return (
        <div
            className="
                fixed
                inset-0
                z-[100]
                flex
                items-center
                justify-center
                bg-[rgba(6,45,27,0.38)]
                px-4
                py-5
                backdrop-blur-[3px]
                animate-[addressOverlayIn_250ms_ease-out_both]
            "
        >

            <div
                className="
                    relative
                    max-h-[95vh]
                    w-full
                    max-w-[610px]
                    overflow-y-auto
                    rounded-[18px]
                    border
                    border-[#e5e1da]
                    bg-white
                    shadow-[0_24px_60px_rgba(23,37,30,0.18)]
                    animate-[addressModalIn_350ms_cubic-bezier(0.22,1,0.36,1)_both]
                "
            >

                {/* =================================================
                    HEADER
                ================================================== */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-[#eeeae4]
                        px-6
                        py-5
                    "
                >

                    <div>

                        <p
                            className="
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.16em]
                                text-[var(--color-accent)]
                            "
                        >
                            Address Details
                        </p>

                        <h2
                            className="
                                mt-1
                                text-[19px]
                                font-bold
                                tracking-[-0.4px]
                                text-[var(--color-text-dark)]
                            "
                        >
                            {address
                                ? "Edit Address"
                                : "Add New Address"}
                        </h2>

                    </div>


                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            text-[var(--color-text-secondary)]
                            transition-all
                            duration-300
                            hover:bg-[var(--color-accent-light)]
                            hover:text-[var(--color-accent)]
                            hover:rotate-90
                        "
                    >

                        <X
                            size={17}
                            strokeWidth={1.8}
                        />

                    </button>

                </div>


                {/* =================================================
                    FORM
                ================================================== */}

                <form
                    onSubmit={handleSubmit}
                    className="
                        px-6
                        pb-6
                        pt-5
                    "
                >

                    {/* LABEL */}

                    <div>

                        <label
                            className="
                                text-[10px]
                                font-semibold
                                text-[var(--color-text-dark)]
                            "
                        >
                            Label
                        </label>

                        <input
                            name="label"
                            value={form.label}
                            onChange={handleChange}
                            placeholder="Home, Work, etc."
                            required
                            className="
                                mt-2
                                h-[44px]
                                w-full
                                rounded-[10px]
                                border
                                border-[#e2e5e7]
                                bg-[#fcfbf9]
                                px-4
                                text-[11px]
                                text-[var(--color-text-dark)]
                                outline-none
                                transition-all
                                duration-300
                                placeholder:text-[#a5aaa7]
                                focus:border-[var(--color-accent)]
                                focus:bg-white
                                focus:ring-2
                                focus:ring-[rgba(255,107,0,0.08)]
                            "
                        />

                    </div>


                    {/* ADDRESS */}

                    <div className="mt-4">

                        <label
                            className="
                                text-[10px]
                                font-semibold
                                text-[var(--color-text-dark)]
                            "
                        >
                            Street Address
                        </label>

                        <input
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            required
                            className="
                                mt-2
                                h-[44px]
                                w-full
                                rounded-[10px]
                                border
                                border-[#e2e5e7]
                                bg-[#fcfbf9]
                                px-4
                                text-[11px]
                                text-[var(--color-text-dark)]
                                outline-none
                                transition-all
                                duration-300
                                focus:border-[var(--color-accent)]
                                focus:bg-white
                                focus:ring-2
                                focus:ring-[rgba(255,107,0,0.08)]
                            "
                        />

                    </div>


                    {/* CITY + STATE */}

                    <div
                        className="
                            mt-4
                            grid
                            grid-cols-1
                            gap-4
                            sm:grid-cols-2
                        "
                    >

                        <div>

                            <label
                                className="
                                    text-[10px]
                                    font-semibold
                                    text-[var(--color-text-dark)]
                                "
                            >
                                City
                            </label>

                            <input
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                required
                                className="
                                    mt-2
                                    h-[44px]
                                    w-full
                                    rounded-[10px]
                                    border
                                    border-[#e2e5e7]
                                    bg-[#fcfbf9]
                                    px-4
                                    text-[11px]
                                    outline-none
                                    transition-all
                                    duration-300
                                    focus:border-[var(--color-accent)]
                                    focus:bg-white
                                    focus:ring-2
                                    focus:ring-[rgba(255,107,0,0.08)]
                                "
                            />

                        </div>


                        <div>

                            <label
                                className="
                                    text-[10px]
                                    font-semibold
                                    text-[var(--color-text-dark)]
                                "
                            >
                                State
                            </label>

                            <input
                                name="state"
                                value={form.state}
                                onChange={handleChange}
                                required
                                className="
                                    mt-2
                                    h-[44px]
                                    w-full
                                    rounded-[10px]
                                    border
                                    border-[#e2e5e7]
                                    bg-[#fcfbf9]
                                    px-4
                                    text-[11px]
                                    outline-none
                                    transition-all
                                    duration-300
                                    focus:border-[var(--color-accent)]
                                    focus:bg-white
                                    focus:ring-2
                                    focus:ring-[rgba(255,107,0,0.08)]
                                "
                            />

                        </div>

                    </div>


                    {/* ZIP + DEFAULT */}

                    <div
                        className="
                            mt-4
                            flex
                            flex-col
                            gap-4
                            sm:flex-row
                            sm:items-end
                        "
                    >

                        <div className="w-full sm:w-[50%]">

                            <label
                                className="
                                    text-[10px]
                                    font-semibold
                                    text-[var(--color-text-dark)]
                                "
                            >
                                ZIP Code
                            </label>

                            <input
                                name="zip"
                                value={form.zip}
                                onChange={handleChange}
                                required
                                inputMode="numeric"
                                className="
                                    mt-2
                                    h-[44px]
                                    w-full
                                    rounded-[10px]
                                    border
                                    border-[#e2e5e7]
                                    bg-[#fcfbf9]
                                    px-4
                                    text-[11px]
                                    outline-none
                                    transition-all
                                    duration-300
                                    focus:border-[var(--color-accent)]
                                    focus:bg-white
                                    focus:ring-2
                                    focus:ring-[rgba(255,107,0,0.08)]
                                "
                            />

                        </div>


                        <label
                            className="
                                flex
                                h-[44px]
                                cursor-pointer
                                items-center
                                gap-2
                                text-[10px]
                                font-medium
                                text-[var(--color-text-dark)]
                            "
                        >

                            <input
                                type="checkbox"
                                name="isDefault"
                                checked={form.isDefault}
                                onChange={handleChange}
                                className="
                                    h-[15px]
                                    w-[15px]
                                    accent-[var(--color-accent)]
                                "
                            />

                            Set as default

                        </label>

                    </div>


                    {/* =================================================
                        ACTIONS
                    ================================================== */}

                    <div
                        className="
                            mt-6
                            flex
                            flex-col-reverse
                            gap-2
                            sm:flex-row
                        "
                    >

                        <button
                            type="button"
                            onClick={handleReset}
                            className="
                                group/reset
                                flex
                                h-[42px]
                                items-center
                                justify-center
                                gap-2
                                rounded-[10px]
                                border
                                border-[#e2e5e7]
                                bg-white
                                px-4
                                text-[10px]
                                font-semibold
                                text-[var(--color-text-secondary)]
                                transition-all
                                duration-300
                                hover:border-[var(--color-accent)]
                                hover:bg-[var(--color-accent-light)]
                                hover:text-[var(--color-accent)]
                                active:scale-[0.97]
                            "
                        >

                            <RotateCcw
                                size={13}
                                strokeWidth={1.8}
                                className={`
                                    transition-transform
                                    duration-500
                                    ${
                                        resetting
                                            ? "rotate-180"
                                            : ""
                                    }
                                `}
                            />

                            Reset

                        </button>


                        <button
                            type="submit"
                            className="
                                group/save
                                relative
                                flex
                                h-[42px]
                                flex-1
                                items-center
                                justify-center
                                gap-2
                                overflow-hidden
                                rounded-[10px]
                                bg-[var(--color-primary)]
                                text-[10px]
                                font-semibold
                                text-white
                                shadow-[0_6px_16px_rgba(0,69,33,0.14)]
                                transition-all
                                duration-300
                                hover:-translate-y-[1px]
                                hover:shadow-[0_9px_20px_rgba(0,69,33,0.2)]
                                active:translate-y-0
                                active:scale-[0.98]
                            "
                        >

                            <span
                                className="
                                    absolute
                                    inset-y-0
                                    left-0
                                    z-0
                                    w-0
                                    bg-[var(--color-accent)]
                                    transition-all
                                    duration-300
                                    ease-[cubic-bezier(0.22,1,0.36,1)]
                                    group-hover/save:w-full
                                "
                            />

                            <Check
                                size={13}
                                strokeWidth={2}
                                className="
                                    relative
                                    z-10
                                    transition-transform
                                    duration-300
                                    group-hover/save:scale-110
                                "
                            />

                            <span className="relative z-10">
                                {address
                                    ? "Update Address"
                                    : "Save Address"}
                            </span>

                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};


export default AddressModal;