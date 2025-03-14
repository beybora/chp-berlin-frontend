import WorkCard from "./WorkCard/WorkCard";

const WorkGrid = ({ title = "Calismalarimiz" }) => {
    // Standard-Daten für die Karten
    const items = [
      {
        title: "Gençlik ve Eğitim Programları",
        description: "Gençler için eğitim desteği, burs programları ve seminerler.",
        image: "https://via.placeholder.com/300",
      },
      {
        title: "Demokrasi ve İnsan Hakları Paneli",
        description: "Berlin'de düzenlenen insan hakları ve demokrasi etkinlikleri.",
        image: "https://via.placeholder.com/300",
      },
      {
        title: "Sosyal Yardım ve Dayanışma Projeleri",
        description: "İhtiyaç sahibi ailelere yiyecek ve temel yardım sağlama.",
        image: "https://via.placeholder.com/300",
      },
      {
        title: "Seçim Kampanyaları",
        description: "Politik katılımı teşvik etmek için kampanyaların organizasyonu ve yürütülmesi.",
        image: "https://via.placeholder.com/300",
      },
      {
        title: "Toplantılar",
        description: "Topluluk projelerinin tartışılması ve planlanması için düzenli toplantılar.",
        image: "https://via.placeholder.com/300",
      },
      {
        title: "Toplantılar",
        description: "Topluluk projelerinin tartışılması ve planlanması için düzenli toplantılar.",
        image: "https://via.placeholder.com/300",
      },
    ];

  
    return (
      <div className="py-20 bg-[#E0E0E0] flex flex-col items-center">
        {/* Container für bessere Kontrolle */}
        <div className="w-full max-w-5xl container">
          {/* Überschrift links ausgerichtet auf Höhe der ersten Karte */}
          <h2 className="text-h2 font-bold text-black pb-5 inline-block mb-6">
            {title}
          </h2>
  
          {/* Grid-Layout für Karten */}
          <div className="grid gap-6 lg:grid-cols-3">
            {items.map((item, index) => (
              <WorkCard key={index} title={item.title} description={item.description} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default WorkGrid;