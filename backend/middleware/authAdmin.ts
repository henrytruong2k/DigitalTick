import { ADMIN } from "./../config/constant";
import { Response, NextFunction } from "express";
import Users from "../models/userModel";
import { IReqAuth } from "../config/interface";

const authAdmin = async (req: IReqAuth, res: Response, next: NextFunction) => {
  try {
    const user = await Users.findOne({ _id: req?.user?.id });

    if (user?.role !== ADMIN)
      return res.status(403).json({ msg: "Admin resources access denied." });

    next();
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};

export default authAdmin;
