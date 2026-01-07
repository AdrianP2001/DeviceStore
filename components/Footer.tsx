import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-[#1a1d2d] border-t border-[#f0f1f4] dark:border-[#2a2e3f] mt-12">
            {/* Newsletter */}
            <div className="border-b border-[#f0f1f4] dark:border-[#2a2e3f]">
                <div className="mx-auto max-w-[1200px] px-4 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <h3 className="text-xl font-bold text-[#111218] dark:text-white">Join our newsletter</h3>
                        <p className="text-[#616889] text-sm">We'll send you a nice letter once per week. No spam.</p>
                    </div>
                    <form className="flex w-full max-w-md gap-2">
                        <input
                            className="flex-1 rounded-lg border border-[#dbdde6] dark:border-[#363b4f] bg-[#f0f1f4] dark:bg-[#252836] px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:text-white"
                            placeholder="Enter your email"
                            type="email"
                        />
                        <button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Links */}
            <div className="mx-auto max-w-[1200px] px-4 md:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-[#111218] dark:text-white">
                        <div className="size-6 flex items-center justify-center bg-primary rounded text-white">
                            <span className="material-symbols-outlined text-sm">bolt</span>
                        </div>
                        <span className="font-bold text-lg">TechStore</span>
                    </div>
                    <p className="text-sm text-[#616889]">The best tech accessories for your modern life.</p>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-[#111218] dark:text-white">Shop</h4>
                    <Link href="/catalogo" className="text-sm text-[#616889] hover:text-primary">All Products</Link>
                    <Link href="/featured" className="text-sm text-[#616889] hover:text-primary">Featured</Link>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-[#111218] dark:text-white">Support</h4>
                    <Link href="/faq" className="text-sm text-[#616889] hover:text-primary">FAQ</Link>
                    <Link href="/contact" className="text-sm text-[#616889] hover:text-primary">Contact Us</Link>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-[#111218] dark:text-white">Legal</h4>
                    <Link href="/terms" className="text-sm text-[#616889] hover:text-primary">Terms</Link>
                    <Link href="/privacy" className="text-sm text-[#616889] hover:text-primary">Privacy</Link>
                </div>
            </div>

            <div className="border-t border-[#f0f1f4] dark:border-[#2a2e3f] py-6 text-center">
                <p className="text-xs text-[#616889]">© 2024 TechStore. All rights reserved.</p>
            </div>
        </footer>
    );
}