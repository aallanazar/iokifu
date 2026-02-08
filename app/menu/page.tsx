"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import DishCard from "@/components/DishCard";
import { dishes } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";

export default function MenuPage() {
    const { t } = useLanguage();

    const categories: { label: string; key: string }[] = [
        { label: "Small Plates", key: "smallPlates" },
        { label: "Ramen", key: "ramen" },
        { label: "Udon", key: "udon" },
        { label: "Desserts", key: "desserts" },
        { label: "Drinks", key: "drinks" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                <Hero contentKey="menu" size="medium" />

                <section className="py-24 px-6 md:px-12 bg-background-light dark:bg-background-dark">
                    <div className="max-w-[1280px] mx-auto space-y-24">
                        {categories.map((cat) => (
                            <div key={cat.key} className="space-y-12">
                                <div className="flex items-center gap-6">
                                    <h2 className="text-3xl md:text-5xl font-black text-text-main dark:text-text-on-dark tracking-tight">
                                        {t(`menu.categories.${cat.key}`)}
                                    </h2>
                                    <div className="h-1 flex-grow bg-primary/20 rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {dishes
                                        .filter((d) => d.category === cat.label)
                                        .map((dish) => (
                                            <DishCard key={dish.id} dish={dish} />
                                        ))}
                                    {dishes.filter((d) => d.category === cat.label).length === 0 && (
                                        <p className="text-text-muted italic">{t("menu.comingSoon")}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
