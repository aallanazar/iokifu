import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChefSpecials from "@/components/ChefSpecials";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <Hero contentKey="home" />
        <ChefSpecials />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}
