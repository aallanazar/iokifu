"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useLanguage } from "@/components/LanguageProvider";

export default function PrivacyPage() {
    const { t } = useLanguage();

    // In a real app, you'd probably have a more complex way to map arrays from translations,
    // but for 3 fixed sections, we can do it simply.
    const sections = [0, 1, 2];

    return (
        <>
            <Header />
            <main className="pt-20">
                <Hero contentKey="legal" size="medium" />
                <section className="py-24 px-4 md:px-8 bg-background-light dark:bg-background-dark">
                    <div className="max-w-[800px] mx-auto prose dark:prose-invert space-y-12">
                        <h2 className="text-4xl font-black text-text-main dark:text-text-on-dark mb-12 tracking-tight">
                            {t("privacy.title")}
                        </h2>
                        {sections.map((idx) => (
                            <div key={idx} className="space-y-4">
                                <h3 className="text-2xl font-bold text-text-main dark:text-white">
                                    {t(`privacy.sections.${idx}.title`)}
                                </h3>
                                <p className="text-text-muted dark:text-gray-400 leading-relaxed font-medium">
                                    {t(`privacy.sections.${idx}.content`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
