import React, { useState } from "react";
import orderStore from "../zustand/OrderStore";
import { toast } from "react-toastify";

const SecVecCard2 = (props) => {
  const startDate = new Date(props.order.startDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });

  const endDate = new Date(props.order.endDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const motor = props.order.motor;
  const changeStatus = orderStore((state) => state.updateStatus);
  const [status, setStatus] = useState(props.order.status);

  const statusChanger = async (e) => {
    const payLoad = {
      data: {
        status: e.target.value,
      },
    };
    const response = await changeStatus(payLoad, props.order._id);
    if (response.success) {
      setStatus(e.target.value);
      toast.success(response.message);
    } else {
      toast.error(response.error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center mb-6 gap-4 md:gap-6 p-5 md:p-6 bg-white/5 backdrop-blur-xl rounded-[30px] md:rounded-[40px] border border-white/10 hover:bg-white/10 transition-all shadow-2xl relative overflow-hidden">
      
      {/* 1. VEHICLE IMAGE */}
      <div className="relative h-40 w-full md:h-28 md:w-40 shrink-0 rounded-[24px] md:rounded-[30px] overflow-hidden border border-white/10">
        <img
          className="w-full h-full object-cover"
          src={motor?.imageUrls?.[0] || "https://via.placeholder.com/150"}
          alt=""
        />
        {status?.toLowerCase() === "approved" && (
          <div className="absolute top-3 left-3 h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse border-2 border-emerald-900"></div>
        )}
      </div>

      {/* 2. INFO SECTION */}
      <div className="flex-1 w-full text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-3 md:mb-2">
          <h4 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter">
            {motor?.make} {motor?.model}
          </h4>
          <span
            className={`text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest border 
            ${
              status?.toLowerCase() === "pending"
                ? "bg-amber-500/20 text-amber-400 border-amber-500/20"
                : status?.toLowerCase() === "approved" || status?.toLowerCase() === "approved"
                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/20"
                : "bg-red-500/20 text-red-400 border-red-500/20"
            }`}
          >
            {status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 mt-4">
          <div className="flex flex-col">
            <p className="text-[8px] text-blue-400 font-black uppercase tracking-widest">Borrower</p>
            <p className="text-xs md:text-sm font-bold text-white uppercase italic truncate">
              {props.order.borrower?.name || "New Request"}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[8px] text-gray-500 font-black uppercase tracking-widest">Trip Period</p>
            <p className="text-xs md:text-sm font-bold text-gray-300 uppercase italic">
              {startDate} — {endDate}
            </p>
          </div>
        </div>
      </div>

      {/* 3. ACTION SECTION */}
      <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4 pt-4 md:pt-0 md:pl-8 border-t md:border-t-0 md:border-l border-white/10">
        <div className="text-left md:text-right">
          <p className="text-[8px] text-gray-500 font-black uppercase tracking-widest">Total Earnings</p>
          <p className="text-xl md:text-2xl font-black text-blue-400 italic">₹{props.order.totalPrice}</p>
        </div>

        <div className="flex gap-2">
          {status?.toLowerCase() === "pending" ? (
            <>
              <button
                value="Rejected"
                onClick={statusChanger}
                className="bg-red-500/10 hover:bg-red-500 border border-red-500/50 px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all text-red-500 hover:text-white"
              >
                Reject
              </button>
              <button
                value="Approved"
                onClick={statusChanger}
                className="bg-emerald-600 hover:bg-emerald-500 border border-emerald-500 shadow-lg shadow-emerald-600/30 px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all text-white"
              >
                Approve
              </button>
            </>
          ) : (
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-6 md:px-8 py-2 md:py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all text-gray-400 hover:text-white">
              View
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecVecCard2;