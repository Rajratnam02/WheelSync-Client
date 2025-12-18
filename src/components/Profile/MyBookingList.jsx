import React, { useEffect } from "react";
import orderStore from "../../Zustand(State Management)/OrderManagement";
import VehicleCard from "./VehicleCard";


const MyBookingList = () => {
  const { myBookinglist, getMyBookingList, loading, error } = orderStore();

  useEffect(() => {
    getMyBookingList();
  }, [getMyBookingList]); // Run ONCE only

  return (
    <div className="mt-10 border-[#787c80] pb-5 border-2 rounded-2xl flex">
      <div className="px-10 pt-10 w-full">
        <p className="text-3xl inter-600 mb-5">My Booking List</p>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && myBookinglist.length === 0 && (
          <p>Nothing to show here</p>
        )}

        <div className="flex flex-col gap-5 mt-5">
          {myBookinglist.map((item) => (
            <VehicleCard key={item.motor._id} vehicle={item.motor} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyBookingList