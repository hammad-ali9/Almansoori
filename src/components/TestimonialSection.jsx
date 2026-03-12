import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: 'Dr. Aysha transformed my smile completely! After years of being self-conscious about my teeth, I finally have the confidence to smile freely. The teeth whitening and veneers look so natural.',
      name: 'Fatima Al-Rashid',
      role: 'Cosmetic Dentistry Patient',
      image: '/clients/gc1.jpg'
    },
    {
      id: 2,
      quote: 'I was terrified of dentists until I visited AlMansoori Dental. Dr. Aysha and her team made me feel so comfortable. The painless treatment approach they promised was real - I barely felt a thing!',
      name: 'Ahmed Hassan',
      role: 'General Dentistry Patient',
      image: '/clients/bc1.jpg'
    },
    {
      id: 3,
      quote: 'My dental implants look and feel like my natural teeth. The procedure was smooth, and the aftercare was exceptional. I can eat and smile with complete confidence now. Highly recommend!',
      name: 'Sara Mohammed',
      role: 'Dental Implant Patient',
      image: '/clients/gc2.jpg'
    },
    {
      id: 4,
      quote: 'The whole family visits Dr. Aysha - from my elderly parents to my young kids. She has this amazing ability to make everyone feel at ease. The clinic is modern and the staff is incredibly friendly.',
      name: 'Khalid AlMansoori',
      role: 'Family Dentistry Patient',
      image: '/clients/bc2.jpg'
    },
    {
      id: 5,
      quote: 'I got Invisalign treatment here and the results exceeded my expectations. Dr. Aysha monitored every step carefully. My teeth are perfectly aligned now and no one even knew I was wearing aligners!',
      name: 'Layla Ibrahim',
      role: 'Orthodontics Patient',
      image: '/clients/gc3.jpg'
    },
    {
      id: 6,
      quote: 'Emergency root canal on a weekend - they accommodated me immediately. The treatment was quick, professional, and completely painless. Thank you for saving my tooth!',
      name: 'Omar Al-Farsi',
      role: 'Emergency Care Patient',
      image: '/clients/bc3.jpg'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="mx-auto">

        {/* Section Header */}
        <h2 className="section-heading text-center mt-8 mb-16">
          What Our Patients<br />Say About Us
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="text-heading"
                >
                  <path
                    d="M12 28C12 24.6863 14.6863 22 18 22C21.3137 22 24 24.6863 24 28C24 31.3137 21.3137 34 18 34C14.6863 34 12 31.3137 12 28ZM18 22C18 17 21 14 26 14V18C23 18 22 19 22 22H18Z"
                    fill="currentColor"
                  />
                  <path
                    d="M26 28C26 24.6863 28.6863 22 32 22C35.3137 22 38 24.6863 38 28C38 31.3137 35.3137 34 32 34C28.6863 34 26 31.3137 26 28ZM32 22C32 17 35 14 40 14V18C37 18 36 19 36 22H32Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-body text-sm md:text-base leading-relaxed mb-8">
                {(() => {
                  const quote = testimonial.quote;
                  const regex = /(Al[Mm]ansoori)/;
                  const match = quote.match(regex);
                  if (match) {
                    const index = quote.indexOf(match[0]);
                    return (
                      <>
                        {quote.substring(0, index)}
                        <span className="brand-gradient font-semibold">{match[0]}</span>
                        {quote.substring(index + match[0].length)}
                      </>
                    );
                  }
                  return quote;
                })()}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-secondary-700 text-heading text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-body-light text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
