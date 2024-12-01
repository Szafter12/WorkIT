import { query } from '../config/db'

export const getAllSpecializations = async () => {
	const sql = 'SELECT * FROM specializations'
	const res = await query(sql)
	return res
}

export const getPopularTech = async () => {
	const sql = 'SELECT * FROM abilities ORDER BY ability_id'
	const res = await query(sql)
	return res
}
