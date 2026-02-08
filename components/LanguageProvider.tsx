"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Locale, translations } from "@/lib/translations";

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("locale") as Locale | null;
            if (saved && (saved === "en" || saved === "de")) {
                return saved;
            }
        }
        return "en";
    });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem("locale", newLocale);
    };

    // Helper to get nested translation value
    const t = (path: string): string => {
        const keys = path.split(".");
        let result: unknown = translations[locale];

        for (const key of keys) {
            if (result && typeof result === 'object' && key in (result as Record<string, unknown>)) {
                result = (result as Record<string, unknown>)[key];
            } else {
                return path; // Fallback to key name if not found
            }
        }

        return typeof result === "string" ? result : path;
    };

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {/* Prevent flash of untranslated content similarly to ThemeProvider */}
            <div className={mounted ? "" : "invisible"}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
