import { ArrowRight, ShoppingBag, Check, Disc, Droplet, Wrench } from 'lucide-react';

const FeaturedProducts = () => {
    const apiUrl = import.meta.env.VITE_KINCHRIS_URL;

    const stores = [
        {
            title: "Mega Tyres",
            category: "Tyres & Rubber",
            description: "Engineered for maximum road grip, high load capacity, and extended durability across rugged terrain.",
            badge: "Best Seller",
            icon: Disc,
        },
        {
            title: "Boothman Grease",
            category: "Lubricants & Grease",
            description: "Superior thermal stability and lubrication for heavy machinery, bearings, and automotive joints.",
            badge: "High Demand",
            icon: Droplet,
        },
        {
            title: "Motor Parts",
            category: "Components & Spares",
            description: "Genuine replacement parts designed to keep engines running smoothly and efficiently under pressure.",
            badge: "Verified Genuine",
            icon: Wrench,
        },
    ];

    return (
        <section id="stores" className="py-20 md:py-28 bg-gradient-to-b from-white via-sky-50/30 to-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4 max-w-xl text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold shadow-2xs">
                            <span> 🚀 Exclusive Inventory</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Featured Store <span className="text-blue-600">Categories</span>
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            Explore our specialized store hubs built to meet rigorous industrial and automotive requirements.
                        </p>
                    </div>

                    <button
                        onClick={() => { window.location.href = apiUrl; }}
                        className="self-start md:self-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-sky-50 border border-sky-200 text-xs font-semibold text-slate-700 transition-all shadow-sm flex items-center gap-2 cursor-pointer group"
                    >
                        <span>Browse Full Catalog</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-blue-600" />
                    </button>
                </div>

                {/* Stores Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stores.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div 
                                key={index}
                                className="bg-white/80 backdrop-blur-xl border border-sky-100/80 rounded-3xl p-6 sm:p-8 shadow-xl shadow-sky-900/5 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between group text-left"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform">
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                                            {item.badge}
                                        </span>
                                    </div>

                                    <div className="space-y-2 pt-2">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">
                                            {item.category}
                                        </span>
                                        <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    <ul className="space-y-2 pt-2 border-t border-sky-50">
                                        <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                            <span>Quality inspected & tested</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                            <span>Available for immediate stock request</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="pt-8">
                                    <button
                                        onClick={() => { window.location.href = apiUrl; }}
                                        className="w-full py-3.5 rounded-2xl bg-sky-50 group-hover:bg-blue-600 text-slate-700 group-hover:text-white text-xs font-semibold transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <ShoppingBag className="w-4 h-4" />
                                        <span>Visit {item.title}</span>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default FeaturedProducts;