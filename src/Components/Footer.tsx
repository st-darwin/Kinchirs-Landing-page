
import { Mail, Phone, MapPin, ArrowUp, ToolCase } from 'lucide-react';
import logo from '../assets/icons/logo.png';

const Footer = () => {
    const apiUrl = import.meta.env.VITE_KINCHRIS_URL;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gradient-to-b from-slate-50 via-blue-50/40 to-slate-100 text-slate-600 pt-20 pb-12 border-t border-slate-200 relative overflow-hidden">
            
            {/* Ambient Glow Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-300/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-200/80">
                    
                    {/* Brand Info */}
                    <div className="lg:col-span-2 space-y-5 text-left">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-2xl bg-white p-2 flex items-center justify-center border border-slate-200 shadow-sm shadow-blue-500/5">
                                <img src={logo} alt="Kinchris Switch Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-lg font-bold text-slate-900 tracking-tight">Kinchris Switch Enterprise</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
                            Your premier automotive enterprise and management hub. Powering your fleet and machinery with Mega Tyres, Boothman Grease, and dependable Motor Parts.
                        </p>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-700 text-[11px] font-medium">
                            <ToolCase className="w-3 h-3 text-blue-600" />
                            <span>Secure Enterprise Management Portal</span>
                        </div>
                    </div>

                    {/* Quick Stores */}
                    <div className="space-y-4 text-left">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Our Stores</h4>
                        <ul className="space-y-3 text-xs">
                            <li>
                                <a 
                                    href={apiUrl} 
                                    className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1.5 group cursor-pointer"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></span>
                                    Mega Tyres
                                </a>
                            </li>
                            <li>
                                <a 
                                    href={apiUrl} 
                                    className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1.5 group cursor-pointer"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></span>
                                    Boothman Grease
                                </a>
                            </li>
                            <li>
                                <a 
                                    href={apiUrl} 
                                    className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1.5 group cursor-pointer"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></span>
                                    Motor Parts
                                </a>
                            </li>
                            <li>
                                <a 
                                    href={apiUrl} 
                                    className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1.5 group cursor-pointer"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></span>
                                    Full Catalog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4 text-left">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Navigation</h4>
                        <ul className="space-y-3 text-xs">
                            <li>
                                <a href="#about" className="text-slate-500 hover:text-blue-600 transition-colors">About Enterprise</a>
                            </li>
                            <li>
                                <a href="#stores" className="text-slate-500 hover:text-blue-600 transition-colors">Featured Stores</a>
                            </li>
                            <li>
                                <a href={apiUrl} className="text-slate-500 hover:text-blue-600 transition-colors cursor-pointer">User Sign In</a>
                            </li>
                            <li>
                                <a href={apiUrl} className="text-slate-500 hover:text-blue-600 transition-colors cursor-pointer">Admin Portal</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4 text-left">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Contact Us</h4>
                        <ul className="space-y-3 text-xs text-slate-500">
                            <li className="flex items-start gap-2.5">
                                <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                    <MapPin className="w-3.5 h-3.5" />
                                </div>
                                <span>Kinchris Switch Enterprise</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                                    <Phone className="w-3.5 h-3.5" />
                                </div>
                                <span>+234 (0) 806 820 0125</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                                    <Mail className="w-3.5 h-3.5" />
                                </div>
                                <span>support@kinchrisswitch.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Kinchris Switch Enterprise. All rights reserved.</p>
                    
                    <div className="flex items-center gap-6">
                        <span className="hover:text-blue-600 cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-blue-600 cursor-pointer transition-colors">Terms of Service</span>
                        <button
                            onClick={scrollToTop}
                            className="w-9 h-9 rounded-xl bg-white hover:bg-blue-600 border border-slate-200 text-slate-600 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm shadow-blue-500/5"
                            title="Scroll to top"
                        >
                            <ArrowUp className="w-4 h-4" />
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;