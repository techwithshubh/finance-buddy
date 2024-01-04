import mongoose from 'mongoose';

enum SavingType {
    FIXED_DEPOSIT,
    SAVINGS_ACCOUNT,
    MUTUAL_FUNDS,
    STOCKS,
    OTHERS
}

export interface SavingAttrs {
    savingType: SavingType,
    amount: number,
    provider: string,
    creationDate?: string
    maturityDate?: string
    interest?: number
    additionalNotes?: string
}

interface SavingModel extends mongoose.Model<SavingDoc> {
    build(attrs: SavingAttrs): SavingDoc
}

interface SavingDoc extends mongoose.Document {
    savingType: SavingType,
    amount: number,
    provider: string,
    creationDate?: string
    maturityDate?: string
    interest?: number
    additionalNotes?: string
  }

const savingSchema = new mongoose.Schema({
    savingType:{
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    creationDate: Date,
    maturityDate: Date,
    interest: Number,
    additionalNotes: String
})

savingSchema.statics.build = (attrs: SavingAttrs) => {
    return new Saving(attrs);
}

const Saving = mongoose.model<SavingDoc, SavingModel>('Saving', savingSchema)

export { Saving }