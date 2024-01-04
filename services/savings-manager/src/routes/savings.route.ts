import { Router } from "express";
import { createSavingHandler, deleteSavingHandler, getAllSavingsHandler, getSavingHandler, updateSavingHandler } from "../controllers";

let router = Router();

router.get("", getAllSavingsHandler)
router.get("/:id", getSavingHandler)
router.post("", createSavingHandler)
router.put("/:id", updateSavingHandler)
router.delete("/:id", deleteSavingHandler)

export { router as savingsRouter }