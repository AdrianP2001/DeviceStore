import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="layout-container flex flex-col mx-auto max-w-[1200px] w-full px-4 md:px-10 py-6 gap-12">

      {/* --- HERO SECTION --- */}
      <section className="@container">
        <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-center px-6 py-10 md:px-12 relative overflow-hidden group shadow-xl"
          // Usamos un degradado y un color de fondo gris oscuro por si falla la imagen
          style={{
            backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%), url("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop")'
          }}>
          <div className="flex flex-col gap-4 text-left z-10 max-w-[600px]">
            <span className="text-primary font-bold uppercase tracking-wider text-sm bg-white/10 backdrop-blur-md px-3 py-1 rounded-full w-fit">New Arrival</span>
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Experience Pure Sound Silence.
            </h1>
            <h2 className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed">
              The all-new Noise-Canceling Pro series allows you to immerse yourself in music like never before.
            </h2>
            <div className="pt-4">
              <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-blue-700 transition-all text-white text-base font-bold shadow-lg hover:shadow-primary/50 gap-2">
                <span>Shop Now</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CATEGORIES --- */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-[#111218] dark:text-white">Shop by Category</h2>
          <Link href="/catalogo" className="text-primary font-bold text-sm hover:underline flex items-center">
            View All <span className="material-symbols-outlined text-sm ml-1">chevron_right</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {['Audio', 'Cables', 'Chargers', 'Wearables', 'Gaming'].map((cat) => (
            <Link href={`/catalogo?cat=${cat}`} key={cat} className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-[#dbdde6] dark:border-[#2a2e3f] bg-white dark:bg-[#1a1d2d] p-6 hover:border-primary hover:shadow-md transition-all">
              <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">
                  {cat === 'Audio' ? 'headphones' : cat === 'Cables' ? 'usb' : cat === 'Chargers' ? 'bolt' : cat === 'Wearables' ? 'watch' : 'videogame_asset'}
                </span>
              </div>
              <h3 className="font-bold text-[#111218] dark:text-white">{cat}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* --- FEATURED PRODUCTS --- */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-[#111218] dark:text-white">Featured Products</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            title="Wireless Earbuds Pro"
            price={129.99}
            image="https://images.unsplash.com/photo-1572569028790-ed5105435903?q=80&w=2070&auto=format&fit=crop"
            rating={4.8}
          />
          <ProductCard
            title="USB-C Fast Charger"
            price={24.99}
            originalPrice={35.00}
            image="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2071&auto=format&fit=crop"
            rating={4.9}
            badge="SALE"
            badgeColor="red"
          />
          <ProductCard
            title="Smart Watch Series 5"
            price={299.99}
            image="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop"
            rating={4.7}
          />
          <ProductCard
            title="Braided HDMI Cable"
            price={15.00}
            image="https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=2070&auto=format&fit=crop"
            rating={4.5}
          />
        </div>
      </section>

      {/* --- WEEKLY DEALS --- */}
      <section className="flex flex-col gap-6 py-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#111218] dark:text-white text-3xl font-black leading-tight tracking-tight">Weekly Deals</h1>
          <p className="text-gray-500 text-base font-normal">Don't miss out on our limited-time offers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative flex flex-col justify-end overflow-hidden rounded-xl bg-black min-h-[240px] md:min-h-[300px]">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)), url("https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2001&auto=format&fit=crop")' }}>
            </div>
            <div className="relative p-8 flex flex-col items-start gap-3">
              <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">20% OFF</span>
              <h3 className="text-white text-2xl font-bold">Premium Cables</h3>
              <p className="text-gray-300 text-sm">Upgrade your connectivity for less.</p>
              <button className="mt-2 text-white text-sm font-bold underline decoration-2 underline-offset-4 hover:text-primary transition-colors">Shop Cables</button>
            </div>
          </div>
          <div className="group relative flex flex-col justify-end overflow-hidden rounded-xl bg-black min-h-[240px] md:min-h-[300px]">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)), url("https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=2070&auto=format&fit=crop")' }}>
            </div>
            <div className="relative p-8 flex flex-col items-start gap-3">
              <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
              <h3 className="text-white text-2xl font-bold">Smart Home Sale</h3>
              <p className="text-gray-300 text-sm">Automate your life with these gadgets.</p>
              <button className="mt-2 text-white text-sm font-bold underline decoration-2 underline-offset-4 hover:text-primary transition-colors">Shop Smart Home</button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}