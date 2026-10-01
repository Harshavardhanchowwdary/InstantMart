import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { footerData } from "../../assets/assets";


const Footer = () => {
    return (
        <footer
            className="
                mt-12
                w-full
                overflow-hidden
                rounded-t-[20px]
                bg-[var(--color-primary)]
                text-white
            "
        >

            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1488px]
                    px-5
                    py-10

                    sm:px-8
                    sm:py-12

                    md:px-10

                    lg:px-14
                    lg:py-14

                    xl:px-[8vw]
                "
            >

                <div
                    className="
                        grid
                        gap-10

                        md:grid-cols-2

                        lg:grid-cols-[1.5fr_1fr_1fr_1fr]
                        lg:gap-8
                    "
                >

                    {/* =================================================
                        BRAND
                    ================================================== */}

                    <div className="max-w-[310px]">

                        <Link
                            to="/"
                            className="
                                inline-flex
                                items-center
                                text-[25px]
                                font-bold
                                tracking-[-0.7px]
                                text-white
                                transition-colors
                                duration-200
                                hover:text-[var(--color-accent)]
                            "
                        >
                            {footerData.brand.name}
                        </Link>


                        <p
                            className="
                                mt-4
                                text-[12px]
                                leading-[1.8]
                                text-white/60
                            "
                        >
                            {footerData.brand.description}
                        </p>


                        {/* Socials */}

                        <div
                            className="
                                mt-5
                                flex
                                items-center
                                gap-2
                            "
                        >
                            {footerData.brand.socials.map(
                                (social, index) => {
                                    const Icon = social.icon;

                                    return (
                                        <a
                                            key={index}
                                            href={social.link}
                                            className="
                                                group
                                                flex
                                                h-9
                                                w-9
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-white/10
                                                bg-white/[0.05]
                                                text-white/65

                                                transition-all
                                                duration-300
                                                ease-out

                                                hover:-translate-y-1
                                                hover:border-[var(--color-accent)]
                                                hover:bg-[var(--color-accent)]
                                                hover:text-white
                                                hover:shadow-[0_6px_14px_rgba(255,107,0,0.18)]
                                            "
                                        >
                                            <Icon
                                                size={15}
                                                strokeWidth={1.7}
                                                className="
                                                    transition-transform
                                                    duration-300
                                                    group-hover:scale-110
                                                "
                                            />
                                        </a>
                                    );
                                }
                            )}
                        </div>

                    </div>


                    {/* =================================================
                        FOOTER LINK SECTIONS
                    ================================================== */}

                    {footerData.sections.map(
                        (section, sectionIndex) => (
                            <div key={sectionIndex}>

                                <h3
                                    className="
                                        text-[12px]
                                        font-semibold
                                        uppercase
                                        tracking-[1.2px]
                                        text-white
                                    "
                                >
                                    {section.title}
                                </h3>


                                <ul
                                    className="
                                        mt-4
                                        space-y-3
                                    "
                                >
                                    {section.links.map(
                                        (link, index) => (
                                            <li key={index}>

                                                {link.to &&
                                                link.to !== "#" ? (
                                                    <Link
                                                        to={link.to}
                                                        className="
                                                            group
                                                            inline-flex
                                                            items-center
                                                            gap-1
                                                            text-[12px]
                                                            text-white/55

                                                            transition-all
                                                            duration-200

                                                            hover:translate-x-1
                                                            hover:text-[var(--color-accent)]
                                                        "
                                                    >
                                                        {link.label}

                                                        <ArrowUpRight
                                                            size={12}
                                                            className="
                                                                opacity-0
                                                                transition-all
                                                                duration-200
                                                                group-hover:translate-x-0.5
                                                                group-hover:opacity-100
                                                            "
                                                        />
                                                    </Link>
                                                ) : (
                                                    <a
                                                        href="#"
                                                        className="
                                                            group
                                                            inline-flex
                                                            items-center
                                                            gap-1
                                                            text-[12px]
                                                            text-white/55

                                                            transition-all
                                                            duration-200

                                                            hover:translate-x-1
                                                            hover:text-[var(--color-accent)]
                                                        "
                                                    >
                                                        {link.label}

                                                        <ArrowUpRight
                                                            size={12}
                                                            className="
                                                                opacity-0
                                                                transition-all
                                                                duration-200
                                                                group-hover:translate-x-0.5
                                                                group-hover:opacity-100
                                                            "
                                                        />
                                                    </a>
                                                )}

                                            </li>
                                        )
                                    )}
                                </ul>

                            </div>
                        )
                    )}


                    {/* =================================================
                        CONTACT
                    ================================================== */}

                    <div>

                        <h3
                            className="
                                text-[12px]
                                font-semibold
                                uppercase
                                tracking-[1.2px]
                                text-white
                            "
                        >
                            Get In Touch
                        </h3>


                        <div
                            className="
                                mt-4
                                space-y-4
                            "
                        >

                            {footerData.contact.map(
                                (item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={index}
                                            className="
                                                group
                                                flex
                                                items-start
                                                gap-3
                                            "
                                        >

                                            <span
                                                className="
                                                    flex
                                                    h-8
                                                    w-8
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-[7px]
                                                    bg-[var(--color-primary-light)]
                                                    text-[var(--color-accent)]

                                                    transition-all
                                                    duration-300

                                                    group-hover:bg-[var(--color-accent)]
                                                    group-hover:text-white
                                                "
                                            >
                                                <Icon
                                                    size={14}
                                                    strokeWidth={1.7}
                                                />
                                            </span>


                                            <span
                                                className="
                                                    pt-1
                                                    text-[12px]
                                                    leading-[1.5]
                                                    text-white/55

                                                    transition-colors
                                                    duration-200

                                                    group-hover:text-white/80
                                                "
                                            >
                                                {item.text}
                                            </span>

                                        </div>
                                    );
                                }
                            )}

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    BOTTOM BAR
                ====================================================== */}

                <div
                    className="
                        mt-10
                        flex
                        flex-col
                        gap-4
                        border-t
                        border-white/10
                        pt-5

                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >

                    <p
                        className="
                            text-[11px]
                            text-white/40
                        "
                    >
                        {footerData.bottom.copyright}
                    </p>


                    <div
                        className="
                            flex
                            items-center
                            gap-5
                        "
                    >

                        {footerData.bottom.links.map(
                            (link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="
                                        text-[11px]
                                        text-white/40

                                        transition-colors
                                        duration-200

                                        hover:text-[var(--color-accent)]
                                    "
                                >
                                    {link.label}
                                </a>
                            )
                        )}

                    </div>

                </div>

            </div>

        </footer>
    );
};


export default Footer;