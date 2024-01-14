import {
  SAVINGS_TYPE,
  SAVING_PLATFORM,
  Saving,
  savingsSchema,
} from "../models/savings";
import { useFormik } from "formik";
import {
  savingInitialState,
  savingReducer,
} from "../state/saving/savingReducer";
import { useEffect, useReducer } from "react";
import {
  resetForm,
  setAmount,
  setCreateDate,
  setInterestRate,
  setMaturityDate,
  setNotes,
  setPlatform,
  setSavingType,
} from "../state/saving/savingAction";
import { useSavingsMutation } from "../hooks/useApi";
import { Navigate } from "react-router-dom";

type SavingsProps = {
  savingsAdded: (isSuccess:boolean) => void
}

export const SavingsForm = ({ savingsAdded }: SavingsProps) => {
  const [state, dispatch] = useReducer(savingReducer, {
    ...savingInitialState,
  });
  const { mutate, isLoading, isError, isSuccess } = useSavingsMutation();

  const formik = useFormik({
    initialValues: state,
    validationSchema: savingsSchema,
    onSubmit: (values: Saving) => {
      mutate(values);
      dispatch(resetForm());
    },
  });

  useEffect(()=>{
      savingsAdded(isSuccess)
  },[isSuccess, savingsAdded])

  const savingTypeOptions = SAVINGS_TYPE.map((type: string) => {
    return (
      <option key={type} value={type}>
        {type}
      </option>
    );
  });

  const platformOptions = SAVING_PLATFORM.map((platform: string) => {
    return (
      <option key={platform} value={platform}>
        {platform}
      </option>
    );
  });

  return (
    <>
      {isError && <Navigate to="/api/error" replace={true} />}
      <form
        className="flex flex-col gap-4 px-4 py-8"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>

          <input
            type="number"
            id="amount"
            name="amount"
            onChange={(e) => {
              formik.handleChange(e);
              dispatch(setAmount(+e.target.value));
            }}
            value={formik.values.amount}
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
          {formik.touched.amount && formik.errors.amount ? (
            <span className="text-sm text-red-500">{formik.errors.amount}</span>
          ) : null}
        </div>
        <div className="grid grid-cols-6 gap-4 sm:gap-6 ">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="savingsType"
              className="block text-sm font-medium text-gray-700"
            >
              Savings Type
            </label>

            <select
              id="savingsType"
              name="savingsType"
              onChange={(e) => {
                formik.handleChange(e);
                dispatch(setSavingType(e.target.value));
              }}
              value={formik.values.savingsType as string}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            >
              {savingTypeOptions}
            </select>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="platform"
              className="block text-sm font-medium text-gray-700"
            >
              Platform
            </label>

            <select
              id="platform"
              name="platform"
              onChange={(e) => {
                formik.handleChange(e);
                dispatch(setPlatform(e.target.value));
              }}
              value={formik.values.platform as string}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            >
              {platformOptions}
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="interestRate"
            className="block text-sm font-medium text-gray-700"
          >
            Interest Rate (Optional)
          </label>
          <div className="relative">
            <input
              type="number"
              id="interestRate"
              onChange={(e) => {
                formik.handleChange(e);
                dispatch(setInterestRate(+e.target.value));
              }}
              value={formik.values.interestRate}
              className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />

            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
              %
            </span>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 sm:gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="createDate"
              className="block text-sm font-medium text-gray-700"
            >
              Create Date
            </label>

            <input
              type="date"
              id="createDate"
              name="createDate"
              onChange={(e) => {
                formik.handleChange(e);
                dispatch(setCreateDate(e.target.value));
              }}
              value={formik.values.createDate}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
            {formik.touched.createDate && formik.errors.createDate ? (
              <span className="text-sm text-red-500">
                {formik.errors.createDate}
              </span>
            ) : null}
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="maturityDate"
              className="block text-sm font-medium text-gray-700"
            >
              Maturity Date (Optional)
            </label>

            <input
              type="date"
              id="maturityDate"
              name="maturityDate"
              onChange={(e) => {
                formik.handleChange(e);
                dispatch(setMaturityDate(e.target.value));
              }}
              value={formik.values.maturityDate}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-gray-700"
          >
            Additional Notes (Optional)
          </label>

          <textarea
            id="notes"
            name="notes"
            onChange={(e) => {
              formik.handleChange(e);
              dispatch(setNotes(e.target.value));
            }}
            value={formik.values.notes}
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="rounded text-white bg-blue-500 text-sm px-8 py-2 hover:bg-blue-700"
          >
            {isLoading ? (
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-white animate-[1.2s_infinite_-.32s_ease-in-out_scaleUp]"></div>
                <div className="w-2 h-2 rounded-full bg-white animate-[1.2s_infinite_-.12s_ease-in-out_scaleUp]"></div>
                <div className="w-2 h-2 rounded-full bg-white animate-scaleUp"></div>
              </div>
            ) : (
              <span>Add</span>
            )}
          </button>
          <button
            type="button"
            className="rounded text-black text-sm px-8 py-2 border border-gray-200 hover:border-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};
