"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { contactInfo, openingHours, socialLinks } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";

export default function VisitUs() {
    const { t } = useLanguage();

    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const check = () => {
            const now = new Date();
            const day = now.getDay();
            const currentTime = now.getHours() * 60 + now.getMinutes();

            const findHours = (dayIndex: number) => {
                if (dayIndex >= 1 && dayIndex <= 5) return openingHours.find(h => h.dayKey === "monFri");
                if (dayIndex === 6) return openingHours.find(h => h.dayKey === "sat");
                if (dayIndex === 0) return openingHours.find(h => h.dayKey === "sun");
                return null;
            };

            const todayHours = findHours(day);
            if (!todayHours) return false;

            const [openH, openM] = todayHours.open.split(":").map(Number);
            const [closeH, closeM] = todayHours.close.split(":").map(Number);

            const openTime = openH * 60 + openM;
            const closeTime = closeH * 60 + closeM;

            return currentTime >= openTime && currentTime < closeTime;
        };

        setIsOpen(check());
        setMounted(true);
    }, []);

    return (
        <section className="py-20 px-4 md:px-8 bg-wood-light/20 dark:bg-black/20">
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-4xl font-black text-text-main dark:text-text-on-dark tracking-tight mb-4">
                        {t("visit.title")}{" "}
                        <span className="brush-stroke">
                            {t("visit.titleHighlight")}
                        </span>
                    </h2>
                    <p className="text-text-muted dark:text-gray-400 max-w-xl mx-auto">
                        {t("visit.description")}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Location Card */}
                    <div className="group bg-white dark:bg-white/5 border border-wood-light/50 dark:border-white/5 rounded-xl p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            <span className="material-symbols-outlined">
                                location_on
                            </span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-text-main dark:text-white mb-1">
                                {t("visit.locationTitle")}
                            </h3>
                            <p className="text-text-muted dark:text-gray-400 text-sm">
                                {contactInfo.address}
                                <br />
                                {contactInfo.city}
                            </p>
                        </div>
                        {/* Mini Map Preview */}
                        <div className="mt-2 w-full h-32 rounded-lg bg-gray-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                            <iframe
                                title="Restaurant Location Map"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=8.6821%2C50.1118%2C8.6892%2C50.1155&amp;layer=mapnik&amp;marker=50.1136751%2C8.6856916"
                                className="w-full h-full opacity-80"
                            ></iframe>
                        </div>
                    </div>
                    {/* Hours Card */}
                    <div className="group bg-white dark:bg-white/5 border border-wood-light/50 dark:border-white/5 rounded-xl p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            <span className="material-symbols-outlined">
                                schedule
                            </span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-text-main dark:text-white mb-1">
                                {t("visit.hoursTitle")}
                            </h3>
                            <div className="space-y-2 mt-2">
                                {openingHours.map((item) => (
                                    <div
                                        key={item.dayKey}
                                        className="flex justify-between text-sm"
                                    >
                                        <span className="text-text-muted dark:text-gray-400">
                                            {t(`visit.days.${item.dayKey}`)}
                                        </span>
                                        <span className="font-medium text-text-main dark:text-white">
                                            {item.open} - {item.close}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-auto pt-4 min-h-[32px]">
                            {mounted && (
                                <div
                                    className={`inline-flex items-center gap-2 px-3 py-1 ${isOpen
                                        ? "bg-primary/10 text-primary-dark"
                                        : "bg-red-500/10 text-red-500"
                                        } text-xs font-bold rounded-full`}
                                >
                                    <span
                                        className={`w-2 h-2 rounded-full ${isOpen
                                            ? "bg-primary animate-pulse"
                                            : "bg-red-500"
                                            }`}
                                    ></span>
                                    {isOpen ? t("visit.openNow") : t("visit.closed")}
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Contact Card */}
                    <div className="group bg-white dark:bg-white/5 border border-wood-light/50 dark:border-white/5 rounded-xl p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            <span className="material-symbols-outlined">
                                call
                            </span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-text-main dark:text-white mb-1">
                                {t("visit.contactTitle")}
                            </h3>
                            <p className="text-text-muted dark:text-gray-400 text-sm mb-4">
                                {t("visit.contactDesc")}
                            </p>
                            <div className="space-y-3">
                                <a
                                    className="flex items-center gap-3 text-text-main dark:text-white hover:text-primary transition-colors font-medium text-sm"
                                    href={`tel:${contactInfo.phone.replace(
                                        /\s/g,
                                        ""
                                    )}`}
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        phone_iphone
                                    </span>
                                    {contactInfo.phone}
                                </a>
                                <a
                                    className="flex items-center gap-3 text-text-main dark:text-white hover:text-primary transition-colors font-medium text-sm"
                                    href={`mailto:${contactInfo.email}`}
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        mail
                                    </span>
                                    {contactInfo.email}
                                </a>
                            </div>
                            <div className="flex gap-4 mt-6">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.platform}
                                        href={link.href}
                                        className="size-8 rounded-full bg-wood-light/20 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-colors"
                                        aria-label={link.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            src={link.iconUrl}
                                            alt={link.platform}
                                            width={16}
                                            height={16}
                                            className="filter invert brightness-0 hover:invert-0"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="mt-auto">
                            <button className="text-sm font-bold text-primary underline decoration-2 underline-offset-4 hover:text-primary-dark cursor-pointer">
                                {t("visit.getDirections")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
