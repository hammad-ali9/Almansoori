import React from "react";
import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import HeroSection from "../components/HeroSection";
import TestimonialsSection from "../components/TestimonialSection";
import service_header from "../assets/service_header.jpg";

const ServicesPage = () => {
  return (
    <section className="w-full min-h-screen">
      <PageHeader
        title="Services"
        breadcrumb="Home"
        breadcrumbLink="/about"
        backgroundImage={service_header}
        backgroundColor="bg-brand-primary-400"
      />

      <div className="pt-35">
        <Services />
        <HeroSection />
        <TestimonialsSection />
      </div>
    </section>
  );
};

export default ServicesPage;
