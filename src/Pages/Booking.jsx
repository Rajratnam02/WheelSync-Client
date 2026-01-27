import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import motorStore from '../zustand/MotorStore';
import { toast } from 'react-toastify';
import orderStore from '../zustand/OrderStore';

const Booking = () => {
    const {motorId} = useParams();
    const getMotorById = motorStore(state => state.getMotorById);
    const [motor, setMotor] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [totalDays, setTotalDays] = useState(0);
    const createOrder = orderStore(state => state.createOrder);

    useEffect(() => {
        console.log("useEffect fired");
        console.log(startDate, endDate);
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
            setTotalDays(diff > 0 ? diff : 0);
        }
    },[startDate, endDate]);

    const navigate = useNavigate();
    useEffect(() => {
        const fetchMotor = async () => {
            const response = await getMotorById(motorId);
            if(response.success){
                toast.success("Motor fetched successfully");
                setMotor(response.data.motor);
            }
        }
        fetchMotor();
    },[motorId])
    const today = new Date().toISOString().split("T")[0];

    const confirmOrder = async () => {
        const data = {
            motor: motorId,
            startDate,
            endDate
        }
        const sendData = {
            data
        }
        const response = await createOrder(sendData);
        if(response.success){
            toast.success(response.message);
            setStartDate(null);
            setEndDate(null);
            setTotalDays(0);
            setMotor(null);
            navigate("/profile")
        }else{
            toast.error(response.error);
        }
    }


    if(!motor){
        return(
            <div className='h-screen relative text-white flex flex-col justify-center items-center'>
                Loading...
            </div>
        )
    }

  return (
    <div className='max-w-6xl mx-auto px-6 mt-4 text-white relative gap-8 flex flex-col lg:flex-row'>

        {/* Left Side */}
        <div className=' flex flex-col max-h-[570px] bg-white/10 border overflow-hidden border-white/20 hover:bg-white/15 rounded-4xl '>
            <div className='flex justify-between relative   h-[350px]'>
                <img className='absolute h-full object-cover ' src={motor?.imageUrls[0]} alt={motor.make + ' ' + motor.model} />
                <div className='h-5 m-5  bg-blue-600/90 backdrop-blur-md px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter shadow-lg'>
                    {motor.type}
                </div>
            </div>

            <div className='text-blue-400 mt-3 px-6 text-[10px] font-black uppercase tracking-[0.4em]'>
                {motor.year} Edition
            </div>

            <div className='text-4xl px-6 font-black italic uppercase tracking-tighter mt-2'>
                {motor.make} {motor.model}
            </div>

            <div className='mt-8 mb-4 px-6 grid grid-cols-2 gap-4'>
                <div className='bg-white/5 p-4 rounded-[25px] border border-white/5'>
                    <p className="text-[8px] text-gray-500 font-bold uppercase">Registration</p>
                    <p className="text-sm font-black italic tracking-widest">{motor.registrationNumber}</p>
                </div>
                <div className='bg-white/5 p-4 rounded-[25px] border border-white/5'>
                    <p className="text-[8px] text-gray-500 font-bold uppercase">Base Location</p>
                      <p className="text-sm font-black italic">{motor.location}</p>
                    
                </div>
            </div>
        </div>

        <div className='flex-1 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[50px] p-10 lg:p-14 shadow-2xl h-full flex flex-col justify-between'>
            <div>
                <p className='text-2xl font-black italic uppercase tracking-tight mb-10 border-b border-white/10 pb-4'>Confirm your order</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 ml-4">Pickup Date</label>
                      <input 
                        min={today} max={endDate}
                        type="date" 
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 outline-none focus:border-blue-500 transition-all text-sm appearance-none"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 ml-4">Return Date</label>
                      <input 
                        min={startDate || today} 
                        type="date" 
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 outline-none focus:border-blue-500 transition-all text-sm appearance-none"
                      />
                    </div>
                  </div>
                  <div className="mt-12 bg-white/5 rounded-[30px] p-8 border border-white/5 flex items-center gap-6">
                    <div className="h-16 w-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-3xl">🗓️</div>
                    <div>
                      <p className="text-sm font-black italic">Rental Duration</p>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{totalDays} Selected Days</p>
                    </div>
                  </div>
                <div className='border-t mt-10 px-5 pt-8 flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center'>
                    <div className='flex flex-col'>
                        <p className='text-[10px] text-gray-500 font-black uppercase tracking-[0.4em] mb-1'>Total Amount</p>
                        <p className='text-6xl font-black italic tracking-tighter text-white'>
                            ₹&nbsp;{motor.pricePerDay * totalDays}
                            <span className='text-blue-400 font-bold tracking-normal text-sm mb-2 uppercase'>Gst&nbsp;Inc.</span>
                        </p>
                    </div>
                    <button 
                        onClick={confirmOrder}
                        disabled={!motor.isAvailable || totalDays === 0}
                        className='px-12 py-6 rounded-full font-black uppercase tracking-[0.3em] text-[10px] transition-all bg-blue-600 hover:bg-blue-500 hover:scale-105 active:scale-95 disabled:bg-white/5 disabled:text-gray-600 border disabled:border-white/5 disabled:cursor-not-allowed'>
                        Confirm Booking
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Booking