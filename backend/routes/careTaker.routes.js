import express from "express";

import { addCareTaker,getCareTakers } from "../controllers/careTaker.controller.js";

const careTakerRoutes = express.Router();
// Route to add a caretaker
careTakerRoutes.post("/add", addCareTaker);
// Route to get all caretakers
careTakerRoutes.get("/", getCareTakers);


export default careTakerRoutes; 