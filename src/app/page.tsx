'use client'
import { useState } from "react";
import Navbar from "@/Components/Navbar";


export default function Home() {
  //estado para el modo oscuro
  const [darkMode, setDarkMode] = useState(true);
  //estado para el idioma
  const [language, setLanguage] = useState("en");

  //funcion para alternar el modo oscuro
  const toggleDarkMode = () => setDarkMode(prev => !prev);
  //funcion para alternar el idioma
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    setLanguage(newLanguage);
    console.log(`tu idioma es ${newLanguage}`);
  }
  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} h-screen`}>
      {/* Aquí puedes pasar el toggle y el estado al Navbar para mostrar el botón */}
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleLanguage={toggleLanguage} language={language} />
      {/* Resto del contenido */}
    </div>
  );
}
