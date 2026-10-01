import {
    useState,
} from "react";

import toast from "react-hot-toast";

import {
    dummyAddressData,
} from "../../assets/assets";

import AddressCard from "./components/AddressCard";
import AddressEmptyState from "./components/AddressEmptyState";
import AddressModal from "./components/AddressModal";


const Addresses = () => {

    const [addresses, setAddresses] =
        useState(dummyAddressData);

    const [showModal, setShowModal] =
        useState(false);

    const [editingAddress, setEditingAddress] =
        useState(null);


    /* =========================================================
       ADD / UPDATE ADDRESS
    ========================================================= */

    const handleSaveAddress = (address) => {

        if (editingAddress) {

            setAddresses((previous) =>
                previous.map((item) =>
                    item._id === editingAddress._id
                        ? {
                            ...address,
                            _id: editingAddress._id,
                        }
                        : item,
                ),
            );

            toast.success(
                "Address updated successfully",
            );

        } else {

            setAddresses((previous) => [
                ...previous,
                {
                    ...address,
                    _id: Date.now().toString(),
                },
            ]);

            toast.success(
                "Address added successfully",
            );
        }

        setEditingAddress(null);
        setShowModal(false);
    };


    /* =========================================================
       EDIT ADDRESS
    ========================================================= */

    const handleEdit = (address) => {

        setEditingAddress(address);
        setShowModal(true);

    };


    /* =========================================================
       DELETE ADDRESS
    ========================================================= */

    const handleDelete = (id) => {

        setAddresses((previous) =>
            previous.filter(
                (item) => item._id !== id,
            ),
        );

        toast.success(
            "Address deleted successfully",
        );

    };


    /* =========================================================
       SET DEFAULT
    ========================================================= */

    const handleSetDefault = (id) => {

        setAddresses((previous) =>
            previous.map((item) => ({
                ...item,
                isDefault: item._id === id,
            })),
        );

        toast.success(
            "Default address updated",
        );

    };


    return (
        <div
            className="
                w-full
                min-h-[calc(100vh-65px)]
                py-7
                sm:py-8
                lg:py-10
                
            "
        >

            {/* =================================================
                HEADER
            ================================================== */}

            <div
                className="
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                "
            >

                <div>

                    <div
                        className="
                            mb-2
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-[var(--color-accent)]
                        "
                    >
                        Delivery Details
                    </div>

                    <h1
                        className="
                            text-[24px]
                            font-bold
                            leading-none
                            tracking-[-0.7px]
                            text-[var(--color-text-dark)]
                            sm:text-[28px]
                        "
                    >
                        My Addresses
                    </h1>

                    <p
                        className="
                            mt-2
                            text-[13px]
                            leading-[1.7]
                            text-[var(--color-text-secondary)]
                            sm:text-[12px]
                        "
                    >
                        Manage your delivery addresses for a
                        faster checkout experience.
                    </p>

                </div>


                {/* =================================================
                    ADD ADDRESS
                ================================================== */}

                <button
                    type="button"
                    onClick={() => {
                        setEditingAddress(null);
                        setShowModal(true);
                    }}
                    className="
                        group/add
                        relative
                        flex
                        h-[40px]
                        w-fit
                        shrink-0
                        items-center
                        gap-2
                        overflow-hidden
                        rounded-[10px]
                        bg-[var(--color-primary)]
                        px-4
                        text-[10px]
                        font-semibold
                        text-white
                        shadow-[0_6px_16px_rgba(0,69,33,0.12)]
                        transition-all
                        duration-300
                        ease-out
                        hover:-translate-y-[1px]
                        hover:shadow-[0_9px_20px_rgba(0,69,33,0.18)]
                        active:translate-y-0
                        active:scale-[0.97]
                    "
                >

                    <span
                        className="
                            relative
                            z-10
                            text-[18px]
                            font-light
                            leading-none
                            transition-transform
                            duration-300
                            group-hover/add:rotate-90
                        "
                    >
                        +
                    </span>

                    <span className="relative z-10">
                        Add Address
                    </span>

                </button>

            </div>


            {/* =================================================
                ADDRESS CONTENT
            ================================================== */}

            {addresses.length === 0 ? (

                <AddressEmptyState
                    onAddAddress={() => {
                        setEditingAddress(null);
                        setShowModal(true);
                    }}
                />

            ) : (

                <div
                    className="
                        mt-7
                        grid
                        grid-cols-1
                        gap-4
                        md:grid-cols-2
                        xl:grid-cols-3
                        text-[14px]
                    "
                >

                    {addresses.map(
                        (address, index) => (
                            <AddressCard
                                key={address._id}
                                address={address}
                                index={index}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                                onSetDefault={handleSetDefault}
                            />
                        ),
                    )}

                </div>

            )}


            {/* =================================================
                ADDRESS MODAL
            ================================================== */}

            {showModal && (
                <AddressModal
                    address={editingAddress}
                    onClose={() => {
                        setShowModal(false);
                        setEditingAddress(null);
                    }}
                    onSave={handleSaveAddress}
                />
            )}

        </div>
    );
};


export default Addresses;