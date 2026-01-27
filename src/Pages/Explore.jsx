import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import motorStore from "../zustand/MotorStore";
import VechGridCard from "../Components/VechGridCard";

export const Explore = () => {
  const location = useLocation();
  const [type,setType] = useState(location.state?.type || "Car")
  const [motor, setMotor] = useState([]);
  const getMotors = motorStore(state => state.getMotors);

  useEffect(()=>{
    const fetchMotors = async () => {
      const response = await getMotors(type);
      if(response.success){
        setMotor(response.data.motors);
      }
    }
    fetchMotors();
  },[type])


   const typeChange = (e) => {
    setType(e.target.name);
   }
    
  return (
    <div className="relative text-white max-w-7xl mx-auto px-6 pb-10 mt-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
      <div className="lg:col-span-1">
        <div className="sticky top-28 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 space-y-10 shadow-2xl">
            <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-6">Filter Wheels</h3>
                <div className="space-y-3">
                    <button onClick={typeChange} name="Car" disabled={type === "Car"} className="w-full text-left px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all bg-white/5 text-gray-400 hover:bg-white/10 disabled:bg-blue-600 disabled:text-white disabled:shadow-lg disabled:shadow-blue-600/40">
                        Car
                    </button>
                    <button onClick={typeChange} name="Bike" disabled={type === "Bike"} className="w-full text-left px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all bg-white/5 text-gray-400 hover:bg-white/10 disabled:bg-blue-600 disabled:text-white disabled:shadow-lg disabled:shadow-blue-600/40">
                        Bike
                    </button>
                </div>
            </div>
            <div className="pt-8 border-t border-white/5">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4">Quick Stats</h3>
                <p className="text-xs font-bold italic">{motor.length} Vehicles Found</p>
            </div>
            
        </div>
                </div>
        <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {motor.map((motor)=>(
                    <VechGridCard motor={motor} />
                ))}
            </div>
      </div>
    </div>
  );
};
