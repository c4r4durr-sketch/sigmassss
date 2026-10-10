import React from 'react';

export default function Carrito() {
  return (
    <div className="max-w-md mx-auto bg-[#FFFBF5] min-h-screen p-6 font-sans">
      {/* Barra superior */}
      <div className="flex justify-between items-center mb-8">
        <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </button>
        <h1 className="font-bold text-gray-800">Tu pedido</h1>
        <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </button>
      </div>

      {/* Título */}
      <div className="mb-6">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-2 leading-tight">Una buena elección.</h2>
        <p className="text-gray-500 text-sm">2 pizzas, una noche para disfrutar.</p>
      </div>

      {/* Tipo de entrega */}
      <div className="bg-white p-1 rounded-full flex mb-6 border border-gray-200 shadow-sm">
        <button className="flex-1 bg-red-50 text-[#D33A2C] font-bold py-3 rounded-full text-sm flex items-center justify-center gap-2">
          <span>🛵 A domicilio</span>
        </button>
        <button className="flex-1 text-gray-500 font-medium py-3 rounded-full text-sm">
          Recoger en local
        </button>
      </div>

      {/* Dirección */}
      <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-2xl border border-gray-100">
        <div className="flex items-center gap-3">
          <div className="bg-red-50 p-2 rounded-full">
            <svg className="w-5 h-5 text-[#D33A2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </div>
          <div>
            <p className="font-bold text-sm text-gray-900">Calle del Olmo, 12 · 2º B</p>
            <p className="text-xs text-gray-500">Llegará en 25-35 min</p>
          </div>
        </div>
        <button className="text-[#D33A2C] text-sm font-bold hover:underline">Cambiar</button>
      </div>

      {/* Lista del carrito */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-900">Tu carrito</h3>
        <button className="text-[#D33A2C] text-xs font-bold">+ Añadir más</button>
      </div>

      <div className="space-y-4 mb-6">
        {/* Producto 1 */}
        <div className="flex gap-4 items-center bg-white p-3 rounded-2xl border border-gray-100">
          <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=100" alt="Margarita" className="w-16 h-16 rounded-xl object-cover" />
          <div className="flex-1">
            <div className="flex justify-between">
              <h4 className="font-bold text-gray-900 text-sm">Margarita</h4>
              <span className="font-bold text-gray-900 text-sm">145 bs</span>
            </div>
            <p className="text-xs text-gray-500 mb-2 leading-tight">Mediana · 30 cm<br/>Extra de mozzarella (+15 bs)</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
                <button className="text-gray-500 font-bold">-</button>
                <span className="font-bold text-xs">1</span>
                <button className="text-[#D33A2C] font-bold">+</button>
              </div>
              <button className="text-gray-400 hover:text-red-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notas */}
      <div className="mb-6">
        <h3 className="font-bold text-gray-900 mb-2">Notas del pedido</h3>
        <textarea 
          placeholder="Ej.: Sin gluten, sin cebolla, llamar al timbre..." 
          className="w-full bg-white border border-gray-200 rounded-xl p-3 text-sm text-gray-700 outline-none focus:border-[#D33A2C]"
          rows={2}
        ></textarea>
      </div>

      {/* Resumen de pago */}
      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between text-sm mb-2 text-gray-600">
          <span>Subtotal · 2 pizzas</span>
          <span>240 bs</span>
        </div>
        <div className="flex justify-between text-sm mb-4 text-gray-600">
          <span>Entrega a domicilio</span>
          <span>20 bs</span>
        </div>
        <div className="flex justify-between items-end mb-1">
          <span className="font-bold text-xl text-gray-900">Total</span>
          <span className="font-bold text-2xl text-[#D33A2C]">260 bs</span>
        </div>
        <p className="text-[10px] text-gray-400">IVA incluido. Sin sorpresas al pagar.</p>
      </div>

      {/* Botón de pago final */}
      <button className="w-full bg-[#D33A2C] text-white font-bold rounded-2xl py-4 shadow-lg shadow-red-200 flex justify-between px-6 hover:bg-red-700 transition">
        <span>Confirmar pedido</span>
        <span>260 bs</span>
      </button>
    </div>
  );
}