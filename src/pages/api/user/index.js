import User from "../../../../models/user";
import dbConnect from "../../../../config/dbConnect";

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const user = await User.find({}).sort({_id: -1});
                res.status(200).json({ success: true, data: user});
            } catch (error) {
                res.status(400).json({ success: false});
            }
    }
}