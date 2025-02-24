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
    <div>
      <h1>{event.title}</h1>
      <p>Beschreibung: {event.acf?.description || "Keine Beschreibung verfügbar"}</p>
    </div>
  );
}
