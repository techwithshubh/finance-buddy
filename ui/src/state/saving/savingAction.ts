export enum SavingActionTypes {
  SET_AMOUNT = "SET_AMOUNT",
  SET_SAVINGS_TYPE = "SET_SAVINGS_TYPE",
  SET_PLATFORM = "SET_PLATFORM",
  SET_INTEREST_RATE = "SET_INTEREST_RATE",
  SET_NOTES = "SET_ NOTES",
  SET_CREATE_DATE = "SET_CREATE_DATE",
  SET_MATURITY_DATE = "SET_MATURITY_DATE",
  RESET_FORM = "RESET_FORM",
}

export type SavingActionType = {
  type: SavingActionTypes;
  payload?: string | number;
};

export const setAmount = (amount: number) => ({
  type: SavingActionTypes.SET_AMOUNT,
  payload: amount,
});

export const setSavingType = (savingType: string) => ({
  type: SavingActionTypes.SET_SAVINGS_TYPE,
  payload: savingType,
});

export const setPlatform = (platform: string) => ({
  type: SavingActionTypes.SET_PLATFORM,
  payload: platform,
});

export const setInterestRate = (interestRate: number) => ({
  type: SavingActionTypes.SET_INTEREST_RATE,
  payload: interestRate,
});

export const setCreateDate = (createDate: string) => ({
  type: SavingActionTypes.SET_CREATE_DATE,
  payload: createDate,
});

export const setMaturityDate = (maturityDate: string) => ({
  type: SavingActionTypes.SET_MATURITY_DATE,
  payload: maturityDate,
});

export const setNotes = (notes: string) => ({
  type: SavingActionTypes.SET_NOTES,
  payload: notes,
});

export const resetForm = () => ({
  type: SavingActionTypes.RESET_FORM,
});
