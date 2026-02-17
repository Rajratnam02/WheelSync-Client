import React from 'react';
import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      number: "01",
      title: "Browse the Library",
      description: "Explore a community-owned collection of cars and bikes near you. From daily commuters to weekend rides, find exactly what you need."
    },
    {
      number: "02",
      title: "Check it Out",
      description: "Just like borrowing a book, send a request to the owner. Once they approve your request, you're ready to pick up the keys."
    },
    {
      number: "03",
      title: "Hit the Road",
      description: "Enjoy your journey with full peace of mind. Our community is built on trust, ensuring every ride is well-maintained and reliable."
    },
    {
      number: "04",
      title: "Return and Review",
      description: "Bring the vehicle back to the agreed location. Rate your experience to help our library stay high-quality for the next person."
    }
  ];

  return (
    <div className="min-h-screen text-white relative pb-32">
      
      {/* Header Section */}
      <section className="pt-32 pb-20 px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-6">
          How <span className="text-blue-500">WheelSync</span> Works
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Think of us as a community library, but for mobility. We make borrowing and lending 
          cars and bikes as simple and personal as sharing a book.
        </p>
      </section>

      {/* Steps Grid */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-3xl hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-black text-blue-500 italic">
                  {step.number}
                </span>
                <div className="h-px flex-1 bg-white/10"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dual CTA Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-12 bg-blue-600 rounded-[3rem] text-center shadow-xl shadow-blue-600/20">
            <h2 className="text-2xl font-black uppercase italic mb-4">Want to borrow?</h2>
            <p className="text-blue-100 text-sm mb-8">Find the perfect ride for your next trip.</p>
            <button 
              onClick={() => navigate('/explore')}
              className="bg-white text-blue-600 px-10 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all"
            >
              Find a Ride
            </button>
          </div>

          <div className="p-12 bg-white/5 border border-white/10 rounded-[3rem] text-center backdrop-blur-md">
            <h2 className="text-2xl font-black uppercase italic mb-4 text-white">Want to lend?</h2>
            <p className="text-slate-400 text-sm mb-8">Turn your idle vehicle into a community asset.</p>
            <button 
              onClick={() => navigate('/register')}
              className="bg-white/10 text-white border border-white/20 px-10 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/20 transition-all"
            >
              List Your Vehicle
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;