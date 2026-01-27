import React from "react";

const SecVecCard2 = ({ order, onApprove, onReject }) => {
  const startDate = new Date(order?.startDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });

  const endDate = new Date(order?.endDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const motor = order?.motor;
  const renter = order?.borrower;
  const status = order?.status || "pending"; // 'pending', 'approved', 'rejected'

  return (
    <div className="flex flex-col lg:flex-row items-center mb-6 gap-6 p-6 bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 hover:bg-white/10 transition-all shadow-2xl relative overflow-hidden">
      
      {/* 1. VEHICLE IMAGE */}
      <div className="relative h-28 w-40 shrink-0 rounded-[30px] overflow-hidden border border-white/10">
        <img
          className="w-full h-full object-cover"
          src={motor?.imageUrls?.[0] || "https://via.placeholder.com/150"}
          alt=""
        />
        {status === "approved" && (
          <div className="absolute top-3 left-3 h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
        )}
      </div>

      {/* 2. INFO SECTION */}
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-2">
          <h4 className="text-xl font-black uppercase italic tracking-tighter">
            {motor?.make} {motor?.model}
          </h4>
          <span className={`text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest 
            ${status === 'pending' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/20' : 
              status === 'approved' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20' : 
              'bg-red-500/20 text-red-400 border border-red-500/20'}`}>
            {status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-4">
          <div>
            <p className="text-[8px] text-blue-400 font-black uppercase tracking-widest">Borrower</p>
            <p className="text-sm font-bold text-white uppercase italic">{renter?.name || "New Request"}</p>
          </div>
          <div>
            <p className="text-[8px] text-gray-500 font-black uppercase tracking-widest">Trip Period</p>
            <p className="text-sm font-bold text-gray-300 uppercase italic">{startDate} — {endDate}</p>
          </div>
        </div>
      </div>

      {/* 3. ACTION SECTION (Approve/Reject Logic) */}
      <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between w-full lg:w-auto gap-4 lg:pl-8 lg:border-l border-white/10">
        <div className="text-left lg:text-right">
          <p className="text-[8px] text-gray-500 font-black uppercase tracking-widest">Total Earnings</p>
          <p className="text-2xl font-black text-blue-400 italic">₹{order?.totalPrice}</p>
        </div>

        <div className="flex gap-3">
          {status.toLowerCase() === "pending" ? (
            <>
              <button 
                onClick={() => onReject(order._id)}
                className="bg-red-500/10 hover:bg-red-500 border border-red-500/50 px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all text-red-500 hover:text-white"
              >
                Reject
              </button>
              <button 
                onClick={() => onApprove(order._id)}
                className="bg-emerald-600 hover:bg-emerald-500 border border-emerald-500 shadow-lg shadow-emerald-600/30 px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all text-white"
              >
                Approve
              </button>
            </>
          ) : (
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all text-gray-400 hover:text-white">
              View Details
            </button>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default SecVecCard2;