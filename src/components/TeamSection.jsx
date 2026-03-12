import React from "react";
import image from "../assets/team1.jpg";
import { Link } from "react-router-dom";

const TeamSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading mb-4">meet our dental team</h2>
          <p className="text-body text-base md:text-lg max-w-2xl mx-auto">
            Our dedicated team of dental professionals is committed to providing
            exceptional care and creating beautiful, healthy smiles for every patient.
          </p>
        </div>

        {/* Team Image with Overlay Content */}
        <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[600px] shadow-2xl">
          {/* Team Image */}
          <img
            src={image}
            alt="AlMansoori Dental Team"
            className="w-full h-full object-cover object-center"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12 text-white z-10">
            <div className="max-w-3xl">
              <h3 className="font-primary text-3xl md:text-4xl lg:text-5xl mb-4">
                Passionate About Your Smile
              </h3>
              <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed mb-6">
                Led by Dr. Aysha AlMansoori, our experienced team brings together
                diverse dental expertise and a shared commitment to delivering
                personalized, gentle care to every patient.
              </p>
              <Link to="/about" className="primary-btn relative z-20">
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats or Team Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow">
            <div className="font-primary text-3xl md:text-4xl text-heading mb-2">
              10+
            </div>
            <p className="text-body text-sm md:text-base font-secondary-600">
              Dental Experts
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow">
            <div className="font-primary text-3xl md:text-4xl text-heading mb-2">
              15+
            </div>
            <p className="text-body text-sm md:text-base font-secondary-600">
              Years Experience
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow">
            <div className="font-primary text-3xl md:text-4xl text-heading mb-2">
              15K+
            </div>
            <p className="text-body text-sm md:text-base font-secondary-600">
              Happy Smiles
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow">
            <div className="font-primary text-3xl md:text-4xl text-heading mb-2">
              6
            </div>
            <p className="text-body text-sm md:text-base font-secondary-600">
              Days Open
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
