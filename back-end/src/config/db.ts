import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'workit',
})

export const query = async (sql: string, values: any[] = []) => {
	const [result] = await pool.execute(sql, values)
	return result
}
