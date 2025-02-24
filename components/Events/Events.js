import React from "react";
import EventCarousel from "./EventCarousel/EventCarousel";
import { getEvents } from "../../utils/getEvents";
import ButtonLink from "components/ButtonLink/ButtonLink";

const Events = async () => {
  const events = await getEvents();
  console.log(events);

  return (
    <div className=" mx-auto px-4 py-8 bg-red-500">
      <EventCarousel events={events} />
      <div className="flex justify-center">
        <ButtonLink destination="/events" label="Alle Veranstaltungen anzeigen" type="white" />
      </div>
    </div>
  );
};

export default Events;
