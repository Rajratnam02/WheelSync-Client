import React from "react";

const VechileCard = (props) => {
  const editHandler = () => {
    props.setEditMotors(true);
    props.setMotorId(props.motor._id);
  };

  return (
    <div className="mt-5 p-5 flex gap-6 items-center rounded-[36px] border border-white/10 bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-all group cursor-pointer">
      
      {/* Image */}
      <div className="h-32 w-48 rounded-[28px] overflow-hidden shrink-0">
        {props.motor.imageUrls?.[0] ? (
          <img
            src={props.motor.imageUrls[0]}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-white/10 flex items-center justify-center text-xs text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        
        {/* Top */}
        <div>
          <p className="text-blue-400 text-[9px] font-black uppercase tracking-widest">
            {props.motor.type}
          </p>

          <h3 className="text-2xl font-black uppercase italic tracking-tight mt-1">
            {props.motor.make} {props.motor.model}
          </h3>

          <p className="text-[10px] text-gray-400 font-bold uppercase mt-2">
            {props.motor.year} • {props.motor.location}
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between">
          
          <span
            className={`px-4 py-1 rounded-full text-[10px] font-black uppercase ${
              props.motor.isAvailable
                ? "bg-emerald-500/20 text-emerald-400"
                : "bg-orange-500/20 text-orange-400"
            }`}
          >
            {props.motor.isAvailable ? "Available" : "Unavailable"}
          </span>

          <div className="flex items-center gap-4">
            <p className="text-sm font-black text-white">
              ₹{props.motor.pricePerDay}
              <span className="text-[10px] text-gray-400 font-bold uppercase">
                /day
              </span>
            </p>

            <button
              onClick={editHandler}
              className="text-[10px] font-bold uppercase text-gray-400 hover:text-white transition-colors"
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
