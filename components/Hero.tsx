import Link from "next/link";

interface HeroProps {
    content: {
        welcomeTag: string;
        titlePart1: string;
        titlePart2: string;
        titlePart3: string;
        description: string;
        ctaPrimary?: string;
        ctaSecondary?: string;
        backgroundImage: string;
    };
    size?: "large" | "medium";
}

export default function Hero({ content, size = "large" }: HeroProps) {
    const heightClass = size === "large" ? "h-[600px] md:h-[700px]" : "h-[400px] md:h-[500px]";

    if (!content) {
        console.error("Hero component rendered without content prop!");
        return <div className={`relative w-full ${heightClass} bg-wood-dark flex items-center justify-center text-white`}>Error: Missing Hero Content</div>;
    }

    return (
        <section
            className={`relative w-full ${heightClass} overflow-hidden flex items-center justify-center`}
            aria-labelledby="hero-title"
        >
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
                style={{
                    backgroundImage: content.backgroundImage
                        ? `linear-gradient(rgba(8, 17, 9, 0.45), rgba(8, 17, 9, 0.7)), url('${content.backgroundImage}')`
                        : "none",
                }}
                role="img"
                aria-label="Authentic Japanese cuisine background"
            ></div>

            <div className="relative z-10 max-w-[960px] mx-auto px-6 text-center flex flex-col items-center gap-6">
                <span className="px-4 py-1.5 bg-primary text-background-dark text-xs sm:text-sm font-black uppercase tracking-widest rounded-full shadow-lg">
                    {content.welcomeTag}
                </span>

                <h1
                    id="hero-title"
                    className="text-text-on-dark text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tighter drop-shadow-2xl"
                >
                    {content.titlePart1}
                    <br />
                    <span className="text-primary relative inline-block mx-2">
                        {content.titlePart2}
                        <svg
                            className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-4 text-primary/60"
                            preserveAspectRatio="none"
                            viewBox="0 0 100 10"
                            aria-hidden="true"
                        >
                            <path
                                d="M0 5 Q 50 10 100 5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="8"
                            ></path>
                        </svg>
                    </span>
                    {content.titlePart3}
                </h1>

                <p className="text-white/95 text-lg sm:text-xl font-medium max-w-2xl leading-relaxed drop-shadow-md">
                    {content.description}
                </p>

                {(content.ctaPrimary || content.ctaSecondary) && (
                    <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
                        {content.ctaPrimary && (
                            <button className="flex items-center justify-center h-14 px-10 bg-primary hover:bg-primary-dark text-background-dark font-black text-lg rounded-xl transition-all transform hover:scale-105 shadow-primary active:scale-95 cursor-pointer">
                                {content.ctaPrimary}
                            </button>
                        )}
                        {content.ctaSecondary && (
                            <Link
                                href="/menu"
                                className="flex items-center justify-center gap-3 h-14 px-10 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/30 text-white font-bold text-lg rounded-xl transition-all active:scale-95 cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-[24px]">
                                    restaurant_menu
                                </span>
                                {content.ctaSecondary}
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
