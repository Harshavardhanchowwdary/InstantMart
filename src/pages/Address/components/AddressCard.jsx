import {
    Check,
    MapPin,
    Pencil,
    Trash2,
} from "lucide-react";


const AddressCard = ({
    address,
    index = 0,
    onEdit,
    onDelete,
    onSetDefault,
}) => {

    return (
        <article
            className="
                group
                overflow-hidden
                rounded-[16px]
                border
                border-[#e7e5df]
                bg-white
                p-5
                opacity-0
                shadow-[0_4px_18px_rgba(23,37,30,0.035)]
                animate-[addressCardIn_450ms_ease-out_forwards]
                transition-all
                duration-300
                ease-out
                hover:-translate-y-[2px]
                hover:border-[#dedbd4]
                hover:shadow-[0_14px_32px_rgba(23,37,30,0.08)]
                text-[14px]
            "
            style={{
                animationDelay: `${index * 100}ms`,
            }}
        >

            {/* =================================================
                HEADER
            ================================================== */}

            <div
                className="
                    flex
                    items-start
                    justify-between
                    gap-3
                "
            >

                <div className="flex items-center gap-3">

                    <div
                        className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-[11px]
                            bg-[var(--color-accent-light)]
                            text-[var(--color-accent)]
                            transition-all
                            duration-300
                            group-hover:scale-105
                            group-hover:rotate-[-3deg]
                            
                        "
                    >
                        <MapPin
                            size={17}
                            strokeWidth={1.7}
                        />
                    </div>

                    <div>

                        <h2
                            className="
                                text-[13px]
                                font-bold
                                text-[var(--color-text-dark)]
                            "
                        >
                            {address.label}
                        </h2>

                        {address.isDefault && (
                            <span
                                className="
                                    mt-1
                                    inline-flex
                                    items-center
                                    gap-1
                                    rounded-full
                                    bg-[var(--color-primary-light)]
                                    px-2
                                    py-[3px]
                                    text-[8px]
                                    font-semibold
                                    text-[var(--color-primary)]
                                "
                            >
                                <Check
                                    size={9}
                                    strokeWidth={2}
                                />
                                Default
                            </span>
                        )}

                    </div>

                </div>


                {/* =================================================
                    ACTIONS
                ================================================== */}

                <div
                    className="
                        flex
                        items-center
                        gap-1
                    "
                >

                    <button
                        type="button"
                        onClick={() => onEdit(address)}
                        title="Edit address"
                        className="
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-full
                            text-[var(--color-text-secondary)]
                            transition-all
                            duration-300
                            hover:bg-[var(--color-accent-light)]
                            hover:text-[var(--color-accent)]
                        "
                    >
                        <Pencil
                            size={12}
                            strokeWidth={1.8}
                        />
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            onDelete(address._id)
                        }
                        title="Delete address"
                        className="
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-full
                            text-[var(--color-text-secondary)]
                            transition-all
                            duration-300
                            hover:bg-red-50
                            hover:text-red-500
                        "
                    >
                        <Trash2
                            size={12}
                            strokeWidth={1.8}
                        />
                    </button>

                </div>

            </div>


            {/* =================================================
                ADDRESS
            ================================================== */}

            <div
                className="
                    mt-5
                    border-t
                    border-[#eeeae4]
                    pt-4
                "
            >

                <p
                    className="
                        text-[14px]
                        font-medium
                        leading-[1.7]
                        text-[var(--color-text-dark)]
                    "
                >
                    {address.address}
                </p>

                <p
                    className="
                        mt-1
                        text-[10px]
                        leading-[1.7]
                        text-[var(--color-text-secondary)]
                    "
                >
                    {address.city}
                    {", "}
                    {address.state}
                    {" - "}
                    {address.zip}
                </p>

            </div>


            {/* =================================================
                DEFAULT ACTION
            ================================================== */}

            {!address.isDefault && (
                <button
                    type="button"
                    onClick={() =>
                        onSetDefault(address._id)
                    }
                    className="
                        mt-4
                        text-[9px]
                        font-semibold
                        text-[var(--color-accent)]
                        transition-colors
                        duration-300
                        hover:text-[var(--color-primary)]
                    "
                >
                    Set as default
                </button>
            )}

        </article>
    );
};


export default AddressCard;