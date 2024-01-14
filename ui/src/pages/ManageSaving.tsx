import { useState } from "react";
import { SavingsForm } from "../components/SavingsForm";
import SavingsSuccess from "../components/SavingsSuccess";

export default function ManageSaving() {
  const [isAdded, setIsAdded] = useState(false);
  const handleSaving = (isSuccess: boolean) => {
    isSuccess ? setIsAdded(true) : setIsAdded(false);
  };
  
  const handleAddMore = () => {
    setIsAdded(false)
  }

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
      <section className="mt-4 bg-gray-100 rounded-md shadow-sm">
        { isAdded ? <SavingsSuccess handleAddMore={handleAddMore} /> : <SavingsForm savingsAdded={handleSaving} /> }
      </section>
    </div>
  );
}
