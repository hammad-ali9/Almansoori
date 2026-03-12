import React from "react";
import { visionMissionValues } from "../data/aboutContent";
import { FaEye, FaBullseye } from "react-icons/fa6";

const VMVSection = () => {
    const { vision, mission, values } = visionMissionValues;

    return (
        <section className="w-full bg-gradient-to-br from-gray-800 to-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 text-white/80 font-semibold tracking-widest uppercase text-xs mb-4">
                        <span className="w-8 h-0.5 bg-white/50"></span>
                        Our Foundation
                        <span className="w-8 h-0.5 bg-white/50"></span>
                    </span>
                    <h2 className="font-primary text-4xl md:text-5xl text-white mb-4">
                        Vision, Mission & Values
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        The guiding principles that define who we are and how we serve our community
                    </p>
                </div>

                {/* Vision & Mission Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                    {/* Vision Card */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center">
                                <FaEye className="text-2xl text-white" />
                            </div>
                            <h3 className="font-primary text-2xl text-white">{vision.title}</h3>
                        </div>
                        <p className="text-white/80 leading-relaxed">
                            {vision.content}
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center">
                                <FaBullseye className="text-2xl text-white" />
                            </div>
                            <h3 className="font-primary text-2xl text-white">{mission.title}</h3>
                        </div>
                        <p className="text-white/80 leading-relaxed">
                            {mission.content}
                        </p>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mt-16">
                    <h3 className="font-primary text-2xl md:text-3xl text-white text-center mb-10">
                        Our Core Values
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group"
                                >
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-primary transition-colors">
                                        <Icon className="text-xl text-white" />
                                    </div>
                                    <h4 className="font-primary text-lg text-white mb-2">
                                        {value.title}
                                    </h4>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VMVSection;
