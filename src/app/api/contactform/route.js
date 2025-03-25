import { NextResponse } from "next/server";
import dbConnect from "../../../../config/dbConnect";
import user2 from "../../../../models/user2";
import sendEmail from "../mailer";

export async function POST(req) {
  try {
    console.log(req);
    const {
      name,
      phoneno,
      mail,
      height,
      weight,
      gender,
      brings,
      goals,
      achieve,
      time,
      stops,
      servings,
      grains,
      chicken,
      drink,
      sweets,
      medical,
      chronic,
      ill,
      physical,
    } = await req.json();

    await dbConnect();
    await user2.create({
      name,
      phoneno,
      mail,
      height,
      weight,
      gender,
      brings,
      goals,
      achieve,
      time,
      stops,
      servings,
      grains,
      chicken,
      drink,
      sweets,
      medical,
      chronic,
      ill,
      physical,
    });

    // console.log("I am here");
    await sendEmail(name, phoneno, goals, mail);

    return NextResponse.json(
      { message: "User Registered", request: req },
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
