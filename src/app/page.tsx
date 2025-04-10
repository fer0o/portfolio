'use client'
import { useState } from "react";
import Navbar from "@/Components/Navbar";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  //funcion para alternar el modo oscuro
  const toggleDarkMode = () => setDarkMode(prev => !prev);
  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen`}>
      {/* Aquí puedes pasar el toggle y el estado al Navbar para mostrar el botón */}
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      {/* Resto del contenido */}
    </div>
  );
}
