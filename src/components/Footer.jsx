import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="relative bg-[#020205] pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Soft Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Identity */}
          <div className="col-span-1 lg:col-span-1">
            <div 
              onClick={() => navigate("/")} 
              className="flex items-center gap-2 mb-6 cursor-pointer"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tighter text-white uppercase italic">
                WHEEL<span className="text-blue-500">SYNC</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Redefining community mobility through trust. Rent, borrow, and lend vehicles with ease across your neighborhood.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-6">Mobility</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><button onClick={() => navigate("/explore")} className="hover:text-blue-400 transition-colors">Explore Fleet</button></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">List Your Vehicle</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Safety & Trust</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing Guide</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-6">Community</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><button onClick={() => navigate("/working")} className="hover:text-blue-400 transition-colors">How It Works</button></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Member Stories</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Support Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter - Simplified */}
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-md">
            <h4 className="text-sm font-bold text-white mb-2">Join the Journey</h4>
            <p className="text-zinc-500 text-xs mb-6">Get updates on new rides near you.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 text-xs text-zinc-300 outline-none focus:border-blue-500 transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 hover:text-white transition-colors">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12l5-5-5-5"/></svg>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-600">
            &copy; {currentYear} WheelSync Collective. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">User Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;