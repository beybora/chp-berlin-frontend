const AboutUsCard = ({ title, description }) => {
    return (
      <div className="relative group">
        {/* Hintergrund mit Hover-Effekt */}
        <div className="absolute -bottom-2 -right-2 bg-black w-full h-full group-hover:bg-[#E30B17] transition-colors duration-300"></div>
  
        {/* Weiße Karte */}
        <div className="relative bg-white p-6 shadow-lg min-h-[180px] flex flex-col justify-between overflow-hidden">
          <h3 className="text-xl font-bold text-black">{title}</h3>
          <p className="text-gray-700 mt-2">{description}</p>
        </div>
      </div>
    );
  };

export default AboutUsCard;