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
  //backgrounds
  const backgrounds = darkMode ? "./backgrounds/dark.png" : "./backgrounds/white.png";
  return (
    <div
           className={`h-screen w-full bg-cover bg-center text-${darkMode ? 'white' : 'black'}`}
      style={{ backgroundImage: `url(${backgrounds})` }}
     >
      {/* Aquí puedes pasar el toggle y el estado al Navbar para mostrar el botón */}
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleLanguage={toggleLanguage} language={language} />
      {/* Resto del contenido */}
    </div>
  );
}
