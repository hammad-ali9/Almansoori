import React from "react";
import PageHeader from "../components/PageHeader";
import AboutSection from "../components/AboutSection";
import VMVSection from "../components/VMVSection";
import ProcessSection from "../components/ProcessSection";
import HeroSection from "../components/HeroSection";
import TestimonialsSection from "../components/TestimonialSection";
import TeamSection from "../components/TeamSection";
import AnimatedSection from "../components/AnimatedSection";
import about_changed from "../assets/about_changed.jpg";

const About = () => {
    return (
        <section className="w-full min-h-screen">
            <PageHeader
                title="About Us"
                breadcrumb="Home"
                breadcrumbLink="/"
                backgroundImage={about_changed}
                backgroundColor="bg-brand-primary-400"
            />

            <AnimatedSection animation="fadeUp" delay={0.1}>
                <AboutSection />
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.1}>
                <VMVSection />
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.1}>
                <ProcessSection />
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.1}>
                <HeroSection />
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.1}>
                <TeamSection />
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.1}>
                <TestimonialsSection />
            </AnimatedSection>
        </section>
    );
};

export default About;
