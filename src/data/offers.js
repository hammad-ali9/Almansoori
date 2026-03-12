import { FaStar, FaTooth, FaHeartPulse, FaSpa } from "react-icons/fa6";

export const offerCategories = [
    { id: "all", name: "All Offers", icon: FaStar },
    { id: "aesthetics", name: "Aesthetics", icon: FaSpa },
    { id: "dental", name: "Dental", icon: FaTooth },
    { id: "skincare", name: "Skin Care", icon: FaStar },
    { id: "wellness", name: "Wellness", icon: FaHeartPulse },
];

export const offers = [
    {
        id: 1,
        category: "aesthetics",
        title: "Glow & Radiance Package",
        description: "A powerful double-glow treatment that instantly brightens, smooths, and revives your skin with zero downtime.",
        includes: ["HydraFacial Treatment", "LED Light Therapy", "Skin Analysis"],
        originalPrice: 120,
        salePrice: 89,
        validFrom: "Feb 1, 2026",
        validTo: "Feb 28, 2026",
        featured: true,
        image: "/services/Hydrafacial/hydrafacila_glow.jpg",
    },
    {
        id: 2,
        category: "dental",
        title: "Complete Smile Makeover",
        description: "Transform your smile with our comprehensive dental package including whitening and consultation.",
        includes: ["Teeth Whitening", "Dental Consultation", "X-Ray Examination"],
        originalPrice: 250,
        salePrice: 175,
        validFrom: "Feb 1, 2026",
        validTo: "Mar 15, 2026",
        featured: true,
        image: "/services/Dental/dental_image.jpg",
    },
    {
        id: 3,
        category: "skincare",
        title: "Clear Skin Bundle",
        description: "Targets breakouts fast for clearer, smoother, brighter skin with our advanced treatments.",
        includes: ["Chemical Peel", "Laser Genesis", "Oxygen Facial"],
        originalPrice: 180,
        salePrice: 129,
        validFrom: "Feb 1, 2026",
        validTo: "Feb 28, 2026",
        featured: true,
        image: "/services/Hydrafacial/diamond hydrafacial.jpg",
    },
    {
        id: 4,
        category: "wellness",
        title: "Immunity Boost IV",
        description: "Rapidly restores energy, immunity, and hydration for optimal wellness and recovery.",
        includes: ["Vitamin C Megadose", "Hydration IV", "B12 Booster"],
        originalPrice: 150,
        salePrice: 99,
        validFrom: "Feb 1, 2026",
        validTo: "Feb 28, 2026",
        featured: false,
        image: "/images/doctor.png",
    },
    {
        id: 5,
        category: "aesthetics",
        title: "Anti-Aging Renewal",
        description: "Deep rejuvenation combo that restores youth, boosts collagen, and renews your skin from within.",
        includes: ["Botox Treatment", "Dermal Filler", "Skin Tightening"],
        originalPrice: 350,
        salePrice: 275,
        validFrom: "Feb 1, 2026",
        validTo: "Mar 31, 2026",
        featured: false,
        image: "/services/RF/full face with neck.jpg",
    },
    {
        id: 6,
        category: "dental",
        title: "Family Dental Care",
        description: "Comprehensive dental checkup package for the whole family at an unbeatable price.",
        includes: ["4x Dental Checkups", "4x Cleaning Sessions", "Family Consultation"],
        originalPrice: 200,
        salePrice: 140,
        validFrom: "Feb 1, 2026",
        validTo: "Apr 30, 2026",
        featured: false,
        image: "/services/Dental/tooth and gum cleaning.jpg",
    },
];

export const getFeaturedOffers = () => offers.filter((offer) => offer.featured);

export const getOffersByCategory = (categoryId) => {
    if (categoryId === "all") return offers;
    return offers.filter((offer) => offer.category === categoryId);
};
