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
    isPopular?: boolean;
    isVegetarian?: boolean;
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
}

export const navLinks: NavLink[] = [
    { label: "Menu", href: "#" },
    { label: "Location", href: "#" },
    { label: "About", href: "#" },
];

export const heroContent = {
    welcomeTag: "Welcome to Ioki Fu",
    titlePart1: "Authentic Ramen &",
    titlePart2: "Matcha",
    titlePart3: "in Frankfurt",
    description: "Experience the warmth of traditional Udon and the craft of modern Japanese cuisine in a serene atmosphere.",
    ctaPrimary: "Book a Table",
    ctaSecondary: "View Menu",
    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7jw1WiHkyDhAqxLxDT6ENFbyzxcLGfOhdD0Qh4qhS4pmbct3mQdF5jM_yfpCCdWsyPoctMetdfMwesmhCkpGQEz_y1gxDzdQ7a8B57ZuDqbMFTuz7CDt1_YDdlxwOkZacwGa_PtINDPdfTBixDwP5rztPN1kV5KstjbdR0RHEw2oe-H2KEHD8U4hAs9CIvn8CEoOioLVqU5ig2UM3P2KaId8Xs_2q6BJO61NqM7ZnUetWu-80SxLQXRq14wuN3LwHiCa5H3zxaWYP",
};

export const dishes: Dish[] = [
    {
        id: 1,
        name: "Spicy Miso Ramen",
        price: "€16.50",
        description: "Rich pork broth with customized spicy miso paste, bamboo shoots, and soft-boiled egg.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEoCptMC7S8nBCrGO_Z9i8nt3KeMqX4rFbxJZUb-VEOYNrBij3tQvvmKPR30aIoA4kMtmA8zI3pIgWpEZRYdIfNSG7-cH-JpzmJVDM56Q5itXFQbiMArNSj5WoqUvzIT_EtAIXO0aoUirw1V6Xr3idRt1PJPiTY_NbqwpLeZdL9q8SaX4G9fdFZcadUrBQMtSlTK8wRXzEEe9On627CjOIwyuz4FSI0RjrgawEsRbn6icVt1KMsxbr8-8PeepmzDlZwxshVrTA7om-",
        isPopular: true,
    },
    {
        id: 2,
        name: "Tempura Udon",
        price: "€18.00",
        description: "Thick hand-pulled wheat noodles in a light dashi broth, served with two pieces of crispy prawn tempura.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2VSR7JqmFzJnn46fSNAWEtRxi0Quq6y_2quldKpQXpCC3XXkLa3N5EXXe62MJkxWHQG93owzm1GzJWEc2MTr1I9BexkMtxa98VKgc6EVGHM_dqSbdFY4Xa1H0L5kVqtXarb6zx2BN2cztZk6CNUFJJUeYiTa_o5KHaQILBpCb8QOOS_EkWnTUJc3W9lEFi1A3XFyLHqtjfOrRL3i61DIO0mZwM2BDrmRpJn_o_bcpR6vB7wrGxRB-LtIidb4OHI2SXz6orIJ7203F",
    },
    {
        id: 3,
        name: "Matcha Tiramisu",
        price: "€8.50",
        description: "A Japanese twist on the Italian classic. Layers of matcha-soaked sponge and mascarpone cream.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0X_p6qL7Z9Z917f18Dny0VWqE2fBUGXJouG-e8EByv1CSjoUfZPnCazQ7vJXKK4q7Nx-yrK76upoksX4NQWx6KrZlOKqy-b9G0slxbYXsr4qxjEbPf-a-BQiy1Z7THNd9wVlI8eXk8Ap12d81o2INkAkhxnwA5FUQbigDLP1_1nMzHIuta-2ShK7pH5vL0mSWbVCqeShS6UGEuVdsaPju-XzSm1mSC_xHNlrYLloSdP8XYmvKmo4gwN7zPXLky6gdovmf-WZ0_1l8",
        isVegetarian: true,
    },
    {
        id: 4,
        name: "Crispy Gyoza",
        price: "€7.00",
        description: "Pan-fried dumplings filled with juicy chicken and vegetables, served with ponzu sauce.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv-L5F8ST6uiO_VSrCyhvTDsRPUD0Zn3TkFSvkskY73XewDhdRHMqao4kEEIpKxpRZWHyvCiSLZBR5MFReGREAL4EPkC5iOdge6YyDQmnRyrdL8uJJzTT1y6Be7mOo7jAVQq5hkZWSz_UeUrkARdmT53QLHZmXKnkd1ffWqsbYWe13i76JD3770rkw2LuZ2Siy7nRQRV7cr68FwsSMbusHIekgpQcvGXSjZ3ScImFRmYnM2Rk7t-KyUrRzdjH6-fvWFpltqHNh-9A3",
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
    city: "60327 Frankfurt am Main",
};

export const mapPreview = {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-ckPeR7RKcIRivoAvLmqdQKRKk_ZmLMY3O1jt0ktQoAu-YLT1ioM_RTRTDXr7uYghQRURgufGRf6TPYxdkFnnXfCN03sY4Aca5d_BFCT5b-yeTvrDgaxQGjylSX_nl-YvmYxU5f35rqnBap1wUtILBobE1XK6oHTz6AF5Ye8eWPMvMCjklWt4ipWFHxwr7e0u3ihOwpJhXY3nxXnlr_83Paqu9ZD9i7CPdL4ZP2ekDZJ-_I6x3K-9P4TnzJV6_PWAeqg9VajhwTvI",
};
