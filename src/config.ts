import dotenv from 'dotenv';
dotenv.config();

export const SERVER_CONFIG = {
    PORT: process.env.PORT? parseInt(process.env.PORT) : 8765,
};

export const DATABASE_CONFIG = {
    HOST: process.env.DATABASE_HOST || "localhost",
    USER: process.env.DATABASE_USER || "root",
    PASS: process.env.DATABASE_PASS || "",
    SCHEMA: process.env.DATABASE_SCHEMA || "AVBSL"
};