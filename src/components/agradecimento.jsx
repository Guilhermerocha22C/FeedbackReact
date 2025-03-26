import React from 'react';
import Valeu from './assets/illustration-thank-you.svg';

export default function Agradecimento() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 max-w-[412px] p-8 rounded-3xl shadow-xl border border-gray-600 text-center">
        
        <img 
          src={Valeu} 
          alt="Só agradece... Tmj" 
          className="mx-auto mb-6 w-36 h-36"
        />
        
        <div className="bg-gray-700 text-amber-400 rounded-full py-1 px-4 inline-block mb-6 text-sm">
          Você selecionou 4 de 5
        </div>
        
        <h1 className="text-gray-100 text-2xl font-bold mb-3">Obrigado!</h1>
        <p className="text-gray-400 leading-6">
          Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!
        </p>
      </div>
    </div>
  );
}