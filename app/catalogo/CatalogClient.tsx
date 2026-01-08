'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';

// Definimos la forma de los datos que recibiremos de la DB
interface Product {
    id: number;
    name: string; // Ojo: en tu DB se llama 'name', en el diseño anterior era 'title'
    price: number;
    description: string;
    category: string;
    image: string;
    badge: string | null;
    stock: number;
}

export default function CatalogClient({ initialProducts }: { initialProducts: Product[] }) {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [priceRange, setPriceRange] = useState(2000);

    // Aquí podrías agregar lógica para filtrar 'initialProducts' usando 'priceRange'
    const filteredProducts = initialProducts.filter(p => p.price <= priceRange);

    return (
        <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar de Filtros */}
            <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
                {/* Filtro de Precio */}
                <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-4">Precio Máximo</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between gap-4">
                            <span className="text-gray-900 dark:text-white font-medium">${priceRange}</span>
                        </div>
                        <input
                            type="range" min="0" max="2000" step="50"
                            value={priceRange}
                            onChange={(e) => setPriceRange(Number(e.target.value))}
                            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                    </div>
                </div>
                {/* ... Aquí irían más filtros ... */}
            </aside>

            {/* Grilla de Productos */}
            <div className="flex-1">
                <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            title={product.name} // Adaptamos 'name' a 'title' que espera el componente
                            price={product.price}
                            category={product.category}
                            image={product.image}
                            badge={product.badge || undefined}
                            rating={4.5} // Dato dummy por ahora
                        />
                    ))}

                    {filteredProducts.length === 0 && (
                        <p className="col-span-full text-center py-10 text-gray-500">No se encontraron productos en este rango de precio.</p>
                    )}
                </div>
            </div>
        </div>
    );
}