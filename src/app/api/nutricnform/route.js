import { NextResponse } from "next/server"
import dbConnect from "../../../../config/dbConnect";
import user2 from "../../../../models/user2";

export async function  POST(req) {
    try {
        console.log(req)
        const { name, phoneno, goals, age, height, weight, gender, blood, sleeping } = await req.json();
        
        await dbConnect();
        await user2.create({ name, phoneno, goals, age, height, weight, gender, blood, sleeping })
        
        return NextResponse.json({ message: "User Registered", request:req}, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "An error occured while registering the user." },
            { status: 500 }
        );
    }
}                   