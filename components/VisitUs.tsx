import { openingHours, contactInfo, mapPreview } from "@/lib/data";

export default function VisitUs() {
    return (
        <section className="py-20 px-4 md:px-8 bg-wood-light/20 dark:bg-black/20">
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-4xl font-black text-text-main dark:text-text-on-dark tracking-tight mb-4">
                        We&apos;d Love to <span className="brush-stroke">See You</span>
                    </h2>
                    <p className="text-text-muted dark:text-gray-400 max-w-xl mx-auto">
                        Located in the heart of Frankfurt&apos;s financial district, offering a
                        serene escape from the city&apos;s hustle. Experience the art of
                        Japanese hospitality.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Location Card */}
                    <div className="group bg-white dark:bg-white/5 border border-wood-light/50 dark:border-white/5 rounded-xl p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            <span className="material-symbols-outlined">location_on</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-text-main dark:text-white mb-1">
                                Our Location
                            </h3>
                            <p className="text-text-muted dark:text-gray-400 text-sm">
                                {contactInfo.address}
                                <br />
                                {contactInfo.city}
                            </p>
                        </div>
                        {/* Mini Map Preview */}
                        <div className="mt-2 w-full h-32 rounded-lg bg-gray-200 overflow-hidden relative">
                            <div
                                className="w-full h-full bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity"
                                style={{
                                    backgroundImage: `url('${mapPreview.image}')`,
                                }}
                            ></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary drop-shadow-md text-4xl">
                                    location_on
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Hours Card */}
                    <div className="group bg-white dark:bg-white/5 border border-wood-light/50 dark:border-white/5 rounded-xl p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            <span className="material-symbols-outlined">schedule</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-text-main dark:text-white mb-1">
                                Opening Hours
                            </h3>
                            <div className="space-y-2 mt-2">
                                {openingHours.map((item) => (
                                    <div key={item.day} className="flex justify-between text-sm">
                                        <span className="text-text-muted dark:text-gray-400">
                                            {item.day}
                                        </span>
                                        <span className="font-medium text-text-main dark:text-white">
                                            {item.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-auto pt-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary-dark text-xs font-bold rounded-full">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                Open Now
                            </div>
                        </div>
                    </div>
                    {/* Contact Card */}
                    <div className="group bg-white dark:bg-white/5 border border-wood-light/50 dark:border-white/5 rounded-xl p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            <span className="material-symbols-outlined">call</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-text-main dark:text-white mb-1">
                                Contact Us
                            </h3>
                            <p className="text-text-muted dark:text-gray-400 text-sm mb-4">
                                Questions or special requests? Give us a call or send an
                                email.
                            </p>
                            <div className="space-y-3">
                                <a
                                    className="flex items-center gap-3 text-text-main dark:text-white hover:text-primary transition-colors"
                                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        phone_iphone
                                    </span>
                                    <span className="font-medium text-sm">{contactInfo.phone}</span>
                                </a>
                                <a
                                    className="flex items-center gap-3 text-text-main dark:text-white hover:text-primary transition-colors"
                                    href={`mailto:${contactInfo.email}`}
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        mail
                                    </span>
                                    <span className="font-medium text-sm">
                                        {contactInfo.email}
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <button className="text-sm font-bold text-primary underline decoration-2 underline-offset-4 hover:text-primary-dark cursor-pointer">
                                Get Directions
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
