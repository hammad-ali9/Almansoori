import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGift } from "react-icons/fa6";
import { getFeaturedOffers } from "../data/offers";
import OfferCard from "./OfferCard";

const OffersSection = () => {
    const featuredOffers = getFeaturedOffers();

    return (
        <section className="w-full bg-gradient-to-br from-gray-700 to-gray-900 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div className="max-w-xl">
                        <span className="inline-flex items-center gap-2 text-white/80 font-semibold tracking-widest uppercase text-xs mb-4">
                            <span className="w-8 h-0.5 bg-white/50"></span>
                            Limited Time
                        </span>
                        <h2 className="font-primary text-4xl md:text-5xl text-white mb-3">Offers & Happenings</h2>
                        <p className="text-white/70">
                            Discover our exclusive promotions and packages designed to help
                            you look and feel your best — all at irresistible prices.
                        </p>
                    </div>

                    <Link
                        to="/offers"
                        className="bg-white text-heading px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors w-fit flex-shrink-0 flex items-center gap-2"
                    >
                        <span>View All Offers</span>
                        <FaArrowRight className="text-sm" />
                    </Link>
                </div>

                {/* Featured Offers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredOffers.map((offer, index) => (
                        <OfferCard
                            key={offer.id}
                            offer={offer}
                            featured={index === 0}
                        />
                    ))}
                </div>

                {/* Bottom Tags
                <div className="mt-12">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {['Aesthetics', 'Dental Care', 'Skincare', 'Wellness', 'Packages'].map((tag, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/80 hover:bg-white hover:text-gray-900 transition-all cursor-pointer"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default OffersSection;

