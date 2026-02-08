import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import DishCard from "@/components/DishCard";
import { dishes, heroContent } from "@/lib/data";

export default function MenuPage() {
    const categories: ("Ramen" | "Udon" | "Small Plates" | "Desserts" | "Drinks")[] = [
        "Small Plates",
        "Ramen",
        "Udon",
        "Desserts",
        "Drinks",
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                <Hero content={heroContent.menu} size="medium" />

                <section className="py-24 px-6 md:px-12 bg-background-light dark:bg-background-dark">
                    <div className="max-w-[1280px] mx-auto space-y-24">
                        {categories.map((cat) => (
                            <div key={cat} className="space-y-12">
                                <div className="flex items-center gap-6">
                                    <h2 className="text-3xl md:text-5xl font-black text-text-main dark:text-text-on-dark tracking-tight">
                                        {cat}
                                    </h2>
                                    <div className="h-1 flex-grow bg-primary/20 rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {dishes
                                        .filter((d) => d.category === cat)
                                        .map((dish) => (
                                            <DishCard key={dish.id} dish={dish} />
                                        ))}
                                    {dishes.filter((d) => d.category === cat).length === 0 && (
                                        <p className="text-text-muted italic">Coming soon...</p>
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
