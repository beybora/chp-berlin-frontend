import EventCard from "./EventCard/EventCard";

const EventsList = () => {
    return (
      <div className="w-full py-10">
        <div className="max-w-5xl mx-auto container">
          <h2 className="text-h3 font-bold">Bevorstehende Veranstaltungen</h2>
          <p className="text-subtitle mb-6">
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
