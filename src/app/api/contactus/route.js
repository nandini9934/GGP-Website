import { NextResponse } from "next/server"
import dbConnect from "../../../../config/dbConnect";
import user5 from "../../../../models/user5";
export async function  POST(req) {
    try {
        console.log(req)
        const { name, email, message } = await req.json();
        
        await dbConnect();
        await user5.create({ name, email, message })
        
        return NextResponse.json({ message: "User Registered", request:req}, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "An error occured while registering the user." },
            { status: 500 }
        );
    }
}




