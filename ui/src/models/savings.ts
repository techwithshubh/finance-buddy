import * as Yup from 'yup';

export const SAVINGS_TYPE = ["Fixed Deposit", "Mutual Funds", "Stocks", "Real Estate", "Gold/Silver"]
export const SAVING_PLATFORM = ["Zerodha","Groww", "Banks","Others"]

export const savingsSchema = Yup.object({
    amount: Yup.string().required('Amount is required'),
    savingsType: Yup.mixed().oneOf(SAVINGS_TYPE).required("Savings Type is Required"),
    platform: Yup.mixed().oneOf(SAVING_PLATFORM).required("Platform is Required"),
    interestRate: Yup.number(),
    createDate: Yup.string().required("Create Date is Required"),
    maturityDate: Yup.string(),
    notes: Yup.string()
})

export type Saving = Yup.InferType<typeof savingsSchema>;