import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChefSpecials from "@/components/ChefSpecials";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";
import { heroContent } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <Hero content={heroContent.home} />
        <ChefSpecials />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}
