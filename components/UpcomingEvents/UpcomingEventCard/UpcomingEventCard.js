import { getGermanMonth } from "../../../utils/getGermanMonth";

const UpcomingEventCard = ({ date, title, description, time }) => {
  console.log("Original Date:", date);
  console.log("Original Time:", time);
  // Datum aufbrechen
  const [day, month, year] = date ? date.split('/') : ['', '', ''];

  return (
      <div className="flex flex-row items-left space-x-4 w-full md:w-1/2 p-2">
          <div className="bg-[#053D5D] text-white rounded-md p-3 w-16 flex flex-col items-center justify-center">
              <span className="text-h7 font-heading font-bold">{day}</span>
              <span className="text-above-title uppercase">{getGermanMonth(month)}</span>
          </div>
          <div className="flex-1">
              <p className="text-above-title">Veranstaltung</p>
              <h3 className="text-h6 font-heading font-semibold">{title}</h3>
              <p className="text-above-title">{time}</p>
          </div>
      </div>
  );
};


export default UpcomingEventCard;