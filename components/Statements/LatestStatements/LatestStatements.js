import React from "react";
import { getStatements } from "utils/getStatements";

const LatestStatements = async () => {
  const statements = await getStatements();
  console.log(statements, "statements");

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4">
      {/* Titel */}
      <h2 className="text-h2 font-bold text-[#E30B17] text-center italic mb-10">
        Pressemitteilungen
      </h2>

      {/* Grid mit Statements */}
      <div className="grid md:grid-cols-3 gap-8">
        {statements.map((statement, index) => (
          <StatementCard key={index} statement={statement} />
        ))}
      </div>

      {/* Alle Pressemitteilungen Button */}
      <div className="text-center mt-10">
        <a href="/pressemitteilungen">
          <button className="px-6 py-3 bg-[#E30B17] text-white font-bold italic  shadow-md hover:bg-[#E30B17] transition">
            Alle Pressemitteilungen
          </button>
        </a>
      </div>
    </div>
  );
};

// Einzelne Statement-Karte
const StatementCard = ({ statement }) => {
  const { acfStatements } = statement;
  const { title, text, date, land } = acfStatements;

  console.log("land", land);

  return (
    <div className="p-6 ">
      {/* Datum */}
      <p className="text-sm font-semibold text-gray-600">{date}</p>

      {/* Land Badge */}
      <div
        className={`inline-block px-3 py-1 text-xs font-bold text-white mt-2 ${
          land[0] === "germany" ? "bg-blue-600" : "bg-red-600"
        }`}
      >
        {land[0].toUpperCase()}
      </div>

      {/* Titel */}
      <h3 className="text-lg font-bold text-green-900 mt-2">{title}</h3>

      {/* Text-Vorschau */}
      <div
        className="text-gray-700 mt-2 line-clamp-3 text-subtitle"
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>

      {/* Lesen-Button */}
      <div className="mt-4">
        <a href="#" className="text-[#E30B17] font-bold hover:underline">
          LESEN →
        </a>
      </div>
    </div>
  );
};

export default LatestStatements;
