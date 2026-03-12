import React from "react";
import doctorImg from '../assets/about.png';


const AboutSection = () => {
  return (
    <section className="section-padding bg-white mt-35">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            {/* Title */}
            <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl text-heading leading-tight capitalize">
              Dr. Aysha <span className="brand-gradient font-bold">AlMansoori</span>
            </h2>

            {/* Role */}
            <p className="text-heading font-semibold text-lg">
              Chairman & Managing Director
            </p>

            {/* Qualifications */}
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-heading font-bold">•</span>
                <p className="text-body text-sm md:text-base">
                  <strong>30+ years</strong> of experience in Aesthetic & Restorative Dentistry
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-heading font-bold">•</span>
                <p className="text-body text-sm md:text-base">
                  <strong>Bachelor Degree</strong> from Cairo University (1994)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-heading font-bold">•</span>
                <p className="text-body text-sm md:text-base">
                  <strong>Master's Degree</strong> in Aesthetic Dentistry - UCLA, California (2011)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-heading font-bold">•</span>
                <p className="text-body text-sm md:text-base">
                  <strong>Master's Degree</strong> in Restorative & Aesthetic Dentistry - Manchester University (2016)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-heading font-bold">•</span>
                <p className="text-body text-sm md:text-base">
                  <strong>Certified Implant Dentist</strong> since 2000 & Invisalign Provider
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-heading font-bold">•</span>
                <p className="text-body text-sm md:text-base">
                  <strong>Fellowship in Anti-Aging</strong> (2016) - Face Enhancement Dentistry Specialist
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-body text-sm md:text-base leading-relaxed">
              Dr. Aysha AlMansoori established AlMansoori Dental Clinic in 1997. She specializes
              in face enhancement dentistry, dental face lift, and aesthetic dentistry. Her
              interests in mandibular advancement led her to obtain her fellowship in anti-aging
              and start her brand of face enhancement dentistry.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="bg-gray-200 rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]">
              <img
                src={doctorImg}
                alt="Dr. Aysha AlMansoori - Chairman & Managing Director"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
