import Image from "next/image";
import { Dish } from "@/lib/data";

interface DishCardProps {
    dish: Dish;
}

export default function DishCard({ dish }: DishCardProps) {
    return (
        <div className="min-w-[300px] md:min-w-[380px] snap-center bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-wood-light/50 dark:border-white/5 flex flex-col">
            <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 300px, 380px"
                />
                {dish.isPopular && (
                    <div className="absolute top-4 left-4 bg-background-dark/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-primary">
                            whatshot
                        </span>{" "}
                        Popular
                    </div>
                )}
                {dish.isVegetarian && (
                    <div className="absolute top-4 left-4 bg-background-light/90 backdrop-blur-sm text-text-main text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-primary">
                            eco
                        </span>{" "}
                        Vegetarian
                    </div>
                )}
            </div>
            <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-text-main dark:text-white">
                        {dish.name}
                    </h3>
                    <span className="text-primary font-bold">{dish.price}</span>
                </div>
                <p className="text-text-muted dark:text-gray-400 text-sm mb-6 line-clamp-2">
                    {dish.description}
                </p>
                <button className="mt-auto w-full py-3 rounded-lg border border-wood-light dark:border-white/20 text-text-main dark:text-white font-bold text-sm hover:bg-text-main hover:text-white dark:hover:bg-white dark:hover:text-background-dark transition-colors flex items-center justify-center gap-2 cursor-pointer">
                    Order Now
                </button>
            </div>
        </div>
    );
}
