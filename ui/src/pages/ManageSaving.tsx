import { useFormik } from "formik";
import moment from "moment";
import {
  SAVINGS_TYPE,
  SAVING_PLATFORM,
  savingsSchema,
} from "../models/savings";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function nonEmptyObject(obj: any) {
  for (const propName in obj) {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName] === ""
    ) {
      delete obj[propName];
    }
  }
  return obj;
}

export default function ManageSaving() {
  const formik = useFormik({
    initialValues: {
      amount: "",
      savingsType: SAVINGS_TYPE[0],
      platform: SAVING_PLATFORM[0],
      interestRate: "",
      createDate: moment().format("YYYY-MM-DD"),
      maturityDate: "",
      notes: "",
    },
    validationSchema: savingsSchema,
    onSubmit: (values) => {
      const formValue = nonEmptyObject(values);
      alert(JSON.stringify(formValue, null, 2));
    },
  });

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
    <div className="max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
      <section className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <span className="text-gray-400 text-sm">Home</span>
          <span className="text-gray-400 text-sm">/</span>
          <span className="text-gray-400 text-sm">Savings</span>
          <span className="text-gray-400 text-sm">/</span>
          <span className="text-gray-600 text-sm">Add</span>
        </div>
        <h1 className="font-medium text-lg">Add Savings</h1>
        <p className="text-gray-600">
          Fill the below details to add the new Savings
        </p>
      </section>
      <section className="mt-8 bg-gray-100 rounded-md shadow-sm">
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
              onChange={formik.handleChange}
              value={formik.values.amount}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
            {formik.touched.amount && formik.errors.amount ? (
              <span className="text-sm text-red-500">
                {formik.errors.amount}
              </span>
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
                onChange={formik.handleChange}
                value={formik.values.savingsType}
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
                onChange={formik.handleChange}
                value={formik.values.platform}
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
                onChange={formik.handleChange}
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
                onChange={formik.handleChange}
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
                onChange={formik.handleChange}
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
              onChange={formik.handleChange}
              value={formik.values.notes}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="rounded text-white bg-blue-500 text-sm px-8 py-2 hover:bg-blue-700"
            >
              Add
            </button>
            <button
              type="button"
              className="rounded text-black text-sm px-8 py-2 border border-gray-200 hover:border-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
