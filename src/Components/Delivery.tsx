import deliveryImage from '../assets/delivery.jpg';
import { ShieldCheck, Truck, Clock } from 'lucide-react';

const Delivery = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-sky-50/20 to-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-medium tracking-wide shadow-2xs">
              <Truck className="w-3.5 h-3.5" />
              <span>Reliable Logistics & Supply</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                Safe, Swift, & Secure Delivery for All Your <span className="text-sky-600 font-semibold">Automotive Needs</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                We ensure your automotive supplies reach you in pristine condition. From high-grade tyres and premium lubricants to durable motor parts, our logistics network guarantees dependable delivery right to your doorstep or garage.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-sky-100/60 shadow-2xs space-y-2 text-left hover:border-sky-200 transition-all">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center text-sm">
                  🚗
                </div>
                <h4 className="text-xs font-semibold text-slate-900">Tyres Supply</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">Carefully handled and delivered with optimal tread integrity.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-sky-100/60 shadow-2xs space-y-2 text-left hover:border-sky-200 transition-all">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center text-sm">
                  🛢️
                </div>
                <h4 className="text-xs font-semibold text-slate-900">Grease  Supply</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">Securely sealed packaging to prevent leaks or contamination.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-sky-100/60 shadow-2xs space-y-2 text-left hover:border-sky-200 transition-all">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center text-sm">
                  ⚙️
                </div>
                <h4 className="text-xs font-semibold text-slate-900">Motor Parts</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">Precision parts packed securely for safe, damage-free transit.</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>100% Insured & Safe Transit</span>
              </div>
              <div className="hidden sm:block text-slate-200">•</div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>Prompt & Timely Dispatch</span>
              </div>
            </div>

          </div>

          {/* Right Column: Image Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-200/50 to-sky-100/20 rounded-3xl blur-xl opacity-60"></div>
              
              <div className="relative bg-white/80 backdrop-blur-xl p-3 rounded-3xl border border-sky-100 shadow-xl overflow-hidden">
                <img 
                  src={deliveryImage} 
                  alt="Safe Product Delivery Service" 
                  className="w-full h-[360px] sm:h-[420px] object-cover rounded-2xl transform hover:scale-[1.01] transition duration-700"
                />
                
                {/* Floating mini badge over image */}
                <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-md border border-slate-100/80 p-3.5 rounded-2xl shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Direct Dispatch Network</p>
                    <p className="text-[10px] text-slate-400">Delivering quality components nationwide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Delivery;