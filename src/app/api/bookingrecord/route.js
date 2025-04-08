import { NextResponse } from "next/server";
import dbConnect from "../../../../config/dbConnect";
import testdetail from "../../../../models/testbookingdetail";
import sendEmail from "../mailer";
import nodemailer from "nodemailer";

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
      amount,
    } = await req.json();

    await dbConnect();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com", // Change based on your email provider
      port: 587,
      secure: false, // Use your email service
      auth: {
        user: "Organikkanpur@gmail.com", // Your email address from .env
        pass: "rrjvjwgwotnbunox", // Your email password
      },

      tls: {
        rejectUnauthorized: false, // ✅ Ignore SSL certificate issues
      },
    });

    const mailUserOptions = {
      from: "Organikkanpur@gmail.com", // Sender address
      to: "Kushwahaakash2000@gmail.com,shakya7938@gmail.com", // Recipient address
      subject: "Medical Test form filled",
      text: `Name:- ${name}\nAge: ${age}\nGender: ${gender}\nEmail: ${email}\n`,
    };

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
      amount,
    });

    await transporter.sendMail(mailUserOptions);
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
