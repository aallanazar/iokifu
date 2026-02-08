import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { aboutContent, heroContent } from "@/lib/data";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                <Hero content={heroContent.about} size="medium" />

                <section className="py-24 px-6 md:px-12 bg-background-light dark:bg-background-dark">
                    <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-text-on-dark tracking-tight">
                                Our <span className="brush-stroke">Story</span>
                            </h2>
                            <p className="text-lg text-text-muted dark:text-gray-400 leading-relaxed font-medium">
                                {aboutContent.story}
                            </p>
                            <div className="p-8 bg-surface-light dark:bg-surface-dark rounded-3xl border border-wood-light/30 dark:border-white/5 shadow-xl">
                                <p className="text-xl font-bold text-primary italic">
                                    &quot;{aboutContent.mission}&quot;
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {aboutContent.values.map((value, idx) => (
                                <div
                                    key={value.title}
                                    className={`p-8 rounded-3xl bg-white dark:bg-white/5 border border-wood-light/40 dark:border-white/10 shadow-sm hover:shadow-primary/10 transition-shadow ${idx === 2 ? 'md:col-span-2' : ''}`}
                                >
                                    <h3 className="text-2xl font-black text-text-main dark:text-text-on-dark mb-4">{value.title}</h3>
                                    <p className="text-text-muted dark:text-gray-400 font-medium">{value.description}</p>
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
