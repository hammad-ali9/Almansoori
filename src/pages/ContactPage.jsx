import React from "react";
import PageHeader from "../components/PageHeader";
import ContactSection from "../components/ContactSection";
import TestimonialsSection from "../components/TestimonialSection";
import contactImg from "../assets/contact.jpg";

const ContactPage = () => {
  return (
    <section className="w-full min-h-screen">
      <PageHeader
        title="Contact Us"
        breadcrumb="Home"
        breadcrumbLink="/"
        backgroundImage={contactImg}
        backgroundColor="bg-brand-primary-400"
      />
      <ContactSection />
      <TestimonialsSection />
    </section>
  );
};

export default ContactPage;
