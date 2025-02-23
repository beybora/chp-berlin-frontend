import ButtonLink from "components/ButtonLink/ButtonLink";

const EventCard = ({ title, description, image }) => {
  return (
    <div className="relative mr-5">
      <div className="relative bg-white p-4 shadow-lg min-h-[320px] flex flex-col justify-between overflow-hidden">
        <img src={image} alt={title} className="w-full h-42 object-cover" />
        <div className="mt-4 flex flex-col justify-between flex-grow">
          <h3 className="text-xl font-bold text-black">{title}</h3>
          <p className="text-gray-700 text-base">{description}</p>
          <ButtonLink destination="/" label="Mehr erfahren" type="white" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
