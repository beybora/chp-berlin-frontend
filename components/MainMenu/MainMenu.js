"use client"; // Ganze Komponente ist eine Client Component

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ButtonLink from "components/ButtonLink/ButtonLink";
import Link from "next/link";

// Menüstruktur erstellen
const buildMenuTree = (menuItems) => {
  const menuMap = new Map();
  const rootMenu = [];

  menuItems.forEach((item) => menuMap.set(item.id, { ...item, children: [] }));

  menuItems.forEach((item) => {
    if (item.parentId) {
      menuMap.get(item.parentId)?.children.push(menuMap.get(item.id));
    } else {
      rootMenu.push(menuMap.get(item.id));
    }
  });

  return rootMenu;
};

export const MainMenu = ({ menuItems }) => {
  const menu = buildMenuTree(menuItems);
  const [isOpen, setIsOpen] = useState(false); // Burger Menü Zustand

  return (
    <>
      {/* Zitat-Leiste */}
      <div className="bg-[#053D5D] text-white p-2">
        <div className="mx-auto flex justify-end">
          <span className="text-subtitle text-white italic text-[12px]">
            "Benim iki büyük eserim var; biri Türkiye Cumhuriyeti diğeri
            Cumhuriyet Halk Partisi."
          </span>
        </div>
      </div>

      {/* Haupt-Navigation */}
      <div className="bg-[#E30A17] text-white px-5 h-16 sticky top-0 z-50 flex justify-between items-center">
        {/* Logo */}
        <div className="py-4 pl-5 text-h4 font-bold">
          <Link href="/"> CHP Berlin Birligi </Link>
        </div>

        {/* Desktop-Navigation (ab lg sichtbar) */}
        <div className="hidden lg:flex gap-2 items-center">
          {menu.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>

        {/* "Üyemiz Ol" bleibt immer sichtbar */}
        <div className="flex items-center">
          <ButtonLink destination={"/"} label={"Üyemiz Ol"} type="white" />

          {/* Mobile Burger-Button (ab lg sichtbar) */}
          <button
            className="lg:hidden flex items-center justify-center p-2 ml-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menü Dropdown (nur wenn offen) */}
      {isOpen && (
        <div className="lg:hidden bg-[#E30A17] text-white p-4 flex flex-col space-y-3">
          {menu.map((item) => (
            <MobileMenuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

// Menü-Item für Desktop
const MenuItem = ({ item }) => {
  return (
    <div className="relative group">
      <Link href={item.url} className="px-4 py-5 rounded-md cursor-pointer inline-block text-h6">
        {item.label}
      </Link>

      {item.children.length > 0 && (
        <div className="absolute left-0 mt-[-1px] bg-slate-800 shadow-lg rounded-md hidden group-hover:flex flex-col w-[200%]">
          {item.children.map((child) => (
            <MenuItem key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

// Mobile Menü-Item mit Dropdown
const MobileMenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button className="flex justify-between py-2 btn-white" onClick={() => setOpen(!open)}>
        {item.label}
        {item.children.length > 0 && <span>{open ? "▲" : "▼"}</span>}
      </button>

      {open && item.children.length > 0 && (
        <div className="ml-4 flex flex-col space-y-2">
          {item.children.map((child) => (
            <MobileMenuItem key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainMenu;
