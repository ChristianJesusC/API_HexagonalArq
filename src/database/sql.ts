import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { Signale } from "signale";

const signale = new Signale();
dotenv.config();

export const sqlConexion = {
  host: process.env.HOST,
  user: process.env.USUARIO,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
};

const pool = mysql.createPool(sqlConexion);

export async function query(sql: string, params: any[]) {
  try {
    const conn = await pool.getConnection();
    signale.success("Conexión exitosa a la BD");
    const result = await conn.execute(sql, params);
    conn.release();
    return result;
  } catch (error) {
    signale.error(error);
    return null;
  }
}

