"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-wood-light dark:border-white/10 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 text-text-main dark:text-white group cursor-pointer">
              <div className="size-8 text-primary">
                <span className="material-symbols-outlined !text-[32px]">
                  ramen_dining
                </span>
              </div>
              <h1 className="text-xl font-extrabold tracking-tight">IOKI FU</h1>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                className="text-sm font-bold text-text-main dark:text-white hover:text-primary transition-colors"
                href="#"
              >
                Menu
              </a>
              <a
                className="text-sm font-bold text-text-main dark:text-white hover:text-primary transition-colors"
                href="#"
              >
                Location
              </a>
              <a
                className="text-sm font-bold text-text-main dark:text-white hover:text-primary transition-colors"
                href="#"
              >
                About
              </a>
              <span className="h-4 w-px bg-wood-light dark:bg-white/20"></span>
              <a
                className="text-sm font-bold text-text-main dark:text-white hover:text-primary transition-colors"
                href="#"
              >
                EN
              </a>
            </nav>
            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden md:flex items-center justify-center h-10 px-5 bg-primary hover:bg-primary-dark text-background-dark font-bold text-sm rounded-lg transition-colors shadow-sm shadow-primary/20">
                Book a Table
              </button>
              {/* Theme Toggle / Mobile Menu */}
              <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-wood-light/50 dark:bg-white/10 hover:bg-wood-light dark:hover:bg-white/20 text-text-main dark:text-white transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  light_mode
                </span>
              </button>
              <button
                aria-label="Open menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg text-text-main dark:text-white hover:bg-wood-light dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[24px]">
                  menu
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-background-light dark:bg-background-dark border-b border-wood-light dark:border-white/10 p-4 flex flex-col gap-4 shadow-lg">
            <a
              className="text-sm font-bold text-text-main dark:text-white hover:text-primary transition-colors"
              href="#"
            >
              Menu
            </a>
            <a
              className="text-sm font-bold text-text-main dark:text-white hover:text-primary transition-colors"
              href="#"
            >
              Location
            </a>
            <a
              className="text-sm font-bold text-text-main dark:text-white hover:text-primary transition-colors"
              href="#"
            >
              About
            </a>
            <button className="flex items-center justify-center h-10 px-5 bg-primary hover:bg-primary-dark text-background-dark font-bold text-sm rounded-lg transition-colors shadow-sm shadow-primary/20 w-full">
              Book a Table
            </button>
          </div>
        )}
      </header>
      {/* Main Content */}
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-center justify-center">
          {/* Video Background Placeholder (Image Fallback) */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
            data-alt="Close up of steaming hot delicious ramen noodles with chopsticks holding noodles"
            style={{
              backgroundImage:
                "linear-gradient(rgba(16, 34, 19, 0.4), rgba(16, 34, 19, 0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD7jw1WiHkyDhAqxLxDT6ENFbyzxcLGfOhdD0Qh4qhS4pmbct3mQdF5jM_yfpCCdWsyPoctMetdfMwesmhCkpGQEz_y1gxDzdQ7a8B57ZuDqbMFTuz7CDt1_YDdlxwOkZacwGa_PtINDPdfTBixDwP5rztPN1kV5KstjbdR0RHEw2oe-H2KEHD8U4hAs9CIvn8CEoOioLVqU5ig2UM3P2KaId8Xs_2q6BJO61NqM7ZnUetWu-80SxLQXRq14wuN3LwHiCa5H3zxaWYP')",
            }}
          ></div>
          <div className="relative z-10 max-w-[960px] mx-auto px-4 text-center flex flex-col items-center gap-6">
            <span className="px-3 py-1 bg-primary/90 text-background-dark text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm">
              Welcome to Ioki Fu
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight drop-shadow-lg">
              Authentic Ramen &amp;
              <br />
              <span className="text-primary relative inline-block">
                Matcha
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
              in Frankfurt
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl leading-relaxed drop-shadow-md">
              Experience the warmth of traditional Udon and the craft of modern
              Japanese cuisine in a serene atmosphere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <button className="flex items-center justify-center h-12 px-8 bg-primary hover:bg-primary-dark text-background-dark font-bold text-base rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(19,236,55,0.4)] w-full sm:w-auto cursor-pointer">
                Book a Table
              </button>
              <button className="flex items-center justify-center gap-2 h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-base rounded-lg transition-all w-full sm:w-auto cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">
                  restaurant_menu
                </span>
                View Menu
              </button>
            </div>
          </div>
        </section>
        {/* Chef's Specials */}
        <section className="py-20 px-4 md:px-8 bg-background-light dark:bg-background-dark relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-wood-light/30 dark:bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="max-w-[1280px] mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-extrabold text-text-main dark:text-white">
                  <span className="brush-stroke">Chef's Specials</span>
                </h2>
                <p className="text-text-muted dark:text-gray-400 max-w-lg">
                  Curated dishes featuring seasonal ingredients and traditional
                  techniques passed down through generations.
                </p>
              </div>
              <div className="flex gap-2">
                <button className="size-10 flex items-center justify-center rounded-full border border-wood-light dark:border-white/10 hover:bg-primary hover:border-primary hover:text-background-dark transition-colors text-text-main dark:text-white cursor-pointer">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button className="size-10 flex items-center justify-center rounded-full border border-wood-light dark:border-white/10 hover:bg-primary hover:border-primary hover:text-background-dark transition-colors text-text-main dark:text-white cursor-pointer">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
            {/* Scroll Container */}
            <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide">
              {/* Card 1 */}
              <div className="min-w-[300px] md:min-w-[380px] snap-center bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-wood-light/50 dark:border-white/5 flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div
                    className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    data-alt="Spicy Miso Ramen bowl with egg and pork chashu"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCEoCptMC7S8nBCrGO_Z9i8nt3KeMqX4rFbxJZUb-VEOYNrBij3tQvvmKPR30aIoA4kMtmA8zI3pIgWpEZRYdIfNSG7-cH-JpzmJVDM56Q5itXFQbiMArNSj5WoqUvzIT_EtAIXO0aoUirw1V6Xr3idRt1PJPiTY_NbqwpLeZdL9q8SaX4G9fdFZcadUrBQMtSlTK8wRXzEEe9On627CjOIwyuz4FSI0RjrgawEsRbn6icVt1KMsxbr8-8PeepmzDlZwxshVrTA7om-')",
                    }}
                  ></div>
                  <div className="absolute top-4 left-4 bg-background-dark/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-primary">
                      whatshot
                    </span>{" "}
                    Popular
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-text-main dark:text-white">
                      Spicy Miso Ramen
                    </h3>
                    <span className="text-primary font-bold">€16.50</span>
                  </div>
                  <p className="text-text-muted dark:text-gray-400 text-sm mb-6 line-clamp-2">
                    Rich pork broth with customized spicy miso paste, bamboo
                    shoots, and soft-boiled egg.
                  </p>
                  <button className="mt-auto w-full py-3 rounded-lg border border-wood-light dark:border-white/20 text-text-main dark:text-white font-bold text-sm hover:bg-text-main hover:text-white dark:hover:bg-white dark:hover:text-background-dark transition-colors flex items-center justify-center gap-2 cursor-pointer">
                    Order Now
                  </button>
                </div>
              </div>
              {/* Card 2 */}
              <div className="min-w-[300px] md:min-w-[380px] snap-center bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-wood-light/50 dark:border-white/5 flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div
                    className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    data-alt="Tempura Udon bowl with crispy prawns on top"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2VSR7JqmFzJnn46fSNAWEtRxi0Quq6y_2quldKpQXpCC3XXkLa3N5EXXe62MJkxWHQG93owzm1GzJWEc2MTr1I9BexkMtxa98VKgc6EVGHM_dqSbdFY4Xa1H0L5kVqtXarb6zx2BN2cztZk6CNUFJJUeYiTa_o5KHaQILBpCb8QOOS_EkWnTUJc3W9lEFi1A3XFyLHqtjfOrRL3i61DIO0mZwM2BDrmRpJn_o_bcpR6vB7wrGxRB-LtIidb4OHI2SXz6orIJ7203F')",
                    }}
                  ></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-text-main dark:text-white">
                      Tempura Udon
                    </h3>
                    <span className="text-primary font-bold">€18.00</span>
                  </div>
                  <p className="text-text-muted dark:text-gray-400 text-sm mb-6 line-clamp-2">
                    Thick hand-pulled wheat noodles in a light dashi broth,
                    served with two pieces of crispy prawn tempura.
                  </p>
                  <button className="mt-auto w-full py-3 rounded-lg border border-wood-light dark:border-white/20 text-text-main dark:text-white font-bold text-sm hover:bg-text-main hover:text-white dark:hover:bg-white dark:hover:text-background-dark transition-colors flex items-center justify-center gap-2 cursor-pointer">
                    Order Now
                  </button>
                </div>
              </div>
              {/* Card 3 */}
              <div className="min-w-[300px] md:min-w-[380px] snap-center bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-wood-light/50 dark:border-white/5 flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div
                    className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    data-alt="Green Matcha Tiramisu dessert in a glass"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0X_p6qL7Z9Z917f18Dny0VWqE2fBUGXJouG-e8EByv1CSjoUfZPnCazQ7vJXKK4q7Nx-yrK76upoksX4NQWx6KrZlOKqy-b9G0slxbYXsr4qxjEbPf-a-BQiy1Z7THNd9wVlI8eXk8Ap12d81o2INkAkhxnwA5FUQbigDLP1_1nMzHIuta-2ShK7pH5vL0mSWbVCqeShS6UGEuVdsaPju-XzSm1mSC_xHNlrYLloSdP8XYmvKmo4gwN7zPXLky6gdovmf-WZ0_1l8')",
                    }}
                  ></div>
                  <div className="absolute top-4 left-4 bg-background-light/90 backdrop-blur-sm text-text-main text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-primary">
                      eco
                    </span>{" "}
                    Vegetarian
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-text-main dark:text-white">
                      Matcha Tiramisu
                    </h3>
                    <span className="text-primary font-bold">€8.50</span>
                  </div>
                  <p className="text-text-muted dark:text-gray-400 text-sm mb-6 line-clamp-2">
                    A Japanese twist on the Italian classic. Layers of
                    matcha-soaked sponge and mascarpone cream.
                  </p>
                  <button className="mt-auto w-full py-3 rounded-lg border border-wood-light dark:border-white/20 text-text-main dark:text-white font-bold text-sm hover:bg-text-main hover:text-white dark:hover:bg-white dark:hover:text-background-dark transition-colors flex items-center justify-center gap-2 cursor-pointer">
                    Order Now
                  </button>
                </div>
              </div>
              {/* Card 4 */}
              <div className="min-w-[300px] md:min-w-[380px] snap-center bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-wood-light/50 dark:border-white/5 flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div
                    className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    data-alt="Plate of fresh Gyoza dumplings with dipping sauce"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDv-L5F8ST6uiO_VSrCyhvTDsRPUD0Zn3TkFSvkskY73XewDhdRHMqao4kEEIpKxpRZWHyvCiSLZBR5MFReGREAL4EPkC5iOdge6YyDQmnRyrdL8uJJzTT1y6Be7mOo7jAVQq5hkZWSz_UeUrkARdmT53QLHZmXKnkd1ffWqsbYWe13i76JD3770rkw2LuZ2Siy7nRQRV7cr68FwsSMbusHIekgpQcvGXSjZ3ScImFRmYnM2Rk7t-KyUrRzdjH6-fvWFpltqHNh-9A3')",
                    }}
                  ></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-text-main dark:text-white">
                      Crispy Gyoza
                    </h3>
                    <span className="text-primary font-bold">€7.00</span>
                  </div>
                  <p className="text-text-muted dark:text-gray-400 text-sm mb-6 line-clamp-2">
                    Pan-fried dumplings filled with juicy chicken and vegetables,
                    served with ponzu sauce.
                  </p>
                  <button className="mt-auto w-full py-3 rounded-lg border border-wood-light dark:border-white/20 text-text-main dark:text-white font-bold text-sm hover:bg-text-main hover:text-white dark:hover:bg-white dark:hover:text-background-dark transition-colors flex items-center justify-center gap-2 cursor-pointer">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Visit Us Section */}
        <section className="py-20 px-4 md:px-8 bg-wood-light/20 dark:bg-black/20">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-text-main dark:text-white">
                Visit IOKI FU
              </h2>
              <p className="text-text-muted dark:text-gray-400 max-w-xl mx-auto">
                Located in the heart of Frankfurt's financial district, offering a
                peaceful escape for lunch and dinner.
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
                    Mainzer Landstraße 123
                    <br />
                    60327 Frankfurt am Main
                  </p>
                </div>
                {/* Mini Map Preview */}
                <div className="mt-2 w-full h-32 rounded-lg bg-gray-200 overflow-hidden relative">
                  <div
                    className="w-full h-full bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity"
                    data-alt="Map view of Frankfurt city center"
                    data-location="Frankfurt Map"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-ckPeR7RKcIRivoAvLmqdQKRKk_ZmLMY3O1jt0ktQoAu-YLT1ioM_RTRTDXr7uYghQRURgufGRf6TPYxdkFnnXfCN03sY4Aca5d_BFCT5b-yeTvrDgaxQGjylSX_nl-YvmYxU5f35rqnBap1wUtILBobE1XK6oHTz6AF5Ye8eWPMvMCjklWt4ipWFHxwr7e0u3ihOwpJhXY3nxXnlr_83Paqu9ZD9i7CPdL4ZP2ekDZJ-_I6x3K-9P4TnzJV6_PWAeqg9VajhwTvI')",
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
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted dark:text-gray-400">
                        Mon - Fri
                      </span>
                      <span className="font-medium text-text-main dark:text-white">
                        11:30 - 22:00
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted dark:text-gray-400">
                        Saturday
                      </span>
                      <span className="font-medium text-text-main dark:text-white">
                        12:00 - 23:00
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted dark:text-gray-400">
                        Sunday
                      </span>
                      <span className="font-medium text-text-main dark:text-white">
                        12:00 - 21:00
                      </span>
                    </div>
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
                      href="tel:+496912345678"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        phone_iphone
                      </span>
                      <span className="font-medium text-sm">+49 69 12345678</span>
                    </a>
                    <a
                      className="flex items-center gap-3 text-text-main dark:text-white hover:text-primary transition-colors"
                      href="mailto:hello@iokifu.de"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        mail
                      </span>
                      <span className="font-medium text-sm">
                        hello@iokifu.de
                      </span>
                    </a>
                  </div>
                </div>
                <div className="mt-auto">
                  <button className="text-sm font-bold text-primary underline decoration-2 underline-offset-4 hover:text-primary-dark">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-wood-dark text-white py-12 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <div className="size-8 text-primary">
                <span className="material-symbols-outlined !text-[32px]">
                  ramen_dining
                </span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                IOKI FU
              </h2>
            </div>
            <div className="flex gap-6">
              <a
                className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-background-dark transition-colors"
                href="#"
              >
                <span className="sr-only">Instagram</span>
                {/* Abstract social icon placeholder */}
                <svg
                  fill="currentColor"
                  height="20"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a
                className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-background-dark transition-colors"
                href="#"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  fill="currentColor"
                  height="20"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a
                className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-background-dark transition-colors"
                href="#"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  fill="currentColor"
                  height="20"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex gap-6">
              <a className="hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Imprint
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Terms of Service
              </a>
            </div>
            <p>© 2024 IOKI FU Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
