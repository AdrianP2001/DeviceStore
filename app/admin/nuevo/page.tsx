import { createProduct } from '../actions';
import Link from 'next/link';

export default function NewProductPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#1a1d2d] p-8 flex justify-center items-start">
            <div className="w-full max-w-2xl bg-white dark:bg-[#1e2030] rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 p-8">

                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Agregar Nuevo Producto</h1>
                    <Link href="/admin" className="text-sm text-gray-500 hover:text-primary">Cancelar</Link>
                </div>

                {/* El 'action' conecta este formulario con tu función de servidor */}
                <form action={createProduct} className="space-y-6">

                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nombre del Producto</label>
                            <input name="name" required type="text" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-3" placeholder="Ej: iPhone 15 Pro" />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Descripción</label>
                            <textarea name="description" required rows={3} className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-3" placeholder="Detalles del producto..."></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Precio ($)</label>
                            <input name="price" required type="number" step="0.01" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-3" placeholder="0.00" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Stock</label>
                            <input name="stock" required type="number" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-3" placeholder="10" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Categoría</label>
                            <select name="category" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-3">
                                <option value="Audio">Audio</option>
                                <option value="Computadoras">Computadoras</option>
                                <option value="Celulares">Celulares</option>
                                <option value="Accesorios">Accesorios</option>
                                <option value="Wearables">Wearables</option>
                                <option value="Smart Home">Smart Home</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Etiqueta (Opcional)</label>
                            <input name="badge" type="text" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-3" placeholder="Ej: NUEVO, OFERTA" />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">URL de Imagen</label>
                            <input name="image" required type="url" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-3" placeholder="https://..." />
                            <p className="text-xs text-gray-500 mt-1">Por ahora usa una URL externa (ej. Unsplash).</p>
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all mt-4">
                        Guardar Producto
                    </button>

                </form>
            </div>
        </div>
    );
}