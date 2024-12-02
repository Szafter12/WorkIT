import { Request, Response } from 'express'
import { buildQuery, cities } from '../models/post'
import { Filters } from '../types/filters'
import { Cities } from '../types/cities'

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

export const getCities = async (req: Request, res: Response): Promise<void> => {
	const city: any = req.body

	try {
		const result = await cities(city.Citieskeywords)
		const Newcity = result.map((row: any) => row.city)
		res.json(Newcity)
	} catch (err) {
		console.log(err)
	}
}
