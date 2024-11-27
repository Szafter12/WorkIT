import { Request, Response } from 'express'
import { getAllSpecializations } from '../models/specializations'

export const getSpecializations = async(req: Request, res: Response) => {
    try {
        const specializations = await getAllSpecializations()
        res.json(specializations)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Wystąpił błąd podczas pobiernia danych"})
    }
}