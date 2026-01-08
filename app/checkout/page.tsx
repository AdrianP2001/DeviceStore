'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
    // Estado para el método de envío
    const [shippingMethod, setShippingMethod] = useState('standard'); // 'standard' | 'express'

    // Cálculos simulados
    const subtotal = 349.99;
    const shippingCost = shippingMethod === 'express' ? 15.00 : 0;
    const total = subtotal + shippingCost;

    return (
        <main className="layout-container mx-auto max-w-[1200px] px-4 md:px-10 py-8 lg:py-12">

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                {/* Columna Izquierda: Formularios */}
                <div className="flex-1 min-w-0">

                    {/* Breadcrumbs */}
                    <nav className="flex mb-6 text-sm">
                        <Link href="/carrito" className="text-primary hover:underline font-medium">Carrito</Link>
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="font-medium text-gray-900 dark:text-white">Pago</span>
                    </nav>

                    {/* Título */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Proceso de pago</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Complete sus datos para finalizar la compra.</p>
                    </div>

                    <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>

                        {/* 1. Contacto */}
                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">1. Información de contacto</h3>
                                <Link href="/login" className="text-sm font-medium text-primary hover:underline">¿Ya tienes cuenta? Inicia sesión</Link>
                            </div>
                            <div className="space-y-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Correo electrónico</label>
                                    <input type="email" placeholder="ejemplo@correo.com" className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1d2d] text-gray-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="newsletter" className="rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-[#1a1d2d]" />
                                    <label htmlFor="newsletter" className="text-sm text-gray-600 dark:text-gray-400">Enviarme novedades y ofertas exclusivas</label>
                                </div>
                            </div>
                        </section>

                        {/* 2. Dirección */}
                        <section>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">2. Dirección de envío</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
                                    <input type="text" className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1d2d] text-gray-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Apellidos</label>
                                    <input type="text" className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1d2d] text-gray-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                </div>
                                <div className="md:col-span-2 flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Dirección</label>
                                    <input type="text" placeholder="Calle, número, depto..." className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1d2d] text-gray-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Ciudad</label>
                                    <input type="text" className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1d2d] text-gray-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Código Postal</label>
                                    <input type="text" className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1d2d] text-gray-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                </div>
                                <div className="md:col-span-2 flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Teléfono</label>
                                    <input type="tel" className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1d2d] text-gray-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                </div>
                            </div>
                        </section>

                        {/* 3. Método de envío */}
                        <section>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">3. Método de envío</h3>
                            <div className="space-y-3">
                                <label
                                    className={`relative flex cursor-pointer rounded-lg border p-4 shadow-sm transition-all ${shippingMethod === 'standard' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1d2d] hover:border-gray-400'}`}
                                    onClick={() => setShippingMethod('standard')}
                                >
                                    <input type="radio" name="delivery" className="sr-only" checked={shippingMethod === 'standard'} readOnly />
                                    <span className="flex flex-1">
                                        <span className="flex flex-col">
                                            <span className="block text-sm font-bold text-gray-900 dark:text-white">Envío Estándar</span>
                                            <span className="mt-1 text-sm text-gray-500 dark:text-gray-400">3-5 días hábiles</span>
                                        </span>
                                    </span>
                                    <span className="text-sm font-bold text-gray-900 dark:text-white">Gratis</span>
                                </label>

                                <label
                                    className={`relative flex cursor-pointer rounded-lg border p-4 shadow-sm transition-all ${shippingMethod === 'express' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1d2d] hover:border-gray-400'}`}
                                    onClick={() => setShippingMethod('express')}
                                >
                                    <input type="radio" name="delivery" className="sr-only" checked={shippingMethod === 'express'} readOnly />
                                    <span className="flex flex-1">
                                        <span className="flex flex-col">
                                            <span className="block text-sm font-bold text-gray-900 dark:text-white">Envío Express</span>
                                            <span className="mt-1 text-sm text-gray-500 dark:text-gray-400">24-48 horas</span>
                                        </span>
                                    </span>
                                    <span className="text-sm font-bold text-gray-900 dark:text-white">$15.00</span>
                                </label>
                            </div>
                        </section>

                        {/* 4. Pago */}
                        <section>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">4. Pago</h3>

                            {/* Tabs */}
                            <div className="mb-4 flex space-x-1 rounded-xl bg-gray-100 dark:bg-gray-800 p-1">
                                <button type="button" className="w-full rounded-lg bg-white dark:bg-[#1a1d2d] py-2.5 text-sm font-bold text-primary shadow">
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined">credit_card</span> Tarjeta
                                    </div>
                                </button>
                                <button type="button" className="w-full rounded-lg py-2.5 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined">account_balance_wallet</span> PayPal
                                    </div>
                                </button>
                            </div>

                            {/* Formulario Tarjeta */}
                            <div className="bg-gray-50 dark:bg-[#1a1d2d] p-6 rounded-lg border border-gray-200 dark:border-gray-700 space-y-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Número de tarjeta</label>
                                    <div className="relative">
                                        <input type="text" placeholder="0000 0000 0000 0000" className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#12141f] text-gray-900 dark:text-white h-12 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <span className="material-symbols-outlined">credit_card</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Expiración</label>
                                        <input type="text" placeholder="MM/YY" className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#12141f] text-gray-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">CVC</label>
                                        <div className="relative">
                                            <input type="text" placeholder="123" className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#12141f] text-gray-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                            <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 material-symbols-outlined text-sm">help</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Nombre en la tarjeta</label>
                                    <input type="text" className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#12141f] text-gray-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                </div>
                            </div>
                        </section>

                        {/* Botón Final */}
                        <div className="pt-6">
                            <button type="submit" className="w-full flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all">
                                Pagar ${total.toFixed(2)}
                            </button>
                            <p className="mt-4 text-center text-xs text-gray-500 flex items-center justify-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">lock</span>
                                Todas las transacciones son seguras y encriptadas.
                            </p>
                        </div>
                    </form>

                </div>

                {/* Columna Derecha: Resumen (Sticky) */}
                <div className="w-full lg:w-[400px] shrink-0">
                    <div className="lg:sticky lg:top-24 space-y-6">
                        <div className="bg-white dark:bg-[#1a1d2d] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-white/[0.02]">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Resumen del pedido</h3>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Item 1 */}
                                <div className="flex gap-4">
                                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 bg-white">
                                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop" alt="Producto" className="h-full w-full object-cover" />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-center">
                                        <div className="flex justify-between text-sm font-medium text-gray-900 dark:text-white">
                                            <h3>Auriculares Premium</h3>
                                            <p>$250.00</p>
                                        </div>
                                        <p className="mt-1 text-xs text-gray-500">Negro mate</p>
                                    </div>
                                </div>
                                {/* Item 2 */}
                                <div className="flex gap-4">
                                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 bg-white">
                                        <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop" alt="Producto" className="h-full w-full object-cover" />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-center">
                                        <div className="flex justify-between text-sm font-medium text-gray-900 dark:text-white">
                                            <h3>Smartwatch S5</h3>
                                            <p>$89.99</p>
                                        </div>
                                        <p className="mt-1 text-xs text-gray-500">Edición Sport</p>
                                    </div>
                                </div>

                                {/* Totales */}
                                <div className="border-t border-gray-100 dark:border-gray-800 pt-4 space-y-3">
                                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                                        <p>Subtotal</p>
                                        <p className="font-medium text-gray-900 dark:text-white">${subtotal}</p>
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                                        <p>Envío</p>
                                        <p className="font-medium text-gray-900 dark:text-white">
                                            {shippingMethod === 'standard' ? 'Gratis' : '$15.00'}
                                        </p>
                                    </div>
                                    <div className="border-t border-gray-200 dark:border-gray-700 pt-3 flex justify-between items-center">
                                        <p className="text-base font-bold text-gray-900 dark:text-white">Total</p>
                                        <div className="text-right">
                                            <p className="text-xl font-black text-primary">${total.toFixed(2)}</p>
                                            <p className="text-xs text-gray-500">MXN</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sellos de seguridad (Simulados) */}
                        <div className="flex justify-center gap-4 opacity-60">
                            <div className="flex items-center gap-1 text-xs font-bold text-gray-500">
                                <span className="material-symbols-outlined text-lg">verified_user</span> Norton Secured
                            </div>
                            <div className="flex items-center gap-1 text-xs font-bold text-gray-500">
                                <span className="material-symbols-outlined text-lg">lock</span> SSL Encrypted
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}