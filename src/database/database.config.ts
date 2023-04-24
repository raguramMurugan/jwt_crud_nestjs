import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './interface/database.interface';
dotenv.config();

export const databaseConfig : IDatabaseConfig = {
    development : {
        username : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DEV_NAME,
        PORT : process.env.DB_PORT,
        HOST : process.env.DB_HOST,
        dialect : process.env.DB_DIALECT
    },
    production : {
        username : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_PROD_NAME,
        PORT : process.env.DB_PORT,
        HOST : process.env.DB_HOST,
        dialect : process.env.DB_DIALECT

    },
    test : {
        username : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_TEST_NAME,
        PORT : process.env.DB_PORT,
        HOST : process.env.DB_HOST,
        dialect : process.env.DB_DIALECT
    }
}