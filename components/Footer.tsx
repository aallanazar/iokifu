import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="bg-wood-dark text-white py-12 border-t border-white/10">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                    <div className="flex items-center gap-2">
                        <div className="size-8 text-primary">
                            <span className="material-symbols-outlined !text-[32px]">
                                ramen_dining
                            </span>
                        </div>
                        <h2 className="text-2xl font-extrabold tracking-tight">IOKI FU</h2>
                    </div>
                    <div className="flex gap-6">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.platform}
                                href={link.href}
                                className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-background-dark transition-colors"
                                aria-label={link.label}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={link.iconUrl}
                                    alt={link.platform}
                                    width={20}
                                    height={20}
                                    className="filter invert brightness-0 hover:invert-0"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <div className="flex gap-6">
                        <Link className="hover:text-primary transition-colors" href="/privacy">
                            Privacy Policy
                        </Link>
                        <Link className="hover:text-primary transition-colors" href="/imprint">
                            Imprint
                        </Link>
                        <Link className="hover:text-primary transition-colors" href="/terms">
                            Terms of Service
                        </Link>
                    </div>
                    <p>© {new Date().getFullYear()} IOKI FU Restaurant. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
