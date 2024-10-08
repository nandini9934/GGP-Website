import { NextResponse } from "next/server"
import dbConnect from "../../../../config/dbConnect";
import user2 from "../../../../models/user2";

export async function  POST(req) {
    try {
        console.log(req)
        const { name, phoneno, age, height, weight, gender, brings, goals, achieve, time, stops, servings, grains, chicken, drink, sweets, medical, chronic, ill, physical } = await req.json();
        
        await dbConnect();
        await user2.create({ name, phoneno, age, height, weight, gender, brings, goals, achieve, time, stops, servings, grains, chicken, drink, sweets, medical, chronic, ill, physical })
        
        return NextResponse.json({ message: "User Registered", request:req}, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "An error occured while registering the user." },
            { status: 500 }
        );
    }
}




