import React, { useEffect } from 'react';

export const Footer: React.FC = () => {
  useEffect(() => {
    // Obtenir la date de dernière modification
    const lastModified = document.lastModified;

    // Afficher la date de dernière modification dans le footer
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
      lastModifiedElement.innerHTML = "Dernière modification : " + lastModified;
    }
  }, []);

  return (
    <footer className="bg-[#000000] text-white p-2 mt-10 text-center">
      <p id="lastModified"></p>
      <p>@Copyright. Ma Page - All Rights Reserved </p>
    </footer>
  );
};
