import React, { useEffect, useState } from "react";
import Greeting from "../utils_components/Greeting";
import { onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        setUserName(user.displayName || 'Visitante');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <header className="absolute py-2 border-b-2 w-[100%] flex items-center">
      <h1 className="ml-[20%] text-[14pt] title">
        {<Greeting />} {userName}! O que iremos produzir hoje?
      </h1>

      <div className="flex flex-col ml-[35%]">
        <button className="bg-slate-500 p-5 text-slate-200 rounded-[10%]">
          Baixe nosso app
        </button>
        <p>(disponível em breve)</p>
      </div>
    </header>
  );
}
