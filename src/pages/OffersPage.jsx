import React, { useState } from "react";
import { FaWhatsapp, FaFilter } from "react-icons/fa6";
import PageHeader from "../components/PageHeader";
import OfferCard from "../components/OfferCard";
import { offerCategories, getOffersByCategory } from "../data/offers";
import AnimatedSection from "../components/AnimatedSection";

const OffersPage = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredOffers = getOffersByCategory(activeCategory);

    return (
        <section className="w-full min-h-screen">
            <PageHeader
                title="Offers & Happenings"
                breadcrumb="Home"
                breadcrumbLink="/"
                backgroundImage="/services/Hydrafacial/hydrafacila_glow.jpg"
            />

            <div className="pt-44 md:pt-35 bg-gray-50">
                <div className="py-12 md:py-16 px-4 md:px-8 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        {/* Category Filter Section */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <FaFilter className="text-brand-primary" />
                                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    Filter by Category
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {offerCategories.map((category) => {
                                    const Icon = category.icon;
                                    const isActive = activeCategory === category.id;
                                    return (
                                        <button
                                            key={category.id}
                                            onClick={() => setActiveCategory(category.id)}
                                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${isActive
                                                ? "bg-brand-primary text-white border-brand-primary shadow-lg scale-105"
                                                : "bg-white text-gray-600 border-gray-200 hover:border-brand-primary hover:text-brand-primary"
                                                }`}
                                        >
                                            <Icon className="text-lg" />
                                            <span>{category.name}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="mb-8">
                            <p className="text-gray-500">
                                Showing <span className="font-semibold text-heading">{filteredOffers.length}</span> offers
                                {activeCategory !== "all" && (
                                    <span> in <span className="font-semibold text-brand-primary">{offerCategories.find(c => c.id === activeCategory)?.name}</span></span>
                                )}
                            </p>
                        </div>

                        {/* Offers Grid */}
                        <AnimatedSection animation="fadeUp" delay={0.1}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredOffers.map((offer, index) => (
                                    <OfferCard
                                        key={offer.id}
                                        offer={offer}
                                        featured={index === 0 && activeCategory === "all"}
                                    />
                                ))}
                            </div>
                        </AnimatedSection>

                        {/* Empty State */}
                        {filteredOffers.length === 0 && (
                            <div className="text-center py-20 bg-white rounded-3xl">
                                <div className="text-6xl mb-4">🎁</div>
                                <h3 className="font-primary text-2xl text-heading mb-2">No Offers Available</h3>
                                <p className="text-gray-500 text-lg">
                                    No offers available in this category at the moment.
                                </p>
                                <button
                                    onClick={() => setActiveCategory("all")}
                                    className="mt-6 px-6 py-3 bg-brand-primary text-white rounded-full font-medium hover:opacity-90 transition-all"
                                >
                                    View All Offers
                                </button>
                            </div>
                        )}

                        {/* WhatsApp CTA */}
                        <div className="mt-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative z-10">
                                <h3 className="font-primary text-2xl md:text-4xl text-white mb-4">
                                    Have Questions About Our Offers?
                                </h3>
                                <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">
                                    Our team is ready to help you choose the perfect package for your
                                    needs. Reach out to us on WhatsApp for instant assistance.
                                </p>
                                <a
                                    href="https://wa.me/97317000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-10 py-4 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                                >
                                    <FaWhatsapp className="text-2xl" />
                                    <span>Chat on WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OffersPage;
