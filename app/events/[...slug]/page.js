import { notFound } from "next/navigation";
import { getEventBySlug } from "utils/getSingleEvent";

export default async function EventPage({ params }) {
  const eventUri = `/events/${params.slug.join("/")}/`;

  const data = await getEventBySlug(eventUri);

  const event = data?.data?.nodeByUri; 
  console.log(event, "event");

  if (!event) {
    notFound();
  }

  return (
    <div className="mx-auto px-4 py-8 bg-red-500">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold">{event.title}</h1>
        <p className="text-lg">Beschreibung: {event.acf?.description || "Keine Beschreibung verfügbar"}</p>
      </div>
    </div>
  );
}
