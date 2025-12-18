import React, { useState } from 'react';
import { FaMotorcycle, FaBars, FaXmark } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import authStore from '../Zustand(State Management)/AuthManagement';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = authStore((state) => state.user);

  const logout = async () => {
    await authStore.getState().logout();
    navigate("/login");
    window.location.reload();
  };

  const navLinks = [
    { name: "How it Works", path: "/" },
    { name: "Our Fleet", path: "/" },
    { name: "Why Us", path: "/" },
    { name: "Contact", path: "/" },
  ];

  return (
    <nav className='px-6 py-4 flex bg-slate-900/80 backdrop-blur-md fixed top-0 w-full justify-between items-center z-[100] border-b border-white/10'>
      
      {/* Logo Section */}
      <div onClick={() => navigate("/")} className='flex gap-3 items-center z-[110]'>
        <FaMotorcycle className='text-3xl md:text-4xl cursor-pointer text-[#14B8A6]' />
        <p className='text-2xl md:text-3xl cursor-pointer font-bold'>
          Wheel<span className='text-[#14B8A6]'>Sync</span>
        </p>
      </div>

      {/* Desktop Navigation Links */}
      <div className='hidden md:flex items-center gap-8 text-white font-medium'>
        {navLinks.map((link) => (
          <p key={link.name} className='cursor-pointer hover:text-teal-400 transition-colors'>
            {link.name}
          </p>
        ))}
      </div>

      {/* Desktop Auth Buttons / Profile */}
      <div className='hidden md:flex items-center gap-4'>
        {!user ? (
          <div className='flex items-center gap-3'>
            <button onClick={() => navigate("/login")} className='px-4 py-2 text-teal-400 hover:bg-teal-400/10 rounded-lg transition-all'>
              Log in
            </button>
            <button onClick={() => navigate("/register")} className='bg-teal-500 hover:bg-teal-400 text-white px-5 py-2 rounded-lg font-semibold shadow-lg transition-all'>
              Sign Up
            </button>
          </div>
        ) : (
          <div className='flex gap-5 items-center'>
            <div onClick={() => navigate("/profile")} className='h-10 w-10 cursor-pointer flex items-center justify-center font-bold text-xl rounded-full border border-teal-500 text-teal-500'>
              {user.name[0]}
            </div>
            <button onClick={logout} className='bg-teal-500 hover:bg-teal-400 text-white px-5 py-2 rounded-lg font-semibold transition-all'>
              Log Out
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className='md:hidden z-[110] text-3xl text-white' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaXmark /> : <FaBars />}
      </div>

      {/* Mobile Full-Screen Overlay */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-slate-950 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out z-[100] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <p key={link.name} onClick={() => { navigate(link.path); setIsOpen(false); }} className='text-2xl text-white cursor-pointer'>
            {link.name}
          </p>
        ))}
        
        <hr className='w-1/2 border-white/10' />

        {!user ? (
          <div className='flex flex-col items-center gap-6'>
            <p onClick={() => { navigate("/login"); setIsOpen(false); }} className='text-xl text-teal-400'>Log in</p>
            <button onClick={() => { navigate("/register"); setIsOpen(false); }} className='bg-teal-500 text-white px-10 py-3 rounded-full text-xl'>
              Sign Up
            </button>
          </div>
        ) : (
          <div className='flex flex-col items-center gap-6'>
            <div onClick={() => { navigate("/profile"); setIsOpen(false); }} className='h-16 w-16 flex items-center justify-center text-3xl rounded-full border-2 border-teal-500 text-white font-bold'>
              {user.name[0]}
            </div>
            <button onClick={logout} className='bg-red-500/20 text-red-500 border border-red-500/50 px-10 py-3 rounded-full text-xl'>
              Log Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;