import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarDays } from "react-icons/fa6";

const OfferCard = ({ offer, featured = false }) => {
    const discountPercent = Math.round(
        ((offer.originalPrice - offer.salePrice) / offer.originalPrice) * 100
    );

    return (
        <div
            className={`group relative rounded-3xl overflow-hidden transition-all duration-500 ${featured
                ? "bg-brand-primary text-white shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                : "bg-gray-50 hover:bg-gray-100"
                }`}
        >
            {/* Discount Badge */}
            <div
                className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-sm font-semibold ${featured ? "bg-white text-brand-primary" : "bg-brand-primary text-white"
                    }`}
            >
                {discountPercent}% OFF
            </div>

            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                    className={`absolute inset-0 ${featured
                        ? "bg-gradient-to-t from-brand-primary via-brand-primary/50 to-transparent"
                        : "bg-gradient-to-t from-gray-900/60 to-transparent"
                        }`}
                />
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Title */}
                <h3
                    className={`font-primary text-xl md:text-2xl mb-2 ${featured ? "text-white" : "text-heading"
                        }`}
                >
                    {offer.title}
                </h3>

                {/* Description */}
                <p
                    className={`text-sm mb-4 line-clamp-2 ${featured ? "text-white/80" : "text-gray-600"
                        }`}
                >
                    {offer.description}
                </p>

                {/* Includes List */}
                <div className="mb-4">
                    <p
                        className={`text-xs font-semibold mb-2 ${featured ? "text-white/60" : "text-gray-400"
                            }`}
                    >
                        INCLUDES:
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {offer.includes.slice(0, 3).map((item, index) => (
                            <span
                                key={index}
                                className={`text-xs px-2 py-1 rounded-full ${featured
                                    ? "bg-white/10 text-white/90"
                                    : "bg-gray-200 text-gray-600"
                                    }`}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Price */}
                <div className="flex items-end gap-3 mb-4">
                    <span
                        className={`text-2xl font-bold ${featured ? "text-white" : "text-heading"
                            }`}
                    >
                        {offer.salePrice} BHD
                    </span>
                    <span
                        className={`text-base line-through ${featured ? "text-white/50" : "text-gray-400"
                            }`}
                    >
                        {offer.originalPrice} BHD
                    </span>
                </div>

                {/* Validity */}
                <div
                    className={`flex items-center gap-2 text-xs mb-4 ${featured ? "text-white/60" : "text-gray-400"
                        }`}
                >
                    <FaCalendarDays />
                    <span>
                        Valid: {offer.validFrom} - {offer.validTo}
                    </span>
                </div>

                {/* CTA */}
                <Link
                    to="/contact"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${featured
                        ? "bg-white text-brand-primary hover:bg-gray-100"
                        : "bg-brand-primary text-white hover:opacity-90"
                        }`}
                >
                    <span>Book Now</span>
                    <FaArrowRight className="text-sm" />
                </Link>
            </div>
        </div>
    );
};

export default OfferCard;
