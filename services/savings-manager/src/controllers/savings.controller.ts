import { Request, Response } from 'express'
import { SavingAttrs } from '../models';
import { createSaving, deleteSaving, getAllSavings, getSaving, updateSaving } from '../services'

const createSavingHandler = async (req: Request, res:Response) => {
    let savingPayload: SavingAttrs = req.body;

    const saving = await createSaving(savingPayload)
    res.status(201).send(saving);
}

const getAllSavingsHandler = async (req: Request, res:Response) => {
    const savings = await getAllSavings()
    res.status(200).send(savings);
}

const getSavingHandler = async (req: Request, res:Response) => {
    const id = req.params["id"]
    const saving = await getSaving(id)
    if(!saving) return res.status(404)
    res.status(200).send(saving);
}

const deleteSavingHandler = async (req: Request, res:Response) => {
    const id = req.params["id"]
    const saving = await deleteSaving(id)
    res.status(202).send(saving);
}

const updateSavingHandler = async (req: Request, res:Response) => {
    const id = req.params["id"]
    const savingPayload = req.body
    const saving = await updateSaving(id,savingPayload)
    res.status(200).send(saving);
}


export {
    createSavingHandler,
    getAllSavingsHandler,
    getSavingHandler,
    deleteSavingHandler,
    updateSavingHandler
}