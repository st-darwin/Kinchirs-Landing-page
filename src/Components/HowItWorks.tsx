
import { ShoppingCart, Store, Truck, PhoneCall } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Explore & Order Online",
      description: "Browse our extensive catalog of high-grade tyres, premium grease, and durable motor parts. Select your items and complete your order instantly.",
      icon: <ShoppingCart className="w-5 h-5 text-sky-600" />,
      badge: "Step 1"
    },
    {
      step: "02",
      title: "Choose Your Fulfillment",
      description: "Pick the option that suits you best: visit our physical store with your digital receipt for immediate pickup, or arrange swift delivery.",
      icon: <Store className="w-5 h-5 text-sky-600" />,
      badge: "Step 2"
    },
    {
      step: "03",
      title: "Receive & Hit the Road",
      description: "Get your products safely delivered to your doorstep, or stop by our store where our team is ready to assist you. Need help? Call us at 09114742360.",
      icon: <Truck className="w-5 h-5 text-sky-600" />,
      badge: "Step 3"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-sky-50/30 to-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-medium tracking-wide shadow-2xs">
            <span>Simple & Flexible Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            How It <span className="text-sky-600 font-semibold">Works</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal">
            Whether you prefer picking up items in-person or having them securely delivered, getting your automotive supplies is seamless.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, index) => (
            <div 
              key={index}
              className="relative bg-white/80 backdrop-blur-xl border border-sky-100/80 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top Row: Number & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-2xl font-black text-sky-200 tracking-tighter">
                  {item.step}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-sky-600 uppercase tracking-widest block">
                  {item.badge}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                <span>Fast & Reliable</span>
                <div className="w-6 h-6 rounded-full bg-sky-50 flex items-center justify-center text-sky-600">
                  ✓
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-600 to-sky-500 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold tracking-tight">Ready to get your tyres, grease, or parts?</h4>
            <p className="text-xs text-sky-100">Order online now or call our direct line to arrange your delivery or pickup.</p>
          </div>
          <a
            href="tel:09114742360"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-sky-700 font-bold text-xs hover:bg-sky-50 transition-all shadow-md cursor-pointer shrink-0"
          >
            <PhoneCall className="w-4 h-4 text-sky-600" />
            <span>Call 08068200125</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;