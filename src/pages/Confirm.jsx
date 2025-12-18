import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaCreditCard, FaMotorcycle, FaArrowLeft, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";
import orderManageStore from "../Zustand(State Management)/OrderManagement";


const Confirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { createOrder, loading, error, success } = orderManageStore();
  
  const pendingBooking = location.state?.pendingBooking;
  const motor = location.state?.motorDetails;

  // Handle missing state
  if (!pendingBooking || !motor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0F2E] text-white">
        <button onClick={() => navigate("/")} className="bg-teal-500 px-6 py-2 rounded inter-600">
          Restart Booking
        </button>
      </div>
    );
  }

  // --- CALCULATION ---
  const start = new Date(pendingBooking.startDate);
  const end = new Date(pendingBooking.endDate);
  const diffDays = Math.ceil(Math.abs(end - start) / (1000 * 60 * 60 * 24)); 
  const totalAmount = (motor.pricePerDay * diffDays) + 150;

  // --- THE FIX IS HERE ---
  const handleFinalConfirm = async () => {
    // Your backend does: const { data } = req.body;
    // So we must wrap the payload in a 'data' property.
    const payload = {
      data: {
        motor: motor._id, // Must match your controller's data.motor
        startDate: pendingBooking.startDate,
        endDate: pendingBooking.endDate,
      }
    };

    console.log("Final payload being sent to backend:", payload);
    await createOrder(payload);
  };

  // Navigate only after DB success
  useEffect(() => {
    if (success && !loading) {
      navigate("/billing", { 
        state: { 
          orderSummary: {
            motorName: `${motor.make} ${motor.model}`,
            totalDays: diffDays,
            totalAmount: totalAmount,
            image: motor.imageUrls[0],
            paymentMethod: pendingBooking.paymentMethod
          } 
        } 
      });
    }
  }, [success, loading, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(to_bottom,rgba(11,15,46,0.9),rgba(0,0,0,0.9))] p-4 pt-24">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#1E293B] border border-white/10 rounded-3xl p-6 md:p-8 text-white shadow-xl">
            <h1 className="text-2xl md:text-3xl inter-700 mb-6">Review Your Rental</h1>
            
            {/* Show API Error from Backend */}
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-500 text-sm inter-500">
                ⚠️ {error}
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-6 mb-10 bg-white/5 p-4 rounded-2xl border border-white/5">
              <img src={motor.imageUrls[0]} alt={motor.model} className="w-full md:w-40 h-32 object-cover rounded-xl border border-white/10" />
              <div className="flex flex-col justify-center">
                <p className="text-teal-500 inter-600 text-sm uppercase tracking-widest">{motor.type}</p>
                <h2 className="text-2xl inter-700">{motor.make} {motor.model}</h2>
                <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                  <FaMapMarkerAlt className="text-xs" />
                  <span>{motor.location}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-500">
                  <FaCalendarAlt size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs inter-600 uppercase">Duration</p>
                  <p className="text-lg inter-600">{diffDays} Days</p>
                  <p className="text-sm text-gray-500">{pendingBooking.startDate} to {pendingBooking.endDate}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-500">
                  <FaCreditCard size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs inter-600 uppercase">Method</p>
                  <p className="text-lg inter-600">{pendingBooking.paymentMethod}</p>
                </div>
              </div>
            </div>
          </div>

          <button onClick={() => navigate(-1)} disabled={loading} className="flex items-center gap-2 text-gray-400 hover:text-white transition-all inter-500 ml-2 disabled:opacity-30">
            <FaArrowLeft size={12} /> Change details
          </button>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-[#1E293B] border border-white/10 rounded-3xl p-6 md:p-8 text-white shadow-xl sticky top-28">
            <h2 className="text-xl inter-700 mb-6">Price Summary</h2>
            
            <div className="space-y-4 inter-400">
              <div className="flex justify-between text-gray-400">
                <span>Daily Rate</span>
                <span>₹{motor.pricePerDay}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Total Days</span>
                <span>{diffDays}</span>
              </div>
              <div className="flex justify-between border-t border-white/5 pt-4">
                <span className="text-lg inter-700">Final Total</span>
                <span className="text-3xl inter-800 text-teal-500">₹{totalAmount}</span>
              </div>
            </div>

            <button 
              onClick={handleFinalConfirm}
              disabled={loading}
              className="w-full mt-8 bg-teal-500 text-white h-14 rounded-2xl inter-700 hover:bg-teal-400 transition-all shadow-lg active:scale-95 disabled:bg-gray-700 flex items-center justify-center"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Confirm & Book"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;