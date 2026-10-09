import { useState } from 'react';
import logo from '../assets/icons/logo.png';

import { ArrowRight, Menu, X, Store, MessageSquare, Info } from 'lucide-react';

const LandingNavbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const apiUrl = import.meta.env.VITE_KINCHRIS_URL || window.location.origin;

    return (
        <div className="fixed top-4 inset-x-0 z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="bg-white/80 backdrop-blur-xl border border-sky-100/60 shadow-xl shadow-slate-900/5 rounded-3xl px-6 transition-all">
                <div className="h-15 flex items-center justify-between">
                    {/* Logo & Brand Name */}
                    <div  className="flex items-center gap-3 group">
                        <div className="w-11 h-11 rounded-2xl  text-white flex items-center justify-center font-bold shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
                          <img   src={logo} alt="Kinchris Switch Logo" className="w-full h-full rounded-2xl object-cover" />
                        </div>
                        <div>
                            <span className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight block">Kinchris Switch</span>
                            <span className="text-[11px] text-sky-600 font-semibold block">Automotive Store</span>
                        </div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-600">
                        <a href="#stores" className="hover:text-blue-600 transition-colors">Stores</a>
                        <a href="#testimonial" className="hover:text-blue-600 transition-colors">Testimonial</a>
                        <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
                    </nav>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={() => {
                                window.location.href = apiUrl;
                            }}
                            className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 cursor-pointer flex items-center gap-2 group"
                        >
                            <span>Get Started</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2.5 rounded-2xl bg-sky-50 text-sky-600 hover:bg-sky-100 transition-colors cursor-pointer border border-sky-100/60"
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-6 pt-2 border-t border-sky-100/60 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                        <nav className="flex flex-col space-y-1 text-xs font-semibold text-slate-700">
                            <a
                                href="#stores"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-sky-50 hover:text-blue-600 transition-colors"
                            >
                                <Store className="w-4 h-4 text-sky-500" />
                                <span>Stores</span>
                            </a>
                            <a
                                href="#testimonial"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-sky-50 hover:text-blue-600 transition-colors"
                            >
                                <MessageSquare className="w-4 h-4 text-sky-500" />
                                <span>Testimonial</span>
                            </a>
                            <a
                                href="#about"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-sky-50 hover:text-blue-600 transition-colors"
                            >
                                <Info className="w-4 h-4 text-sky-500" />
                                <span>About</span>
                            </a>
                        </nav>
                        <div className="pt-2">
                            <button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    window.location.href = apiUrl;
                                }}
                                className="w-full py-3.5 rounded-2xl bg-blue-600 text-xs font-semibold text-white shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <span>Get Started</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
};

export default LandingNavbar;