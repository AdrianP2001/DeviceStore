'use server';

import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function createProduct(formData: FormData) {
    // Extraemos los datos del formulario HTML
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const price = parseFloat(formData.get('price') as string);
    const stock = parseInt(formData.get('stock') as string);
    const category = formData.get('category') as string;
    const image = formData.get('image') as string;
    const badge = formData.get('badge') as string || null;

    // Guardamos en la Base de Datos
    await prisma.product.create({
        data: {
            name,
            description,
            price,
            stock,
            category,
            image,
            badge
        }
    });

    // Actualizamos las cachés para que el producto aparezca al instante
    revalidatePath('/catalogo');
    revalidatePath('/admin');

    // Volvemos al dashboard
    redirect('/admin');
}