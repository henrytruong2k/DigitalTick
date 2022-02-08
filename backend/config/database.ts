import mongoose from "mongoose";

const URI = process.env.MONGODB_URL;

mongoose.connect(
  `${URI}`,
  {
    autoIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Mongodb connection");
  }
);
