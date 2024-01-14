import moment from "moment";
import { SAVINGS_TYPE, SAVING_PLATFORM, Saving } from "../../models/savings";
import { SavingActionType, SavingActionTypes } from "./savingAction";

export const savingInitialState = {
  amount: 0,
  savingsType: SAVINGS_TYPE[0],
  platform: SAVING_PLATFORM[0],
  interestRate: 0,
  createDate: moment().format("YYYY-MM-DD"),
  maturityDate: "",
  notes: "",
};

export const savingReducer = (
  state: Saving,
  action: SavingActionType
): Saving => {
  switch (action.type) {
    case SavingActionTypes.SET_AMOUNT:
      return action.payload ? { ...state, amount: +action.payload } : state;
    case SavingActionTypes.SET_SAVINGS_TYPE:
      return action.payload ? { ...state, savingsType: action.payload } : state;
    case SavingActionTypes.SET_PLATFORM:
      return action.payload ? { ...state, platform: action.payload } : state;
    case SavingActionTypes.SET_INTEREST_RATE:
      return action.payload
        ? { ...state, interestRate: +action.payload }
        : state;
    case SavingActionTypes.SET_CREATE_DATE:
      return { ...state, createDate: "" + action.payload };
    case SavingActionTypes.SET_MATURITY_DATE:
      return { ...state, maturityDate: "" + action.payload };
    case SavingActionTypes.SET_NOTES:
      return { ...state, notes: "" + action.payload };
    case SavingActionTypes.RESET_FORM:
      return { ...savingInitialState };
    default:
      return state;
  }
};
