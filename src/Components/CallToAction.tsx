import { ArrowRight ,  Store } from 'lucide-react';

const CallToAction = () => {
    const apiUrl = import.meta.env.VITE_KINCHRIS_URL;

    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-blue-700 to-sky-700 text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl shadow-blue-600/20">
                    
                    {/* Decorative Background Accents */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                            <span> 🚀 Get Started With Kinchris Switch</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
                            Ready to Explore Our Fully Stocked Automotive Stores?
                        </h2>

                        <p className="text-sm sm:text-base text-sky-100 max-w-xl mx-auto leading-relaxed">
                            Sign in now to view our specialized stores—Mega Tyres, Boothman Grease, and Motor Parts—packed with premium, ready-to-ship products.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <button
                                onClick={() => { window.location.href = apiUrl; }}
                                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-sky-50 text-blue-900 text-xs font-bold transition-all shadow-lg shadow-black/10 flex items-center justify-center gap-2.5 cursor-pointer group"
                            >
                                <Store className="w-4 h-4 text-blue-600" />
                                <span>Sign In to View Stores</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-blue-600" />
                            </button>
                           
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CallToAction;