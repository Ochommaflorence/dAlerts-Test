import React from "react";
import { BsBell } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav className="My-container py-5 flex justify-between">
        <div className="flex items-center">
          <div>
            <div className="flex justify-center">
              <BsBell className="text-primary font-bold" />
            </div>
            <h6 className="text-white text-sm font-thin pt-1">dAlerts</h6>
          </div>
          <h6 className="text-primary pl-4">My Alerts</h6>
        </div>

        {/* 2nd */}
       <div >
       <div className=" flex items-center bg-neutral rounded-md px-2 py-1 text-white">
         <div  className="rounded-full mr-3" style={{ background : 'linear-gradient(89.98deg, #256EFF 0.02%, #F84F60 185%)', height : '15px', width: '15px'}}/>
         <span className="text-sm">0xFa34..51GF</span>
       </div>
       </div>
        </nav>
      <div style={{ background : 'linear-gradient(89.98deg, #256EFF 0.02%, #F84F60 102.46%)', height : '0.5px', width: '100%'}}></div>
      
    </>
  );
};

export default Navbar;
