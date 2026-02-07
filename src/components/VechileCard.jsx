import React from "react";

const VechileCard = (props) => {
  const editHandler = () => {
    props.setEditMotors(true);
    props.setMotorId(props.motor._id);
  };

  return (
    <div className="mt-5 p-4 md:p-5 flex flex-col sm:flex-row gap-4 md:gap-6 items-center sm:items-stretch rounded-[24px] md:rounded-[36px] border border-white/10 bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-all group cursor-pointer">
      
      {/* Image Container */}
      <div className="h-48 w-full sm:h-32 sm:w-48 rounded-[20px] md:rounded-[28px] overflow-hidden shrink-0">
        {props.motor.imageUrls?.[0] ? (
          <img
            src={props.motor.imageUrls[0]}
            alt={`${props.motor.make} ${props.motor.model}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-white/10 flex items-center justify-center text-xs text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between w-full">
        
        {/* Top Section */}
        <div className="text-center sm:text-left">
          <p className="text-blue-400 text-[9px] font-black uppercase tracking-widest">
            {props.motor.type}
          </p>

          <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tight mt-1">
            {props.motor.make} {props.motor.model}
          </h3>

          <p className="text-[10px] text-gray-400 font-bold uppercase mt-2">
            {props.motor.year} • {props.motor.location}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 sm:mt-5 flex items-center justify-between">
          
          <span
            className={`px-3 md:px-4 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase ${
              props.motor.isAvailable
                ? "bg-emerald-500/20 text-emerald-400"
                : "bg-orange-500/20 text-orange-400"
            }`}
          >
            {props.motor.isAvailable ? "Available" : "Unavailable"}
          </span>

          <div className="flex items-center gap-3 md:gap-4">
            <p className="text-sm font-black text-white">
              ₹{props.motor.pricePerDay}
              <span className="text-[10px] text-gray-400 font-bold uppercase ml-1">
                /day
              </span>
            </p>

            <button
              onClick={editHandler}
              className="text-[10px] font-bold uppercase text-gray-400 hover:text-white transition-colors border border-white/10 px-2 py-1 rounded-md sm:border-none sm:p-0"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VechileCard;