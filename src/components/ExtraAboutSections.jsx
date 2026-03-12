import React from "react";
import { FaSchool, FaBookOpen, FaBuilding, FaHandshake } from "react-icons/fa";

const ExtraAboutSections = () => {
    return (
        <div className="space-y-0">
            {/* Community Service Section */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="section-heading mb-4">Community Service</h2>
                        <p className="text-body max-w-2xl mx-auto">
                            Our commitment goes beyond our clinic walls. We actively engage with the community
                            to promote health and wellness for all.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-gray-50 rounded-3xl text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                <FaSchool className="text-3xl text-heading" />
                            </div>
                            <h4 className="font-primary text-xl text-heading mb-3">School Visits</h4>
                            <p className="text-body text-sm">
                                Providing dental screenings and oral health education to the next generation in schools across Bahrain.
                            </p>
                        </div>

                        <div className="p-8 bg-gray-50 rounded-3xl text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                <FaBookOpen className="text-3xl text-heading" />
                            </div>
                            <h4 className="font-primary text-xl text-heading mb-3">Education</h4>
                            <p className="text-body text-sm">
                                Workshops and seminars on mental health, skincare, and overall physiological wellbeing for the public.
                            </p>
                        </div>

                        <div className="p-8 bg-gray-50 rounded-3xl text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                <FaBuilding className="text-3xl text-heading" />
                            </div>
                            <h4 className="font-primary text-xl text-heading mb-3">Company Wellness</h4>
                            <p className="text-body text-sm">
                                Partnering with local companies to provide health check-ups and wellness programs for employees.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insurance Partners Section */}
            <section className="section-padding bg-heading text-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center gap-3 mb-4">
                            <FaHandshake className="text-white text-2xl" />
                            <span className="text-white/80 font-semibold tracking-widest uppercase text-sm">Partners</span>
                        </div>
                        <h2 className="font-primary text-4xl mb-6">Our Insurance Partners</h2>
                        <p className="text-white/80 leading-relaxed mb-8">
                            We work with most major insurance providers to ensure you receive the care you need with
                            maximum convenience and minimum hassle.
                        </p>
                        <div className="inline-flex py-3 px-6 bg-white text-heading rounded-full text-sm font-medium">
                            Accepting All Major Insurance Companies in Bahrain
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {/* Placeholder for insurance logos */}
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="h-20 bg-white/10 rounded-xl flex items-center justify-center border border-white/5 hover:bg-white/20 transition-colors">
                                <span className="text-white/40 text-xs font-medium">Insurance Logo {i}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExtraAboutSections;
