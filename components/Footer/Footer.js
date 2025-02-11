import React from "react";
import { getFooter } from "utils/getFooter";

const Footer = async () => {
  const footer = await getFooter();

  return (
    <footer className=" bg-black text-white p-6">
      <div className="max-w-5xl mx-auto gap-5 flex justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">CHP Berlin</span>
        </div>

        {/* Menü */}
        <nav className="flex space-x-6">
          {footer.map((item) => (
            <a key={item.id} href={item.url} className="hover:text-gray-400">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
