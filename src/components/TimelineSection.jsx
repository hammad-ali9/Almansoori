import React, { useState } from "react";
import t1 from "../assets/timeline1.png";
import t2 from "../assets/timeline2.jpg";
import t3 from "../assets/timeline3.jpg";
import t4 from "../assets/timeline4.jpg";

const TimelineSection = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timelineData = [
    {
      year: "1997",
      title: "First Dental Clinic in Riffa",
      image: t1,
      story:
        "Almansoori Dental Clinic was launched as the first Dental Clinic in the city of Riffa. Within 8 years, it grew to become one of the leading and most successful clinics in Bahrain, with patients from all over GCC countries.",
    },
    {
      year: "2007",
      title: "Almansoori Dental Centre",
      image: t2,
      story:
        "The incredible growth of Almansoori Dental Clinic into Almansoori Dental Centre was a result of ambitious strides towards greater heights. The management provided patients with the latest and highest quality treatment using sophisticated medical equipment.",
    },
    {
      year: "2016",
      title: "Expansion & Innovation",
      image: t3,
      story:
        "Continued expansion with introduction of advanced aesthetic and dermatology services. Dr. Aysha completed her Master's in Restorative Dentistry from Manchester University and Fellowship in Anti-Aging Medicine.",
    },
    {
      year: "2022",
      title: "Almansoori Medical",
      image: t4,
      story:
        "The Dental Centre grew into AlMansoori Medical, providing preventive holistic treatment for clients. The success owes to the total dedication of management led by Dr. Aysha AlMansoori and a highly qualified professional staff.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className=" mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">our journey</h2>
          <p className="text-body max-w-2xl mx-auto">
            Discover the milestones that shaped our story and commitment to
            excellence
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
          <div
            className="absolute top-1/2 left-0 h-0.5 bg-heading -translate-y-1/2 transition-all duration-500 ease-in-out hidden md:block"
            style={{
              width: `${(activeTimeline / (timelineData.length - 1)) * 100}%`,
            }}
          ></div>

          {/* Timeline Buttons - Pill Design */}
          <div className="grid grid-cols-2 md:flex md:justify-between gap-4 md:gap-6 relative z-10">
            {timelineData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTimeline(index)}
                className={`flex items-center gap-3 px-2 py-2 pr-6 rounded-full transition-all duration-300 ${activeTimeline === index
                  ? "bg-heading shadow-lg scale-105"
                  : "bg-white shadow-md hover:shadow-lg hover:scale-102"
                  }`}
              >
                {/* Circular Image */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-white">
                  <img
                    src={`/ayesha/ayesha ${index + 1}.png`}
                    alt={`Timeline ${item.year}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Year Text - Centered */}
                <span
                  className={`font-primary text-xl md:text-2xl transition-colors flex items-center justify-center ${activeTimeline === index
                    ? "text-white"
                    : "text-body"
                    }`}
                >
                  {item.year}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden group">
            <img
              src={timelineData[activeTimeline].image}
              alt={timelineData[activeTimeline].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Title */}
            <h3 className="font-primary text-3xl md:text-4xl lg:text-5xl text-heading leading-tight">
              {timelineData[activeTimeline].title.includes('Almansoori') ? (
                <>
                  {timelineData[activeTimeline].title.split('Almansoori')[0]}
                  <span className="brand-gradient font-bold">Almansoori</span>
                  {timelineData[activeTimeline].title.split('Almansoori')[1]}
                </>
              ) : timelineData[activeTimeline].title}
            </h3>

            {/* Story */}
            <p className="text-body text-base md:text-lg leading-relaxed">
              {(() => {
                const story = timelineData[activeTimeline].story;
                const regex = /(Al[Mm]ansoori)/;
                const match = story.match(regex);
                if (match) {
                  const index = story.indexOf(match[0]);
                  return (
                    <>
                      {story.substring(0, index)}
                      <span className="brand-gradient font-semibold">{match[0]}</span>
                      {story.substring(index + match[0].length)}
                    </>
                  );
                }
                return story;
              })()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
