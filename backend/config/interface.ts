import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  account: string;
  password: string;
  avatar: string;
  role: string;
  _doc: object;
}

export interface IDecodedToken {
  newUser?: IUser;
  iat: number;
  exp: number;
}
