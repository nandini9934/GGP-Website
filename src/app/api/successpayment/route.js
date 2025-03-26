import { NextResponse } from "next/server";
import dbConnect from "../../../../config/dbConnect";
import testdetail from "../../../../models/testbookingdetail";
import sendEmail from "../mailer";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    
    const {
        userid
    } = await req.json();
    console.log(userid)
    await dbConnect(); // Connect to DB

    // Fetch user data by userid
    const userData = await testdetail.findById(userid);
    console.log(userData);
    // If user not found, return 404
    if (!userData) {
        return Response.json({ error: "User not found" }, { status: 404 });
    }

           // Set up Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",  // Change based on your email provider
            port: 587,
            secure: false, // Use your email service
            auth: {
                user: "Organikkanpur@gmail.com", // Your email address from .env
                pass: "rrjvjwgwotnbunox",  // Your email password
            },
            
            tls: {
                rejectUnauthorized: false, // ✅ Ignore SSL certificate issues
            }
        });

        
        // Email options
        const mailUserOptions = {
            from: "Organikkanpur@gmail.com", // Sender address
            to: userData.email, // Recipient address
            subject: 'Medical Test Booked Good Gut Project',
            text: `Hello ${userData.name}\n\nThank You for booking test through Good Gut Project \n Your booking date is ${userData.date}\n\nPlease Reply on this mail for further queries`,
        };

        const mailCompanyOptions = {
            from: "Organikkanpur@gmail.com", // Sender address
            to: "Kushwahaakash2000@gmail.com,shakya7938@gmail.com", // Recipient address
            subject: 'Medical Test Booked Good Gut Project',
            text: `Here are the appointment details for Comprehensive Health Assessment Plan:- \n\nName: ${userData.name}\nage: ${userData.age}\nGender: ${userData.gender}\nContact Number: ${userData.contact}\nAppointment Date: ${userData.date}\nAppointment Time: ${userData.appointmentTime}\nAddress: ${userData.address}\nPin Code: ${userData.pincode} `,
        };

        // Send email
        await transporter.sendMail(mailUserOptions);
        await transporter.sendMail(mailCompanyOptions).then(async (res,error)=>
        {
            if(res)
            {
                await testdetail.findByIdAndUpdate(
                    userid, 
                    { mailStatus: "Sent" }, // Default to "Sent" if not provided
                    { new: true } // Return the updated document
                  );
            }
        })

   // await sendEmail(name, phoneno, goals, mail);

    return NextResponse.json(
      { message: "Mail sent to User" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { message: "An error occured while registering the user." },
      { status: 500 }
    );
  }
}
