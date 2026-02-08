export interface NavLink {
    label: string;
    href: string;
}

export interface Dish {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
    category: "Ramen" | "Udon" | "Small Plates" | "Desserts" | "Drinks";
    isPopular?: boolean;
    isVegetarian?: boolean;
    isSpicy?: boolean;
}

export interface OpeningHour {
    day: string;
    hours: string;
}

export interface ContactInfo {
    phone: string;
    email: string;
    address: string;
    city: string;
    zip: string;
}

export interface SocialLink {
    platform: string;
    href: string;
    iconUrl: string;
    label: string;
}

export const navLinks: NavLink[] = [
    { label: "Menu", href: "/menu" },
    { label: "Location", href: "/location" },
    { label: "About Us", href: "/about" },
];

export const socialLinks: SocialLink[] = [
    { platform: "Instagram", href: "https://instagram.com", iconUrl: "/instagram.svg", label: "Instagram" },
    { platform: "Facebook", href: "https://facebook.com", iconUrl: "/facebook.svg", label: "Facebook" },
    { platform: "Twitter", href: "https://twitter.com", iconUrl: "/twitter.svg", label: "Twitter" },
];

export const heroContent = {
    home: {
        welcomeTag: "Welcome to Ioki Fu",
        titlePart1: "Authentic Ramen &",
        titlePart2: "Matcha",
        titlePart3: "in Frankfurt",
        description: "Experience the warmth of traditional Udon and the craft of modern Japanese cuisine in a serene atmosphere.",
        ctaPrimary: "Book a Table",
        ctaSecondary: "View Menu",
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7jw1WiHkyDhAqxLxDT6ENFbyzxcLGfOhdD0Qh4qhS4pmbct3mQdF5jM_yfpCCdWsyPoctMetdfMwesmhCkpGQEz_y1gxDzdQ7a8B57ZuDqbMFTuz7CDt1_YDdlxwOkZacwGa_PtINDPdfTBixDwP5rztPN1kV5KstjbdR0RHEw2oe-H2KEHD8U4hAs9CIvn8CEoOioLVqU5ig2UM3P2KaId8Xs_2q6BJO61NqM7ZnUetWu-80SxLQXRq14wuN3LwHiCa5H3zxaWYP",
    },
    menu: {
        welcomeTag: "Our Culinary Craft",
        titlePart1: "Discover the",
        titlePart2: "Soul",
        titlePart3: "of Japan",
        description: "From our signature 12-hour broth to hand-whisked ceremonial matcha, every item tells a story.",
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEoCptMC7S8nBCrGO_Z9i8nt3KeMqX4rFbxJZUb-VEOYNrBij3tQvvmKPR30aIoA4kMtmA8zI3pIgWpEZRYdIfNSG7-cH-JpzmJVDM56Q5itXFQbiMArNSj5WoqUvzIT_EtAIXO0aoUirw1V6Xr3idRt1PJPTY_NbqwpLeZdL9q8SaX4G9fdFZcadUrBQMtSlTK8wRXzEEe9On627CjOIwyuz4FSI0RjrgawEsRbn6icVt1KMsxbr8-8PeepmzDlZwxshVrTA7om-",
    },
    about: {
        welcomeTag: "Our Heritage",
        titlePart1: "Traditional Roots,",
        titlePart2: "Modern",
        titlePart3: "Spirit",
        description: "Bringing the authentic taste of Kyoto to the heart of Frankfurt since 2024.",
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv-L5F8ST6uiO_VSrCyhvTDsRPUD0Zn3TkFSvkskY73XewDhdRHMqao4kEEIpKxpRZWHyvCiSLZBR5MFReGREAL4EPkC5iOdge6YyDQmnRyrdL8uJJzTT1y6Be7mOo7jAVQq5hkZWSz_UeUrkARdmT53QLHZmXKnkd1ffWqsbYWe13i76JD3770rkw2LuZ2Siy7nRQRV7cr68FwsSMbusHIekgpQcvGXSjZ3ScImFRmYnM2Rk7t-KyUrRzdjH6-fvWFpltqHNh-9A3",
    },
};

export const dishes: Dish[] = [
    {
        id: 1,
        name: "Spicy Miso Ramen",
        price: "€16.50",
        category: "Ramen",
        description: "Rich pork broth with customized spicy miso paste, bamboo shoots, and soft-boiled egg.",
        image: "/dishes/spicy-miso-ramen.jpg",
        isPopular: true,
        isSpicy: true,
    },
    {
        id: 2,
        name: "Tempura Udon",
        price: "€18.00",
        category: "Udon",
        description: "Thick hand-pulled wheat noodles in a light dashi broth, served with two pieces of crispy prawn tempura.",
        image: "/dishes/tempura-udon.jpg",
    },
    {
        id: 3,
        name: "Matcha Tiramisu",
        price: "€8.50",
        category: "Desserts",
        description: "A Japanese twist on the Italian classic. Layers of matcha-soaked sponge and mascarpone cream.",
        image: "/dishes/matcha-tiramisu.jpg",
        isVegetarian: true,
    },
    {
        id: 4,
        name: "Crispy Gyoza",
        price: "€7.00",
        category: "Small Plates",
        description: "Pan-fried dumplings filled with juicy chicken and vegetables, served with ponzu sauce.",
        image: "/dishes/crispy-gyoza.jpg",
    },
];

export const openingHours: OpeningHour[] = [
    { day: "Mon - Fri", hours: "11:30 - 22:00" },
    { day: "Saturday", hours: "12:00 - 23:00" },
    { day: "Sunday", hours: "12:00 - 21:00" },
];

export const contactInfo: ContactInfo = {
    phone: "+49 69 12345678",
    email: "hello@iokifu.de",
    address: "Mainzer Landstraße 123",
    zip: "60327",
    city: "Frankfurt am Main",
};

export const mapPreview = {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-ckPeR7RKcIRivoAvLmqdQKRKk_ZmLMY3O1jt0ktQoAu-YLT1ioM_RTRTDXr7uYghQRURgufGRf6TPYxdkFnnXfCN03sY4Aca5d_BFCT5b-yeTvrGgaxQGjylSX_nl-YvmYxU5f35rqnBap1wUtILBobE1XK6oHTz6AF5Ye8eWPMvMCjklWt4ipWFHxwr7e0u3ihOwpJhXY3nxXnlr_83Paqu9ZD9i7CPdL4ZP2ekDZJ-_I6x3K-9P4TnzJV6_PWAeqg9VajhwTvI",
};

export const aboutContent = {
    story: "Founded by a group of passionate chefs from Kyoto, Ioki Fu was born out of a desire to bring genuine Japanese hospitality and flavors to Frankfurt. Our noodles are hand-pulled daily, and our broths simmer for at least 12 hours to achieve the perfect depth of umami.",
    mission: "We believe that food is a bridge between cultures. Our mission is to provide an oasis of calm and culinary excellence in the heart of the city.",
    values: [
        { title: "Authenticity", description: "Traditional recipes passed down through generations." },
        { title: "Quality", description: "Only the freshest, locally sourced ingredients where possible." },
        { title: "Omotenashi", description: "The Japanese art of selfless hospitality." },
    ]
};
