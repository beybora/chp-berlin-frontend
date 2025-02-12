import ButtonLink from "components/ButtonLink/ButtonLink";

const CardGrid = ({ title = "ÇALIŞMALARIMIZ" }) => {
    // Standard-Daten für die Karten
    const items = [
      {
        title: "GENÇLİK VE EĞİTİM PROGRAMLARI",
        description: "Gençler için eğitim destekleri, burs programları ve seminerler.",
        image: "https://via.placeholder.com/300",
      },
      {
        title: "DEMOKRASİ VE İNSAN HAKLARI PANELİ",
        description: "Berlin'de düzenlenen insan hakları ve demokrasi etkinlikleri.",
        image: "https://via.placeholder.com/300",
      },
      {
        title: "SOSYAL YARDIM VE DAYANIŞMA PROJELERİ",
        description: "İhtiyaç sahibi ailelere gıda ve temel ihtiyaç yardımları.",
        image: "https://via.placeholder.com/300",
      },
    ];
  
    return (
      <div className="p-10 bg-[#787878] flex flex-col items-center">
        {/* Container für bessere Kontrolle */}
        <div className="w-full max-w-5xl">
          {/* Überschrift links ausgerichtet auf Höhe der ersten Karte */}
          <h2 className="text-h4 font-bold text-white py-2 inline-block mb-6">
            {title}
          </h2>
  
          {/* Grid-Layout für Karten */}
          <div className="grid gap-6 lg:grid-cols-3">
            {items.map((item, index) => (
              <div key={index} className="relative">
                {/* Schwarzer Schatten hinter der Karte */}
                <div className="absolute -bottom-2 -right-2 bg-black w-full h-full"></div>
  
                {/* Weiße Karte mit fixer Höhe */}
                <div className="relative bg-white p-4 shadow-lg min-h-[320px] flex flex-col justify-between overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-32 object-cover" />
                  <div className="mt-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-h5 font-bold text-black">{item.title}</h3>
                    <p className="text-subtitle text-black">{item.description}</p>
                    <ButtonLink destination="/" label="Mehr erfahren" type="white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CardGrid;
  