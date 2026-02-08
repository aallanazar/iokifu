import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { contactInfo } from "@/lib/data";

export default function ImprintPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <Hero
                    content={{
                        welcomeTag: "Legal",
                        titlePart1: "Our",
                        titlePart2: "Imprint",
                        titlePart3: "",
                        description: "Legal notice and contact information.",
                        backgroundImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80"
                    }}
                    size="medium"
                />
                <section className="py-20 px-4 md:px-8 bg-background-light dark:bg-background-dark">
                    <div className="max-w-[800px] mx-auto prose dark:prose-invert">
                        <h2 className="text-2xl font-bold mb-6">Legal Notice</h2>
                        <div className="space-y-4 text-text-muted dark:text-gray-400">
                            <p>
                                <strong>IOKI FU Restaurant</strong><br />
                                {contactInfo.address}<br />
                                {contactInfo.zip} {contactInfo.city}<br />
                                Germany
                            </p>
                            <p>
                                <strong>Contact:</strong><br />
                                Phone: {contactInfo.phone}<br />
                                Email: {contactInfo.email}
                            </p>
                            <p>
                                <strong>Represented by:</strong><br />
                                [Owner Name]
                            </p>
                            <p>
                                <strong>VAT ID:</strong><br />
                                [VAT ID Number]
                            </p>
                            <p>
                                <strong>Registration:</strong><br />
                                [Registration Court]<br />
                                [Registration Number]
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
