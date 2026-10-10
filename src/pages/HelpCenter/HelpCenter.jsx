import React, { useMemo, useState } from "react";
import {
    ArrowRight,
    ChevronDown,
    CircleHelp,
    FileText,
    MessageCircle,
    Search,
    ShieldCheck,
    ShoppingBag,
    Truck,
    UserRound,
} from "lucide-react";

import { dummyProducts } from "../../assets/assets";

const HelpCenter = () => {
    const heroProducts = dummyProducts.slice(0, 3);

    const [openFaq, setOpenFaq] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");

    const helpCategories = [
        {
            icon: ShoppingBag,
            title: "Orders & Shopping",
            description:
                "Track orders, manage purchases and get help with shopping.",
            count: "12 articles",
        },
        {
            icon: Truck,
            title: "Delivery & Tracking",
            description:
                "Find answers about delivery status, timing and tracking.",
            count: "9 articles",
        },
        {
            icon: UserRound,
            title: "Account & Profile",
            description:
                "Manage your account, profile details and preferences.",
            count: "8 articles",
        },
        {
            icon: ShieldCheck,
            title: "Payments & Security",
            description:
                "Learn about payments, refunds and account security.",
            count: "11 articles",
        },
        {
            icon: FileText,
            title: "Policies & Returns",
            description:
                "Understand returns, cancellations and store policies.",
            count: "7 articles",
        },
        {
            icon: MessageCircle,
            title: "Contact Support",
            description:
                "Can't find an answer? Get help from our support team.",
            count: "Live support",
        },
    ];

    const faqItems = [
        {
            question: "How can I track my order?",
            answer:
                "You can track your order from the Orders section of your account. Open the order to view its current status, delivery progress and expected arrival.",
        },
        {
            question: "How do I cancel an order?",
            answer:
                "Open your order from the Orders section and select the cancellation option if the order is still eligible for cancellation.",
        },
        {
            question: "How can I change my delivery address?",
            answer:
                "You can manage saved delivery addresses from your account. For an active order, address changes depend on the current order and delivery status.",
        },
        {
            question: "Where can I find my previous orders?",
            answer:
                "Your completed and previous purchases are available in the My Orders section of your account.",
        },
        {
            question: "How do I request a refund?",
            answer:
                "Open the relevant order and follow the available refund or support options. Our support team can also help with order-related refund requests.",
        },
    ];

    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filteredCategories = useMemo(() => {
        if (!normalizedQuery) return helpCategories;

        return helpCategories.filter((category) =>
            `${category.title} ${category.description}`
                .toLowerCase()
                .includes(normalizedQuery)
        );
    }, [normalizedQuery]);

    const filteredFaqs = useMemo(() => {
        if (!normalizedQuery) return faqItems;

        return faqItems.filter((faq) =>
            `${faq.question} ${faq.answer}`
                .toLowerCase()
                .includes(normalizedQuery)
        );
    }, [normalizedQuery]);

    const handleSearch = (event) => {
        event.preventDefault();

        const firstFaq = filteredFaqs[0];

        if (firstFaq) {
            setOpenFaq(faqItems.findIndex(
                (faq) => faq.question === firstFaq.question
            ));
        }
    };

    return (
        <main className="min-h-screen overflow-hidden bg-[var(--color-background)] text-[var(--color-text-primary)]">

            {/* HERO SECTION */}
            <section className="bg-[var(--color-primary)] px-5 py-12 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
                <div className="mx-auto max-w-[1280px]">

                    <div className="grid items-center gap-10 lg:grid-cols-[1fr_390px] lg:gap-16">

                        {/* Hero Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-medium text-white">
                                <CircleHelp size={15} />
                                Help Center
                            </div>

                            <p className="mt-7 text-xs font-semibold uppercase tracking-[1.8px] text-[var(--color-accent-light)]">
                                We're here to help
                            </p>

                            <h1 className="mt-3 max-w-[600px] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[54px]">
                                How can we
                                <br className="hidden sm:block" /> help you today?
                            </h1>

                            <p className="mt-4 max-w-[570px] text-sm leading-6 text-white/75 sm:text-base">
                                Find answers about orders, delivery, payments
                                and your account — all in one place.
                            </p>

                            {/* Functional Search */}
                            <form
                                onSubmit={handleSearch}
                                className="mt-7 flex min-h-[54px] max-w-[650px] items-center gap-3 rounded-xl bg-white p-2 pl-4 shadow-sm focus-within:ring-2 focus-within:ring-[var(--color-accent)]/40"
                            >
                                <Search
                                    size={19}
                                    className="shrink-0 text-[var(--color-text-secondary)]"
                                />

                                <input
                                    type="search"
                                    value={searchQuery}
                                    onChange={(event) => {
                                        setSearchQuery(event.target.value);
                                        setOpenFaq(0);
                                    }}
                                    placeholder="Search help articles..."
                                    aria-label="Search help articles"
                                    className="min-w-0 flex-1 bg-transparent text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-muted)]"
                                />

                                <button
                                    type="submit"
                                    className="rounded-lg bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-dark)]"
                                >
                                    Search
                                </button>
                            </form>
                        </div>

                        {/* Static Product Illustration */}
                        <div className="relative mx-auto flex aspect-square w-full max-w-[350px] items-center justify-center rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:max-w-[390px]">

                            <div className="flex h-[230px] w-[230px] items-center justify-center rounded-full bg-white/10 sm:h-[260px] sm:w-[260px]">
                                <div className="flex h-[205px] w-[205px] items-center justify-center rounded-full border border-dashed border-white/25 bg-white/5 sm:h-[230px] sm:w-[230px]">
                                    {heroProducts[0]?.image && (
                                        <img
                                            src={heroProducts[0].image}
                                            alt="Featured grocery product"
                                            className="h-[165px] w-[165px] object-contain sm:h-[185px] sm:w-[185px]"
                                        />
                                    )}
                                </div>
                            </div>

                            {heroProducts[1]?.image && (
                                <div className="absolute right-3 top-4 flex h-[82px] w-[82px] items-center justify-center rounded-2xl bg-white p-2 shadow-sm transition-transform duration-200 hover:scale-105 sm:right-5 sm:top-5 sm:h-[95px] sm:w-[95px]">
                                    <img
                                        src={heroProducts[1].image}
                                        alt="Grocery product"
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            )}

                            {heroProducts[2]?.image && (
                                <div className="absolute bottom-4 left-3 flex h-[78px] w-[78px] items-center justify-center rounded-2xl bg-[var(--color-primary-light)] p-2 shadow-sm transition-transform duration-200 hover:scale-105 sm:bottom-5 sm:left-5 sm:h-[90px] sm:w-[90px]">
                                    <img
                                        src={heroProducts[2].image}
                                        alt="Grocery product"
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            )}

                            <div className="absolute bottom-5 right-4 rounded-xl bg-white px-3.5 py-3 shadow-sm sm:bottom-6 sm:right-5">
                                <p className="text-xs font-semibold text-[var(--color-primary)]">
                                    Need help?
                                </p>
                                <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                                    We're here for you.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* HELP CATEGORIES */}
            <section className="relative z-10 mx-auto max-w-[1280px] px-5 py-10 sm:px-8 lg:px-10 lg:py-12">

                <SectionHeading
                    eyebrow="Browse topics"
                    title="How can we help?"
                    description="Choose a category to find the information you need."
                />

                <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredCategories.map((category) => {
                        const Icon = category.icon;

                        return (
                            <button
                                key={category.title}
                                type="button"
                                className="group rounded-xl border border-[var(--color-border-light)] bg-[var(--color-surface)] p-5 text-left transition-colors duration-200 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-light)]"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary)] transition-colors group-hover:bg-white">
                                        <Icon size={21} strokeWidth={1.8} />
                                    </span>

                                    <ArrowRight
                                        size={17}
                                        className="mt-1 text-[var(--color-text-muted)] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[var(--color-accent)]"
                                    />
                                </div>

                                <h3 className="mt-4 text-base font-semibold text-[var(--color-text-primary)]">
                                    {category.title}
                                </h3>

                                <p className="mt-2 text-sm leading-5 text-[var(--color-text-secondary)]">
                                    {category.description}
                                </p>

                                <span className="mt-4 block text-xs font-semibold text-[var(--color-accent)]">
                                    {category.count}
                                </span>
                            </button>
                        );
                    })}

                    {filteredCategories.length === 0 && (
                        <p className="col-span-full rounded-xl border border-[var(--color-border-light)] bg-white p-6 text-sm text-[var(--color-text-secondary)]">
                            No categories found. Try another search term.
                        </p>
                    )}
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="mx-auto max-w-[1280px] px-5 pb-12 pt-4 sm:px-8 lg:px-10 lg:pb-16">
                <div className="grid items-center gap-9 md:grid-cols-2 lg:gap-14">

                    {/* Simple Illustration */}
                    <div className="relative mx-auto flex aspect-square w-full max-w-[400px] items-center justify-center overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-primary-light)]">

                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(0,69,33,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />

                        <div className="relative flex h-[230px] w-[230px] items-center justify-center rounded-full bg-white shadow-sm sm:h-[265px] sm:w-[265px]">
                            <div className="absolute inset-5 rounded-full border border-dashed border-[var(--color-accent)]/50" />

                            {heroProducts[0]?.image && (
                                <img
                                    src={heroProducts[0].image}
                                    alt="Featured grocery product"
                                    className="relative z-10 h-[165px] w-[165px] object-contain sm:h-[190px] sm:w-[190px]"
                                />
                            )}
                        </div>

                        <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white shadow-sm">
                            <CircleHelp size={27} />
                        </div>

                        {heroProducts[1]?.image && (
                            <div className="absolute right-5 top-5 flex h-[76px] w-[76px] items-center justify-center rounded-xl bg-white p-2 shadow-sm">
                                <img
                                    src={heroProducts[1].image}
                                    alt="Grocery product"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        )}

                        {heroProducts[2]?.image && (
                            <div className="absolute bottom-5 right-5 flex h-[76px] w-[76px] items-center justify-center rounded-xl bg-white p-2 shadow-sm">
                                <img
                                    src={heroProducts[2].image}
                                    alt="Grocery product"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        )}

                        <div className="absolute bottom-5 left-5 rounded-xl bg-white px-4 py-3 shadow-sm">
                            <p className="text-sm font-semibold text-[var(--color-primary)]">
                                Need help?
                            </p>
                            <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                                We're here for you.
                            </p>
                        </div>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="min-w-0">
                        <SectionHeading
                            eyebrow="FAQs"
                            title="Looking for answers?"
                            description="Find quick answers to common questions about orders, delivery, payments and your InstantMart account."
                            align="left"
                        />

                        <div className="mt-5">
                            {filteredFaqs.map((faq) => {
                                const originalIndex = faqItems.findIndex(
                                    (item) => item.question === faq.question
                                );
                                const isOpen = openFaq === originalIndex;

                                return (
                                    <div
                                        key={faq.question}
                                        className="border-b border-[var(--color-border-light)]"
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenFaq(
                                                    isOpen ? -1 : originalIndex
                                                )
                                            }
                                            aria-expanded={isOpen}
                                            className="flex min-h-[62px] w-full items-center justify-between gap-4 py-4 text-left"
                                        >
                                            <span className={`text-sm font-medium transition-colors ${
                                                isOpen
                                                    ? "text-[var(--color-primary)]"
                                                    : "text-[var(--color-text-primary)] hover:text-[var(--color-primary)]"
                                            }`}>
                                                {faq.question}
                                            </span>

                                            <ChevronDown
                                                size={18}
                                                className={`shrink-0 text-[var(--color-primary)] transition-transform duration-200 ${
                                                    isOpen ? "rotate-180" : ""
                                                }`}
                                            />
                                        </button>

                                        {isOpen && (
                                            <p className="max-w-[650px] pb-4 pr-5 text-sm leading-6 text-[var(--color-text-secondary)]">
                                                {faq.answer}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}

                            {filteredFaqs.length === 0 && (
                                <p className="py-5 text-sm text-[var(--color-text-secondary)]">
                                    No matching FAQs found. Try a different search.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* SUPPORT CTA */}
            <section className="mx-auto max-w-[1280px] px-5 pb-12 sm:px-8 lg:px-10 lg:pb-16">
                <div className="flex flex-col justify-between gap-6 rounded-2xl bg-[var(--color-primary)] px-6 py-8 sm:flex-row sm:items-center sm:px-9">

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[var(--color-accent-light)]">
                            Still need help?
                        </p>

                        <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                            Talk to our support team.
                        </h2>

                        <p className="mt-2 max-w-lg text-sm leading-6 text-white/75">
                            Tell us what you're facing and we'll help you find
                            the right solution.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-white px-5 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary-light)] sm:self-auto"
                    >
                        Contact Support
                        <ArrowRight size={16} />
                    </button>
                </div>
            </section>
        </main>
    );
};

const SectionHeading = ({
    eyebrow,
    title,
    description,
    align = "center",
}) => {
    return (
        <div className={align === "center" ? "text-center" : "text-left"}>
            <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[var(--color-accent)]">
                {eyebrow}
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
                {title}
            </h2>

            <p className={`mt-3 max-w-xl text-sm leading-6 text-[var(--color-text-secondary)] ${
                align === "center" ? "mx-auto" : ""
            }`}>
                {description}
            </p>
        </div>
    );
};

export default HelpCenter;