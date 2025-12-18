import React, { useState, useEffect } from "react";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/react";
import { useParams, useNavigate } from "react-router-dom";
import motorStore from "../Zustand(State Management)/MotorManagement";


const Rent = () => {
  const { motorId } = useParams();
  const navigate = useNavigate();
  
  // Get functions and state from your Zustand store
  const { getMotorById, motorById, loading, error } = motorStore();

  const paymentOptions = [
    { id: 1, method: "UPI" },
    { id: 2, method: "Cards" },
    { id: 3, method: "Net Banking" },
    { id: 4, method: "Cash" },
  ];

  const [selectedPayment, setSelectedPayment] = useState(paymentOptions[0].method);
  const [data, setData] = useState({
    startDate: "",
    endDate: "",
    paymentMethod: paymentOptions[0].method,
  });

  const today = new Date().toISOString().split("T")[0];

  // --- FETCH MOTOR ON MOUNT ---
  useEffect(() => {
    if (motorId) {
      getMotorById(motorId);
    }
  }, [motorId, getMotorById]);

  const dateChanger = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const paymentChange = (method) => {
    setSelectedPayment(method);
    setData((prev) => ({ ...prev, paymentMethod: method }));
  };

  const goToReview = () => {
    if (!data.startDate || !data.endDate) {
      alert("Please select dates");
      return;
    }
    
    // Navigate to Confirm page passing both the selection and the fetched motor details
    navigate("/confirm", { 
      state: { 
        pendingBooking: { ...data, motorId },
        motorDetails: motorById 
      } 
    });
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-white bg-[#0B0F2E]">Loading details...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500 bg-[#0B0F2E]">{error}</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(to_right,rgba(11,15,46,0.7),rgba(0,0,0,0.7))] w-full p-4">
      <div className="w-full max-w-2xl flex flex-col p-8 border border-gray-600 rounded-2xl bg-black/40 backdrop-blur-sm text-white shadow-2xl">
        
        {/* Motor Preview Header */}
        {motorById && (
          <div className="mb-8 border-b border-white/10 pb-6 flex items-center gap-4">
            <img src={motorById.imageUrls[0]} alt={motorById.model} className="w-20 h-20 object-cover rounded-lg border border-white/20" />
            <div>
              <h2 className="text-2xl inter-700">{motorById.make} {motorById.model}</h2>
              <p className="text-teal-500 font-semibold">₹{motorById.pricePerDay} / day</p>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-5 mb-8">
          <div className="w-full">
            <p className="mb-2 text-sm text-gray-400">Start Date</p>
            <input type="date" min={today} name="startDate" onChange={dateChanger} className="w-full border border-white/50 bg-transparent rounded h-12 p-2 text-white focus:border-teal-500 focus:outline-none [&::-webkit-calendar-picker-indicator]:invert" />
          </div>
          <div className="w-full">
            <p className="mb-2 text-sm text-gray-400">End Date</p>
            <input type="date" min={data.startDate || today} name="endDate" onChange={dateChanger} className="w-full border border-white/50 bg-transparent rounded h-12 p-2 text-white focus:border-teal-500 focus:outline-none [&::-webkit-calendar-picker-indicator]:invert" />
          </div>
        </div>

        <div className="w-full flex flex-col mb-10">
          <p className="mb-2 text-sm text-gray-400">Payment Method</p>
          <Listbox value={selectedPayment} onChange={paymentChange}>
            <div className="relative">
              <ListboxButton className="w-full text-white border border-white/50 h-12 rounded px-4 text-left focus:ring-2 focus:ring-teal-500 transition-all">{selectedPayment}</ListboxButton>
              <ListboxOptions className="absolute z-10 mt-1 w-full border border-gray-600 rounded bg-gray-900 shadow-xl max-h-60 overflow-auto">
                {paymentOptions.map((option) => (
                  <ListboxOption key={option.id} value={option.method} className={({ active }) => `cursor-pointer px-4 py-3 ${active ? "bg-teal-500 text-white" : "text-gray-200"}`}>{option.method}</ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>

        <button onClick={goToReview} className="w-full h-14 bg-teal-500 text-white inter-600 rounded-lg hover:bg-teal-400 transition-all">
          Review Booking
        </button>
      </div>
    </div>
  );
};

export default Rent;