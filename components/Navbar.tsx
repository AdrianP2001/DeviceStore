import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="bg-white dark:bg-[#1a1d2d] border-b border-[#f0f1f4] dark:border-[#2a2e3f] sticky top-0 z-50">
            <div className="flex flex-col mx-auto max-w-[1440px]">
                <div className="flex items-center justify-between whitespace-nowrap px-4 py-3 md:px-10">
                    {/* Logo Section */}
                    <div className="flex items-center gap-4 lg:gap-8">
                        <Link href="/" className="flex items-center gap-2 text-[#111218] dark:text-white">
                            <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
                                <span className="material-symbols-outlined">bolt</span>
                            </div>
                            <h2 className="text-xl font-bold leading-tight tracking-tight">TechStore</h2>
                        </Link>

                        {/* Desktop Search */}
                        <div className="hidden md:flex flex-col min-w-[280px] lg:min-w-[400px]">
                            <div className="flex w-full items-stretch rounded-lg h-10 bg-[#f0f1f4] dark:bg-[#2a2e3f]">
                                <div className="text-[#616889] flex items-center justify-center pl-3">
                                    <span className="material-symbols-outlined text-[20px]">search</span>
                                </div>
                                <input
                                    className="flex w-full flex-1 bg-transparent border-none focus:ring-0 text-sm px-3 text-[#111218] dark:text-white placeholder:text-[#616889]"
                                    placeholder="Search headphones, cables..."
                                />
                                <button className="bg-primary text-white px-4 rounded-r-lg text-sm font-bold hover:bg-blue-700 transition-colors">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Links & Actions */}
                    <div className="flex items-center gap-4 lg:gap-8">
                        <nav className="hidden lg:flex items-center gap-6">
                            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
                            <Link href="/catalogo" className="text-sm font-medium hover:text-primary transition-colors">Shop</Link>
                            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
                        </nav>
                        <div className="flex gap-2">
                            <Link href="/carrito" className="flex items-center justify-center rounded-lg size-10 bg-[#f0f1f4] dark:bg-[#2a2e3f] hover:bg-gray-200 dark:hover:bg-[#363b4f] transition-colors text-[#111218] dark:text-white relative group">
                                <span className="material-symbols-outlined">shopping_cart</span>
                                <span className="absolute top-1 right-1 size-2 bg-primary rounded-full"></span>
                            </Link>
                            <Link href="/perfil" className="flex items-center justify-center rounded-lg size-10 bg-[#f0f1f4] dark:bg-[#2a2e3f] hover:bg-gray-200 dark:hover:bg-[#363b4f] transition-colors text-[#111218] dark:text-white">
                                <span className="material-symbols-outlined">person</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}