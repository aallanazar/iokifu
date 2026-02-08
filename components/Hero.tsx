import { heroContent } from "@/lib/data";

export default function Hero() {
    return (
        <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-center justify-center">
            {/* Video Background Placeholder (Image Fallback) */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
                data-alt="Close up of steaming hot delicious ramen noodles with chopsticks holding noodles"
                style={{
                    backgroundImage: `linear-gradient(rgba(16, 34, 19, 0.4), rgba(16, 34, 19, 0.6)), url('${heroContent.backgroundImage}')`,
                }}
            ></div>
            <div className="relative z-10 max-w-[960px] mx-auto px-4 text-center flex flex-col items-center gap-6">
                <span className="px-3 py-1 bg-primary/90 text-background-dark text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm">
                    {heroContent.welcomeTag}
                </span>
                <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight drop-shadow-lg">
                    {heroContent.titlePart1}
                    <br />
                    <span className="text-primary relative inline-block">
                        {heroContent.titlePart2}
                        <svg
                            className="absolute -bottom-2 left-0 w-full h-3 text-primary"
                            preserveAspectRatio="none"
                            viewBox="0 0 100 10"
                        >
                            <path
                                d="M0 5 Q 50 10 100 5"
                                fill="none"
                                opacity="0.6"
                                stroke="currentColor"
                                strokeWidth="8"
                            ></path>
                        </svg>
                    </span>
                    {" "}{heroContent.titlePart3}
                </h1>
                <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl leading-relaxed drop-shadow-md">
                    {heroContent.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
                    <button className="flex items-center justify-center h-12 px-8 bg-primary hover:bg-primary-dark text-background-dark font-bold text-base rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(19,236,55,0.4)] w-full sm:w-auto cursor-pointer">
                        {heroContent.ctaPrimary}
                    </button>
                    <button className="flex items-center justify-center gap-2 h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-base rounded-lg transition-all w-full sm:w-auto cursor-pointer">
                        <span className="material-symbols-outlined text-[20px]">
                            restaurant_menu
                        </span>
                        {heroContent.ctaSecondary}
                    </button>
                </div>
            </div>
        </section>
    );
}
