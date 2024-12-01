import { Request, Response } from 'express'
import { buildQuery } from '../models/post'
import { Filters } from '../types/filters'

export const handleFilters = async (req: Request, res: Response): Promise<void> => {
	const filters: Filters = req.body

	try {
		const results = await buildQuery(filters)
		const jobTitles = results.map((row: any) => row.job_title) // Mapuj wyniki na tytuły
		res.json(jobTitles) // Zwracaj tablicę tytułów na frontend
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Database query failed' })
	}
}
