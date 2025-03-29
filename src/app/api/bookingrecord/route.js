import { NextResponse } from "next/server";
import dbConnect from "../../../../config/dbConnect";
import testdetail from "../../../../models/testbookingdetail";
import sendEmail from "../mailer";

export async function POST(req) {
  try {
    
    const {
        name,
        age,
        gender,
        address,
        pincode,
        email,
        contact,
        appointmentTime,
        date,
        amount
    } = await req.json();

    await dbConnect();
   const data = await testdetail.create({
        name,
        age,
        gender,
        address,
        pincode,
        email,
        contact,
        appointmentTime,
        date,
        paymentStatus: "P",
        paymentId: "",
        mailStatus: "P",
        amount
    });

   // await sendEmail(name, phoneno, goals, mail);

    return NextResponse.json(
      { message: "User detail saved", userid: data._id },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occured while registering the user." },
      { status: 500 }
    );
  }
}
