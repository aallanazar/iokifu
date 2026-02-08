import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <Hero
                    content={{
                        welcomeTag: "Legal",
                        titlePart1: "Privacy",
                        titlePart2: "Policy",
                        titlePart3: "",
                        description: "How we handle your data.",
                        backgroundImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80"
                    }}
                    size="medium"
                />
                <section className="py-20 px-4 md:px-8 bg-background-light dark:bg-background-dark">
                    <div className="max-w-[800px] mx-auto prose dark:prose-invert space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">1. General Information</h2>
                            <p className="text-text-muted dark:text-gray-400">
                                This privacy policy informs you about the type, scope, and purpose of the collection and use of personal data by IOKI FU Restaurant. We take your data protection very seriously and treat your personal data confidentially and in accordance with the law.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">2. Data Collection on our Website</h2>
                            <p className="text-text-muted dark:text-gray-400">
                                When you visit our website, certain data is automatically collected, such as your IP address, the date and time of access, and the browser used. This data is used solely for technical administration and security.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">3. Contact and Reservations</h2>
                            <p className="text-text-muted dark:text-gray-400">
                                When you contact us or make a reservation, we store your information to process the inquiry. This data is not passed on to third parties without your consent.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
