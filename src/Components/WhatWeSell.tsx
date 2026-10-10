import React from 'react';
import { ShieldCheck, Truck, Car, ArrowRight } from 'lucide-react';

// Import vehicle hero images from assets
import carHeroImage from '../assets/car-2.jpg';
import truckHeroImage from '../assets/car-3.jpg';

// Import car tire images and sizes
import carTire1 from '../assets/car-tyres/car-tire-1.jpg';
import carTire2 from '../assets/car-tyres/car-tire-2.jpg';
import carTire3 from '../assets/car-tyres/car-tire-3.jpg';
import carTire4 from '../assets/car-tyres/car-tire-4.jpg';

// Import truck tire images and sizes
import truckTire1 from '../assets/truck-tyre/truck-tire-1.jpg';
import truckTire2 from '../assets/truck-tyre/truck-tire-2.jpg';
import truckTire3 from '../assets/truck-tyre/truck-tire-3.jpg';
import truckTire4 from '../assets/truck-tyre/truck-tire-4.jpg';

interface TyreProduct {
    id: string;
    name: string;
    size: string;
    image: string;
    features: string;
}

const carTyres: TyreProduct[] = [
    { id: 'c1', name: 'All-Season Touring', size: '195/15c', image: carTire1, features: 'Exceptional wet grip & low road noise' },
    { id: 'c2', name: 'High-Performance Sport', size: '205/55R16', image: carTire2, features: 'Superior cornering & stability' },
    { id: 'c3', name: 'Comfort Ride Radial', size: '215/60R16', image: carTire3, features: 'Optimized tread life & efficiency' },
    { id: 'c4', name: 'Ultra-Grip Executive', size: '225/45R18', image: carTire4, features: 'Precision handling & braking' },
];

const truckTyres: TyreProduct[] = [
    { id: 't1', name: 'Heavy-Duty Long Haul', size: '315/80R22.5', image: truckTire1, features: 'Maximum mileage & resistance' },
    { id: 't2', name: 'Regional Cargo Rib', size: '295/80R22.5', image: truckTire2, features: 'Enhanced load capacity & wear' },
    { id: 't3', name: 'All-Terrain Commercial', size: '11R22.5', image: truckTire3, features: 'Aggressive tread for mixed terrain' },
    { id: 't4', name: 'Super Single Hauler', size: '11r24.5', image: truckTire4, features: 'Reduced rolling resistance' },
];

const WhatWeSell: React.FC = () => {
    return (
        <section className="py-20 bg-white text-slate-900 relative overflow-hidden">
            {/* Soft Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-sky-50/40 blur-3xl pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-20">
                
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-semibold tracking-wide shadow-2xs border border-sky-100/60">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Premium Inventory</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                        What We Sell
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        Discover our soft-touch selection of high-performance car and heavy-duty truck tires, designed for ultimate safety and road smoothness.
                    </p>
                </div>

                {/* Category 1: Car Tires Showcase */}
                <div className="bg-sky-50/20 border border-sky-100/70 rounded-3xl p-4 sm:p-8 lg:p-10 shadow-2xs space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                        <div className="lg:col-span-5 space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-sm shadow-sky-500/20">
                                <Car className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Passenger Car Tires</h3>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                Engineered for quiet comfort and superior grip. Experience smoother daily drives and enhanced confidence across all weather conditions.
                            </p>
                            <div className="pt-1">
                                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600">
                                    <span>Explore Collection</span>
                                    <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200/50 aspect-video group bg-slate-100">
                                <img 
                                    src={carHeroImage} 
                                    alt="Car tires showcase" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent flex items-end p-4 sm:p-6">
                                    <span className="text-white text-xs font-medium bg-white/15 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                                        High Performance & Touring
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Car Tires Grid - 2 Cols on Mobile, 4 on Desktop */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2">
                        {carTyres.map((tire) => (
                            <div 
                                key={tire.id} 
                                className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-slate-200/60 shadow-2xs hover:shadow-md hover:border-sky-200 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div className="space-y-2.5">
                                    <div className="aspect-square rounded-xl bg-slate-50 border border-slate-100 overflow-hidden relative">
                                        <img 
                                            src={tire.image} 
                                            alt={tire.name} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                        />
                                        <span className="absolute top-2 right-2 bg-slate-900/75 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-mono font-medium px-2 py-0.5 rounded-md">
                                            {tire.size}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-xs sm:text-sm group-hover:text-sky-600 transition-colors leading-tight">{tire.name}</h4>
                                        <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">{tire.features}</p>
                                    </div>
                                </div>
                                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-[9px] font-semibold text-sky-600 bg-sky-50/80 px-2 py-0.5 rounded">In Stock</span>
                                    <span className="text-[10px] sm:text-xs font-bold text-slate-700 font-mono">{tire.size}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Category 2: Truck Tires Showcase */}
                <div className="bg-sky-50/20 border border-sky-100/70 rounded-3xl p-4 sm:p-8 lg:p-10 shadow-2xs space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                        <div className="lg:col-span-5 space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                                <Truck className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Truck & Commercial Tires</h3>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                Built for high load-bearing endurance and long-haul reliability. Keep your fleet moving securely across demanding terrains.
                            </p>
                            <div className="pt-1">
                                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600">
                                    <span>Explore Fleet Range</span>
                                    <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200/50 aspect-video group bg-slate-100">
                                <img 
                                    src={truckHeroImage} 
                                    alt="Truck tires showcase" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent flex items-end p-4 sm:p-6">
                                    <span className="text-white text-xs font-medium bg-white/15 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                                        Heavy-Duty Long-Haul Durability
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Truck Tires Grid - 2 Cols on Mobile, 4 on Desktop */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2">
                        {truckTyres.map((tire) => (
                            <div 
                                key={tire.id} 
                                className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-slate-200/60 shadow-2xs hover:shadow-md hover:border-sky-200 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div className="space-y-2.5">
                                    <div className="aspect-square rounded-xl bg-slate-50 border border-slate-100 overflow-hidden relative">
                                        <img 
                                            src={tire.image} 
                                            alt={tire.name} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                        />
                                        <span className="absolute top-2 right-2 bg-slate-900/75 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-mono font-medium px-2 py-0.5 rounded-md">
                                            {tire.size}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-xs sm:text-sm group-hover:text-sky-600 transition-colors leading-tight">{tire.name}</h4>
                                        <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">{tire.features}</p>
                                    </div>
                                </div>
                                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-[9px] font-semibold text-sky-600 bg-sky-50/80 px-2 py-0.5 rounded">Heavy Duty</span>
                                    <span className="text-[10px] sm:text-xs font-bold text-slate-700 font-mono">{tire.size}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhatWeSell;