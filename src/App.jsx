import React from 'react';
import Estrelinha from './assets/icon-star.svg'; 

export default function Feedback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 max-w-[412px] p-8 rounded-3xl shadow-xl border border-gray-600">
        <div className="bg-gray-600 w-12 h-12 rounded-full flex items-center justify-center mb-7">
          <img src={Estrelinha} alt="Ícone de estrela" className="w-5 h-5" />
        </div>
        
        <h1 className="text-gray-100 text-2xl font-bold mb-3">Como foi o atendimento?</h1>
        
        <p className="text-gray-400 mb-6 leading-6">
          Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!
        </p>
        
        <div className="flex justify-between mb-7">
          <button className="w-12 h-12 rounded-full font-bold bg-gray-700 text-amber-400 hover:bg-amber-500 hover:text-gray-900 focus:bg-gray-500 focus:text-white transition-all">
            1
          </button>
          <button className="w-12 h-12 rounded-full font-bold bg-gray-700 text-amber-400 hover:bg-amber-500 hover:text-gray-900 focus:bg-gray-500 focus:text-white transition-all">
            2
          </button>
          <button className="w-12 h-12 rounded-full font-bold bg-gray-700 text-amber-400 hover:bg-amber-500 hover:text-gray-900 focus:bg-gray-500 focus:text-white transition-all">
            3
          </button>
          <button className="w-12 h-12 rounded-full font-bold bg-gray-700 text-amber-400 hover:bg-amber-500 hover:text-gray-900 focus:bg-gray-500 focus:text-white transition-all">
            4
          </button>
          <button className="w-12 h-12 rounded-full font-bold bg-gray-700 text-amber-400 hover:bg-amber-500 hover:text-gray-900 focus:bg-gray-500 focus:text-white transition-all">
            5
          </button>
        </div>
        
        <a href="./components/agradecimento.jsx">
          <button className="w-full py-3 rounded-3xl uppercase font-bold tracking-widest bg-emerald-500 text-gray-900 hover:bg-emerald-600 focus:bg-emerald-400 focus:text-gray-800 transition-all">
            Enviar
          </button>
        </a>
      </div>
    </div>
  );
}