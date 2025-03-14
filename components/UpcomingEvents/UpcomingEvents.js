import { getUpcomingEvents } from "utils/getUpcomingEvents";
import UpcomingEventCard from "./UpcomingEventCard/UpcomingEventCard";

const UpcomingEvents = async () => {
  const upcomingEvents = await getUpcomingEvents();
  
  return (
      <div className="w-full py-10">
        <div className="max-w-5xl mx-auto container">
          <h2 className="text-h3 font-bold">Bevorstehende Veranstaltungen</h2>
          <p className="text-subtitle mb-6">
            Entdecken Sie unsere bevorstehenden Veranstaltungen
          </p>
          <div className="flex md:flex-row flex-col gap-4"> 
            {upcomingEvents?.map((event) => (
              <UpcomingEventCard
                date={event.acf.date}
                title={event.title}
                description={event.acf.description}
                time={event.acf.time}
              />
            ))}
          </div>
        </div>
      </div>
    );
};  

export default UpcomingEvents;
