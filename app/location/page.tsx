import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VisitUs from "@/components/VisitUs";

export default function LocationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                <div className="bg-background-light dark:bg-background-dark">
                    <VisitUs />
                </div>
            </main>
            <Footer />
        </div>
    );
}
