"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";

export default function BookPage() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark overflow-hidden">
            <Header />
            <main className="flex-grow flex items-center justify-center relative pt-20">
                {/* Traditional Japanese Aesthetic Elements */}
                <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] border-[20px] border-primary rounded-full" />
                    <div className="absolute top-0 right-0 w-1/4 h-full border-l border-primary/20" />
                    <div className="absolute top-0 left-0 w-1/4 h-full border-r border-primary/20" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
                    {/* Vertical Japanese Text (Decorative) */}
                    <div className="absolute -left-12 top-0 hidden lg:block text-primary/30 dark:text-primary/20 font-serif text-4xl [writing-mode:vertical-rl] tracking-[1em] select-none">
                        {t("book.japaneseText")}
                    </div>

                    {/* Red Sun / Enso Circle Symbolism */}
                    <div className="mb-12 relative inline-block">
                        <div className="absolute inset-0 bg-primary blur-3xl opacity-20 dark:opacity-40 animate-pulse rounded-full" />
                        <div className="relative size-32 md:size-40 border-8 border-primary rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-6xl md:text-7xl">
                                calendar_month
                            </span>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-text-main dark:text-text-on-dark tracking-tighter mb-6 uppercase">
                        {t("book.comingSoon")}
                    </h1>

                    <p className="text-lg md:text-xl text-text-muted dark:text-gray-400 font-medium leading-relaxed mb-12">
                        {t("book.subtitle")}
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 h-14 px-10 bg-text-main dark:bg-primary text-white dark:text-background-dark font-bold rounded-full hover:scale-105 transition-all shadow-xl active:scale-95 group"
                    >
                        <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">
                            arrow_back
                        </span>
                        {t("book.backToHome")}
                    </Link>
                </div>

                {/* Vertical Japanese Text (Decorative) */}
                <div className="absolute -right-12 bottom-0 hidden lg:block text-primary/30 dark:text-primary/20 font-serif text-4xl [writing-mode:vertical-rl] tracking-[1em] select-none">
                    伝統と現代
                </div>
            </main>
            <Footer />
        </div>
    );
}
