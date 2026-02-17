import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020205] pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Neural Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Identity */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tighter text-white font-heading uppercase italic">
                WHEEL<span className="text-indigo-500">SYNC</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Synchronizing global logistics through neural-pathing and real-time fleet intelligence.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-6">Capabilities</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Neural Pathing</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Fleet Telemetry</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Automated Dispatch</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Asset Prediction</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-6">Ecosystem</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Partner Program</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Security Vault</a></li>
            </ul>
          </div>

          {/* Status & Newsletter */}
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] backdrop-blur-md">
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Systems Operational</span>
            </div>
            <h4 className="text-sm font-bold text-white mb-4">Sync Updates</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="terminal@user.io" 
                className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 text-xs text-zinc-300 outline-none focus:border-indigo-500 transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-500 hover:text-white transition-colors">
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
            <a href="#" className="hover:text-white transition">Privacy Protocol</a>
            <a href="#" className="hover:text-white transition">Service Level Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;