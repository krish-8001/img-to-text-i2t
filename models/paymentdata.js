import mongoose, { Schema, models } from "mongoose";

const PaymentdataSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    }, 
    plan_name: {
      type: String,
      default: 'Free', 
      required: true,
    },
    status: {
      type: String,
    },
    payment_id: {
      type: String,
      
    },
    price: {
      type: Number,
    },
    billingCycle: {
      type: String,
      enum: ['monthly', 'annual'],
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
  
   
  },
  { timestamps: true }
);

const Paymentdata = models.Paymentdata || mongoose.model("Paymentdata", PaymentdataSchema);
export default Paymentdata;
