import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function TermsPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <Hero
                    content={{
                        welcomeTag: "Legal",
                        titlePart1: "Terms of",
                        titlePart2: "Service",
                        titlePart3: "",
                        description: "Rules and regulations for using our services.",
                        backgroundImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80"
                    }}
                    size="medium"
                />
                <section className="py-20 px-4 md:px-8 bg-background-light dark:bg-background-dark">
                    <div className="max-w-[800px] mx-auto prose dark:prose-invert space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">1. Scope of Application</h2>
                            <p className="text-text-muted dark:text-gray-400">
                                These terms and conditions apply to all services provided by IOKI FU Restaurant to its customers.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">2. Reservations and Cancellations</h2>
                            <p className="text-text-muted dark:text-gray-400">
                                Reservations are binding. We kindly ask you to inform us as early as possible if you cannot keep a reservation. We reserve the right to charge a no-show fee for large groups.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">3. Liability</h2>
                            <p className="text-text-muted dark:text-gray-400">
                                IOKI FU Restaurant is not liable for items brought by guests.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
