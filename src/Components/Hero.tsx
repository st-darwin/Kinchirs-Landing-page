import { ArrowRight, CheckCircle2, Globe2 } from 'lucide-react';
import heroImage from '../assets/icons/heroimage.png';

const Hero = () => {
    const apiUrl = import.meta.env.VITE_KINCHRIS_URL || window.location.origin;

    return (
        <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-b from-sky-100/50 via-sky-50/20 to-white">
            {/* Ambient Soft Glow Background Blobs */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-2xl pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
                    
                    {/* Left Column: Text Content */}
                    <div className="lg:col-span-6 space-y-8 text-left order-1 lg:order-1">
                        
                        {/* Cool Badge */}
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-sky-200/80 text-sky-800 text-xs font-semibold shadow-xs shadow-sky-500/5">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                            <span>Direct Importers of Elite Tyres & Auto Supplies</span>
                        </div>

                        {/* Main Typography */}
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                                Direct-Imported Tyres, <br className="hidden sm:inline" />
                                <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                                    Unmatched Quality.
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
                                Welcome to Kinchris Switch. Experience seamless store management and browse our exclusive selection of directly imported heavy-duty tyres, industrial Boothman grease, and dependable motor parts.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                            <button
                                onClick={() => {
                                    window.location.href = apiUrl;
                                }}
                                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer group"
                            >
                                <span>Get Started</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Feature Ticks / Highlights */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-sky-100/80">
                            <div className="space-y-1">
                                <div className="flex items-center gap-1.5 text-slate-900 font-bold text-base">
                                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                    <span>Direct</span>
                                </div>
                                <span className="text-[11px] text-slate-500 font-medium tracking-tight block">Imported Tyres</span>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-1.5 text-slate-900 font-bold text-base">
                                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                    <span>100%</span>
                                </div>
                                <span className="text-[11px] text-slate-500 font-medium tracking-tight block">Genuine Parts</span>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-1.5 text-slate-900 font-bold text-base">
                                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                    <span>Real-time</span>
                                </div>
                                <span className="text-[11px] text-slate-500 font-medium tracking-tight block">Store Tracking</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image/Visual Showcase */}
                    <div className="lg:col-span-6 relative order-2 lg:order-2">
                        {/* Soft Backdrop Accent Card */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-sky-300/30 to-blue-400/20 rounded-[2.5rem] blur-2xl -z-10"></div>
                        
                        <div className="bg-white/70 backdrop-blur-2xl border border-sky-200/60 rounded-[2.5rem] p-4 sm:p-5 shadow-2xl shadow-sky-900/5 relative group">
                            <div className="overflow-hidden rounded-3xl aspect-[4/3] bg-sky-50 relative">
                                <img
                                    src={heroImage}
                                    alt="Kinchris Switch Automotive Hub"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-60"></div>
                            </div>
                            
                            {/* Floating Cool Badge Accent */}
                            <div className="absolute -bottom-6 -left-2 sm:left-6 bg-white/95 backdrop-blur-2xl border border-sky-100 p-4 rounded-2xl shadow-xl shadow-sky-600/10 flex items-center gap-3.5 transition-transform group-hover:translate-y-[-2px]">
                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white flex items-center justify-center font-bold shadow-md shadow-blue-600/25">
                                    <Globe2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-slate-900 block">Directly Imported</span>
                                    <span className="text-[11px] text-sky-600 font-semibold block">Elite Heavy-Duty Tyres</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;