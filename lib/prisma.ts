import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ['query'], // Esto es útil para ver en la consola qué consultas SQL se hacen
    });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;