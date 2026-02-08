"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
    const { t } = useLanguage();

    const values = [
        { key: "authenticity" },
        { key: "quality" },
        { key: "omotenashi" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                <Hero contentKey="about" size="medium" />

                <section className="py-24 px-6 md:px-12 bg-background-light dark:bg-background-dark">
                    <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-text-on-dark tracking-tight">
                                {t("about.storyTitle").split(" ")[0]}{" "}
                                <span className="brush-stroke">
                                    {t("about.storyTitle").split(" ")[1]}
                                </span>
                            </h2>
                            <p className="text-lg text-text-muted dark:text-gray-400 leading-relaxed font-medium">
                                {t("about.story")}
                            </p>
                            <div className="p-8 bg-surface-light dark:bg-surface-dark rounded-3xl border border-wood-light/30 dark:border-white/5 shadow-xl">
                                <p className="text-xl font-bold text-primary italic">
                                    &quot;{t("about.mission")}&quot;
                                </p>
                            </div>
                            {/* Halal Policy */}
                            <div className="p-6 bg-green-500/10 dark:bg-green-500/5 rounded-2xl border border-green-500/20 flex gap-4 items-start">
                                <div className="text-green-600 dark:text-green-400 mt-1">
                                    <span className="material-symbols-outlined text-[32px]">
                                        verified
                                    </span>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="text-lg font-black text-green-700 dark:text-green-300 uppercase tracking-wider">
                                            {t("about.halalTitle")}
                                        </h3>
                                        <span className="text-[10px] bg-green-500 text-white px-2 py-0.5 rounded-full font-bold">
                                            {t("about.halalVerified")}
                                        </span>
                                    </div>
                                    <p className="text-text-muted dark:text-gray-400 font-medium">
                                        {t("about.halalPolicy")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {values.map((v, idx) => (
                                <div
                                    key={v.key}
                                    className={`p-8 rounded-3xl bg-white dark:bg-white/5 border border-wood-light/40 dark:border-white/10 shadow-sm hover:shadow-primary/10 transition-shadow ${idx === 2 ? "md:col-span-2" : ""
                                        }`}
                                >
                                    <h3 className="text-2xl font-black text-text-main dark:text-text-on-dark mb-4">
                                        {t(`about.values.${v.key}.title`)}
                                    </h3>
                                    <p className="text-text-muted dark:text-gray-400 font-medium">
                                        {t(`about.values.${v.key}.desc`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
