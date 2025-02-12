import React from "react";

const EventCard = ({ date, month, time, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-left space-x-4 w-full md:w-1/2 p-2">
      <div className="bg-blue-900 text-white rounded-md p-3 w-16 flex flex-col items-center">
        <span className="text-h7 font-heading font-bold">{date}</span>
        <span className="text-above-title uppercase">{month}</span>
        <span className="mt-1 text-subtitle">{time}</span>
      </div>
      <div className="flex-1">
        <p className="text-above-title">Veranstaltung</p>
        <h3 className="text-h6 font-heading font-semibold">{title}</h3>
        <p className="text-subtitle text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;