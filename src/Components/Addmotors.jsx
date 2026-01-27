import React, { useState } from 'react'
import InputBox from './InputBox'
import motorStore from '../zustand/MotorStore';
import { toast } from 'react-toastify';

const Addmotors = (props) => {
    const [formData, setFormData] = useState({
      type:"Car",
      isAvailable: true,
    });
    const addMotor = motorStore(state => state.addMotor);

    const changeHandler = (e) => {
        const updatedData = {...formData,[e.target.name]: e.target.value}
        setFormData(updatedData)
        console.log(updatedData)
    }

    const submitHandler = async (e) => {
      try{
        e.preventDefault();
        const data = {data: formData}
        const response = await addMotor(data);
        if(response.success){
          toast.success(response.message);
          window.location.reload();
        }else{
          toast.error(response.error);
        }
      }catch(error){
        toast.error(error.message)
      }

    }

  return (
    <div  className='h-screen  text-white relative py-20 px-6 flex justify-center items-center'>
        <div className='w-full max-w-5xl bg-black/80 backdrop-blur-3xl border border-white/20 rounded-[50px] overflow-hidden shadow-2xl flex flex-col md:flex-row '>
          
            {/* Left */}
          <div className='md:w-1/4 bg-blue-600 p-10 flex flex-col  items-start relative'>
              <h2 className="text-3xl font-black italic uppercase tracking-tighter leading-none mb-4">Add <br /> Vehicle</h2>
              <div className="h-1 w-12 bg-white mb-4"></div>
              <p className="text-blue-100 text-[9px] font-bold uppercase tracking-[0.2em]">Listing Protocol v1.0</p>
          </div>
          {/* Right */}
          <div className='flex-1 p-10 lg:p-14 space-y-12'>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8'>
                {/* Left of Right */}
              <div className='space-y-6'>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">01. Identity</h3>
                <InputBox formData={formData} setFormData={setFormData}  label="Make" name={"make"} placeholder="Toyota" />
                <InputBox formData={formData} setFormData={setFormData}  label="Model" name={"model"} placeholder="Camry" />
                <InputBox formData={formData} setFormData={setFormData}  label="Year" name={"year"} placeholder="2023" type='number' />

                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-gray-500 ml-4">Type</label>
                  <select onChange={changeHandler} name="type"  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 text-sm font-bold appearance-none">
                    <option value="Car" className="bg-slate-900">Car</option>
                    <option value="Bike" className="bg-slate-900">Bike</option>
                  </select>
               </div>
              </div>

              {/* Right of right */}
              <div className='space-y-6'>
                <p className='text-[10px] font-black uppercase tracking-[0.4em] text-blue-400'>2. Logistics</p>
                <InputBox formData={formData} setFormData={setFormData}  name={"registrationNumber"} placeholder={"BR01..."} label={"Reg Number"} />
                <InputBox formData={formData} setFormData={setFormData}  name={"pricePerDay"} placeholder={"1500"} label={"Price / Day"} />
                <InputBox formData={formData} setFormData={setFormData}  name={"location"} placeholder={"Patna, Bihar"} label={"City, State"} />
                <InputBox formData={formData} setFormData={setFormData}  name={"imageUrls"} placeholder={"https://..."} label={"Image Link"} />
              </div>
            </div>

            <div className='flex justify-between'>
                <div className='pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6'>
            <div className='flex items-center gap-3'>
                <input 
                    type="checkbox"
                    checked={formData.isAvailable}
                    onChange={(e) => setFormData({...formData, isAvailable: e.target.checked})}
                    className="w-4 h-4 accent-blue-600"
                />
                <p className='text-[9px] font-black uppercase tracking-widest text-gray-500'>Enable instant booking</p>
            </div>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto">
              <button 
                onClick={() => props.setAddMotorActive(false)}
                type="button"
                className="flex-1 sm:flex-none px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={submitHandler}
                type="submit" 
                className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-500 px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
              >
                Add Vehicle
              </button>
            </div>

            </div>
            
          
          </div>

        
        </div>
        
        
      </div>
  )
}

export default Addmotors

