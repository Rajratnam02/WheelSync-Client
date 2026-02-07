import React from "react";

const SecVecCard = (props) => {
  const order = props.order;
  const motor = order?.motor;
  const owner = motor?.owner;

  const startDate = new Date(order?.startDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const endDate = new Date(order?.endDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const statusColor =
    order?.status === "Approved"
      ? "bg-green-500/15 text-green-400"
      : order?.status === "Rejected"
      ? "bg-red-500/15 text-red-400"
      : "bg-yellow-500/15 text-yellow-400";

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 sm:p-5 mb-5 rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-all cursor-pointer">
      
      {motor?.imageUrls?.[0] ? (
        <img
          src={motor.imageUrls[0]}
          alt={motor?.make}
          className="h-32 sm:h-20 w-full sm:w-20 rounded-xl sm:rounded-2xl object-cover shrink-0"
        />
      ) : (
        <div className="h-32 sm:h-20 w-full sm:w-20 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-xs text-gray-400 shrink-0">
          No Image
        </div>
      )}

      <div className="flex-1 flex flex-col justify-between">
        
        <div>
          <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2">
            <h4 className="text-base font-black uppercase italic tracking-tight">
              {motor?.make} {motor?.model}
            </h4>

            <span
              className={`px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase ${statusColor}`}
            >
              {order?.status}
            </span>
          </div>

          <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">
            {motor?.type} • {motor?.year} • {motor?.location}
          </p>

          <p className="text-[10px] text-gray-500 font-bold uppercase mt-2">
            Owner: {owner?.name}
          </p>
        </div>

        <div className="flex items-end justify-between mt-4">
          <div className="text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase space-y-1">
            <p>Start: {startDate}</p>
            <p>End: {endDate}</p>
          </div>

          <div className="text-right">
            <p className="text-[10px] text-gray-400 font-bold uppercase leading-none">
              Total
            </p>
            <p className="text-base sm:text-lg font-black text-white">
              ₹{order?.totalPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecVecCard;