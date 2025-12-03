import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MainHead = () => {
    const navigate = useNavigate();
    const location = useLocation();



    let lastPart = location.pathname.split('/').pop();
    if (lastPart === 'profile' || lastPart === '') {
        lastPart = 'info';
    }
    const pathName = lastPart;
    

    const clickHandler = (e) => {
        e.preventDefault();
        const path = e.target.value === 'info' ? '' : `/${e.target.value}`;
        navigate(`/profile${path}`);
    };
    
    return (
        <div className='pt-25 border-b-2 border-b-[#787c80]'>
            <p className='text-4xl inter-700'>My Dashboard</p>
            <div className='flex mt-10 gap-2'>
                <button onClick={clickHandler} disabled={pathName === "info"} value="info" className='px-5 py-3 cursor-pointer rounded-t-xl text-lg inter-600 text-white disabled:text-teal-500 bg-transparent disabled:bg-[#1E293B] disabled:border-b-teal-500 disabled:border-b-2'>My Info</button>
                <button onClick={clickHandler} disabled={pathName === "listing"} value="listing" className='px-5 py-3 cursor-pointer rounded-t-xl text-lg inter-600 text-white disabled:text-teal-500 bg-transparent disabled:bg-[#1E293B] disabled:border-b-teal-500 disabled:border-b-2'>My Listing</button>
                <button onClick={clickHandler} disabled={pathName === "rentals"} value="rentals" className='px-5 py-3 cursor-pointer rounded-t-xl text-lg inter-600 text-white disabled:text-teal-500 bg-transparent disabled:bg-[#1E293B] disabled:border-b-teal-500 disabled:border-b-2'>Active Rentals</button>
                <button onClick={clickHandler} disabled={pathName === "history"} value="history" className='px-5 py-3 cursor-pointer rounded-t-xl text-lg inter-600 text-white disabled:text-teal-500 bg-transparent disabled:bg-[#1E293B] disabled:border-b-teal-500 disabled:border-b-2'>History</button>
            </div>
        </div>
    );
};

export default MainHead;