import { Saving, SavingAttrs } from "../models";

const createSaving = async (payload: SavingAttrs) => {
  const booking = Saving.build(payload);
  await booking.save();

  return booking;
};

const getAllSavings = async () => {
  return Saving.find();
};

const getSaving = async (id: string) => {
  return Saving.findById(id);
};

const deleteSaving = async (id: string) => {
  const saving = await getSaving(id);
  if (!saving) {
    throw new Error("Saving not found");
  }
  await saving.deleteOne();
  return saving;
};

const updateSaving = async (id: string, payload: SavingAttrs) => {
  const saving = await getSaving(id);
  if (!saving) {
    throw new Error("Saving not found");
  }
  Object.assign(saving, payload);
  await saving.save();
  return saving;
};

export { createSaving, getAllSavings, getSaving, deleteSaving,updateSaving };
