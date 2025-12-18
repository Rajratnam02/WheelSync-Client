import React, { useEffect, useState } from "react";
import Section3Card from "./Section3Card";
import motorStore from "../../Zustand(State Management)/MotorManagement";

const SectionThree = () => {
  const {
    getMotors,
    loading,
    motors,
    error,
  } = motorStore();

  const [selectedType, setSelectedType] = useState("Bike");

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

  const show = motors.slice(0, 3);

  if (loading) {
    return <div className="text-center py-20 text-white inter-500">Loading motors...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-20 inter-500">Error: {error}</div>;
  }

  return (
    /* py-16 gives more professional vertical breathing room than pt-15 */
    /* px-4 on mobile prevents cards from touching screen edges */
    <div className="py-16 px-4 sm:px-10 bg-[#1E293B]">
      
      <h1 className="text-3xl md:text-4xl inter-700 text-center uppercase text-white tracking-wide">
        Explore our fleet
      </h1>

      {/* --- Bike / Car Toggle Buttons --- */}
      <div className="flex justify-center gap-4 md:gap-6 mt-6">
        {["Bike", "Car"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-8 py-2.5 rounded-full text-white font-semibold transition-all duration-300 inter-600 ${
              selectedType === type
                ? "bg-[#14B8A6] shadow-[0_0_15px_rgba(20,184,166,0.4)] scale-105"
                : "bg-slate-700 hover:bg-slate-600"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* --- Motor Cards Grid --- */}
      {/* Using CSS Grid instead of Flex-wrap:
          - 1 column on mobile
          - 2 columns on tablet (md)
          - 3 columns on desktop (lg)
      */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center">
        {motors && motors.length > 0 ? (
          show.map((motor) => (
            <div key={motor._id} className="w-full flex justify-center">
              <Section3Card items={motor} />
            </div>
          ))
        ) : (
          <div className="col-span-full py-10">
             <p className="text-gray-400 text-lg inter-400 italic">No {selectedType.toLowerCase()}s available currently.</p>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default SectionThree;