import { MapPin, Navigation, Clock, Phone, MessageSquare } from 'lucide-react';

const VisitUs = () => {
    const phoneNumber = "2348068200125"; // International format for WhatsApp/Calls
    const displayPhone = "0806 820 0125";

    return (
        <section id="visit-us" className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-sky-100/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 space-y-3">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-blue-600 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-2xs">
                        Physical Showroom
                    </span>
                    <h2 className="text-3xl pt-3 sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Visit Our Location
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        Stop by Kinchris Switch to inspect our direct-imported tyres, Boothman grease, and premium motor parts in person.
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    
                    {/* Left Info Card */}
                    <div className="lg:col-span-5 bg-sky-50/40 border border-sky-100/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs">
                        <div className="space-y-6">
                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-2xl bg-white border border-sky-100 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Showroom Address</h4>
                                    <p className="text-sm font-extrabold text-slate-900 leading-snug">
                                        African Tyre Village, Lagos Progressive Block
                                    </p>
                                    <p className="text-xs text-slate-500 mt-0.5">Lagos, Nigeria</p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-2xl bg-white border border-sky-100 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                                    <Clock className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Opening Hours</h4>
                                    <p className="text-xs sm:text-sm font-bold text-slate-900">Mon – Sat: 8:00 AM – 6:00 PM</p>
                                    <p className="text-xs text-slate-500 mt-0.5">Sunday: Closed</p>
                                </div>
                            </div>

                            {/* Contact & WhatsApp */}
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-2xl bg-white border border-sky-100 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Direct Line</h4>
                                    <p className="text-xs sm:text-sm font-extrabold text-slate-900">{displayPhone}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <a 
                                            href={`tel:${phoneNumber}`}
                                            className="text-[11px] font-bold text-blue-600 hover:bg-blue-100/60 inline-flex items-center gap-1 bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-200/60 transition-colors"
                                        >
                                            <Phone className="w-3 h-3" /> Call
                                        </a>
                                        <a 
                                            href={`https://wa.me/${phoneNumber}?text=Hello%20Kinchris%20Switch,%20I%20would%20like%20to%20inquire%20about...`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[11px] font-bold text-emerald-700 hover:bg-emerald-100/60 inline-flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200/60 transition-colors"
                                        >
                                            <MessageSquare className="w-3 h-3" /> WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Directions Button */}
                        <div className="pt-2">
                            <a
                                href="https://maps.google.com/?q=African+Tyre+Village+Lagos+Progressive+Block"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <Navigation className="w-3.5 h-3.5" />
                                <span>Open in Google Maps</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Map Embed Column */}
                    <div className="lg:col-span-7 bg-sky-50/30 border border-sky-100/80 rounded-3xl overflow-hidden relative min-h-[340px] flex items-center justify-center group shadow-xs">
                        <iframe
                            title="Kinchris Switch Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.123!2d3.35!3d6.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzEnMTIuMCJOIDPCsDIxJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1650000000000!5m2!1sen!2sng"
                            className="w-full h-full absolute inset-0 border-0 filter grayscale contrast-125 opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        
                        {/* Floating Minimal Badge */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-sky-100 text-slate-900 p-3.5 rounded-2xl shadow-lg flex items-center justify-between gap-4 pointer-events-none">
                            <div>
                                <span className="text-[9px] uppercase font-semibold text-blue-600 tracking-wider block">Showroom Hub</span>
                                <span className="text-xs font-semibold text-slate-800">African Tyre Village, Lagos Progressive Block</span>
                            </div>
                            <span className="text-[10px] font-sm bg-blue-600 text-white px-3 py-1.5 rounded-full shrink-0 shadow-2xs">Kinchris Switch</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VisitUs;