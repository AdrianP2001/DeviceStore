'use client'; // Necesario para usar interactividad (useState)

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default function ProductDetail() {
    // Estado para la cantidad y la pestaña activa
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [selectedImage, setSelectedImage] = useState(0);

    // Datos simulados (mockup) basados en tu diseño
    const product = {
        title: "Auriculares Bluetooth Noise Cancelling Pro",
        price: 129.99,
        originalPrice: 199.99,
        rating: 4.8,
        reviews: 120,
        description: "Experimenta un sonido de alta fidelidad con nuestra tecnología de cancelación de ruido activa líder en la industria. Diseñados para brindar comodidad durante todo el día.",
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1524678606372-565e1742b75d?q=80&w=1974&auto=format&fit=crop"
        ]
    };

    return (
        <main className="layout-container mx-auto max-w-[1200px] px-4 md:px-10 py-8">

            {/* Breadcrumbs */}
            <nav className="flex mb-8 text-sm text-gray-500 dark:text-gray-400">
                <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
                <span className="mx-2">/</span>
                <Link href="/catalogo" className="hover:text-primary transition-colors">Audio</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-900 dark:text-white font-medium truncate">{product.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Columna Izquierda: Galería */}
                <div className="flex flex-col gap-4">
                    <div className="w-full aspect-square bg-white dark:bg-[#1a1d2d] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex items-center justify-center p-4 relative group">
                        <img
                            src={product.images[selectedImage]}
                            alt={product.title}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        <button className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/50 rounded-full text-gray-500 hover:text-red-500 transition-colors">
                            <span className="material-symbols-outlined">favorite</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {product.images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`aspect-square rounded-lg border-2 overflow-hidden p-2 bg-white dark:bg-[#1a1d2d] transition-all ${selectedImage === index ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200 dark:border-gray-800 hover:border-primary'}`}
                            >
                                <img src={img} alt={`Vista ${index}`} className="w-full h-full object-contain" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Columna Derecha: Información */}
                <div className="flex flex-col">
                    <div className="mb-3 flex gap-2">
                        <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-bold px-2.5 py-0.5 rounded-full">Novedad</span>
                        <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs font-bold px-2.5 py-0.5 rounded-full">Envío Gratis</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                        {product.title}
                    </h1>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map(star => (
                                <span key={star} className="material-symbols-outlined text-[20px] fill-current">star</span>
                            ))}
                        </div>
                        <span className="text-sm font-medium text-primary hover:underline cursor-pointer">{product.reviews} Reseñas</span>
                    </div>

                    <div className="flex items-baseline gap-4 mb-6">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                        <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                        <span className="text-sm font-bold text-green-600 dark:text-green-400">Ahorras 35%</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-8">
                        {product.description}
                    </p>

                    <div className="h-px bg-gray-200 dark:bg-gray-800 w-full mb-8"></div>

                    {/* Selectores */}
                    <div className="space-y-6 mb-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Color</h3>
                            <div className="flex items-center gap-3">
                                <button className="w-8 h-8 rounded-full bg-black ring-2 ring-offset-2 ring-black dark:ring-offset-[#101322]"></button>
                                <button className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300"></button>
                                <button className="w-8 h-8 rounded-full bg-blue-600"></button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Contador de Cantidad */}
                            <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg w-max bg-white dark:bg-[#1a1d2d]">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-l-lg"
                                >-</button>
                                <span className="w-12 text-center text-gray-900 dark:text-white font-medium">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-r-lg"
                                >+</button>
                            </div>

                            <button className="flex-1 bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">shopping_cart</span>
                                Añadir al Carrito
                            </button>
                        </div>
                    </div>

                    {/* Features check */}
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                        {['Envío Express', 'Garantía 2 años', 'Devoluciones Gratis', 'Soporte 24/7'].map((feat) => (
                            <div key={feat} className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                <span>{feat}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pestañas de Información */}
            <div className="mb-16">
                <div className="border-b border-gray-200 dark:border-gray-800 mb-6">
                    <nav className="flex space-x-8">
                        {['description', 'specs', 'shipping'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${activeTab === tab
                                        ? 'border-primary text-primary'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                                    }`}
                            >
                                {tab === 'description' ? 'Descripción' : tab === 'specs' ? 'Especificaciones' : 'Envíos'}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Contenido de la pestaña (simple ejemplo) */}
                <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    {activeTab === 'description' && (
                        <p>Descubre una nueva dimensión de audio con los Auriculares Bluetooth Noise Cancelling Pro. Equipados con drivers de 40mm ajustados con precisión.</p>
                    )}
                    {activeTab === 'specs' && (
                        <ul className="list-disc pl-5">
                            <li>Bluetooth 5.2</li>
                            <li>Batería: 30 horas</li>
                            <li>Peso: 250g</li>
                        </ul>
                    )}
                    {activeTab === 'shipping' && (
                        <p>Envío gratuito en pedidos superiores a $50. Entregas en 24-48 horas laborables.</p>
                    )}
                </div>
            </div>

            {/* Productos Relacionados */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Productos Relacionados</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ProductCard
                        title="Altavoz Portátil X-Bass"
                        price={89.99}
                        image="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1936&auto=format&fit=crop"
                        category="Audio"
                        badge="-20%"
                        badgeColor="red"
                    />
                    <ProductCard
                        title="SmartWatch Series 5"
                        price={249.99}
                        image="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop"
                        category="Wearables"
                    />
                    {/* Puedes añadir más aquí */}
                </div>
            </section>

        </main>
    );
}