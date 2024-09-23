import User2 from "../../../../models/user2";
import dbConnect from "../../../../config/dbConnect";

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const user2 = await User2.find({}).sort({_id: -1});
                res.status(200).json({ success: true, data: user2});
            } catch (error) {
                res.status(400).json({ success: false});
            }
    }
}