import {
    Mail,
    Phone,
    Truck,
    User,
    X,
} from "lucide-react";

import {
    useEffect,
    useState,
} from "react";

import toast from "react-hot-toast";

const AddDeliveryPartnerModal = ({
    onClose,
    onSubmit,
    editingPartner,
    isEdit,
}) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        vehicleType: "Bike",
    });

    useEffect(() => {
        if (isEdit && editingPartner) {
            setForm({
                name: editingPartner.name,
                email: editingPartner.email,
                phone: editingPartner.phone,
                vehicleType: editingPartner.vehicleType,
                id: editingPartner.id,
                status: editingPartner.status,
            });
        } else {
            setForm({
                name: "",
                email: "",
                phone: "",
                vehicleType: "Bike",
            });
        }
    }, [isEdit, editingPartner]);

    const handleChange = (event) => {
        const {
            name,
            value,
        } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(form);

        toast.success(
            isEdit
                ? `${form.name} updated successfully`
                : `${form.name} added as delivery partner`
        );
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(6,45,27,0.38)] px-4 backdrop-blur-[4px] animate-[adminOverlayIn_250ms_ease-out_both]">

            <div className="w-full max-w-[480px] overflow-hidden rounded-[18px] border border-[#e5e1da] bg-white shadow-[0_25px_70px_rgba(23,37,30,0.20)] animate-[adminModalIn_350ms_cubic-bezier(0.22,1,0.36,1)_both]">

                <div className="flex items-center justify-between border-b border-[#eeeae4] px-6 py-5">

                    <div>

                        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">

                            <Truck
                                size={13}
                                strokeWidth={1.8}
                            />

                            {isEdit
                                ? "Partner Management"
                                : "Delivery Operations"}

                        </div>

                        <h2 className="mt-1.5 text-[20px] font-bold text-[var(--color-text-dark)]">
                            {isEdit
                                ? "Edit Delivery Partner"
                                : "Add Delivery Partner"}
                        </h2>

                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-all duration-300 hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)] hover:rotate-90"
                    >
                        <X
                            size={17}
                            strokeWidth={1.8}
                        />
                    </button>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="p-6"
                >

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                        <div className="sm:col-span-2">

                            <label className="text-[13px] font-semibold text-[var(--color-text-dark)]">
                                Full Name
                            </label>

                            <div className="mt-2 flex h-[44px] items-center gap-2.5 rounded-[10px] border border-[#e2e5e7] bg-[#fcfbf9] px-3.5 transition-all focus-within:border-[var(--color-accent)] focus-within:bg-white">

                                <User
                                    size={15}
                                    className="text-[var(--color-text-muted)]"
                                />

                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Rahul Kumar"
                                    required
                                    className="w-full bg-transparent text-[13px] text-[var(--color-text-dark)] outline-none"
                                />

                            </div>

                        </div>

                        <div>

                            <label className="text-[13px] font-semibold text-[var(--color-text-dark)]">
                                Email
                            </label>

                            <div className="mt-2 flex h-[44px] items-center gap-2.5 rounded-[10px] border border-[#e2e5e7] bg-[#fcfbf9] px-3.5 focus-within:border-[var(--color-accent)]">

                                <Mail
                                    size={15}
                                    className="text-[var(--color-text-muted)]"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="rahul@example.com"
                                    required
                                    className="w-full bg-transparent text-[13px] outline-none"
                                />

                            </div>

                        </div>

                        <div>

                            <label className="text-[13px] font-semibold text-[var(--color-text-dark)]">
                                Phone
                            </label>

                            <div className="mt-2 flex h-[44px] items-center gap-2.5 rounded-[10px] border border-[#e2e5e7] bg-[#fcfbf9] px-3.5 focus-within:border-[var(--color-accent)]">

                                <Phone
                                    size={15}
                                    className="text-[var(--color-text-muted)]"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="987654321"
                                    required
                                    className="w-full bg-transparent text-[13px] outline-none"
                                />

                            </div>

                        </div>

                        <div className="sm:col-span-2">

                            <label className="text-[13px] font-semibold text-[var(--color-text-dark)]">
                                Vehicle Type
                            </label>

                            <select
                                name="vehicleType"
                                value={form.vehicleType}
                                onChange={handleChange}
                                className="mt-2 h-[44px] w-full rounded-[10px] border border-[#e2e5e7] bg-[#fcfbf9] px-3.5 text-[13px] text-[var(--color-text-dark)] outline-none transition-all focus:border-[var(--color-accent)] focus:bg-white"
                            >
                                <option>Bike</option>
                                <option>Scooter</option>
                                <option>Car</option>
                                <option>Van</option>
                            </select>

                        </div>

                    </div>

                    <div className="mt-6 flex gap-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="h-[44px] flex-1 rounded-[10px] border border-[#e2e5e7] bg-white text-[13px] font-semibold text-[var(--color-text-secondary)] transition-all duration-300 hover:bg-[var(--color-background)]"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="h-[44px] flex-[1.5] rounded-[10px] bg-[var(--color-primary)] text-[13px] font-semibold text-white shadow-[0_7px_18px_rgba(0,69,33,0.14)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[var(--color-primary-dark)]"
                        >
                            {isEdit
                                ? "Update Partner"
                                : "Create Partner"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default AddDeliveryPartnerModal;