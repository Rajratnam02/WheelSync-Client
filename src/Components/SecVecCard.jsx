import React from "react";

const SecVecCard = ({ order }) => {
  const startDate = new Date(order?.startDate).toLocaleDateString("en-US", {
    day:"numeric",
    month: "short",
    year: "numeric",
  });

  const endDate = new Date(order?.endDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const motor = order?.motor;
  const owner = motor?.owner;

  return (
    <div className="flex items-center mb-5 gap-5 p-4 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
      
      {/* Fallback image */}
      {motor?.imageUrls?.[0] ? (
        <img
          className="h-16 w-16 rounded-2xl object-cover"
          src={motor.imageUrls[0]}
          alt=""
        />
      ) : (
        <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center text-xs text-gray-400">
          No Image
        </div>
      )}

      <div className="flex-1">
        <h4 className="text-sm font-black uppercase italic tracking-tight leading-none">
          {motor?.make || "Unknown Motor"}
        </h4>

        <p className="text-[8px] text-gray-500 font-bold uppercase mt-1">
          Owner: {owner?.name || "Unknown"}
        </p>

        <p className="text-[8px] text-gray-400 font-bold uppercase block mt-2">
          Start: {startDate}
        </p>

        <p className="text-[8px] text-gray-400 font-bold uppercase block mt-2">
          End: {endDate}
        </p>
      </div>
    </div>
  );
};

export default SecVecCard;
