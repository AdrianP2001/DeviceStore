import 'dotenv/config'; // <--- ¡Importante! Carga el archivo .env
import { PrismaClient } from '@prisma/client';

// Intentamos primero sin argumentos, confiando en que dotenv cargó la URL.
// Si esto falla, la alternativa es: new PrismaClient({ datasourceUrl: process.env.DATABASE_URL });
const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Empezando el seed...');

    // (El resto de tu código sigue igual...)
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();
    await prisma.address.deleteMany();
    await prisma.product.deleteMany();
    await prisma.user.deleteMany();

    // ... (Pega aquí el resto de la creación de usuarios y productos que tenías) ...

    // Ejemplo breve para no repetir todo el bloque si ya lo tienes:
    const admin = await prisma.user.create({
        data: {
            email: 'admin@devicestore.com',
            name: 'Carlos Admin',
            password: 'admin123',
            role: 'admin',
        },
    });

    // ...
    console.log('✅ Seed completado.');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });