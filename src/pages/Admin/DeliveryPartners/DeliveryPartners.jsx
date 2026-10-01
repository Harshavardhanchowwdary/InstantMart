import React, { useState } from "react";
import { Edit2, Plus, Trash2, Truck } from "lucide-react";
import AddDeliveryPartnerModal from "./components/AddDeliveryPartnerModal";

const DeliveryPartners = () => {
    const [showModal, setShowModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [editingPartner, setEditingPartner] = useState(null);
    const [deliveryPartners, setDeliveryPartners] = useState([]);

    const handleAddPartner = (partner) => {
        setDeliveryPartners((previous) => [
            ...previous,
            {
                ...partner,
                id: Date.now(),
                status: "Active",
            },
        ]);

        setShowModal(false);
    };

    const handleEditPartner = (partner) => {
        setIsEdit(true);
        setEditingPartner(partner);
        setShowModal(true);
    };

    const handleUpdatePartner = (updatedPartner) => {
        setDeliveryPartners((previous) =>
            previous.map((partner) =>
                partner.id === updatedPartner.id
                    ? updatedPartner
                    : partner
            )
        );

        handleCloseModal();
    };

    const handleDeletePartner = (partnerId) => {
        setDeliveryPartners((previous) =>
            previous.filter((partner) => partner.id !== partnerId)
        );
    };

    const handleOpenAddModal = () => {
        setIsEdit(false);
        setEditingPartner(null);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsEdit(false);
        setEditingPartner(null);
    };

    return (
        <section className="w-full">

            <div className="mb-5 flex items-center justify-between gap-4">

                <div>
                    <h1 className="text-[22px] font-bold tracking-[-0.4px] text-[var(--color-text-dark)]">
                        Delivery Partners
                    </h1>

                    <p className="mt-1 text-[13px] text-[var(--color-text-secondary)]">
                        Manage your delivery partners.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={handleOpenAddModal}
                    className="group flex h-[38px] items-center gap-2 rounded-[8px] bg-[var(--color-primary)] px-4 text-[13px] font-semibold text-white shadow-[0_5px_14px_rgba(0,69,33,0.12)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[var(--color-primary-dark)]"
                >
                    <Plus
                        size={16}
                        strokeWidth={2}
                        className="transition-transform duration-300 group-hover:rotate-90"
                    />

                    <span>
                        Add Partner
                    </span>
                </button>

            </div>


            {deliveryPartners.length === 0 ? (

                <div className="rounded-[14px] border border-[#e3e5e1] bg-white p-10 text-center shadow-[0_5px_20px_rgba(23,37,30,0.03)]">

                    <div className="mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                        <Truck
                            size={22}
                            strokeWidth={1.8}
                        />
                    </div>

                    <h3 className="mt-4 text-[15px] font-semibold text-[var(--color-text-dark)]">
                        No delivery partners
                    </h3>

                    <p className="mt-1 text-[13px] text-[var(--color-text-secondary)]">
                        Add your first delivery partner to get started.
                    </p>

                </div>

            ) : (

                <div className="overflow-hidden rounded-[14px] border border-[#e3e5e1] bg-white shadow-[0_5px_20px_rgba(23,37,30,0.03)]">

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[760px]">

                            <thead>
                                <tr className="border-b border-[#e5e7e3] bg-[#fafbf9] text-left">

                                    <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">
                                        Partner
                                    </th>

                                    <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">
                                        Contact
                                    </th>

                                    <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">
                                        Vehicle
                                    </th>

                                    <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">
                                        Status
                                    </th>

                                    <th className="px-5 py-4 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">
                                        Actions
                                    </th>

                                </tr>
                            </thead>

                            <tbody>

                                {deliveryPartners.map((partner, index) => (

                                    <tr
                                        key={partner.id}
                                        className="border-b border-[#eef0ed] transition-colors duration-200 last:border-b-0 hover:bg-[#fafcf9] animate-[adminRowIn_300ms_ease-out_both]"
                                        style={{
                                            animationDelay: `${index * 50}ms`,
                                        }}
                                    >

                                        <td className="px-5 py-4">

                                            <div className="flex items-center gap-3">

                                                <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[12px] font-bold text-[var(--color-primary)]">
                                                    {partner.name
                                                        .charAt(0)
                                                        .toUpperCase()}
                                                </div>

                                                <div>
                                                    <p className="text-[13px] font-semibold text-[var(--color-text-dark)]">
                                                        {partner.name}
                                                    </p>

                                                    <p className="mt-0.5 text-[11px] text-[var(--color-text-muted)]">
                                                        Delivery Partner
                                                    </p>
                                                </div>

                                            </div>

                                        </td>


                                        <td className="px-5 py-4">

                                            <p className="text-[12px] text-[var(--color-text-dark)]">
                                                {partner.email}
                                            </p>

                                            <p className="mt-1 text-[11px] text-[var(--color-text-secondary)]">
                                                {partner.phone}
                                            </p>

                                        </td>


                                        <td className="px-5 py-4">

                                            <span className="inline-flex rounded-full bg-[var(--color-primary-light)] px-3 py-1.5 text-[11px] font-semibold text-[var(--color-primary)]">
                                                {partner.vehicleType}
                                            </span>

                                        </td>


                                        <td className="px-5 py-4">

                                            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1.5 text-[11px] font-semibold text-green-700">

                                                <span className="relative flex h-2 w-2">
                                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-50" />
                                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
                                                </span>

                                                {partner.status}

                                            </span>

                                        </td>


                                        <td className="px-5 py-4">

                                            <div className="flex justify-end gap-2">

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleEditPartner(partner)
                                                    }
                                                    title="Edit Partner"
                                                    className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] text-[var(--color-text-secondary)] transition-all duration-300 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]"
                                                >
                                                    <Edit2
                                                        size={15}
                                                        strokeWidth={1.8}
                                                    />
                                                </button>


                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleDeletePartner(
                                                            partner.id
                                                        )
                                                    }
                                                    title="Delete Partner"
                                                    className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] text-[var(--color-text-secondary)] transition-all duration-300 hover:bg-red-50 hover:text-red-600"
                                                >
                                                    <Trash2
                                                        size={15}
                                                        strokeWidth={1.8}
                                                    />
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            )}


            {showModal && (
                <AddDeliveryPartnerModal
                    onClose={handleCloseModal}
                    onSubmit={
                        isEdit
                            ? handleUpdatePartner
                            : handleAddPartner
                    }
                    editingPartner={editingPartner}
                    isEdit={isEdit}
                />
            )}

        </section>
    );
};

export default DeliveryPartners;