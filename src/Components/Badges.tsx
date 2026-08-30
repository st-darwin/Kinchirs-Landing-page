import { ShieldCheck, Truck, Award, ThumbsUp, Star, CheckCircle } from 'lucide-react';

const Badges = () => {
    const highlights = [
        {
            icon: ShieldCheck,
            title: "Top-Tier Quality",
            description: "Committed to delivering premium, heavy-duty automotive supplies built for maximum durability.",
        },
        {
            icon: Award,
            title: "Industry Excellence",
            description: "Recognized for providing dependable motor parts and industrial grease you can trust.",
        },
        {
            icon: Star,
            title: "Customer Satisfaction",
            description: "Dedicated to building lasting trust through reliable service and superior products.",
        },
        {
            icon: Truck,
            title: "Swift Fulfillment",
            description: "Prompt and efficient delivery ensuring your operations never miss a beat.",
        },
        {
            icon: ThumbsUp,
            title: "Proven Reliability",
            description: "A trusted name for genuine tyres and automotive essentials across the region.",
        },
        {
            icon: CheckCircle,
            title: "Authentic Standards",
            description: "Strictly sourcing genuine products to keep every vehicle performing at its best.",
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-white border-y border-sky-100/60 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold shadow-2xs">
                        
                        <span>🚀 Core Values & Standards</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        What We Are <span className="text-blue-600">Known For</span>
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        Discover the foundational commitments that make Kinchris Switch the preferred destination for premium automotive supplies.
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {highlights.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div 
                                key={index}
                                className="group p-6 sm:p-8 rounded-3xl bg-sky-50/40 hover:bg-sky-50/80 border border-sky-100/80 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/5 hover:-translate-y-1 flex items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-6 h-6" />
                                </div>
                                <div className="space-y-1.5 text-left">
                                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Badges;