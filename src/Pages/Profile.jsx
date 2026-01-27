import React, { useEffect, useState } from 'react'
import authStore from '../zustand/AuthStore';
import motorStore from '../zustand/MotorStore';
import { toast } from 'react-toastify';
import VechileCard from '../Components/VechileCard';
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import orderStore from '../zustand/OrderStore';
import SecVecCard from '../Components/SecVecCard';
import { useNavigate } from 'react-router-dom';
import Garage from '../Components/Garage';
import Rides from './Rides';
import Rentals from '../Components/Rentals';
import Addmotors from '../Components/Addmotors';



const Profile = () => {
    const {user} = authStore();
    const getMyMotors = motorStore(state => state.getMyMotors);
    const getMyBookingList = orderStore(state => state.getMyBookingList);
    const getMyRentals = orderStore(state => state.getMyRentals);
    const [addMotorsActive, setAddMotorActive] = useState(false)

    const [myBookinglist, setMyBookingList] = useState([]);
    const [myMotors, setMyMotors] = useState([]);
    const [section, setSection] = useState("garage")
    const [lendingList, setLendingList] = useState([]);

    const formattedDate = user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', {
      month: 'short', 
      year: 'numeric' 
    }) 
  : "Oct 2025";

    useEffect(() => {
      console.log("useEffect fired");
      const fetchMyMotors = async () => {
        console.log("Calling getMyMotors...");
        const response = await getMyMotors();
        if(response.success){
          setMyMotors(response.data.motors);
          toast.success("Motors fetched successfully");
        }else{
          toast.error(response.error);
        }
      };
    fetchMyMotors();

    const fetchMyBookingList = async () => {
      const response = await getMyBookingList();
      if(response.success){
        setMyBookingList(response.data.orders);
        toast.success("Booking List fetched successfully");
      }else{
        toast.error(response.error);
      }
    };
    fetchMyBookingList();

    const fetchMyRentals = async () => {
      const response = await getMyRentals();
      if(response.success){
        setLendingList(response.data.orders);
        toast.success("Rentals fetched successfully");
      }else{
        toast.error(response.error);
      }
    };
    fetchMyRentals();

  }, []);

    


  const logOut = authStore(state => state.logout) 
  const navigate = useNavigate()
  const handleLogout = async () => {
    const response = await logOut();
    if(response.success){
      toast.success(response.message);
      navigate("/");
    }else{
      toast.error(response.error);
    }
  }

  if(!user){
    return(
      <div className='h-screen relative text-white flex flex-col justify-center items-center'>
        <h1 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r leading-30 from-cyan-600 to-emerald-400  racking-tight'>Oops! Nothing to Show here</h1>
        <p className='text-xl font-medium text-gray-400'>Please <span onClick={()=>{navigate("/login")}} className='text-blue-500 cursor-pointer hover:underline'>login</span> again </p>
      </div>
    )
  }

  if(addMotorsActive){
    return (
      <Addmotors setAddMotorActive={setAddMotorActive} />
    )
  }
  
  return (
    <div className='max-w-7xl relative mx-auto px-6 mt-8  text-white '>
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="lg:w-1/3  bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[40px] p-10 flex flex-col items-center justify-center shadow-2xl">
                <div className="h-28 w-28 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 p-1 mb-6 shadow-xl shadow-blue-500/20">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="rounded-full bg-slate-900 w-full h-full" alt="avatar" />
                </div>
              <h1 className="text-3xl font-black italic uppercase tracking-tighter">{user && user.name}</h1>
            </div>

            <div className="bg-white/10 flex-2 backdrop-blur-2xl border border-white/20 rounded-[35px] p-8 flex flex-col justify-center items-center shadow-xl hover:bg-white/15 transition-all">
              <p className='text-3xl mb-2'>📅</p><br />
              <p className='text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1'>Member Since</p>
              <h1 className="text-3xl font-black italic tracking-tighter">{formattedDate}</h1>
            </div>

            <div className="bg-white/10 flex-2 backdrop-blur-2xl border border-white/20 rounded-[35px] p-8 flex flex-col justify-center items-center shadow-xl hover:bg-white/15 transition-all">
              <p className='text-3xl mb-2'>🏎️</p><br />
              <p className='text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1'>Fleet Size</p>
              <h1 className="text-3xl font-black italic tracking-tighter">{user && user.__v}</h1>
            </div>

            <div className="bg-white/10 flex-2 backdrop-blur-2xl border border-white/20 rounded-[35px] p-8 flex flex-col justify-center items-center shadow-xl hover:bg-white/15 transition-all">
              <p className='text-3xl mb-2'>⭐</p><br />
              <p className='text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1'>Ratings</p>
              <h1 className="text-3xl font-black italic tracking-tighter">5.0</h1>
            </div>
        </div>

        <div className='flex items-center justify-center gap-2 '>
          <div className='inline-flex bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-[30px] shadow-2xl'>
            <button disabled={section === "garage"} onClick={() => setSection("garage")} value={"garage"} className='px-10 py-3 cursor-pointer rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all text-gray-500 hover:text-white disabled:bg-blue-600 disabled:text-white disabled:shadow-lg disabled:shadow-blue-600/40'>
              My Garage
            </button>
            <button disabled={section === "past-rides"} onClick={() => setSection("past-rides")} value={"past-rides"} className='px-10 py-3 cursor-pointer rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all text-gray-500 hover:text-white disabled:bg-blue-600 disabled:text-white disabled:shadow-lg disabled:shadow-blue-600/40'>
              Borrowings
            </button>
            <button disabled={section === "bookings"} onClick={() => setSection("bookings")} value={"bookings"} className='px-10 py-3 cursor-pointer rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all text-gray-500 hover:text-white disabled:bg-blue-600 disabled:text-white disabled:shadow-lg disabled:shadow-blue-600/40'>
              Lendings
            </button>
          </div>
        </div>

        {section === "garage" && <Garage myMotors={myMotors} setAddMotorActive={setAddMotorActive} />}
        {section === "past-rides" && <Rides myBookinglist={myBookinglist} />}
        {section === "bookings" && <Rentals rentals={lendingList} />}

        
        <div className="w-full flex justify-center items-center  p-3">
          <button onClick={handleLogout} className="text-[10px] px-4 py-2 border border-red-500/40 font-black uppercase tracking-wider text-red-500/60 hover:text-red-500 hover:border-red-500 transition-all duration-300 rounded-md">
            Log Out
          </button>
        </div>

        
        
    </div>
  )
}

export default Profile


