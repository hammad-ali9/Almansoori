import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Service from "./Service";
import { services } from "../data/services";

const Services = () => {
  const location = useLocation();
  const isServicesPage = location.pathname === "/services";
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleToggle = (index) => {
    setExpandedIndex(index);
  };

  return (
    <section className="w-full section-padding bg-white">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h4 className="section-heading">How we can help you</h4>
          <p className="mt-2 text-body">
            By adopting modern medical technology, we ensure high-quality care and accurate treatments.
          </p>
        </div>

        {!isServicesPage && (
          <Link className="primary-btn w-fit!" to="/services">
            <span>View All Services</span>
          </Link>
        )}
      </div>

      <div className="w-full flex flex-col gap-4 mt-8">
        {services.map((service, index) => (
          <Service
            key={index}
            title={service.title}
            slug={service.slug}
            headerImage={service.headerImage}
            desc={service.description}
            subServices={service.subServices}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
            hoverColor={isServicesPage ? "bg-gray-100" : "bg-white"}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
