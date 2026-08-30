import { Star, Quote, Sparkles } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Uzoma Solomon",
            role: "Regular Customer",
            content: "Finding genuine tyres and motor parts has never been this seamless. Kinchris Switch is my go-to store for all quality automotive essentials.",
            rating: 5,
        },
        {
            name: "Mr. Jaden",
            role: "Satisfied Customer",
            content: "Boothman Grease provides exceptional lubrication for my equipment. The products here are top-grade and always reliable.",
            rating: 5,
        },
        {
            name: "Mr. Chibueze",
            role: "Valued Customer",
            content: "An absolute game-changer for buying authentic car parts. The quality and fast store service give me total confidence every time.",
            rating: 5,
        },
    ];

    return (
        <section id="testimonial" className="py-20 md:py-28 bg-gradient-to-b from-white via-sky-50/40 to-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold shadow-2xs">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        <span>Customer Feedback</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Trusted by <span className="text-blue-600">Our Customers</span>
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        Hear what our valued customers have to say about their shopping experience with Kinchris Switch.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((item, index) => (
                        <div 
                            key={index}
                            className="bg-white/90 backdrop-blur-xl border border-sky-100/80 rounded-3xl p-8 shadow-xl shadow-sky-900/5 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between relative group text-left"
                        >
                            <div className="absolute top-6 right-6 text-sky-200 group-hover:text-blue-300 transition-colors">
                                <Quote className="w-8 h-8 opacity-50" />
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-1">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic pt-2">
                                    "{item.content}"
                                </p>
                            </div>

                            <div className="pt-8 border-t border-sky-50 mt-6 flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {item.name}
                                    </h4>
                                    <span className="text-[11px] text-slate-500 font-medium block">
                                        {item.role}
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center font-bold text-xs border border-sky-100 shadow-2xs">
                                    {item.name.charAt(0)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;