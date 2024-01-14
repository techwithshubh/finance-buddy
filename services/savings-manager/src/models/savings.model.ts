import mongoose from "mongoose";

enum SavingType {
  "Fixed Deposit",
  "Mutual Funds",
  "Stocks",
  "Real Estate",
  "Gold/Silver",
}

export interface SavingAttrs {
  savingsType: SavingType;
  amount: number;
  platform: string;
  createDate?: string;
  maturityDate?: string;
  interestRate?: number;
  notes?: string;
}

interface SavingModel extends mongoose.Model<SavingDoc> {
  build(attrs: SavingAttrs): SavingDoc;
}

interface SavingDoc extends mongoose.Document {
  savingsType: SavingType;
  amount: number;
  platform: string;
  createDate?: string;
  maturityDate?: string;
  interestRate?: number;
  notes?: string;
}

const savingSchema = new mongoose.Schema({
  savingsType: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  createDate: Date,
  maturityDate: Date,
  interestRate: Number,
  notes: String,
});

savingSchema.statics.build = (attrs: SavingAttrs) => {
  return new Saving(attrs);
};

const Saving = mongoose.model<SavingDoc, SavingModel>("Saving", savingSchema);

export { Saving };
