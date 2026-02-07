import React, { useState } from 'react';
import InputBox from './InputBox';
import motorStore from '../zustand/MotorStore';
import { toast } from 'react-toastify';
import { X, Trash2 } from 'lucide-react'; // Optional: icon library

const EditMotors = (props) => {
  const [formData, setFormData] = useState({});
  const motorId = props.motorId;
  const updateMotor = motorStore((state) => state.updateMotor);
  const deleteMotor = motorStore((state) => state.deleteMotor);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const deleteHandler = async () => {
    if (window.confirm("Are you sure you want to remove this vehicle from your garage?")) {
      try {
        const response = await deleteMotor(motorId);
        if (response.success) {
          toast.success(response.message);
          window.location.reload();
        } else {
          toast.error(response.error);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const filteredData = Object.fromEntries(
        Object.entries(formData).filter(([_, value]) => value !== "")
      );
      const payLoad = { data: filteredData };
      const response = await updateMotor(motorId, payLoad);
      if (response.success) {
        toast.success(response.message);
        window.location.reload();
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='min-h-screen text-white relative py-10 md:py-20 px-4 md:px-6 flex justify-center items-center bg-black/40'>
      
      <div className='w-full max-w-5xl bg-zinc-900/90 backdrop-blur-3xl border border-white/10 rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl flex flex-col md:flex-row relative'>
        
        {/* Close Button Mobile */}
        <button 
          onClick={() => props.setEditMotors(false)}
          className="absolute top-6 right-6 z-20 md:hidden p-2 bg-white/10 rounded-full"
        >
          <X size={20} />
        </button>

        {/* --- Left Sidebar / Top Header --- */}
        <div className='md:w-1/3 lg:w-1/4 bg-blue-600 p-8 md:p-10 flex flex-col justify-between items-start relative'>
          <div className='flex flex-col'>
            <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter leading-tight mb-4">
              Edit <br className="hidden md:block" /> Vehicle
            </h2>
            <div className="h-1.5 w-12 bg-white mb-6 rounded-full"></div>
            <p className="text-blue-100 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
              Maintain your fleet data with precision.
            </p>
          </div>

          <button 
            onClick={deleteHandler} 
            className='group mt-8 md:mt-0 flex items-center gap-2 font-extrabold text-sm text-white/80 hover:text-red-300 transition-all uppercase tracking-widest'
          >
            <Trash2 size={16} className="group-hover:animate-bounce" />
            Delete Motor
          </button>
        </div>

        {/* --- Right Form Section --- */}
        <div className='flex-1 p-6 md:p-10 lg:p-14'>
          <form onSubmit={submitHandler} className="space-y-8 md:space-y-12">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6'>
              
              {/* Group 1 */}
              <div className='space-y-6'>
                <InputBox formData={formData} setFormData={setFormData} label="Make" name="make" placeholder="e.g. Toyota" />
                <InputBox formData={formData} setFormData={setFormData} label="Model" name="model" placeholder="e.g. Camry" />
                <InputBox formData={formData} setFormData={setFormData} label="Year" name="year" placeholder="2023" type='number' />

                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-gray-500 ml-4">Vehicle Category</label>
                  <select 
                    onChange={changeHandler} 
                    name="type" 
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 text-sm font-bold appearance-none cursor-pointer hover:bg-white/10 transition-colors"
                  >
                    <option value="" className="bg-zinc-900">Select Type</option>
                    <option value="Car" className="bg-zinc-900">Car</option>
                    <option value="Bike" className="bg-zinc-900">Bike</option>
                  </select>
                </div>
              </div>

              {/* Group 2 */}
              <div className="space-y-6">
                <InputBox formData={formData} setFormData={setFormData} name="registrationNumber" placeholder="MH-01-..." label="Reg Number" />
                <InputBox formData={formData} setFormData={setFormData} name="pricePerDay" placeholder="1500" label="Price / Day (₹)" type="number" />
                <InputBox formData={formData} setFormData={setFormData} name="location" placeholder="City, State" label="Current Location" />
                <InputBox formData={formData} setFormData={setFormData} name="imageUrls" placeholder="Paste image URL" label="Cover Image Link" />
              </div>
            </div>

            <div className='border-t border-white/5 pt-8'>
              <div className='flex flex-col sm:flex-row items-center justify-between gap-6'>
                
                {/* Availability Toggle */}
                <label className='flex gap-3 items-center cursor-pointer group'>
                  <div className="relative">
                    <input 
                      onChange={(e) => setFormData({ ...formData, isAvailable: e.target.checked })} 
                      className='sr-only peer' 
                      name='isAvailable' 
                      type='checkbox' 
                    />
                    <div className="w-10 h-5 bg-white/10 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
                    <div className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
                  </div>
                  <p className='text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-gray-300'>
                    Visible in Marketplace
                  </p>
                </label>

                {/* Actions */}
                <div className='flex items-center gap-3 w-full sm:w-auto'>
                  <button 
                    type="button"
                    onClick={() => props.setEditMotors(false)} 
                    className='flex-1 sm:flex-none px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10 text-gray-400 hover:bg-white/5 hover:text-white transition-all'
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className='flex-1 sm:flex-none bg-blue-600 hover:bg-blue-500 px-10 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-600/30 transition-all hover:scale-105'
                  >
                    Update Motor
                  </button>
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMotors;