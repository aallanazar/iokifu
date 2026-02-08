import { dishes } from "@/lib/data";
import DishCard from "./DishCard";

export default function ChefSpecials() {
    return (
        <section className="py-20 px-4 md:px-8 bg-background-light dark:bg-background-dark relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-wood-light/30 dark:bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="max-w-[1280px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-2">
                        <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-text-on-dark tracking-tight">
                            Chef&apos;s <span className="brush-stroke">Specials</span>
                        </h2>
                        <p className="text-text-muted dark:text-gray-400 max-w-lg">
                            Curated dishes featuring seasonal ingredients and traditional
                            techniques passed down through generations. Made fresh daily in
                            our kitchen.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button className="size-10 flex items-center justify-center rounded-full border border-wood-light dark:border-white/10 hover:bg-primary hover:border-primary hover:text-background-dark transition-colors text-text-main dark:text-white cursor-pointer">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button className="size-10 flex items-center justify-center rounded-full border border-wood-light dark:border-white/10 hover:bg-primary hover:border-primary hover:text-background-dark transition-colors text-text-main dark:text-white cursor-pointer">
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
