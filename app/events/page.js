import ButtonLink from "components/ButtonLink/ButtonLink";
import EventCard from "components/Events/EventCarousel/EventCard/EventCard";
import { getEvents } from "utils/getEvents";



export default async function EventsPage() {
  const events = await getEvents();
  console.log("Alle Events:", events);

  if (!events || events.length === 0) {
    return (
      <div className="mx-auto px-4 py-8 bg-gray-100 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Keine Veranstaltungen gefunden</h1>
        <p className="text-gray-700 mt-2">Momentan sind keine Events verfügbar.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-10 bg-red-500">
      <h1 className="text-4xl font-bold text-white text-center mb-6 py-10">Gecmis Etkinliklerimiz</h1>
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            description={event.acf?.description || "Keine Beschreibung verfügbar"}
            image={event.acf?.image || "/default-event.jpg"} // Fallback-Bild
            uri={event.uri}
          />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <ButtonLink destination="/" label="Anasayfaya Don" type="white" />
      </div>
    </div>
  );
}
