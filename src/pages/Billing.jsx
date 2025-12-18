import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { FaFileInvoiceDollar, FaCheckCircle, FaPrint, FaHome, FaClock } from "react-icons/fa";
import orderManageStore from "../Zustand(State Management)/OrderManagement";

const Billing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get the recently created order from the Zustand store
  const { order } = orderManageStore();
  
  // Get the visual summary passed from the Confirm page
  const orderSummary = location.state?.orderSummary;

  // If no order exists (e.g. refresh), redirect to profile/history
  if (!order || !orderSummary) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0F2E] text-white p-6">
        <div className="text-center">
          <p className="text-xl mb-6 inter-500">Session expired or Order not found.</p>
          <button onClick={() => navigate("/")} className="bg-teal-500 px-8 py-3 rounded-xl inter-600">
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,rgba(11,15,46,0.95),rgba(0,0,0,0.95))] py-20 px-4 md:px-10 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* --- LEFT SIDE: Brand & Status (Teal Section) --- */}
        <div className="bg-[#14B8A6] p-8 md:w-1/3 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <FaCheckCircle className="text-3xl" />
              <h2 className="text-xl inter-700 uppercase tracking-tighter">Payment Received</h2>
            </div>
            <p className="inter-400 opacity-90 text-sm leading-relaxed">
              Your booking is now <span className="inter-700">Pending Approval</span> from the owner. You will be notified once they confirm.
            </p>
          </div>
          
          <div className="mt-10 md:mt-0">
            <p className="text-xs uppercase opacity-70 mb-1">Order ID</p>
            <p className="font-mono text-sm break-all">{order._id}</p>
          </div>
        </div>

        {/* --- RIGHT SIDE: Invoice Details --- */}
        <div className="p-8 md:p-12 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl inter-800 text-slate-900">Billing Invoice</h1>
              <p className="text-gray-500 text-sm mt-1">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
            <FaFileInvoiceDollar className="text-4xl text-gray-200" />
          </div>

          <div className="space-y-6 mb-10">
            {/* Vehicle Summary */}
            <div className="flex justify-between border-b border-gray-100 pb-4">
              <div>
                <p className="inter-700 text-lg">{orderSummary.motorName}</p>
                <p className="text-gray-500 text-sm">{orderSummary.totalDays} Days Rental</p>
              </div>
              <p className="inter-700 text-lg">₹{orderSummary.totalAmount - 150}</p>
            </div>

            {/* Fee Breakdown */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Service Fee & GST</span>
                <span>₹150</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Insurance Cover</span>
                <span className="text-green-600 font-semibold uppercase text-[10px] tracking-widest">Included</span>
              </div>
            </div>

            {/* Grand Total */}
            <div className="bg-slate-50 p-4 rounded-xl flex justify-between items-center">
              <span className="inter-600 text-gray-700">Amount Charged</span>
              <span className="text-2xl inter-800 text-[#14B8A6]">₹{orderSummary.totalAmount}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
            <button 
              onClick={() => window.print()}
              className="flex items-center justify-center gap-2 h-12 border-2 border-slate-200 rounded-xl inter-600 hover:bg-slate-50 transition-all text-slate-700"
            >
              <FaPrint className="text-sm" /> Print PDF
            </button>
            <button 
              onClick={() => navigate("/")}
              className="flex items-center justify-center gap-2 h-12 bg-slate-900 text-white rounded-xl inter-600 hover:bg-slate-800 transition-all shadow-lg"
            >
              <FaHome className="text-sm" /> Return Home
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 text-[10px] uppercase tracking-widest">
            <FaClock />
            <span>Estimated Approval: 2-4 Hours</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Billing;