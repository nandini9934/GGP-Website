import { NextResponse } from "next/server";
import dbConnect from "../../../../config/dbConnect";
import user5 from "../../../../models/user5";

export async function POST(req) {
    try {
        // CORS headers
        const res = NextResponse.next();
        res.headers.set('Access-Control-Allow-Credentials', 'true');
        res.headers.set('Access-Control-Allow-Origin', 'http://localhost:3000'); // Specify your frontend domain
        res.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
        res.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

        // Handle preflight request
        if (req.method === 'OPTIONS') {
            return NextResponse.json(null, { status: 200 }); // Respond to preflight request
        }

        // Handle the actual request
        const { name, email, message } = await req.json();

        await dbConnect();
        await user5.create({ name, email, message });

        return NextResponse.json({ message: "User Registered", request: req }, { status: 201 });
    } catch (error) {
        console.error(error); // Log error for debugging
        return NextResponse.json(
            { message: "An error occurred while registering the user." },
            { status: 500 }
        );
    }
}
