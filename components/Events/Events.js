import React from "react";
import EventCarousel from "./EventCarousel/EventCarousel";
import { getEvents } from "../../utils/getEvents";
import ButtonLink from "components/ButtonLink/ButtonLink";

const Events = async () => {
  const events = await getEvents();
  console.log(events);

  return (
    <div className=" mx-auto px-4 py-10 bg-[#E30C17]">
      <div className="max-w-5xl mx-auto container">
        <h2 className="text-h2 flex justify-center text-white py-2 mb-6">
          Gecmis Etkinliklerimiz
        </h2>
        <EventCarousel events={events} />
        <div className="flex justify-center">
          <ButtonLink
            destination="/events"
            label="Alle Veranstaltungen anzeigen"
            type="white"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
