"use client";

import { dishes } from "@/lib/data";
import DishCard from "./DishCard";
import { useLanguage } from "./LanguageProvider";

export default function ChefSpecials() {
    const { t } = useLanguage();

    return (
        <section className="py-24 px-4 md:px-8 bg-background-light dark:bg-background-dark relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-wood-light/30 dark:bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-[1280px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-text-on-dark tracking-tight">
                            {t("specials.title")} <span className="brush-stroke">{t("specials.titleHighlight")}</span>
                        </h2>
                        <p className="text-text-muted dark:text-gray-400 max-w-lg text-lg leading-relaxed">
                            {t("specials.description")}
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="size-12 flex items-center justify-center rounded-full border border-wood-light dark:border-white/10 hover:bg-primary hover:border-primary hover:text-background-dark transition-all text-text-main dark:text-white cursor-pointer active:scale-95">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button className="size-12 flex items-center justify-center rounded-full border border-wood-light dark:border-white/10 hover:bg-primary hover:border-primary hover:text-background-dark transition-all text-text-main dark:text-white cursor-pointer active:scale-95">
                            <span className="material-symbols-outlined">
                                arrow_forward
                            </span>
                        </button>
                    </div>
                </div>
                {/* Scroll Container */}
                <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide">
                    {dishes.map((dish) => (
                        <DishCard key={dish.id} dish={dish} />
                    ))}
                </div>
            </div>
        </section>
    );
}
