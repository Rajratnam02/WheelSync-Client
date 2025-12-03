import React, { useEffect, useState } from "react";
import Section3Card from "./Section3Card";
import motorStore from "../../Zustand(State Management)/MotorManagement";

const SectionThree = () => {
  const {
    getMotors,
    message,
    success,
    error,
    loading,
    motors,
    totalPages,
    currentPage,
  } = motorStore();

  const [selectedType, setSelectedType] = useState("Bike"); // default: Bike


  useEffect(() => {
    const fetchMotors = async () => {
      try {
        await getMotors(selectedType, 1);
        
        
      } catch (error) {
        console.error("Error fetching motors:", error);
      }
    };
    fetchMotors();
  }, [selectedType, getMotors]);

  const show = motors.slice(0,3);
  


  if (loading) {
    return <div className="text-center py-10 text-white">Loading motors...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">Error: {error}</div>;
  }

  return (
    <div className="pt-15 px-10 bg-[#1E293B] pb-10">
      <h1 className="text-4xl inter-700 text-center uppercase text-white">
        Explore our fleet
      </h1>

      {/* --- Bike / Car Toggle Buttons --- */}
      <div className="flex justify-center gap-6 mt-2">
        <button
          onClick={() => setSelectedType("Bike")}
          className={`px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 ${
            selectedType === "Bike"
              ? "bg-[#00BBA7] shadow-lg scale-105"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Bike
        </button>

        <button
          onClick={() => setSelectedType("Car")}
          className={`px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 ${
            selectedType === "Car"
              ? "bg-[#00BBA7] shadow-lg scale-105"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Car
        </button>
      </div>

      {/* --- Motor Cards --- */}
      <div className="flex pt-10  flex-wrap items-center gap-10 justify-center">
        {motors && motors.length > 0 ? (
          show.map((motor) => <Section3Card key={motor._id} items={motor} />)
        ) : (
          <p className="text-gray-300">No {selectedType.toLowerCase()}s available</p>
        )}
      </div>

      
    </div>
  );
};

export default SectionThree;
