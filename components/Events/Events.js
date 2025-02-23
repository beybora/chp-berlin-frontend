import React from "react";
import EventCarousel from "./EventCarousel/EventCarousel";
import { getEvents } from "../../utils/getEvents";

const Events = async () => {
  const events = await getEvents();
  console.log(events);

  return (
    <div className=" mx-auto px-4 py-8 bg-red-500">
      <EventCarousel events={events} />
    </div>
  );
};

export default Events;
