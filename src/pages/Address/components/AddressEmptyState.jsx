import {
    MapPin,
    Plus,
} from "lucide-react";


const AddressEmptyState = ({
    onAddAddress,
}) => {

    return (
        <div
            className="
                flex
                min-h-[500px]
                flex-col
                items-center
                justify-center
                text-center
            "
        >

            {/* =================================================
                ANIMATED ICON
            ================================================== */}

            <div
                className="
                    relative
                    flex
                    h-[90px]
                    w-[90px]
                    items-center
                    justify-center
                "
            >

                <span
                    className="
                        absolute
                        inset-1
                        rounded-full
                        border
                        border-[var(--color-accent)]
                        opacity-20
                        animate-[addressPulse_2s_ease-out_infinite]
                    "
                />

                <span
                    className="
                        absolute
                        inset-4
                        rounded-full
                        bg-[var(--color-accent-light)]
                        animate-[addressGlow_2s_ease-in-out_infinite]
                    "
                />

                <MapPin
                    size={38}
                    strokeWidth={1.5}
                    className="
                        relative
                        z-10
                        text-[var(--color-primary)]
                        animate-[addressFloat_2.5s_ease-in-out_infinite]
                    "
                />

                <span
                    className="
                        absolute
                        right-[10px]
                        top-[10px]
                        h-[7px]
                        w-[7px]
                        rounded-full
                        bg-[var(--color-accent)]
                        shadow-[0_0_10px_rgba(255,107,0,0.35)]
                        animate-pulse
                    "
                />

            </div>


            <h2
                className="
                    mt-4
                    text-[15px]
                    font-bold
                    text-[var(--color-text-dark)]
                "
            >
                No addresses saved
            </h2>

            <p
                className="
                    mt-2
                    text-[11px]
                    text-[var(--color-text-secondary)]
                "
            >
                Add an address for faster checkout
            </p>


            <button
                type="button"
                onClick={onAddAddress}
                className="
                    group
                    mt-5
                    flex
                    h-[38px]
                    items-center
                    gap-2
                    rounded-[10px]
                    bg-[var(--color-accent)]
                    px-4
                    text-[10px]
                    font-semibold
                    text-white
                    shadow-[0_5px_14px_rgba(255,107,0,0.14)]
                    transition-all
                    duration-300
                    hover:-translate-y-[1px]
                    hover:bg-[var(--color-accent-dark)]
                    hover:shadow-[0_8px_18px_rgba(255,107,0,0.2)]
                    active:scale-[0.97]
                "
            >

                <Plus
                    size={13}
                    strokeWidth={2}
                    className="
                        transition-transform
                        duration-300
                        group-hover:rotate-90
                    "
                />

                Add Your First Address

            </button>

        </div>
    );
};


export default AddressEmptyState;