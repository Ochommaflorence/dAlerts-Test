import React from 'react';

const Alerts = () => {
  return (
    <>
      <div className="My-container text-white mt-10 flex justify-center">
        <div className="max-w-4xl overflow-x-scroll md:overflow-x-hidden ">
            <ul className="flex gap-4 md:gap-6 lg:gap-10 text-xs md:text-sm  ">
                <li>SYMBOL</li>
                <li>EXCHANGE</li>
                <li>ALERT PRICE</li>
                <li>CURRENT PRICE</li>
                <li>NOTIFICATION TYPE</li>
                <li className="text-secondary">+New Alert</li>
            </ul>
             </div>
      </div>
    </>
  );
}

export default Alerts;
