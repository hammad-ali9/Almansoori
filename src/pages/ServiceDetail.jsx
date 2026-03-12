import React from "react";
import { useParams, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { services } from "../data/services";
import TestimonialsSection from "../components/TestimonialSection";

const ServiceDetail = () => {
    const { slug, subSlug } = useParams();

    // Find the main service category
    const service = services.find(
        (s) => s.title.toLowerCase() === slug?.toLowerCase() || s.slug === slug
    );

    // If sub-service slug exists, find the sub-service info
    const subService = subSlug && service?.subServices?.find(
        (sub) => sub.slug === subSlug
    );

    // If service not found, show a message
    if (!service) {
        return (
            <section className="w-full min-h-screen">
                <PageHeader
                    title="Service Not Found"
                    breadcrumb="Services"
                    breadcrumbLink="/services"
                    backgroundImage="/images/about.png"
                    backgroundColor="bg-brand-primary-400"
                />
                <div className="section-padding text-center py-20">
                    <h2 className="text-2xl text-brand-primary-950 mb-4">
                        Service not found
                    </h2>
                    <Link to="/services" className="primary-btn">
                        <span>View All Services</span>
                    </Link>
                </div>
            </section>
        );
    }

    const Icon = service.icon;
    const SubIcon = subService?.icon;

    // Display title - show sub-service name if on sub-service page
    const displayTitle = subService ? subService.name : service.title;
    const displayDescription = subService?.fullDescription || subService?.description || service.fullDescription || service.description;

    // Get treatments to display - sub-service specific or main service treatments
    const displayTreatments = subService?.treatments || service.treatments;

    return (
        <section className="w-full min-h-screen">
            <PageHeader
                title={displayTitle}
                breadcrumb={subService ? service.title : "Services"}
                breadcrumbLink={subService ? `/services/${slug}` : "/services"}
                backgroundImage={service.headerImage}
                backgroundColor="bg-brand-primary-400"
            />

            {/* Main Content Section */}
            <div className="section-padding mt-35">
                <div className="max-w-6xl mx-auto">

                    {/* Service/Sub-Service Overview */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Left - Content */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                                    {SubIcon ? (
                                        <SubIcon className="text-3xl text-heading" />
                                    ) : (
                                        <Icon className="text-3xl text-heading" />
                                    )}
                                </div>
                                <div>
                                    {subService && (
                                        <span className="text-sm text-brand-primary font-medium">{service.title}</span>
                                    )}
                                    <h1 className="font-primary text-3xl md:text-4xl text-heading">
                                        {displayTitle}
                                    </h1>
                                </div>
                            </div>

                            <p className="text-gray-700 text-lg leading-relaxed">
                                {displayDescription}
                            </p>

                            <Link to="/contact" className="primary-btn inline-block">
                                <span>Book Consultation</span>
                            </Link>
                        </div>

                        {/* Right - Image */}
                        <div className="relative">
                            <div className="bg-gray-100 rounded-3xl overflow-hidden h-[350px] md:h-[400px] border border-gray-200">
                                <img
                                    src={service.overviewImage || service.headerImage}
                                    alt={displayTitle}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sub-Services Grid (only show on main service page) */}
                    {!subService && service.subServices && service.subServices.length > 0 && (
                        <div className="mb-20">
                            <h2 className="font-primary text-2xl md:text-3xl text-heading mb-8 text-center">
                                Our {service.title} Treatments
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {service.subServices.map((sub, index) => {
                                    const SubServiceIcon = sub.icon;
                                    return (
                                        <Link
                                            key={index}
                                            to={`/services/${service.slug}/${sub.slug}`}
                                            className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg hover:border-brand-primary transition-all group"
                                        >
                                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-primary transition-colors">
                                                <SubServiceIcon className="text-2xl text-heading group-hover:text-white transition-colors" />
                                            </div>
                                            <h3 className="font-primary text-lg text-heading mb-2">
                                                {sub.name}
                                            </h3>
                                            <p className="text-gray-600 text-sm line-clamp-2">
                                                {sub.description}
                                            </p>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Treatment Details Section (only on main service page) */}
                    {!subService && service.treatmentDetails && (
                        <div className="mb-20">
                            <h2 className="font-primary text-2xl md:text-3xl text-heading mb-8 text-center">
                                Treatment Overview
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                    <h3 className="font-primary text-xl text-heading mb-3 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                                        What
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">{service.treatmentDetails.what}</p>
                                </div>
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                    <h3 className="font-primary text-xl text-heading mb-3 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                                        Aim
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">{service.treatmentDetails.aim}</p>
                                </div>
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                    <h3 className="font-primary text-xl text-heading mb-3 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                                        Who
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">{service.treatmentDetails.who}</p>
                                </div>
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                    <h3 className="font-primary text-xl text-heading mb-3 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                                        How
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">{service.treatmentDetails.how}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Treatments & Pricing Section */}
                    {displayTreatments && displayTreatments.length > 0 && (
                        <div className="mb-20">
                            <h2 className="font-primary text-2xl md:text-3xl text-heading mb-8 text-center">
                                {subService ? `${subService.name} Treatments` : "Our Treatments & Pricing"}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {displayTreatments.map((treatment, index) => (
                                    <div
                                        key={index}
                                        className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group ${treatment.featured ? 'ring-2 ring-gray-950' : ''}`}
                                    >
                                        {treatment.image && (
                                            <div className="h-48 overflow-hidden">
                                                <img
                                                    src={treatment.image}
                                                    alt={treatment.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        )}
                                        <div className="p-5">
                                            <h3 className="font-secondary-700 text-lg text-heading mb-2">
                                                {treatment.name}
                                            </h3>
                                            {treatment.description && (
                                                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                                    {treatment.description}
                                                </p>
                                            )}
                                            <div className="flex justify-between items-center">
                                                <span className="bg-gray-100 text-heading px-3 py-1 rounded-full text-lg font-bold">
                                                    {typeof treatment.price === 'number' ? `${treatment.price} BD` : treatment.price}
                                                </span>
                                                {treatment.featured && (
                                                    <span className="text-xs bg-gray-950 text-white px-2 py-1 rounded-full">
                                                        Popular
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Benefits Section (main service only) */}
                    {!subService && service.benefits && (
                        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20 border border-gray-100">
                            <h2 className="font-primary text-2xl md:text-3xl text-heading mb-8 text-center">
                                Why Choose Our {service.title}?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {service.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-white font-bold text-sm">✓</span>
                                        </div>
                                        <span className="text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Process Section (main service only) */}
                    {!subService && service.process && (
                        <div className="mb-20">
                            <h2 className="font-primary text-2xl md:text-3xl text-heading mb-8 text-center">
                                Our Treatment Process
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {service.process.map((item, index) => (
                                    <div key={index} className="relative">
                                        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow h-full">
                                            <div className="w-12 h-12 bg-heading rounded-full flex items-center justify-center mb-4">
                                                <span className="text-white font-bold">{index + 1}</span>
                                            </div>
                                            <h3 className="font-primary text-xl text-heading mb-2">
                                                {item.step}
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                {item.desc}
                                            </p>
                                        </div>
                                        {index < service.process.length - 1 && (
                                            <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Related Sub-Services (on sub-service page) */}
                    {subService && service.subServices && service.subServices.length > 1 && (
                        <div className="mb-20">
                            <h2 className="font-primary text-2xl md:text-3xl text-heading mb-8 text-center">
                                Other {service.title} Treatments
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {service.subServices
                                    .filter(sub => sub.slug !== subSlug)
                                    .slice(0, 4)
                                    .map((sub, index) => {
                                        const RelatedIcon = sub.icon;
                                        return (
                                            <Link
                                                key={index}
                                                to={`/services/${service.slug}/${sub.slug}`}
                                                className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg hover:border-brand-primary transition-all group"
                                            >
                                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-brand-primary transition-colors">
                                                    <RelatedIcon className="text-xl text-heading group-hover:text-white transition-colors" />
                                                </div>
                                                <h3 className="font-medium text-heading text-sm">
                                                    {sub.name}
                                                </h3>
                                            </Link>
                                        );
                                    })}
                            </div>
                        </div>
                    )}

                    {/* FAQ Section (main service only) */}
                    {!subService && service.faqs && (
                        <div className="mb-20">
                            <h2 className="font-primary text-2xl md:text-3xl text-heading mb-8 text-center">
                                Frequently Asked Questions
                            </h2>
                            <div className="max-w-3xl mx-auto space-y-4">
                                {service.faqs.map((faq, index) => (
                                    <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6">
                                        <h3 className="font-secondary-700 text-lg text-heading mb-2">
                                            {faq.q}
                                        </h3>
                                        <p className="text-gray-600">
                                            {faq.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA Section */}
                    <div className="bg-heading rounded-3xl p-8 md:p-12 text-center">
                        <h2 className="font-primary text-2xl md:text-3xl text-white mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            Take the first step towards a healthier, more beautiful smile.
                            Book your consultation with Dr. Aysha AlMansoori today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="primary-btn">
                                <span>Book Appointment</span>
                            </Link>
                            <a href="tel:+97317760666" className="outline-btn">
                                <span>Call 17760666</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Services */}
            <div className="section-padding bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-primary text-2xl md:text-3xl text-heading mb-8 text-center">
                        Explore Our Other Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.filter(s => s.slug !== service.slug).slice(0, 3).map((otherService, index) => {
                            const OtherIcon = otherService.icon;
                            return (
                                <Link
                                    key={index}
                                    to={`/services/${otherService.slug}`}
                                    className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow group"
                                >
                                    <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                                        <OtherIcon className="text-2xl text-heading" />
                                    </div>
                                    <h3 className="font-primary text-xl text-heading mb-2">
                                        {otherService.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-2">
                                        {otherService.description}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            <TestimonialsSection />
        </section>
    );
};

export default ServiceDetail;
