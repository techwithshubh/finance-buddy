import { useMutation } from "react-query";
import { postSavings } from "../services/api";
import { Saving } from "../models/savings";

export const useSavingsMutation = () => {
  return useMutation((data: Saving) => postSavings(data));
};
