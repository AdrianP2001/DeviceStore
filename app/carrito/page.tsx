'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard'; // Reutilizamos tu componente para las recomendaciones

export default function CartPage() {
    // 1. Estado inicial con datos simulados (tal como en tu diseño HTML)
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Auriculares Bluetooth Noise Cancelling",
            specs: "Color: Negro | Garantía: 1 año",
            price: 1200.00,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
            quantity: 1,
            stockStatus: "En stock",
            stockColor: "text-green-600"
        },
        {
            id: 2,
            name: "Monitor 27'' 4K UHD",
            specs: "Resolución: 3840x2160 | Panel IPS",
            price: 6500.00,
            image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=2070&auto=format&fit=crop",
            quantity: 1,
            stockStatus: "Pocas unidades",
            stockColor: "text-orange-500"
        },
        {
            id: 3,
            name: "Cable HDMI 2.1 Alta Velocidad",
            specs: "Longitud: 2m | 8K 60Hz",
            price: 350.00, // Precio unitario
            image: "https://images.unsplash.com/photo-1542393545-facac42e679a?q=80&w=2070&auto=format&fit=crop",
            quantity: 2,
            stockStatus: "En stock",
            stockColor: "text-green-600"
        }
    ]);

    // 2. Funciones para modificar el carrito
    const updateQuantity = (id: number, change: number) => {
        setCartItems(items =>
            items.map(item => {
                if (item.id === id) {
                    const newQuantity = Math.max(1, item.quantity + change);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    const removeItem = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    // 3. Cálculos automáticos (se recalculan cada vez que cambia cartItems)
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = subtotal * 0.16; // Ejemplo del 16% de IVA
    const total = subtotal + tax;

    return (
        <main className="layout-container mx-auto max-w-[1200px] px-4 md:px-10 py-8 flex flex-col gap-8">

            {/* Encabezado */}
            <div className="flex flex-wrap justify-between items-end gap-3 pb-2 border-b border-gray-200 dark:border-gray-800">
                <div>
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">Carrito de compras</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">{cartItems.length} artículos en tu carrito</p>
                </div>
                <Link href="/catalogo" className="text-primary font-medium hover:underline">Seguir comprando</Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Columna Izquierda: Lista de Productos */}
                <div className="lg:col-span-8 flex flex-col gap-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex flex-col md:flex-row gap-4 bg-white dark:bg-[#1a1d2d] p-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm relative group">
                            {/* Imagen y Detalles */}
                            <div className="flex flex-1 items-start gap-4">
                                <div className="size-24 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">{item.name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.specs}</p>
                                        <p className={`text-sm font-medium mt-2 flex items-center gap-1 ${item.stockColor}`}>
                                            <span className="material-symbols-outlined text-[16px]">{item.stockStatus === 'En stock' ? 'check_circle' : 'timelapse'}</span>
                                            {item.stockStatus}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-gray-400 hover:text-red-500 text-sm font-medium flex items-center gap-1 mt-3 md:hidden"
                                    >
                                        <span className="material-symbols-outlined text-[18px]">delete</span> Eliminar
                                    </button>
                                </div>
                            </div>

                            {/* Controles y Precio (Desktop) */}
                            <div className="flex items-center justify-between md:flex-col md:items-end md:justify-start gap-4 md:w-1/3 shrink-0">
                                <div className="flex items-center gap-2">
                                    <button onClick={() => updateQuantity(item.id, -1)} className="size-8 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">-</button>
                                    <span className="w-8 text-center font-medium text-gray-900 dark:text-white">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)} className="size-8 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">+</button>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold text-gray-900 dark:text-white">${(item.price * item.quantity).toLocaleString()}</p>
                                    {item.quantity > 1 && (
                                        <p className="text-xs text-gray-500">(${item.price} c/u)</p>
                                    )}
                                </div>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="hidden md:flex text-gray-400 hover:text-red-500 transition-colors p-1"
                                    title="Eliminar producto"
                                >
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                        </div>
                    ))}

                    {cartItems.length === 0 && (
                        <div className="text-center py-12 bg-white dark:bg-[#1a1d2d] rounded-xl border border-gray-200 dark:border-gray-800">
                            <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">shopping_cart_off</span>
                            <p className="text-xl font-bold text-gray-900 dark:text-white">Tu carrito está vacío</p>
                            <Link href="/" className="text-primary hover:underline mt-2 inline-block">Volver a la tienda</Link>
                        </div>
                    )}
                </div>

                {/* Columna Derecha: Resumen */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <div className="bg-white dark:bg-[#1a1d2d] p-6 rounded-xl border border-gray-200 dark:border-gray-800 sticky top-24 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Resumen del pedido</h3>

                        <div className="space-y-3 pb-6 border-b border-gray-100 dark:border-gray-700">
                            <div className="flex justify-between text-gray-500 dark:text-gray-400">
                                <span>Subtotal</span>
                                <span className="font-medium text-gray-900 dark:text-white">${subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-500 dark:text-gray-400">
                                <span>Envío estimado</span>
                                <span className="font-medium text-green-600">Gratis</span>
                            </div>
                            <div className="flex justify-between text-gray-500 dark:text-gray-400">
                                <span>Impuestos (16%)</span>
                                <span className="font-medium text-gray-900 dark:text-white">${tax.toLocaleString()}</span>
                            </div>

                            {/* Input Cupón */}
                            <div className="pt-2 flex gap-2">
                                <input type="text" placeholder="Código de promoción" className="flex-1 rounded-lg border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#252836] text-sm focus:ring-primary focus:border-primary px-3 py-2" />
                                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg text-sm font-bold transition-colors">Aplicar</button>
                            </div>
                        </div>

                        <div className="flex justify-between items-end py-6">
                            <span className="text-lg font-bold text-gray-900 dark:text-white">Total</span>
                            <div className="text-right">
                                <span className="text-3xl font-black text-primary">${total.toLocaleString()}</span>
                                <p className="text-xs text-gray-500">MXN</p>
                            </div>
                        </div>

                        <Link href="/checkout" className="w-full">
                            <button className="w-full bg-primary hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2">
                                Proceder al pago
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </Link>

                        <div className="mt-6 flex flex-col items-center gap-2 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px]">lock</span>
                                Transacción segura
                            </div>
                            <div className="flex gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
                                <span className="font-bold border px-1 rounded">VISA</span>
                                <span className="font-bold border px-1 rounded">MC</span>
                                <span className="font-bold border px-1 rounded">PayPal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cross Selling (Recomendados) */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Productos que podrían interesarte</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ProductCard
                        title="Teclado Mecánico RGB"
                        price={1450.00}
                        image="https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=2071&auto=format&fit=crop"
                        category="Accesorios"
                    />
                    <ProductCard
                        title="Mouse Gamer Pro"
                        price={890.00}
                        image="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2067&auto=format&fit=crop"
                        category="Gaming"
                    />
                    <ProductCard
                        title="Webcam HD 1080p"
                        price={650.00}
                        image="https://images.unsplash.com/photo-1596205836474-cb91924b1263?q=80&w=2072&auto=format&fit=crop"
                        category="Streaming"
                    />
                    <ProductCard
                        title="Soporte Aluminio Laptop"
                        price={450.00}
                        image="https://images.unsplash.com/photo-1625121434947-f5597f74880c?q=80&w=1974&auto=format&fit=crop"
                        category="Oficina"
                    />
                </div>
            </div>
        </main>
    );
}