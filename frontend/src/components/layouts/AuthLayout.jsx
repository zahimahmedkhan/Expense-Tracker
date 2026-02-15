import React from "react";
import CARD_2 from "../../assets/images/card2.png";
import { LuTrendingUpDown } from "react-icons/lu";

const Authlayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full h-screen md:w-[60vw] px-6 md:px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Expenly</h2>
        {children}
      </div>

      <div className="hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-overflow-hidden p-8 relative">
        <div className="w-48 h-48 rounded-[40px] bg-cyan-700 absolute -top-7 -left-5"></div>
        <div className="w-48 h-56 rounded-[40px] border-20 border-cyan-700 absolute top-[30%] -right-[6%]"></div>
        <div className="w-48 h-48 rounded-[40px] bg-cyan-700 absolute -bottom-7 -left-5"></div>

        <div className="z-20 grid grid-cols-1">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track your Income & Expenses"
            value="$430,000"
            color="bg-cyan-700"
          />
        </div>

        <img
          src={CARD_2}
          className="w-[35em] lg:w-[90%] rounded-2xl absolute bottom-10 shadow-lg shadow-blue-400/40"
        />
      </div>
    </div>
  );
};

export default Authlayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="z-10 flex items-center gap-6 p-4 mb-6 bg-white border shadow-md shadow-cyan-900 rounded-xl border-gray-200/50">
      <div
        className={`flex items-center justify-center w-12 h-12 text-[26px] text-white ${color} rounded-full drop-shadow-xl `}
      >
        {icon}
      </div>
      <div>
      <h6 className="mb-1 text-xs text-gray-500">{label}</h6>
      <span className="text-[20px]">{value}</span>
      </div>
    </div>
  );
};
