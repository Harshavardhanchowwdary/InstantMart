import React, { useState } from "react";
import {
    Check,
    Edit3,
    LockKeyhole,
    Mail,
    MapPin,
    Phone,
    Save,
    ShieldCheck,
    User,
} from "lucide-react";
import toast from "react-hot-toast";

const Account = () => {
    const [activeTab, setActiveTab] = useState("profile");
    const [editing, setEditing] = useState(false);

    const [profile, setProfile] = useState({
        name: "Harsha Vardhan",
        email: "harsha@gmail.com",
        phone: "+91 98765 43210",
        address: "Hyderabad, Telangana",
    });

    const [passwords, setPasswords] = useState({
        current: "",
        newPassword: "",
        confirm: "",
    });

    const handleProfileChange = (event) => {
        const { name, value } = event.target;

        setProfile((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handlePasswordChange = (event) => {
        const { name, value } = event.target;

        setPasswords((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSaveProfile = () => {
        setEditing(false);
        toast.success("Profile updated successfully");
    };

    const handlePasswordUpdate = (event) => {
        event.preventDefault();

        if (
            !passwords.current ||
            !passwords.newPassword ||
            !passwords.confirm
        ) {
            toast.error("Please complete all password fields");
            return;
        }

        if (passwords.newPassword !== passwords.confirm) {
            toast.error("Passwords do not match");
            return;
        }

        setPasswords({
            current: "",
            newPassword: "",
            confirm: "",
        });

        toast.success("Password updated successfully");
    };

    return (
        <section className="relative min-h-[calc(100vh-65px)] overflow-hidden bg-[var(--color-background)] px-4 py-7 sm:px-6 md:px-10 lg:px-14">

            <div className="pointer-events-none absolute -left-[100px] top-[100px] h-[240px] w-[240px] rounded-full bg-[var(--color-primary-light)] opacity-60 blur-3xl animate-[accountOrbFloat_9s_ease-in-out_infinite]" />

            <div className="pointer-events-none absolute -bottom-[100px] right-[-70px] h-[220px] w-[220px] rounded-full bg-[var(--color-accent-light)] opacity-50 blur-3xl animate-[accountOrbFloat_10s_ease-in-out_-3s_infinite]" />

            <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle,rgba(0,69,33,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />


            <div className="relative z-10 mx-auto w-full max-w-[1050px]">

                <div className="mb-6 animate-[accountHeaderIn_550ms_cubic-bezier(0.22,1,0.36,1)_both]">

                    <div className="flex items-center gap-2">

                        <span className="h-[7px] w-[7px] rounded-full bg-[var(--color-accent)] animate-pulse" />

                        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                            Account Center
                        </span>

                    </div>

                    <div className="mt-1 flex flex-wrap items-end justify-between gap-3">

                        <div>
                            <h1 className="text-[25px] font-bold tracking-[-0.6px] text-[var(--color-text-dark)] sm:text-[29px]">
                                My Account
                            </h1>

                            <p className="mt-1 text-[11px] text-[var(--color-text-secondary)]">
                                Manage your profile and account security.
                            </p>
                        </div>

                        <div className="hidden items-center gap-2 rounded-full border border-[var(--color-primary-light)] bg-white px-3 py-1.5 text-[9px] font-semibold text-[var(--color-primary)] sm:flex">
                            <ShieldCheck size={12} />
                            Account Protected
                        </div>

                    </div>

                </div>


                <div className="relative overflow-hidden rounded-[20px] border border-[var(--color-border-light)] bg-white shadow-[0_10px_40px_rgba(24,51,40,0.055)] animate-[accountCardIn_650ms_cubic-bezier(0.22,1,0.36,1)_100ms_both]">

                    <div className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-[var(--color-accent)] opacity-80" />

                    <div className="grid lg:grid-cols-[280px_minmax(0,1fr)]">

                        <aside className="relative overflow-hidden border-b border-[var(--color-border-light)] bg-[var(--color-primary-light)] p-6 lg:border-b-0 lg:border-r">

                            <div className="pointer-events-none absolute -right-[45px] top-[90px] h-[130px] w-[130px] rounded-full border border-dashed border-[var(--color-primary)] opacity-10 animate-[accountRingSpin_14s_linear_infinite]" />

                            <div className="pointer-events-none absolute -left-[55px] bottom-[35px] h-[110px] w-[110px] rounded-full border border-dashed border-[var(--color-accent)] opacity-10 animate-[accountRingSpin_11s_linear_reverse_infinite]" />


                            <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">

                                <div className="relative">

                                    <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full border-[3px] border-white bg-[var(--color-primary)] text-[27px] font-bold text-white shadow-[0_10px_25px_rgba(0,69,33,0.16)] animate-[accountAvatarFloat_5s_ease-in-out_infinite]">
                                        HV
                                    </div>

                                    <span className="absolute bottom-[3px] right-[3px] flex h-[20px] w-[20px] items-center justify-center rounded-full border-[3px] border-white bg-[var(--color-success)]">
                                        <Check size={10} strokeWidth={3} className="text-white" />
                                    </span>

                                    <span className="absolute -inset-[7px] rounded-full border border-dashed border-[var(--color-accent)] opacity-60 animate-[accountAvatarRing_7s_linear_infinite]" />

                                </div>


                                <h2 className="mt-5 text-[18px] font-bold text-[var(--color-text-dark)]">
                                    {profile.name}
                                </h2>

                                <p className="mt-1 text-[10px] text-[var(--color-text-secondary)]">
                                    InstantMart Customer
                                </p>


                                <div className="my-6 h-px w-full bg-[var(--color-border)]" />


                                <div className="w-full space-y-3">

                                    <div className="flex items-center gap-2.5 text-left">
                                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-white text-[var(--color-primary)]">
                                            <Mail size={13} />
                                        </div>

                                        <span className="truncate text-[10px] text-[var(--color-text-secondary)]">
                                            {profile.email}
                                        </span>
                                    </div>


                                    <div className="flex items-center gap-2.5 text-left">
                                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-white text-[var(--color-primary)]">
                                            <Phone size={13} />
                                        </div>

                                        <span className="text-[10px] text-[var(--color-text-secondary)]">
                                            {profile.phone}
                                        </span>
                                    </div>


                                    <div className="flex items-center gap-2.5 text-left">
                                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-white text-[var(--color-primary)]">
                                            <MapPin size={13} />
                                        </div>

                                        <span className="text-[10px] text-[var(--color-text-secondary)]">
                                            {profile.address}
                                        </span>
                                    </div>

                                </div>


                                <div className="mt-7 hidden w-full lg:block">

                                    <div className="relative h-[45px] overflow-hidden rounded-[10px] border border-[var(--color-primary-light)] bg-white">

                                        <div className="absolute left-3 right-3 top-1/2 border-t border-dashed border-[var(--color-accent)] opacity-40" />

                                        <span className="absolute left-[15%] top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-[var(--color-accent)] animate-[accountDotMove_3s_linear_infinite]" />

                                        <span className="absolute left-[50%] top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-[var(--color-primary)] animate-[accountDotMove_3s_linear_1s_infinite]" />

                                        <span className="absolute left-[82%] top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-[var(--color-accent)] animate-[accountDotMove_3s_linear_2s_infinite]" />

                                    </div>

                                </div>

                            </div>

                        </aside>


                        <main className="min-w-0 p-5 sm:p-7 lg:p-9">

                            <div className="mb-7 flex items-center justify-between gap-4 border-b border-[var(--color-border-light)]">

                                <div className="flex items-center gap-1">

                                    <button
                                        type="button"
                                        onClick={() => setActiveTab("profile")}
                                        className={`relative px-3 pb-3 text-[11px] font-semibold transition-all duration-300 ${
                                            activeTab === "profile"
                                                ? "text-[var(--color-primary)]"
                                                : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
                                        }`}
                                    >
                                        Profile

                                        <span className={`absolute bottom-[-1px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[var(--color-accent)] transition-all duration-300 ${
                                            activeTab === "profile"
                                                ? "w-[28px]"
                                                : "w-0"
                                        }`} />
                                    </button>


                                    <button
                                        type="button"
                                        onClick={() => setActiveTab("security")}
                                        className={`relative px-3 pb-3 text-[11px] font-semibold transition-all duration-300 ${
                                            activeTab === "security"
                                                ? "text-[var(--color-primary)]"
                                                : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
                                        }`}
                                    >
                                        Security

                                        <span className={`absolute bottom-[-1px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[var(--color-accent)] transition-all duration-300 ${
                                            activeTab === "security"
                                                ? "w-[28px]"
                                                : "w-0"
                                        }`} />
                                    </button>

                                </div>


                                {activeTab === "profile" && (
                                    <button
                                        type="button"
                                        onClick={() => setEditing((previous) => !previous)}
                                        className="mb-2 flex h-8 items-center gap-1.5 rounded-[8px] border border-[var(--color-border)] px-3 text-[10px] font-semibold text-[var(--color-primary)] transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-light)]"
                                    >
                                        <Edit3 size={12} />
                                        {editing ? "Cancel" : "Edit Profile"}
                                    </button>
                                )}

                            </div>


                            {activeTab === "profile" ? (

                                <div className="animate-[accountContentIn_350ms_ease-out_both]">

                                    <div className="mb-6">

                                        <h3 className="text-[16px] font-bold text-[var(--color-text-dark)]">
                                            Personal Information
                                        </h3>

                                        <p className="mt-1 text-[10px] text-[var(--color-text-secondary)]">
                                            Keep your account information up to date.
                                        </p>

                                    </div>


                                    <div className="grid gap-5 sm:grid-cols-2">

                                        <AccountField
                                            label="Full Name"
                                            name="name"
                                            value={profile.name}
                                            icon={User}
                                            editing={editing}
                                            onChange={handleProfileChange}
                                        />

                                        <AccountField
                                            label="Email Address"
                                            name="email"
                                            value={profile.email}
                                            icon={Mail}
                                            editing={editing}
                                            onChange={handleProfileChange}
                                        />

                                        <AccountField
                                            label="Phone Number"
                                            name="phone"
                                            value={profile.phone}
                                            icon={Phone}
                                            editing={editing}
                                            onChange={handleProfileChange}
                                        />

                                        <AccountField
                                            label="Location"
                                            name="address"
                                            value={profile.address}
                                            icon={MapPin}
                                            editing={editing}
                                            onChange={handleProfileChange}
                                        />

                                    </div>


                                    {editing && (
                                        <div className="mt-7 flex justify-end animate-[accountContentIn_300ms_ease-out_both]">

                                            <button
                                                type="button"
                                                onClick={handleSaveProfile}
                                                className="group flex h-[40px] items-center gap-2 rounded-[9px] bg-[var(--color-primary)] px-5 text-[11px] font-semibold text-white shadow-[0_6px_15px_rgba(0,69,33,0.14)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[var(--color-primary-dark)]"
                                            >
                                                <Save
                                                    size={13}
                                                    className="transition-transform duration-300 group-hover:scale-110"
                                                />
                                                Save Changes
                                            </button>

                                        </div>
                                    )}

                                </div>

                            ) : (

                                <form
                                    onSubmit={handlePasswordUpdate}
                                    className="animate-[accountContentIn_350ms_ease-out_both]"
                                >

                                    <div className="mb-6">

                                        <h3 className="text-[16px] font-bold text-[var(--color-text-dark)]">
                                            Account Security
                                        </h3>

                                        <p className="mt-1 text-[10px] text-[var(--color-text-secondary)]">
                                            Update your password to keep your account secure.
                                        </p>

                                    </div>


                                    <div className="max-w-[560px] space-y-5">

                                        <AccountField
                                            label="Current Password"
                                            name="current"
                                            value={passwords.current}
                                            icon={LockKeyhole}
                                            type="password"
                                            editing
                                            onChange={handlePasswordChange}
                                        />

                                        <AccountField
                                            label="New Password"
                                            name="newPassword"
                                            value={passwords.newPassword}
                                            icon={LockKeyhole}
                                            type="password"
                                            editing
                                            onChange={handlePasswordChange}
                                        />

                                        <AccountField
                                            label="Confirm Password"
                                            name="confirm"
                                            value={passwords.confirm}
                                            icon={LockKeyhole}
                                            type="password"
                                            editing
                                            onChange={handlePasswordChange}
                                        />

                                    </div>


                                    <div className="mt-7">

                                        <button
                                            type="submit"
                                            className="group flex h-[40px] items-center gap-2 rounded-[9px] bg-[var(--color-primary)] px-5 text-[11px] font-semibold text-white shadow-[0_6px_15px_rgba(0,69,33,0.14)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[var(--color-primary-dark)]"
                                        >
                                            <ShieldCheck
                                                size={14}
                                                className="transition-transform duration-300 group-hover:scale-110"
                                            />
                                            Update Password
                                        </button>

                                    </div>

                                </form>

                            )}

                        </main>

                    </div>

                </div>

            </div>

        </section>
    );
};


const AccountField = ({
    label,
    name,
    value,
    icon: Icon,
    editing,
    onChange,
    type = "text",
}) => {
    return (
        <label className="group block">

            <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
                {label}
            </span>

            <div className={`relative flex h-[44px] items-center overflow-hidden rounded-[9px] border bg-[var(--color-background)] transition-all duration-300 ${
                editing
                    ? "border-[var(--color-border)] focus-within:border-[var(--color-primary)] focus-within:bg-white focus-within:shadow-[0_0_0_3px_var(--color-primary-light)]"
                    : "border-transparent bg-[var(--color-primary-light)]"
            }`}>

                <div className="ml-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-white text-[var(--color-primary)] transition-all duration-300 group-hover:text-[var(--color-accent)]">
                    <Icon size={13} />
                </div>

                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={!editing}
                    className="h-full min-w-0 flex-1 bg-transparent px-3 text-[11px] font-medium text-[var(--color-text-dark)] outline-none disabled:cursor-default"
                />

                {!editing && (
                    <Check
                        size={13}
                        className="mr-3 text-[var(--color-success)]"
                        strokeWidth={2.5}
                    />
                )}

                {editing && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--color-accent)] transition-all duration-300 group-focus-within:w-full" />
                )}

            </div>

        </label>
    );
};

export default Account;