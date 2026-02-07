import React, { useEffect, useState } from 'react'
import authStore from '../zustand/AuthStore';
import motorStore from '../zustand/MotorStore';
import { toast } from 'react-toastify';
import orderStore from '../zustand/OrderStore';
import { useNavigate } from 'react-router-dom';
import Garage from '../components/Garage';
import Rides from './Rides';
import Rentals from '../components/Rentals';
import Addmotors from '../components/Addmotors';
import EditMotors from '../components/EditMotors';

const Profile = () => {
    const { user } = authStore();
    const getMyMotors = motorStore(state => state.getMyMotors);
    const getMyBookingList = orderStore(state => state.getMyBookingList);
    const getMyRentals = orderStore(state => state.getMyRentals);
    const [addMotorsActive, setAddMotorActive] = useState(false);
    const [loading, setLoading] = useState([true, true, true]);
    const [myBookinglist, setMyBookingList] = useState([]);
    const [myMotors, setMyMotors] = useState([]);
    const [section, setSection] = useState("garage");
    const [lendingList, setLendingList] = useState([]);

    const formattedDate = user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
    }) : "Oct 2025";

    useEffect(() => {
        const fetchMyMotors = async () => {
            const response = await getMyMotors();
            if (response.success) {
                setMyMotors(response.data.motors);
                setLoading(prev => [false, prev[1], prev[2]]);
            }
        };
        fetchMyMotors();

        const fetchMyBookingList = async () => {
            const response = await getMyBookingList();
            if (response.success) {
                setMyBookingList(response.data.orders);
                setLoading(prev => [prev[0], false, prev[2]]);
            }
        };
        fetchMyBookingList();

        const fetchMyRentals = async () => {
            const response = await getMyRentals();
            if (response.success) {
                setLendingList(response.data.orders);
                setLoading(prev => [prev[0], prev[1], false]);
            }
        };
        fetchMyRentals();
    }, []);

    const [editMotors, setEditMotors] = useState(false);
    const [motorId, setMotorId] = useState(null);

    const logOut = authStore(state => state.logout);
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        const response = await logOut();
        if (response.success) {
            toast.success(response.message);
            navigate("/");
        } else {
            toast.error(response.error);
        }
    }

    if (!user) {
        return (
            <div className='min-h-screen px-6 text-white flex flex-col justify-center items-center text-center'>
                <h1 className='text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-400 tracking-tight leading-tight mb-4'>
                    Oops! Nothing to Show here
                </h1>
                <p className='text-lg md:text-xl font-medium text-gray-400'>
                    Please <span onClick={() => { navigate("/login") }} className='text-blue-500 cursor-pointer hover:underline'>login</span> again
                </p>
            </div>
        )
    }

    if (addMotorsActive) return <Addmotors setAddMotorActive={setAddMotorActive} />;
    if (editMotors) return <EditMotors setEditMotors={setEditMotors} motorId={motorId} />;

    return (
        <div className='max-w-7xl relative mx-auto px-4 sm:px-6 mt-8 text-white'>
            
            {/* --- Section 1: Hero Stats --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
                {/* Profile Card */}
                <div className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[30px] md:rounded-[40px] p-6 md:p-10 flex flex-col items-center justify-center shadow-2xl">
                    <div className="h-20 w-20 md:h-28 md:w-28 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 p-1 mb-4 md:mb-6 shadow-xl shadow-blue-500/20">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="rounded-full bg-slate-900 w-full h-full" alt="avatar" />
                    </div>
                    <h1 className="text-xl md:text-3xl font-black italic uppercase tracking-tighter text-center">
                        {user.name}
                    </h1>
                </div>

                {/* Stat Cards */}
                {[
                    { icon: "📅", label: "Member Since", value: formattedDate },
                    { icon: "🏎️", label: "Fleet Size", value: myMotors.length },
                    { icon: "⭐", label: "Ratings", value: "5.0" }
                ].map((stat, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[25px] md:rounded-[35px] p-6 flex flex-col justify-center items-center shadow-xl hover:bg-white/15 transition-all">
                        <p className='text-2xl md:text-3xl mb-1'>{stat.icon}</p>
                        <p className='text-[8px] md:text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1'>{stat.label}</p>
                        <h1 className="text-2xl md:text-3xl font-black italic tracking-tighter">{stat.value}</h1>
                    </div>
                ))}
            </div>

            {/* --- Navigation Tabs --- */}
            <div className='flex items-center justify-center mb-8'>
                <div className='flex flex-wrap justify-center bg-white/5 backdrop-blur-xl border border-white/10 p-1.5 md:p-2 rounded-[25px] md:rounded-[30px] shadow-2xl'>
                    {[
                        { id: "garage", label: "My Garage" },
                        { id: "past-rides", label: "Borrowings" },
                        { id: "bookings", label: "Lendings" }
                    ].map((tab) => (
                        <button 
                            key={tab.id}
                            disabled={section === tab.id}
                            onClick={() => setSection(tab.id)}
                            className='px-5 md:px-10 py-2.5 md:py-3 cursor-pointer rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all text-gray-500 hover:text-white disabled:bg-blue-600 disabled:text-white disabled:shadow-lg disabled:shadow-blue-600/40'
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* --- Dynamic Content Section --- */}
            <div className="min-h-[400px]">
                {section === "garage" && <Garage loading={loading[0]} myMotors={myMotors} setMotorId={setMotorId} setEditMotors={setEditMotors} setAddMotorActive={setAddMotorActive} />}
                {section === "past-rides" && <Rides loading={loading[1]} myBookinglist={myBookinglist} />}
                {section === "bookings" && <Rentals loading={loading[2]} rentals={lendingList} />}
            </div>

            {/* --- Logout Section --- */}
            <div className="w-full flex justify-center items-center p-8">
                <button onClick={handleLogout} className="text-[10px] px-6 py-2 border border-red-500/40 font-black uppercase tracking-wider text-red-500/60 hover:text-red-500 hover:border-red-500 transition-all duration-300 rounded-md">
                    Log Out
                </button>
            </div>
        </div>
    )
}

export default Profile;