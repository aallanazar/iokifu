"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

interface HeroProps {
    contentKey: "home" | "menu" | "about" | "legal";
    size?: "large" | "medium";
}

export default function Hero({ contentKey, size = "large" }: HeroProps) {
    const { t } = useLanguage();
    const heightClass = size === "large" ? "h-[600px] md:h-[700px]" : "h-[400px] md:h-[500px]";

    const getTranslationPrefix = () => {
        if (contentKey === "home") return "hero";
        return contentKey; // about, menu, legal
    };

    const prefix = getTranslationPrefix();

    // Mapping for background images since they are not translated labels
    const backgrounds = {
        home: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7jw1WiHkyDhAqxLxDT6ENFbyzxcLGfOhdD0Qh4qhS4pmbct3mQdF5jM_yfpCCdWsyPoctMetdfMwesmhCkpGQEz_y1gxDzdQ7a8B57ZuDqbMFTuz7CDt1_YDdlxwOkZacwGa_PtINDPdfTBixDwP5rztPN1kV5KstjbdR0RHEw2oe-H2KEHD8U4hAs9CIvn8CEoOioLVqU5ig2UM3P2KaId8Xs_2q6BJO61NqM7ZnUetWu-80SxLQXRq14wuN3LwHiCa5H3zxaWYP",
        menu: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEoCptMC7S8nBCrGO_Z9i8nt3KeMqX4rFbxJZUb-VEOYNrBij3tQvvmKPR30aIoA4kMtmA8zI3pIgWpEZRYdIfNSG7-cH-JpzmJVDM56Q5itXFQbiMArNSj5WoqUvzIT_EtAIXO0aoUirw1V6Xr3idRt1PJPTY_NbqwpLeZdL9q8SaX4G9fdFZcadUrBQMtSlTK8wRXzEEe9On627CjOIwyuz4FSI0RjrgawEsRbn6icVt1KMsxbr8-8PeepmzDlZwxshVrTA7om-",
        about: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv-L5F8ST6uiO_VSrCyhvTDsRPUD0Zn3TkFSvkskY73XewDhdRHMqao4kEEIpKxpRZWHyvCiSLZBR5MFReGREAL4EPkC5iOdge6YyDQmnRyrdL8uJJzTT1y6Be7mOo7jAVQq5hkZWSz_UeUrkARdmT53QLHZmXKnkd1ffWqsbYWe13i76JD3770rkw2LuZ2Siy7nRQRV7cr68FwsSMbusHIekgpQcvGXSjZ3ScImFRmYnM2Rk7t-KyUrRzdjH6-fvWFpltqHNh-9A3",
        legal: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEoCptMC7S8nBCrGO_Z9i8nt3KeMqX4rFbxJZUb-VEOYNrBij3tQvvmKPR30aIoA4kMtmA8zI3pIgWpEZRYdIfNSG7-cH-JpzmJVDM56Q5itXFQbiMArNSj5WoqUvzIT_EtAIXO0aoUirw1V6Xr3idRt1PJPTY_NbqwpLeZdL9q8SaX4G9fdFZcadUrBQMtSlTK8wRXzEEe9On627CjOIwyuz4FSI0RjrgawEsRbn6icVt1KMsxbr8-8PeepmzDlZwxshVrTA7om-",
    };

    return (
        <section
            className={`relative w-full ${heightClass} overflow-hidden flex items-center justify-center`}
            aria-labelledby="hero-title"
        >
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
                style={{
                    backgroundImage: `linear-gradient(rgba(8, 17, 9, 0.45), rgba(8, 17, 9, 0.7)), url('${backgrounds[contentKey]}')`,
                }}
                role="img"
                aria-label="Authentic Japanese cuisine background"
            ></div>

            <div className="relative z-10 max-w-[960px] mx-auto px-6 text-center flex flex-col items-center gap-6">
                <span className="px-4 py-1.5 bg-primary text-background-dark text-xs sm:text-sm font-black uppercase tracking-widest rounded-full shadow-lg">
                    {t(`${prefix}.welcome`)}
                </span>

                <h1
                    id="hero-title"
                    className="text-text-on-dark text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tighter drop-shadow-2xl"
                >
                    {t(`${prefix}.titlePart1`)}
                    <br />
                    <span className="text-primary relative inline-block mx-2">
                        {t(`${prefix}.titleMatcha`)}
                        <svg
                            className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-4 text-primary/60"
                            preserveAspectRatio="none"
                            viewBox="0 0 100 10"
                            aria-hidden="true"
                        >
                            <path
                                d="M0 5 Q 50 10 100 5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="8"
                            ></path>
                        </svg>
                    </span>
                    {t(`${prefix}.titlePart3`)}
                </h1>

                <p className="text-white/95 text-lg sm:text-xl font-medium max-w-2xl leading-relaxed drop-shadow-md">
                    {t(`${prefix}.description`)}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
                    {contentKey === "home" && (
                        <button className="flex items-center justify-center h-14 px-10 bg-primary hover:bg-primary-dark text-background-dark font-black text-lg rounded-xl transition-all transform hover:scale-105 shadow-primary active:scale-95 cursor-pointer">
                            {t("nav.bookTable")}
                        </button>
                    )}
                    {contentKey === "home" && (
                        <Link
                            href="/menu"
                            className="flex items-center justify-center gap-3 h-14 px-10 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/30 text-white font-bold text-lg rounded-xl transition-all active:scale-95 cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-[24px]">
                                restaurant_menu
                            </span>
                            {t("hero.viewMenu")}
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
