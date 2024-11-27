import { query } from '../config/db'

export const getAllSpecializations = async () => {
    const sql = 'SELECT * FROM specializations'
    const res = await query(sql)
    return res 
}
