import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
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
    price: {
      type: Number,
    }
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
