"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { contactInfo } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";

export default function ImprintPage() {
    const { t } = useLanguage();

    return (
        <>
            <Header />
            <main className="pt-20">
                <Hero contentKey="legal" size="medium" />
                <section className="py-20 px-4 md:px-8 bg-background-light dark:bg-background-dark">
                    <div className="max-w-[800px] mx-auto prose dark:prose-invert">
                        <h2 className="text-3xl font-black text-text-main dark:text-text-on-dark mb-8 tracking-tight">
                            {t("imprint.title")}
                        </h2>
                        <div className="space-y-8 text-text-muted dark:text-gray-400 font-medium">
                            <div className="p-6 bg-white dark:bg-white/5 border border-wood-light/30 dark:border-white/5 rounded-2xl shadow-sm">
                                <p className="mb-0">
                                    <strong className="text-text-main dark:text-white block mb-2 text-lg">IOKI FU Restaurant</strong>
                                    {contactInfo.address}<br />
                                    {contactInfo.zip} {contactInfo.city}<br />
                                    Germany
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-white dark:bg-white/5 border border-wood-light/30 dark:border-white/5 rounded-2xl shadow-sm">
                                    <strong className="text-text-main dark:text-white block mb-2 uppercase tracking-wider text-xs">{t("imprint.contact")}</strong>
                                    <p className="mb-0 text-sm">
                                        Phone: {contactInfo.phone}<br />
                                        Email: {contactInfo.email}
                                    </p>
                                </div>
                                <div className="p-6 bg-white dark:bg-white/5 border border-wood-light/30 dark:border-white/5 rounded-2xl shadow-sm">
                                    <strong className="text-text-main dark:text-white block mb-2 uppercase tracking-wider text-xs">{t("imprint.representedBy")}</strong>
                                    <p className="mb-0 text-sm">[Owner Name]</p>
                                </div>
                                <div className="p-6 bg-white dark:bg-white/5 border border-wood-light/30 dark:border-white/5 rounded-2xl shadow-sm">
                                    <strong className="text-text-main dark:text-white block mb-2 uppercase tracking-wider text-xs">{t("imprint.vatId")}</strong>
                                    <p className="mb-0 text-sm">[VAT ID Number]</p>
                                </div>
                                <div className="p-6 bg-white dark:bg-white/5 border border-wood-light/30 dark:border-white/5 rounded-2xl shadow-sm">
                                    <strong className="text-text-main dark:text-white block mb-2 uppercase tracking-wider text-xs">{t("imprint.registration")}</strong>
                                    <p className="mb-0 text-sm">
                                        [Registration Court]<br />
                                        [Registration Number]
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
