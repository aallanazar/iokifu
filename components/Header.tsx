"use client";

import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-wood-light dark:border-white/10 transition-colors duration-300">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2 text-text-main dark:text-white group cursor-pointer">
                        <div className="size-8 text-primary">
                            <span className="material-symbols-outlined !text-[32px]">
                                ramen_dining
                            </span>
                        </div>
                        <h1 className="text-xl font-extrabold tracking-tight">IOKI FU</h1>
                    </div>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                className="text-sm font-bold text-text-main dark:text-white hover:text-primary transition-colors"
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        ))}
                        <span className="h-4 w-px bg-wood-light dark:bg-white/20"></span>
                        <a
                            className="text-sm font-bold text-text-main dark:text-white hover:text-primary transition-colors"
                            href="#"
                        >
                            EN
                        </a>
                    </nav>
                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <button className="hidden md:flex items-center justify-center h-10 px-5 bg-primary hover:bg-primary-dark text-background-dark font-bold text-sm rounded-lg transition-colors shadow-sm shadow-primary/20 cursor-pointer">
                            Book a Table
                        </button>
                        {/* Theme Toggle / Mobile Menu */}
                        <button
                            aria-label="Toggle theme"
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-wood-light/50 dark:bg-white/10 hover:bg-wood-light dark:hover:bg-white/20 text-text-main dark:text-white transition-colors cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-[20px]">
                                light_mode
                            </span>
                        </button>
                        <button
                            aria-label="Open menu"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-text-main dark:text-white hover:bg-wood-light dark:hover:bg-white/10 transition-colors cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-[24px]">
                                menu
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-background-light dark:bg-background-dark border-b border-wood-light dark:border-white/10 p-4 flex flex-col gap-4 shadow-lg">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            className="text-sm font-bold text-text-main dark:text-white hover:text-primary transition-colors"
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                    <button className="flex items-center justify-center h-10 px-5 bg-primary hover:bg-primary-dark text-background-dark font-bold text-sm rounded-lg transition-colors shadow-sm shadow-primary/20 w-full cursor-pointer">
                        Book a Table
                    </button>
                </div>
            )}
        </header>
    );
}
