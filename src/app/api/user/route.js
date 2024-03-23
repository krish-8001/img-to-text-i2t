import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import Paymentdata from "@/models/paymentdata";

import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email } = await request.json();
  await connectMongoDB();
  await User.create({ name, email });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}
export async function PUT(request) {
  const userData = await request.json();
  console.log("PUT ~ userData:", userData);
  const updatedUserr = await User.findOne({
    email: userData.userdata.user.email,
  });
  console.log("PUT ~ updatedUserr:", updatedUserr);
  let enddate = new Date(userData.details.create_time);
  enddate.setMonth(enddate.getMonth() + 1);
  const updatedata = {
    price: userData.selectedPlan.price,
    startDate: userData.details.create_time,
    endDate: enddate,
    payment_id: userData.data.paymentID,
    plan_name: userData.selectedPlan.title,
  };

  await connectMongoDB();
  console.log("PUT ~ updatedata:", updatedata);
  const updatedUser = await User.findOneAndUpdate(
    { email: userData.userdata.user.email },
    updatedata,
    { new: true }
  );
  let paymentinfo = {
    status:"active",
    email: userData.userdata.user.email,
    price: parseFloat(userData.selectedPlan.price),
    startDate: userData.details.create_time,
    endDate: enddate,
    payment_id: userData.data.paymentID,
    plan_name: userData.selectedPlan.title,
  };
  console.log("PUT ~ paymentinfo:", paymentinfo)
  await Paymentdata.create(paymentinfo);

  return NextResponse.json({ message: updatedUser }, { status: 200 });
}
