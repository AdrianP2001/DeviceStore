'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState('personal'); // 'personal', 'orders', 'addresses', etc.

    return (
        <main className="layout-container mx-auto max-w-[1440px] px-4 md:px-10 py-8">

            <div className="flex flex-col md:flex-row gap-8">

                {/* Sidebar de Navegación */}
                <aside className="w-full md:w-64 lg:w-72 flex-shrink-0">
                    <div className="bg-white dark:bg-[#1a1d2d] rounded-xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-6 sticky top-24">

                        {/* Mini Perfil */}
                        <div className="flex items-center gap-4 pb-6 border-b border-gray-100 dark:border-gray-700">
                            <div className="size-12 rounded-full bg-gray-200 bg-center bg-cover border-2 border-white dark:border-gray-600 shadow-sm" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop")' }}></div>
                            <div className="overflow-hidden">
                                <h2 className="font-bold text-gray-900 dark:text-white truncate">Juan Pérez</h2>
                                <p className="text-xs text-gray-500 truncate">juan.perez@email.com</p>
                            </div>
                        </div>

                        {/* Menú */}
                        <nav className="flex flex-col gap-1">
                            {[
                                { id: 'personal', label: 'Información Personal', icon: 'person' },
                                { id: 'orders', label: 'Mis Pedidos', icon: 'inventory_2' },
                                { id: 'addresses', label: 'Direcciones', icon: 'location_on' },
                                { id: 'payment', label: 'Métodos de Pago', icon: 'credit_card' },
                                { id: 'security', label: 'Seguridad', icon: 'verified_user' },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === item.id
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                                        }`}
                                >
                                    <span className={`material-symbols-outlined text-[20px] ${activeTab === item.id ? 'fill' : ''}`}>{item.icon}</span>
                                    {item.label}
                                </button>
                            ))}
                        </nav>

                        <button className="flex items-center justify-center gap-2 mt-auto text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 py-3 rounded-lg text-sm font-medium transition-colors">
                            <span className="material-symbols-outlined text-[20px]">logout</span>
                            Cerrar Sesión
                        </button>
                    </div>
                </aside>

                {/* Contenido Principal */}
                <div className="flex-1 flex flex-col gap-8">

                    {/* Header Sección */}
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 dark:text-white">Información Personal</h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">Gestiona tu información personal y preferencias.</p>
                    </div>

                    {/* Tarjeta: Datos Básicos */}
                    <div className="bg-white dark:bg-[#1a1d2d] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-white/[0.02]">
                            <h3 className="font-bold text-gray-900 dark:text-white">Datos Básicos</h3>
                            <button className="text-primary text-sm font-medium hover:underline">Editar</button>
                        </div>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
                                <input type="text" defaultValue="Juan" className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#12141f] text-gray-900 dark:text-white h-11 px-4 focus:ring-2 focus:ring-primary focus:border-transparent" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Apellidos</label>
                                <input type="text" defaultValue="Pérez" className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#12141f] text-gray-900 dark:text-white h-11 px-4 focus:ring-2 focus:ring-primary focus:border-transparent" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Correo Electrónico</label>
                                <input type="email" defaultValue="juan.perez@email.com" className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#12141f] text-gray-900 dark:text-white h-11 px-4 focus:ring-2 focus:ring-primary focus:border-transparent" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Teléfono</label>
                                <input type="tel" defaultValue="+593 99 123 4567" className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#12141f] text-gray-900 dark:text-white h-11 px-4 focus:ring-2 focus:ring-primary focus:border-transparent" />
                            </div>
                        </div>
                        <div className="px-6 py-4 bg-gray-50 dark:bg-white/[0.02] border-t border-gray-100 dark:border-gray-700 flex justify-end">
                            <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-sm transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">save</span>
                                Guardar Cambios
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* Tarjeta: Pedidos Recientes */}
                        <div className="bg-white dark:bg-[#1a1d2d] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm flex flex-col">
                            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-white/[0.02]">
                                <h3 className="font-bold text-gray-900 dark:text-white">Pedidos Recientes</h3>
                                <Link href="#" className="text-primary text-sm font-medium hover:underline">Ver todos</Link>
                            </div>
                            <div className="flex-1 overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="text-xs uppercase text-gray-500 bg-gray-50 dark:bg-white/[0.02]">
                                        <tr>
                                            <th className="px-6 py-3 font-semibold">ID</th>
                                            <th className="px-6 py-3 font-semibold">Fecha</th>
                                            <th className="px-6 py-3 font-semibold">Estado</th>
                                            <th className="px-6 py-3 font-semibold text-right">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                            <td className="px-6 py-4 font-medium">#1024</td>
                                            <td className="px-6 py-4 text-gray-500">Oct 24</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                                    <span className="size-1.5 rounded-full bg-green-500"></span> Entregado
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right font-medium">$120.00</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                            <td className="px-6 py-4 font-medium">#1023</td>
                                            <td className="px-6 py-4 text-gray-500">Oct 12</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                                                    <span className="size-1.5 rounded-full bg-blue-500"></span> En camino
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right font-medium">$350.50</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Tarjeta: Direcciones */}
                        <div className="bg-white dark:bg-[#1a1d2d] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm flex flex-col">
                            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-white/[0.02]">
                                <h3 className="font-bold text-gray-900 dark:text-white">Mis Direcciones</h3>
                                <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[16px]">add</span> Nueva
                                </button>
                            </div>
                            <div className="p-6 flex flex-col gap-4">
                                <div className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#12141f]">
                                    <div className="mt-1 text-gray-400">
                                        <span className="material-symbols-outlined">home</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Principal</span>
                                            <button className="text-gray-400 hover:text-primary"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                                        </div>
                                        <p className="font-medium text-gray-900 dark:text-white">Casa</p>
                                        <p className="text-sm text-gray-500 mt-1">Av. Reforma 123, Col. Centro<br />Ciudad de México, 06600</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}