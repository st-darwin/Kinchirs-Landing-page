import { CheckCircle2, ArrowRight, Layers2 } from 'lucide-react';
import logo from '../assets/icons/logo.png';

const AboutSection = () => {
    const apiUrl = import.meta.env.VITE_KINCHRIS_URL;

    return (
        <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Enterprise Visual / Logo Showcase */}
                    <div className="lg:col-span-6 relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-sky-200/50 to-blue-400/20 rounded-3xl blur-2xl -z-10"></div>
                        <div className="bg-gradient-to-br from-sky-50/80 to-white backdrop-blur-2xl border border-sky-100 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-900/5 relative flex flex-col items-center text-center group">
                            
                            {/* Logo Display */}
                            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-white shadow-lg shadow-sky-500/10 border border-sky-100 flex items-center justify-center p-4 mb-6 group-hover:scale-105 transition-transform duration-500">
                                <img
                                    src={logo}
                                    alt="Kinchris Switch Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 mb-3">
                                Established Excellence
                            </span>

                            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                                Kinchris Switch Enterprise
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
                                Your reliable partner powering industries and vehicles with direct-imported mega tyres, Boothman grease, and dependable motor parts.
                            </p>

                            {/* Trust Pill */}
                            <div className="mt-8 flex items-center gap-6 pt-6 border-t border-sky-100/80 w-full justify-center">
                                <div className="text-center">
                                    <span className="text-lg font-bold text-slate-900 block">Direct</span>
                                    <span className="text-[11px] text-slate-500 font-medium">Tyre Imports</span>
                                </div>
                                <div className="w-px h-8 bg-sky-100"></div>
                                <div className="text-center">
                                    <span className="text-lg font-bold text-slate-900 block">100%</span>
                                    <span className="text-[11px] text-slate-500 font-medium">Genuine Parts</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: About Content */}
                    <div className="lg:col-span-6 space-y-6 text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold shadow-2xs">
                            <Layers2 className="w-3.5 h-3.5 text-blue-600" />
                            <span>Who We Are</span>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                                Powering Every Journey with <span className="text-blue-600">Direct-Imported Quality.</span>
                            </h2>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                                At Kinchris Switch, we bring top-tier reliability straight to your fleet. We directly import elite, heavy-duty tyres from global manufacturers, bridging the gap between international quality and local automotive needs. Combined with our high-performance Boothman grease and precision motor parts, our enterprise is built on trust, efficiency, and uncompromising standards.
                            </p>
                        </div>

                        {/* Bullet Highlights */}
                        <div className="space-y-3 pt-2">
                            <div className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-sky-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                                    <CheckCircle2 className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Directly Imported Tyres</h4>
                                    <p className="text-xs text-slate-600">Sourced and imported directly from world-class manufacturers for maximum safety and durability.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-sky-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                                    <CheckCircle2 className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Rigorous Quality Inspection</h4>
                                    <p className="text-xs text-slate-600">Every imported tyre and inventory item undergoes strict checks to guarantee peak performance on rugged terrains.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-sky-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                                    <CheckCircle2 className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Seamless Management & Access</h4>
                                    <p className="text-xs text-slate-600">Secure user portals designed to streamline store inventory tracking and customer requests.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                onClick={() => { window.location.href = apiUrl; }}
                                className="px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2.5 cursor-pointer group"
                            >
                                <span>Explore Our Platform</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;