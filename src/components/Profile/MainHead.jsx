import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MainHead = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Logic to determine active tab based on the URL path
    let lastPart = location.pathname.split('/').pop();
    if (lastPart === 'profile' || lastPart === '') {
        lastPart = 'info';
    }
    const pathName = lastPart;

    const clickHandler = (e) => {
        const val = e.currentTarget.value; // currentTarget ensures we get the value from the button
        const path = val === 'info' ? '' : `/${val}`;
        navigate(`/profile${path}`);
    };
    
    return (
        <div className='pt-8 md:pt-20 border-b-2 border-b-[#787c80]/30'>
            <p className='text-3xl md:text-4xl inter-700 text-white'>My Dashboard</p>
            
            {/* Scrollable Tab Container */}
            <div className='flex mt-10 gap-2 overflow-x-auto no-scrollbar scroll-smooth'>
                {[
                  { id: 'info', label: 'My Info' },
                  { id: 'listing', label: 'My Listing' },
                  { id: 'myBookinglist', label: 'My Bookings' },
                  { id: 'rentals', label: 'Active Rentals' },
                  { id: 'history', label: 'History' }
                ].map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={clickHandler} 
                    disabled={pathName === tab.id} 
                    value={tab.id} 
                    className='px-5 py-3 whitespace-nowrap cursor-pointer rounded-t-xl text-base md:text-lg inter-600 text-white transition-all duration-200
                               disabled:text-teal-400 bg-transparent disabled:bg-[#1E293B] 
                               disabled:border-b-teal-500 disabled:border-b-2'
                  >
                    {tab.label}
                  </button>
                ))}
            </div>
        </div>
    );
};

export default MainHead;