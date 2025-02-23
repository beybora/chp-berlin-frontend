import ButtonLink from "components/ButtonLink/ButtonLink";

  // Separate Card Component
  const ProjectCard = ({ title, description, image }) => {
    return (
      <div className="relative">
        {/* Schwarzer Schatten hinter der Karte */}
        <div className="absolute -bottom-2 -right-2 bg-black w-full h-full"></div>
  
        {/* Weiße Karte mit fixer Höhe */}
        <div className="relative bg-white p-4 shadow-lg min-h-[320px] flex flex-col justify-between overflow-hidden">
          <img src={image} alt={title} className="w-full h-42 object-cover" />
          <div className="mt-4 flex flex-col justify-between flex-grow">
            <h3 className="text-h5 font-bold text-black">{title}</h3>
            <p className="text-subtitle text-black">{description}</p>
            <ButtonLink destination="/" label="Mehr erfahren" type="white" />
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;