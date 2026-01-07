import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    title: string;
    price: number;
    originalPrice?: number;
    category?: string;
    image: string;
    rating?: number;
    badge?: string;
    badgeColor?: string; // 'green' | 'red' | 'blue' | 'black'
}

export default function ProductCard({
    title,
    price,
    originalPrice,
    category,
    image,
    rating,
    badge,
    badgeColor = 'green'
}: ProductCardProps) {

    // Mapeo simple de colores para los badges (basado en tu HTML)
    const badgeColors: Record<string, string> = {
        green: 'bg-green-500',
        red: 'bg-red-500',
        blue: 'bg-blue-500',
        black: 'bg-slate-800',
    };

    return (
        <div className="group flex flex-col rounded-xl border border-[#dbdde6] dark:border-[#2a2e3f] bg-white dark:bg-[#1a1d2d] overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative w-full aspect-square bg-[#f0f1f4] dark:bg-[#252836] flex items-center justify-center overflow-hidden">
                {/* Badge (Nuevo, Oferta, etc) */}
                {badge && (
                    <span className={`absolute top-3 left-3 text-white text-[10px] font-bold px-2 py-1 rounded z-10 ${badgeColors[badgeColor] || 'bg-primary'}`}>
                        {badge}
                    </span>
                )}

                {/* Imagen */}
                {/* Usamos <img> normal por simplicidad ahora, luego podemos usar <Image> de Next */}
                <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={image}
                    alt={title}
                />

                {/* Botón flotante de favoritos */}
                <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-black/50 rounded-full text-gray-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
            </div>

            <div className="p-4 flex flex-col gap-2 flex-1">
                {category && <p className="text-xs text-slate-500 mb-1">{category}</p>}

                <h3 className="font-semibold text-lg leading-tight text-[#111218] dark:text-white line-clamp-2">
                    <Link href="/producto/detalle" className="hover:text-primary transition-colors">
                        {title}
                    </Link>
                </h3>

                {/* Rating simulado */}
                {rating && (
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-yellow-400 text-[16px] fill">star</span>
                        <span className="text-xs text-gray-500">({rating})</span>
                    </div>
                )}

                <div className="flex items-center justify-between mt-auto pt-2">
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-primary">${price}</span>
                        {originalPrice && (
                            <span className="text-xs text-gray-400 line-through">${originalPrice}</span>
                        )}
                    </div>
                    <button className="p-2 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
}