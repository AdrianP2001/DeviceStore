import { prisma } from '@/lib/prisma';
import CatalogClient from './CatalogClient';

// Esta función se ejecuta en el SERVIDOR cada vez que alguien entra a la página
async function getProducts() {
    const products = await prisma.product.findMany({
        orderBy: {
            id: 'desc', // Mostramos los más nuevos primero
        },
    });

    // Transformamos el precio (Decimal) a Number porque React no entiende Decimales de DB
    return products.map(product => ({
        ...product,
        price: Number(product.price),
        badge: product.badge || null, // Aseguramos que null se maneje bien
    }));
}

export default async function CatalogPage() {
    // 1. Obtenemos los datos reales
    const products = await getProducts();

    return (
        <main className="layout-container mx-auto max-w-[1440px] px-4 md:px-8 py-6">

            {/* Breadcrumbs y Título */}
            <nav className="flex mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                <a href="/" className="hover:text-primary transition-colors">Inicio</a>
                <span className="mx-2">/</span>
                <span className="text-gray-900 dark:text-white">Tienda</span>
            </nav>

            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">Catálogo Completo</h1>
                <p className="text-gray-500 dark:text-gray-400">Mostrando {products.length} productos disponibles</p>
            </div>

            {/* 2. Renderizamos el Cliente pasándole los datos */}
            <CatalogClient initialProducts={products} />

        </main>
    );
}