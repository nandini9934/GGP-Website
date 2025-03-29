import { NextResponse } from "next/server";
import dbConnect from "../../../../config/dbConnect";
import testdetail from "../../../../models/testbookingdetail";

export async function POST(Response,req) {
  try {
    
    const {
        userid
    } = await req.json();
    console.log(userid)
    await dbConnect(); // Connect to DB

    // Fetch user data by userid
    await testdetail.findById(userid).then((res)=>
    { console.log(res)
        if (!res?.name) {
            return NextResponse.json({ userInfo :{isValidUser:false, isPaymentDone:false ,amount:-1 }}, { status: 200 });
        }
console.log("here one")
            const isPaymentDone = res?.paymentStatus === 'C' ;    // Set up Nodemailer
            const amount = res?.amount;
            console.log("here too")
            return NextResponse.json(
            {userInfo:{isValidUser:true, isPaymentDone:isPaymentDone ,amount:amount }},
            { status: 200 }
            );

    }).catch((error)=>
    {
        return NextResponse.json({userInfo :{ isValidUser:false, isPaymentDone:false ,amount:-1} }, { status: 200 });

    });
  
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { message: "An error occured while registering the user." },
      { status: 500 }
    );
  }
}
