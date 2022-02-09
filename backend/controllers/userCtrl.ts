import { Request, Response } from "express";
import Users from "../models/userModel";

const userCtrl = {
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await Users.find().select("-password");
      res.json(users);
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default userCtrl;
