'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
    // Estado para simular interactividad en el gráfico o filtros
    const [timeRange, setTimeRange] = useState('today');

    return (
        // Usamos 'fixed inset-0 z-[100]' para que este dashboard cubra toda la pantalla 
        // y tape el Navbar de la tienda, dándole una apariencia de app independiente.
        <div className="fixed inset-0 z-[100] flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark text-[#111218] dark:text-white font-display">

            {/* --- SIDEBAR --- */}
            <aside className="flex w-72 flex-col justify-between border-r border-[#dbdde6] bg-white dark:bg-[#1e2030] dark:border-gray-800 transition-colors duration-300">
                <div className="flex flex-col h-full">
                    {/* Header Logo */}
                    <div className="flex items-center gap-3 px-6 py-6">
                        <div className="flex items-center justify-center rounded-lg bg-primary/10 p-2">
                            <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-[#111218] dark:text-white text-lg font-bold leading-normal">ElectroStore</h1>
                            <p className="text-[#616889] dark:text-gray-400 text-xs font-medium uppercase tracking-wider">Admin Panel</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 overflow-y-auto px-4 py-4 gap-1 flex flex-col">
                        <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined filled">dashboard</span>
                            <span className="text-sm font-semibold">Dashboard</span>
                        </Link>

                        <div className="pt-4 pb-2 px-3 text-xs font-semibold text-[#616889] dark:text-gray-500 uppercase tracking-wider">Gestión</div>

                        {['Productos', 'Usuarios', 'Transacciones', 'Devoluciones'].map((item, i) => (
                            <button key={item} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#616889] hover:bg-gray-100 hover:text-[#111218] dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white transition-colors">
                                <span className="material-symbols-outlined">
                                    {i === 0 ? 'inventory_2' : i === 1 ? 'group' : i === 2 ? 'receipt_long' : 'keyboard_return'}
                                </span>
                                <span className="text-sm font-medium">Gestión de {item}</span>
                            </button>
                        ))}

                        <div className="pt-4 pb-2 px-3 text-xs font-semibold text-[#616889] dark:text-gray-500 uppercase tracking-wider">Reportes</div>

                        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#616889] hover:bg-gray-100 hover:text-[#111218] dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white transition-colors">
                            <span className="material-symbols-outlined">bar_chart</span>
                            <span className="text-sm font-medium">Reportes de Ventas</span>
                        </button>

                        {/* Botón para volver a la tienda pública */}
                        <Link href="/" className="mt-auto flex items-center gap-3 px-3 py-2.5 rounded-lg text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                            <span className="material-symbols-outlined">storefront</span>
                            <span className="text-sm font-medium">Ir a la Tienda</span>
                        </Link>
                    </nav>

                    {/* User Profile */}
                    <div className="border-t border-[#dbdde6] dark:border-gray-800 p-4">
                        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white shadow-sm" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop")' }}></div>
                            <div className="flex flex-col overflow-hidden">
                                <p className="text-[#111218] dark:text-white text-sm font-semibold truncate">Carlos Ruiz</p>
                                <p className="text-[#616889] dark:text-gray-400 text-xs truncate">Administrador</p>
                            </div>
                            <span className="material-symbols-outlined text-[#616889] ml-auto text-[20px]">logout</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">

                {/* Top Header */}
                <header className="flex h-16 items-center justify-between border-b border-[#dbdde6] bg-white dark:bg-[#1e2030] dark:border-gray-800 px-8 py-3 z-10">
                    <div className="flex flex-1 items-center gap-4">
                        <div className="relative w-full max-w-md">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#616889] text-[20px]">search</span>
                            <input className="h-10 w-full rounded-lg border-none bg-background-light dark:bg-gray-800 pl-10 pr-4 text-sm text-[#111218] dark:text-white placeholder-[#616889] outline-none ring-1 ring-transparent focus:ring-primary/20 dark:focus:ring-primary/50 transition-shadow" placeholder="Buscar pedido, producto o usuario..." type="text" />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center justify-center rounded-full size-10 text-[#616889] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#1e2030]"></span>
                        </button>

                        <Link href="/admin/nuevo">  {/* <--- AGREGA ESTO */}
                            <button className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors shadow-sm shadow-blue-200 dark:shadow-none">
                                <span className="material-symbols-outlined text-[20px]">add</span>
                                Nuevo Producto
                            </button>
                        </Link> {/* <--- Y ESTO */}
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8 scroll-smooth">
                    <div className="mx-auto max-w-7xl flex flex-col gap-8">

                        {/* Page Heading */}
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div>
                                <h2 className="text-3xl font-bold text-[#111218] dark:text-white tracking-tight">Dashboard General</h2>
                                <p className="text-[#616889] dark:text-gray-400 mt-1">Resumen de la actividad de ElectroStore hoy.</p>
                            </div>
                            <div className="flex items-center gap-2 bg-white dark:bg-[#1e2030] rounded-lg p-1 border border-[#dbdde6] dark:border-gray-700">
                                <button onClick={() => setTimeRange('today')} className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${timeRange === 'today' ? 'bg-primary/10 text-primary' : 'text-[#616889] hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'}`}>Hoy</button>
                                <button onClick={() => setTimeRange('7d')} className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${timeRange === '7d' ? 'bg-primary/10 text-primary' : 'text-[#616889] hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'}`}>7 Días</button>
                                <button onClick={() => setTimeRange('30d')} className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${timeRange === '30d' ? 'bg-primary/10 text-primary' : 'text-[#616889] hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'}`}>30 Días</button>
                            </div>
                        </div>

                        {/* KPI Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="bg-white dark:bg-[#1e2030] p-6 rounded-xl border border-[#dbdde6] dark:border-gray-800 shadow-sm flex flex-col justify-between h-40 group hover:border-primary/30 transition-colors">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-[#616889] dark:text-gray-400 text-sm font-medium mb-1">Ventas Diarias</p>
                                        <h3 className="text-3xl font-bold text-[#111218] dark:text-white">$2,450.00</h3>
                                    </div>
                                    <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                        <span className="material-symbols-outlined text-green-600 dark:text-green-400">trending_up</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-4">
                                    <span className="flex items-center text-xs font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">+12%</span>
                                    <span className="text-xs text-[#616889] dark:text-gray-500">vs ayer</span>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white dark:bg-[#1e2030] p-6 rounded-xl border border-[#dbdde6] dark:border-gray-800 shadow-sm flex flex-col justify-between h-40 group hover:border-primary/30 transition-colors">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-[#616889] dark:text-gray-400 text-sm font-medium mb-1">Nuevos Pedidos</p>
                                        <h3 className="text-3xl font-bold text-[#111218] dark:text-white">18</h3>
                                    </div>
                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                        <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">shopping_bag</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-4">
                                    <span className="flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">5 Pendientes</span>
                                    <span className="text-xs text-[#616889] dark:text-gray-500">de procesar</span>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white dark:bg-[#1e2030] p-6 rounded-xl border border-[#dbdde6] dark:border-gray-800 shadow-sm flex flex-col justify-between h-40 group hover:border-primary/30 transition-colors">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-[#616889] dark:text-gray-400 text-sm font-medium mb-1">Alertas de Stock</p>
                                        <h3 className="text-3xl font-bold text-[#111218] dark:text-white">8 Items</h3>
                                    </div>
                                    <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                                        <span className="material-symbols-outlined text-orange-600 dark:text-orange-400">warning</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-4">
                                    <span className="flex items-center text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded">Urgente</span>
                                    <span className="text-xs text-[#616889] dark:text-gray-500">necesitan reabastecimiento</span>
                                </div>
                            </div>
                        </div>

                        {/* Charts Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Sales Chart (Simulado con CSS) */}
                            <div className="lg:col-span-2 bg-white dark:bg-[#1e2030] p-6 rounded-xl border border-[#dbdde6] dark:border-gray-800 shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-lg font-bold text-[#111218] dark:text-white">Rendimiento de Ventas</h3>
                                    <button className="text-primary hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                                        Ver Reporte Completo <span className="material-symbols-outlined text-base">arrow_forward</span>
                                    </button>
                                </div>
                                <div className="relative h-64 w-full">
                                    <div className="absolute inset-0 flex items-end justify-between px-2 gap-2 z-10">
                                        {[40, 65, 50, 80, 60, 90, 75].map((height, i) => (
                                            <div key={i} className={`w-full rounded-t-sm relative group cursor-pointer transition-all ${i === 5 ? 'bg-primary hover:bg-blue-700 shadow-lg shadow-blue-200 dark:shadow-blue-900/20' : 'bg-primary/10 hover:bg-primary/20'}`} style={{ height: `${height}%` }}>
                                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                    ${(height * 30).toLocaleString()}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Grid lines */}
                                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                        {[1, 2, 3, 4, 5].map(i => <div key={i} className="border-t border-dashed border-gray-200 dark:border-gray-700 w-full h-0"></div>)}
                                    </div>
                                </div>
                                <div className="flex justify-between mt-4 text-xs text-[#616889] font-medium px-2">
                                    <span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span>
                                    <span className="text-primary font-bold">Sáb</span><span>Dom</span>
                                </div>
                            </div>

                            {/* Low Stock Alert List */}
                            <div className="bg-white dark:bg-[#1e2030] p-6 rounded-xl border border-[#dbdde6] dark:border-gray-800 shadow-sm flex flex-col">
                                <h3 className="text-lg font-bold text-[#111218] dark:text-white mb-4">Stock Crítico</h3>
                                <div className="flex-1 overflow-y-auto pr-1">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-3 p-3 rounded-lg border border-red-100 bg-red-50/50 hover:bg-red-50 dark:border-red-900/30 dark:bg-red-900/10 dark:hover:bg-red-900/20 transition-colors">
                                            <div className="size-10 rounded bg-gray-200 dark:bg-gray-700 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop")' }}></div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-semibold text-[#111218] dark:text-white truncate">Auriculares NoiseCancel X1</p>
                                                <p className="text-xs text-red-600 dark:text-red-400 font-medium">Quedan 2 unidades</p>
                                            </div>
                                            <button className="text-primary hover:text-blue-700"><span className="material-symbols-outlined text-[20px]">add_shopping_cart</span></button>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg border border-orange-100 bg-orange-50/50 hover:bg-orange-50 dark:border-orange-900/30 dark:bg-orange-900/10 dark:hover:bg-orange-900/20 transition-colors">
                                            <div className="size-10 rounded bg-gray-200 dark:bg-gray-700 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop")' }}></div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-semibold text-[#111218] dark:text-white truncate">Smartwatch Series 5</p>
                                                <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">Bajo stock (12)</p>
                                            </div>
                                            <button className="text-primary hover:text-blue-700"><span className="material-symbols-outlined text-[20px]">add_shopping_cart</span></button>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full mt-4 py-2 text-sm text-[#616889] hover:text-primary dark:text-gray-400 dark:hover:text-white font-medium border border-[#dbdde6] dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Ver Inventario Completo</button>
                            </div>
                        </div>

                        {/* Recent Orders Table */}
                        <div className="bg-white dark:bg-[#1e2030] rounded-xl border border-[#dbdde6] dark:border-gray-800 shadow-sm overflow-hidden mb-8">
                            <div className="flex items-center justify-between p-6 border-b border-[#dbdde6] dark:border-gray-800">
                                <h3 className="text-lg font-bold text-[#111218] dark:text-white">Pedidos Recientes</h3>
                                <div className="flex gap-2">
                                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#dbdde6] dark:border-gray-700 text-sm font-medium text-[#616889] hover:text-[#111218] dark:text-gray-400 dark:hover:text-white bg-white dark:bg-gray-800">
                                        <span className="material-symbols-outlined text-[18px]">filter_list</span> Filtros
                                    </button>
                                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#dbdde6] dark:border-gray-700 text-sm font-medium text-[#616889] hover:text-[#111218] dark:text-gray-400 dark:hover:text-white bg-white dark:bg-gray-800">
                                        <span className="material-symbols-outlined text-[18px]">download</span> Exportar
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-[#dbdde6] dark:border-gray-800">
                                            <th className="py-3 px-6 text-xs font-semibold uppercase text-[#616889] dark:text-gray-400 tracking-wider">ID Pedido</th>
                                            <th className="py-3 px-6 text-xs font-semibold uppercase text-[#616889] dark:text-gray-400 tracking-wider">Cliente</th>
                                            <th className="py-3 px-6 text-xs font-semibold uppercase text-[#616889] dark:text-gray-400 tracking-wider">Producto Principal</th>
                                            <th className="py-3 px-6 text-xs font-semibold uppercase text-[#616889] dark:text-gray-400 tracking-wider">Total</th>
                                            <th className="py-3 px-6 text-xs font-semibold uppercase text-[#616889] dark:text-gray-400 tracking-wider">Estado</th>
                                            <th className="py-3 px-6 text-xs font-semibold uppercase text-[#616889] dark:text-gray-400 tracking-wider text-right">Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#dbdde6] dark:divide-gray-800">
                                        <tr className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                            <td className="py-4 px-6 text-sm font-medium text-[#111218] dark:text-white">#ORD-7352</td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">JD</div>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-medium text-[#111218] dark:text-white">Juan Díaz</span>
                                                        <span className="text-xs text-[#616889] dark:text-gray-500">juan.d@mail.com</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-sm text-[#616889] dark:text-gray-400">Monitor UltraWide 34"</td>
                                            <td className="py-4 px-6 text-sm font-semibold text-[#111218] dark:text-white">$450.00</td>
                                            <td className="py-4 px-6">
                                                <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/20 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20">Completado</span>
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <button className="text-[#616889] hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
                                            </td>
                                        </tr>
                                        <tr className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                            <td className="py-4 px-6 text-sm font-medium text-[#111218] dark:text-white">#ORD-7351</td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">AL</div>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-medium text-[#111218] dark:text-white">Ana Lopez</span>
                                                        <span className="text-xs text-[#616889] dark:text-gray-500">ana.lop@mail.com</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-sm text-[#616889] dark:text-gray-400">Teclado Mecánico RGB</td>
                                            <td className="py-4 px-6 text-sm font-semibold text-[#111218] dark:text-white">$120.50</td>
                                            <td className="py-4 px-6">
                                                <span className="inline-flex items-center rounded-full bg-yellow-50 dark:bg-yellow-900/20 px-2.5 py-0.5 text-xs font-medium text-yellow-700 dark:text-yellow-400 ring-1 ring-inset ring-yellow-600/20">Procesando</span>
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <button className="text-[#616889] hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <footer className="mt-auto text-center text-xs text-[#616889] dark:text-gray-500 pb-4">
                            © 2024 ElectroStore Inc. Todos los derechos reservados. Panel versión 2.4.0
                        </footer>

                    </div>
                </div>
            </main>
        </div>
    );
}