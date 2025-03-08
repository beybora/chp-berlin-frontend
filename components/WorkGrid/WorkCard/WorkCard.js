const WorkCard = ({ title, description, image }) => {
  return (
    <div className="relative group">

      <div className="absolute -bottom-2 -right-2 bg-black w-full h-full group-hover:bg-[#E30B17] transition-colors duration-300"></div>

      <div className="relative bg-white p-4 shadow-lg min-h-[160px] flex flex-col justify-between overflow-hidden">
        <div className="mt-4 flex flex-col flex-grow">
          <h3 className="text-h5 font-bold text-black">{title}</h3>
          <p className="text-subtitle text-black">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
