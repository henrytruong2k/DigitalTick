import express from "express";
import userCtrl from "../controllers/userCtrl";
import auth from "../middleware/auth";
import authAdmin from "../middleware/authAdmin";

const router = express.Router();

router.get("/users", auth, authAdmin, userCtrl.getAllUsers);

export default router;
