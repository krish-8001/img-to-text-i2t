import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import Paymentdata from "@/models/paymentdata";

export async function POST(request) {

  const userData = await request.json();
  console.log("PUT ~ userData:", userData)
  const datauser = await User.findOne({ email: userData.user.user.email }).select('plan_name email name');
  const paymentdata = await Paymentdata.find({ email: userData.user.user.email })

  if (!datauser
  ) {
    return NextResponse.json({ data: "not found" }, { status: 404 })

  }
  return NextResponse.json({ data: {...datauser._doc    ,paymentdata} }, { status: 200 })
}
