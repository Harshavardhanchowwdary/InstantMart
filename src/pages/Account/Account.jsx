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
        if (
            !profile.name.trim() ||
            !profile.email.trim() ||
            !profile.phone.trim() ||
            !profile.address.trim()
        ) {
            toast.error("Please complete all profile fields");
            return;
        }

        setEditing(false);
        toast.success("Profile updated successfully");
    };

    const handleCancelEdit = () => {
        setEditing(false);
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

        if (passwords.newPassword.length < 8) {
            toast.error("New password must contain at least 8 characters");
            return;
        }

        if (passwords.newPassword !== passwords.confirm) {
            toast.error("Passwords do not match");
            return;
        }

        if (passwords.current === passwords.newPassword) {
            toast.error("Choose a different password");
            return;
        }

        // Connect this action to your password update API.
        setPasswords({
            current: "",
            newPassword: "",
            confirm: "",
        });

        toast.success("Password form validated successfully");
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setEditing(false);
    };

    return (
        <section className="min-h-[calc(100vh-65px)] bg-[var(--color-background)] px-4 py-8 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-6xl">

                {/* Page Header */}
                <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[1.5px] text-[var(--color-accent)]">
                            Account Center
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
                            My Account
                        </h1>

                        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                            Manage your profile and account security.
                        </p>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-light)] bg-white px-3 py-2 text-xs font-medium text-[var(--color-primary)]">
                        <ShieldCheck size={16} />
                        Account Protected
                    </div>
                </div>

                {/* Account Card */}
                <div className="overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-white shadow-sm">
                    <div className="grid lg:grid-cols-[270px_minmax(0,1fr)]">

                        {/* Profile Sidebar */}
                        <aside className="border-b border-[var(--color-border-light)] bg-[var(--color-primary-light)] p-6 sm:p-8 lg:border-b-0 lg:border-r">
                            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

                                {/* Static Avatar */}
                                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[var(--color-primary)] text-2xl font-bold text-white shadow-sm">
                                    {profile.name
                                        .trim()
                                        .split(/\s+/)
                                        .slice(0, 2)
                                        .map((part) => part[0])
                                        .join("")
                                        .toUpperCase()}
                                </div>

                                <h2 className="mt-4 break-words text-xl font-bold text-[var(--color-text-primary)]">
                                    {profile.name}
                                </h2>

                                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                                    InstantMart Customer
                                </p>

                                <div className="my-6 h-px w-full bg-[var(--color-border)]" />

                                {/* Contact Information */}
                                <div className="w-full space-y-4">
                                    <ContactItem
                                        icon={Mail}
                                        value={profile.email}
                                    />

                                    <ContactItem
                                        icon={Phone}
                                        value={profile.phone}
                                    />

                                    <ContactItem
                                        icon={MapPin}
                                        value={profile.address}
                                    />
                                </div>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <main className="min-w-0 p-5 sm:p-7 lg:p-9">

                            {/* Tabs and Action */}
                            <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border-light)]">
                                <div className="flex gap-6">
                                    <TabButton
                                        active={activeTab === "profile"}
                                        onClick={() => handleTabChange("profile")}
                                    >
                                        Profile
                                    </TabButton>

                                    <TabButton
                                        active={activeTab === "security"}
                                        onClick={() => handleTabChange("security")}
                                    >
                                        Security
                                    </TabButton>
                                </div>

                                {activeTab === "profile" && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (editing) {
                                                handleCancelEdit();
                                            } else {
                                                setEditing(true);
                                            }
                                        }}
                                        className="mb-2 inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary-light)]"
                                    >
                                        <Edit3 size={15} />
                                        {editing ? "Cancel" : "Edit Profile"}
                                    </button>
                                )}
                            </div>

                            {/* Profile Tab */}
                            {activeTab === "profile" && (
                                <div>
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                                            Personal Information
                                        </h3>

                                        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
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
                                            type="email"
                                        />

                                        <AccountField
                                            label="Phone Number"
                                            name="phone"
                                            value={profile.phone}
                                            icon={Phone}
                                            editing={editing}
                                            onChange={handleProfileChange}
                                            type="tel"
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
                                        <div className="mt-7 flex justify-end">
                                            <button
                                                type="button"
                                                onClick={handleSaveProfile}
                                                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                                            >
                                                <Save size={16} />
                                                Save Changes
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Security Tab */}
                            {activeTab === "security" && (
                                <form onSubmit={handlePasswordUpdate}>
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                                            Account Security
                                        </h3>

                                        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                                            Keep your account secure with a strong password.
                                        </p>
                                    </div>

                                    <div className="max-w-xl space-y-5">
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
                                            label="Confirm New Password"
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
                                            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                                        >
                                            <ShieldCheck size={16} />
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

/* Contact Information Item */
const ContactItem = ({ icon: Icon, value }) => {
    return (
        <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[var(--color-primary)]">
                <Icon size={16} />
            </div>

            <span className="min-w-0 break-words text-sm text-[var(--color-text-secondary)]">
                {value}
            </span>
        </div>
    );
};

/* Profile and Security Tabs */
const TabButton = ({ active, onClick, children }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`relative border-b-2 px-1 pb-3 text-sm font-semibold transition-colors ${
                active
                    ? "border-[var(--color-accent)] text-[var(--color-primary)]"
                    : "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
            }`}
        >
            {children}
        </button>
    );
};

/* Reusable Form Field */
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
        <label className="block min-w-0">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                {label}
            </span>

            <div
                className={`flex h-11 min-w-0 items-center gap-3 rounded-lg border px-3 transition-colors ${
                    editing
                        ? "border-[var(--color-border)] bg-white focus-within:border-[var(--color-primary)]"
                        : "border-transparent bg-[var(--color-primary-light)]"
                }`}
            >
                <Icon
                    size={17}
                    className="shrink-0 text-[var(--color-primary)]"
                />

                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={!editing}
                    autoComplete="off"
                    className="h-full min-w-0 flex-1 bg-transparent text-sm font-medium text-[var(--color-text-primary)] outline-none disabled:cursor-default"
                />

                {!editing && (
                    <Check
                        size={16}
                        className="shrink-0 text-[var(--color-success)]"
                    />
                )}
            </div>
        </label>
    );
};

export default Account;