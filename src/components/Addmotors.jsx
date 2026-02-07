import React, { useState } from 'react'
import InputBox from './InputBox'
import motorStore from '../zustand/MotorStore';
import { toast } from 'react-toastify';

const Addmotors = (props) => {
    const [formData, setFormData] = useState({
      type: "Car",
      isAvailable: true,
    });
    const addMotor = motorStore(state => state.addMotor);

    const changeHandler = (e) => {
        const updatedData = { ...formData, [e.target.name]: e.target.value }
        setFormData(updatedData)
    }

    const submitHandler = async (e) => {
      try {
        e.preventDefault();
        const data = { data: formData }
        const response = await addMotor(data);
        if (response.success) {
          toast.success(response.message);
          window.location.reload();
        } else {
          toast.error(response.error);
        }
      } catch (error) {
        toast.error(error.message)
      }
    }

  return (
    <div className='min-h-screen text-white relative py-10 md:py-20 px-4 md:px-6 flex justify-center items-center'>
        <div className='w-full max-w-5xl bg-zinc-900/90 backdrop-blur-3xl border border-white/10 rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl flex flex-col md:flex-row'>
          
          <div className='md:w-1/3 lg:w-1/4 bg-blue-600 p-8 md:p-10 flex flex-col items-start relative'>
              <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter leading-tight mb-4">
                Add <br className="hidden md:block" /> Vehicle
              </h2>
              <div className="h-1.5 w-12 bg-white mb-6 rounded-full"></div>
              <p className="text-blue-100 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
                Listing Protocol v1.0
              </p>
          </div>

          <div className='flex-1 p-6 md:p-10 lg:p-14'>
            <form onSubmit={submitHandler} className="space-y-8 md:space-y-12">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8'>
                  
                  <div className='space-y-6'>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">01. Identity</h3>
                    <InputBox formData={formData} setFormData={setFormData} label="Make" name="make" placeholder="Toyota" />
                    <InputBox formData={formData} setFormData={setFormData} label="Model" name="model" placeholder="Camry" />
                    <InputBox formData={formData} setFormData={setFormData} label="Year" name="year" placeholder="2023" type='number' />

                    <div className="flex flex-col gap-2">
                      <label className="text-[9px] font-black uppercase tracking-widest text-gray-500 ml-4">Type</label>
                      <select 
                        onChange={changeHandler} 
                        name="type" 
                        value={formData.type}
                        className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 text-sm font-bold appearance-none cursor-pointer"
                      >
                        <option value="Car" className="bg-zinc-900">Car</option>
                        <option value="Bike" className="bg-zinc-900">Bike</option>
                      </select>
                    </div>
                  </div>

                  <div className='space-y-6'>
                    <p className='text-[10px] font-black uppercase tracking-[0.4em] text-blue-400'>02. Logistics</p>
                    <InputBox formData={formData} setFormData={setFormData} name="registrationNumber" placeholder="BR01..." label="Reg Number" />
                    <InputBox formData={formData} setFormData={setFormData} name="pricePerDay" placeholder="1500" label="Price / Day" />
                    <InputBox formData={formData} setFormData={setFormData} name="location" placeholder="Patna, Bihar" label="City, State" />
                    <InputBox formData={formData} setFormData={setFormData} name="imageUrls" placeholder="https://..." label="Image Link" />
                  </div>
                </div>

                <div className='pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8'>
                    <div className='flex items-center gap-3 w-full lg:w-auto'>
                        <input 
                            type="checkbox"
                            id="instantBooking"
                            checked={formData.isAvailable}
                            onChange={(e) => setFormData({...formData, isAvailable: e.target.checked})}
                            className="w-5 h-5 accent-blue-600 cursor-pointer"
                        />
                        <label htmlFor="instantBooking" className='text-[10px] font-black uppercase tracking-widest text-gray-400 cursor-pointer'>
                          Enable instant booking
                        </label>
                    </div>

                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <button 
                        onClick={() => props.setAddMotorActive(false)}
                        type="button"
                        className="flex-1 sm:flex-none px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest border border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit" 
                        className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-500 px-10 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
                      >
                        Add Vehicle
                      </button>
                    </div>
                </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Addmotors