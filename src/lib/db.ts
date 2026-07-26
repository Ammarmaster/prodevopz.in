import { PrismaClient } from "../generated/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const createPrismaClient = () => {
  // Use database URL from env or fallback to local path
  const dbUrl = process.env.DATABASE_URL || "file:prisma/dev.db";
  
  // Initialize adapter with connection options
  const adapter = new PrismaBetterSqlite3({ url: dbUrl });
  
  return new PrismaClient({ adapter });
};

export const db = 
  globalForPrisma.prisma && "otpVerification" in globalForPrisma.prisma
    ? globalForPrisma.prisma
    : createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
