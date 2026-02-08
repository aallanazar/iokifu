"use client";

import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-wood-dark text-white py-16 border-t border-white/5">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="size-8 text-primary">
                                <span className="material-symbols-outlined !text-[32px]">
                                    ramen_dining
                                </span>
                            </div>
                            <h2 className="text-2xl font-extrabold tracking-tight">IOKI FU</h2>
                        </div>
                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            {t("footer.aboutDesc")}
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.platform}
                                    href={link.href}
                                    className="p-2.5 rounded-full bg-white/5 hover:bg-primary hover:text-background-dark transition-all duration-300"
                                    aria-label={link.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={link.iconUrl}
                                        alt={link.platform}
                                        width={18}
                                        height={18}
                                        className="filter invert brightness-0 hover:invert-0"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
                            {t("footer.quickLinks")}
                        </h3>
                        <ul className="space-y-4">
                            <li><Link href="/menu" className="text-gray-400 hover:text-primary transition-colors">{t("nav.menu")}</Link></li>
                            <li><Link href="/location" className="text-gray-400 hover:text-primary transition-colors">{t("nav.location")}</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors">{t("nav.about")}</Link></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
                            {t("footer.legal")}
                        </h3>
                        <ul className="space-y-4">
                            <li><Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">{t("footer.privacy")}</Link></li>
                            <li><Link href="/imprint" className="text-gray-400 hover:text-primary transition-colors">{t("footer.imprint")}</Link></li>
                            <li><Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">{t("footer.terms")}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} IOKI FU Restaurant. {t("footer.rights")}</p>
                    <div className="flex items-center gap-1.5 translate-y-[1px]">
                        <span>{t("footer.developedBy")}</span>
                        <Link
                            href="https://github.com/allanazar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-dark transition-colors font-bold tracking-tight bg-primary/5 px-2 py-0.5 rounded-md border border-primary/10"
                        >
                            Allanazar Aminov
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
