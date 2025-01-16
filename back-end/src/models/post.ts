import { query } from '../config/db'
import { Filters } from '../types/filters'

export const buildQuery = async (filters: Filters): Promise<any> => {
	let sql = `
      SELECT DISTINCT job_title
      FROM posts
    `
	const joins: string[] = []
	const conditions: string[] = []
	const values: any[] = []

	if (filters.techCategories && filters.techCategories.length > 0) {
		joins.push('JOIN post_ability USING (post_id) JOIN abilities USING (ability_id)')
		const placeholders = filters.techCategories.map(() => '?').join(', ')
		conditions.push(`abilities.ability_name IN (${placeholders})`)
		values.push(...filters.techCategories)
	}

	if (filters.specializationsCategories && filters.specializationsCategories.length > 0) {
		joins.push('JOIN post_specialization USING (post_id) JOIN specializations USING (specialization_id)')
		const placeholders = filters.specializationsCategories.map(() => '?').join(', ')
		conditions.push(`specializations.specialization IN (${placeholders})`)
		values.push(...filters.specializationsCategories)
	}

	if (filters.lvlCategories && filters.lvlCategories.length > 0) {
		joins.push('JOIN job_level USING (level_id)')
		const placeholders = filters.lvlCategories.map(() => '?').join(', ')
		conditions.push(`job_level.level IN (${placeholders})`)
		values.push(...filters.lvlCategories)
	}

	if (filters.contractCategories && filters.contractCategories.length > 0) {
		joins.push('JOIN contract_type USING (contract_type_id)')
		const placeholders = filters.contractCategories.map(() => '?').join(', ')
		conditions.push(`contract_type.contract_name IN (${placeholders})`)
		values.push(...filters.contractCategories)
	}

	if (filters.dimensionCategories && filters.dimensionCategories.length > 0) {
		joins.push('JOIN work_dimension USING (work_dimension_id)')
		const placeholders = filters.dimensionCategories.map(() => '?').join(', ')
		conditions.push(`work_dimension.work_dimension_name IN (${placeholders})`)
		values.push(...filters.dimensionCategories)
	}

	if (filters.modeCategories && filters.modeCategories.length > 0) {
		joins.push('JOIN work_mode USING (work_mode_id)')
		const placeholders = filters.modeCategories.map(() => '?').join(', ')
		conditions.push(`work_mode.work_mode_name IN (${placeholders})`)
		values.push(...filters.modeCategories)
	}

	if (filters.keywords) {
		conditions.push('job_title LIKE ?')
		values.push(`%${filters.keywords}%`)
	}

	if (filters.Citieskeywords) {
		joins.push('JOIN company_address USING (company_id) JOIN city USING (city_id)')
		conditions.push('city LIKE ?')
		values.push(`%${filters.Citieskeywords}%`)
	}

	sql += joins.join(' ')

	if (conditions.length > 0) {
		sql += ' WHERE ' + conditions.join(' AND ')
	}

	sql += ' GROUP BY job_title'

	console.log('SQL:', sql)
	console.log('Values:', values)

	const rows = await query(sql, values)
	return rows
}

export const cities = async (city: string): Promise<any> => {
	let sql = 'SELECT city FROM city'
	const values: string[] = []

	if (city) {
		sql += ` WHERE city LIKE ?`
		values.push(`%${city}%`)
	}

	const res = await query(sql, values)
	return res
}
