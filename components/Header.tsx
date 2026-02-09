"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();
    const { locale, setLocale, t } = useLanguage();

    useEffect(() => {
        setMounted(true);
    }, []);

    const translatedNavLinks = [
        { label: t("nav.menu"), href: "/menu" },
        { label: t("nav.location"), href: "/location" },
        { label: t("nav.about"), href: "/about" },
    ];

    const toggleLanguage = () => {
        setLocale(locale === "en" ? "de" : "en");
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-wood-light/30 dark:border-white/5 transition-all duration-300">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-text-main dark:text-text-on-dark group cursor-pointer"
                    >
                        <div className="size-8 text-primary group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined !text-[32px]">
                                ramen_dining
                            </span>
                        </div>
                        <h1 className="text-xl font-extrabold tracking-tight">IOKI FU</h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {translatedNavLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`text-sm font-bold transition-colors ${pathname === link.href
                                    ? "text-primary"
                                    : "text-text-main dark:text-text-on-dark hover:text-primary"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleLanguage}
                            className={`hidden sm:flex items-center justify-center size-10 rounded-lg bg-surface-light dark:bg-surface-dark border border-wood-light/20 dark:border-white/5 text-sm font-bold text-text-main dark:text-text-on-dark hover:text-primary transition-colors cursor-pointer uppercase ${mounted ? "opacity-100" : "opacity-0"}`}
                        >
                            {mounted ? locale : "en"}
                        </button>

                        <Link
                            href="/book"
                            className="hidden md:flex items-center justify-center h-10 min-w-[120px] px-5 bg-primary hover:bg-primary-dark text-background-dark font-bold text-sm rounded-lg transition-all shadow-primary hover:shadow-lg active:scale-95 cursor-pointer"
                        >
                            {t("nav.bookTable")}
                        </Link>

                        {/* Theme Toggle */}
                        <button
                            aria-label="Toggle theme"
                            onClick={toggleTheme}
                            className="p-2 size-10 flex items-center justify-center rounded-lg bg-surface-light dark:bg-surface-dark hover:bg-wood-light/50 dark:hover:bg-white/10 text-text-main dark:text-text-on-dark transition-all cursor-pointer border border-wood-light/20 dark:border-white/5"
                        >
                            <span className="material-symbols-outlined text-[20px]">
                                {!mounted ? "dark_mode" : theme === "dark" ? "light_mode" : "dark_mode"}
                            </span>
                        </button>

                        {/* Mobile Menu Trigger */}
                        <button
                            aria-label="Open menu"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-text-main dark:text-text-on-dark hover:bg-surface-light dark:hover:bg-surface-dark transition-colors cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-[24px]">
                                {isMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-background-light dark:bg-background-dark border-b border-wood-light/30 dark:border-white/5 p-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top duration-300">
                    <div className="flex md:hidden justify-center items-center px-2">
                        <button
                            onClick={toggleLanguage}
                            className={`flex items-center justify-center px-4 py-2 rounded-lg bg-surface-light dark:bg-surface-dark border border-wood-light/20 dark:border-white/5 text-sm font-bold text-text-main dark:text-text-on-dark hover:text-primary transition-colors cursor-pointer uppercase ${mounted ? "opacity-100" : "opacity-0"}`}
                        >
                            {mounted ? (locale === 'en' ? 'English' : 'Deutsch') : 'English'}
                        </button>
                    </div>
                    {translatedNavLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-lg font-bold transition-colors ${pathname === link.href
                                ? "text-primary"
                                : "text-text-main dark:text-text-on-dark"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/book"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-center h-12 px-5 bg-primary hover:bg-primary-dark text-background-dark font-bold text-base rounded-xl transition-all shadow-primary active:scale-95 w-full cursor-pointer"
                    >
                        {t("nav.bookTable")}
                    </Link>
                </div>
            )}
        </header>
    );
}
