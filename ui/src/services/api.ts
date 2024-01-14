import { Saving } from "../models/savings";

export const postSavings = async (data: Saving) => {
  const response = await fetch(`http://localhost:8081/api/savings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
