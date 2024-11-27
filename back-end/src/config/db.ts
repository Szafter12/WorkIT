import mysql from 'mysql2/promise'
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
})

export const query = async (sql: string, values: any[] = []) => {
	const [result] = await pool.execute(sql, values)
	return result
}
