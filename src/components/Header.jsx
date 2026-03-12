import React, { useState } from "react";
import { headerMenu } from "../data/menu";
import { services } from "../data/services";
import { Link, useLocation } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";

const Header = () => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const activeService = services[activeServiceIndex];

  return (
    <header className="w-full fixed top-0 left-0 z-50 px-4 md:px-6 pt-2 md:pt-3">
      {/* Floating rounded container - Clean white with subtle shadow */}
      <div className="bg-white backdrop-blur-sm rounded-2xl md:rounded-full shadow-xl border border-gray-200/50">
        {/* Main header row */}
        <div className="flex items-center px-4 md:px-6 py-3 justify-between lg:gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-1">
            <img src="/images/logo_gradient.svg" alt="Almansoori Logo" className="h-8 md:h-10" />
            <span className="font-primary text-heading text-base sm:text-lg leading-5 mt-1">
              almansoori
            </span>
          </div>

          {/* Desktop Navigation - hidden on mobile */}
          <div className="flex-1 items-center gap-1 justify-center hidden lg:flex">
            {headerMenu.map((item, index) => (
              item.name === "Services" ? (
                // Services with mega dropdown
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => {
                    setIsServicesOpen(false);
                    setActiveServiceIndex(0);
                  }}
                >
                  <Link
                    to={item.link}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-1 ${item.link === location.pathname || location.pathname.startsWith("/services")
                      ? "bg-heading text-white"
                      : "text-body hover:bg-gray-100 hover:text-heading"
                      }`}
                  >
                    <span>{item.name}</span>
                    <FaChevronDown className={`text-xs transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                  </Link>

                  {/* Mega Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ${isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden" style={{ width: '700px' }}>
                      <div className="flex">
                        {/* Left Column - Main Services */}
                        <div className="w-[280px] bg-gray-50 p-4 border-r border-gray-100">
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">Our Services</p>
                          <div className="flex flex-col gap-1">
                            {services.map((service, idx) => {
                              const Icon = service.icon;
                              const isActive = activeServiceIndex === idx;
                              return (
                                <Link
                                  key={idx}
                                  to={`/services/${service.slug}`}
                                  onMouseEnter={() => setActiveServiceIndex(idx)}
                                  className={`flex items-center justify-between gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${isActive ? 'bg-white shadow-sm' : 'hover:bg-white/50'}`}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isActive ? 'bg-brand-primary' : 'bg-gray-200'}`}>
                                      <Icon className={`text-xl ${isActive ? 'text-white' : 'text-heading'}`} />
                                    </div>
                                    <div>
                                      <span className={`font-medium text-sm ${isActive ? 'text-heading' : 'text-gray-600'}`}>{service.title}</span>
                                      <p className="text-xs text-gray-400">{service.subServices?.length || 0} treatments</p>
                                    </div>
                                  </div>
                                  <FaChevronRight className={`text-xs transition-colors ${isActive ? 'text-brand-primary' : 'text-gray-300'}`} />
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* Right Column - Sub Services */}
                        <div className="flex-1 p-4">
                          <div className="flex items-center justify-between mb-3">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2">{activeService?.title} Treatments</p>
                            <Link
                              to={`/services/${activeService?.slug}`}
                              className="text-xs text-brand-primary hover:underline font-medium"
                            >
                              View All →
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-2 max-h-[320px] overflow-y-auto">
                            {activeService?.subServices?.map((subService, subIdx) => {
                              const SubIcon = subService.icon;
                              return (
                                <Link
                                  key={subIdx}
                                  to={`/services/${activeService.slug}/${subService.slug}`}
                                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                                >
                                  <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors flex-shrink-0">
                                    <SubIcon className="text-lg text-gray-500 group-hover:text-white transition-colors" />
                                  </div>
                                  <div className="min-w-0">
                                    <span className="font-medium text-sm text-heading block truncate">{subService.name}</span>
                                    {subService.description && (
                                      <p className="text-xs text-gray-400 line-clamp-1">{subService.description}</p>
                                    )}
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="p-3 bg-gray-50 border-t border-gray-100">
                        <Link
                          to="/services"
                          className="flex items-center justify-center gap-2 w-full py-2 text-body hover:text-heading font-medium text-sm"
                        >
                          View All Services
                          <IoArrowForwardOutline className="text-sm" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  to={item.link}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${item.link === location.pathname
                    ? "bg-heading text-white"
                    : "text-body hover:bg-gray-100 hover:text-heading"
                    }`}
                >
                  <span>{item.name}</span>
                </Link>
              )
            ))}
          </div>

          {/* Book Appointment button - Using the dark grey color */}
          <div className="flex items-center flex-1 justify-end gap-2">
            <Link
              to="/contact"
              className="bg-heading text-white px-5 md:px-6 py-2.5 rounded-full font-medium text-sm md:text-base hover:opacity-90 transition-opacity shadow-md"
            >
              Book Appointment
            </Link>

            <div className="hidden md:flex w-10 h-10 rounded-full bg-heading items-center justify-center hover:opacity-90 transition-opacity shadow-md">
              <Link to="/contact">
                <IoArrowForwardOutline className="text-lg text-white -rotate-45" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - visible only on mobile */}
        <div className="flex lg:hidden items-center gap-2 justify-between px-4 pb-3">
          {headerMenu.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`flex-1 text-center px-2 py-2 text-sm rounded-full font-medium transition-all duration-300 ${item.link === location.pathname
                ? "bg-heading text-white"
                : "text-body hover:bg-gray-100 hover:text-heading"
                }`}
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
