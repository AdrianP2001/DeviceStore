// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="bg-white dark:bg-[#1a1d2d] border-b border-[#f0f1f4] dark:border-[#2a2e3f] sticky top-0 z-50">
            <div className="layout-container flex flex-col mx-auto max-w-[1440px]">
                <div className="flex items-center justify-between whitespace-nowrap px-4 py-3 md:px-10">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-2 text-[#111218] dark:text-white">
                        <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
                            <span className="material-symbols-outlined">bolt</span>
                        </div>
                        <h2 className="text-xl font-bold leading-tight tracking-tight">DeviceStore</h2>
                    </Link>

                    {/* Resto de tu navegación aquí... */}
                    <nav className="hidden lg:flex items-center gap-6">
                        <Link href="/catalogo" className="text-sm font-medium hover:text-primary transition-colors">Tienda</Link>
                        {/* ... */}
                    </nav>
                </div>
            </div>
        </header>
    );
}