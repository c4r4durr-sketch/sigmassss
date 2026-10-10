import React from 'react';

export default function DetallePizza() {
  return (
    <div className="max-w-md mx-auto bg-[#FFFBF5] min-h-screen p-6 font-sans">
      {/* Barra superior */}
      <div className="flex justify-between items-center mb-6">
        <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </button>
        <h1 className="font-bold text-gray-800">Tu pizza, a tu gusto</h1>
        <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </button>
      </div>

      {/* Imagen del producto */}
      <div className="relative mb-6">
        <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=400" alt="Margarita" className="w-full h-56 object-cover rounded-3xl shadow-sm" />
        <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-green-700 flex items-center shadow-md">
          🌿 Vegetariana
        </span>
      </div>

      {/* Título y precio */}
      <div className="flex justify-between items-end mb-2">
        <h2 className="text-4xl font-serif font-bold text-gray-900">Margarita</h2>
        <span className="text-xl font-bold text-[#D33A2C]">130 bs</span>
      </div>
      <p className="text-gray-500 text-sm mb-2">Nuestra clásica: tomate italiano, mozzarella fresca y albahaca sobre una masa ligera de 48 horas.</p>
      <p className="text-gray-400 text-xs mb-6">Contiene gluten y leche.</p>

      {/* Selector de tamaño */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-gray-900">Elige el tamaño</h3>
        <span className="text-xs text-gray-400">Obligatorio · 1 opción</span>
      </div>
      <div className="flex gap-3 mb-6">
        <div className="flex-1 border-2 border-[#D33A2C] bg-red-50 rounded-2xl p-4 relative cursor-pointer">
          <p className="text-sm font-bold text-gray-900">Mediana · 30 cm</p>
          <p className="text-sm text-[#D33A2C] font-bold">130 bs</p>
          <div className="absolute top-4 right-4 w-5 h-5 rounded-full border-4 border-[#D33A2C] bg-white"></div>
        </div>
        <div className="flex-1 border border-gray-200 bg-white rounded-2xl p-4 cursor-pointer">
          <p className="text-sm font-bold text-gray-500">Grande · 36 cm</p>
          <p className="text-sm text-gray-500">145 bs</p>
          <div className="absolute top-4 right-4 w-5 h-5 rounded-full border border-gray-300"></div>
        </div>
      </div>

      {/* Ingredientes extra */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-gray-900">Dale un toque extra</h3>
        <span className="text-xs text-gray-400">Opcional</span>
      </div>
      <div className="space-y-4 mb-8 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#D33A2C] rounded" />
            <span className="text-gray-800 text-sm font-medium">Extra de mozzarella</span>
          </div>
          <span className="text-gray-500 text-sm">+15 bs</span>
        </label>
        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-3">
            <input type="checkbox" className="w-5 h-5 rounded border-gray-300" />
            <span className="text-gray-800 text-sm font-medium">Champiñones</span>
          </div>
          <span className="text-gray-500 text-sm">+10 bs</span>
        </label>
        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-3">
            <input type="checkbox" className="w-5 h-5 rounded border-gray-300" />
            <span className="text-gray-800 text-sm font-medium">Aceite picante</span>
          </div>
          <span className="text-gray-500 text-sm">+5 bs</span>
        </label>
      </div>

      {/* Botones de acción inferiores */}
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-full px-5 py-3 shadow-sm">
          <button className="text-gray-400 font-bold text-xl hover:text-gray-600">-</button>
          <span className="font-bold text-gray-800">1</span>
          <button className="text-[#D33A2C] font-bold text-xl hover:text-red-700">+</button>
        </div>
        <button className="flex-1 bg-[#D33A2C] text-white font-bold rounded-full py-4 shadow-lg shadow-red-200 flex justify-between px-6 hover:bg-red-700 transition">
          <span>Añadir al carrito</span>
          <span>145 bs</span>
        </button>
      </div>
    </div>
  );
}