import EventCard from "./EventCard/EventCard";

const EventsList = () => {
    return (
      <div className="w-full bg-red-500 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-h4 font-bold">Bevorstehende Veranstaltungen</h2>
          <p className="text-gray-600 mb-6">
            Entdecken Sie unsere bevorstehenden Veranstaltungen und seien Sie Teil
            unserer spannenden Events und Networking-Möglichkeiten.
          </p>
          <div className="flex md:flex-row flex-col gap-4">
            <EventCard
              date="17"
              month="FEB."
              time="19:30"
              title="TDU lädt zur Podiumsdiskussion zur Bundestagswahl 2025 ein"
              description="Eventbeginn: Februar 17 @ 19:30"
            />
            <EventCard
              date="15"
              month="MÄRZ"
              time="10:00"
              title="Infusionsworkshop für Heilpraktiker und Ärzte"
              description="Eventbeginn: März 15 @ 10:00"
            />
          </div>
        </div>
      </div>
    );
};

export default EventsList;
