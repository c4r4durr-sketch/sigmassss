import React from 'react';

const pizzas = [
  {
    id: 1,
    nombre: 'Spaghetti carbonara',
    descripcion: 'Espaguetis, huevo, parmesano y pimienta negra.',
    precio: '180 bs',
    categoria: 'CLÁSICA',
    imagen: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=200', 
  },
  {
    id: 2,
    nombre: 'Fettuccine champiñones',
    descripcion: 'Fettuccine, champiñones, crema y parmesano.',
    precio: '190 bs',
    categoria: 'CREAMOSA',
    imagen: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&q=80&w=200', 
  },
  {
    id: 3,
    nombre: 'Penne al pomodoro',
    descripcion: 'Penne, tomate casero, albahaca y mozzarella.',
    precio: '160 bs',
    categoria: 'VEGETARIANA',
    imagen: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=200', 
  }
];

export default function LandingPage() {
  return (
    <div className="max-w-md mx-auto bg-[#FFFBF5] min-h-screen p-6 font-sans">
      
      {/* Barra Superior */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-red-700 italic tracking-tighter">la esquina.</h1>
        <button className="p-2 border border-gray-300 rounded-full">
          <svg className="w-5 h-5 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
          </svg>
        </button>
      </div>

      {/* Ubicación */}
      <div className="flex items-start mb-6 text-sm">
        <svg className="w-5 h-5 text-[#D33A2C] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        <div>
          <p className="text-gray-500 text-xs font-semibold tracking-wider">ENTREGAR EN CASA</p>
          <p className="font-medium text-gray-800">Calle del Olmo, 12 · 2º B</p>
        </div>
        <svg className="w-4 h-4 ml-auto text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>

      {/* Título Principal */}
      <div className="mb-8">
        <h2 className="text-4xl font-serif font-bold text-gray-900 leading-tight mb-2">Tu barrio. Tu pizza.</h2>
        <p className="text-gray-600 text-sm">Masa de 48 h, horno de piedra</p>
        <p className="text-gray-500 text-xs mt-1">• Abierto · En tu puerta en 25-35 min</p>
      </div>

      {/* Categorías Principales */}
      <h3 className="font-bold text-gray-900 mb-3">Categorías</h3>
      <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
        <button className="bg-[#D33A2C] text-white px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap">Pizzas</button>
        <button className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap">Pastas</button>
        <button className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap">Entradas</button>
        <button className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap">Postres</button>
      </div>

      {/* Subcategorías */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 border-b border-gray-200">
        <button className="bg-[#D33A2C] text-white px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap">Todas</button>
        <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap">Clásicas</button>
        <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap">Vegetarianas</button>
      </div>

      {/* Lista de Productos */}
      <div className="flex justify-between items-end mb-4">
        <h3 className="font-bold text-gray-900">Pastas caseras</h3>
        <span className="text-xs text-gray-400">Precios · 250 g</span>
      </div>

      <div className="space-y-4">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4">
            <img src={pizza.imagen} alt={pizza.nombre} className="w-24 h-24 object-cover rounded-xl" />
            <div className="flex-1">
              <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-1">{pizza.categoria}</p>
              <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1">{pizza.nombre}</h4>
              <p className="text-xs text-gray-500 mb-3 line-clamp-2">{pizza.descripcion}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900">{pizza.precio}</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-red-50 text-[#D33A2C] font-bold text-lg">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}