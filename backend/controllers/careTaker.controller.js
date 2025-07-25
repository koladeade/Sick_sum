import CareTaker from "../models/careTaker.model.js";

const addCareTaker = async (req, res) => {
    try {
        const { name, phone, email, relationship, patientName } = req.body;

        if (!name || !phone || !email || !relationship || !patientName) {
            console.error("Validation error: Missing required fields:", name, phone, email, relationship, patientName);
            return res.status(400).json({ message: "All fields are required." });
            }

        const newCareTaker = new CareTaker({
            name,
            phone,
            email,
            relationship,
            patientName
        });

        const savedCareTaker = await newCareTaker.save();
        res.status(201).json(savedCareTaker);
    } catch (error) {
        console.error("Error adding caretaker:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

const getCareTakers = async (req, res) => {
    try {
        const careTakers = await CareTaker.find();
        res.status(200).json(careTakers);
    } catch (error) {
        console.error("Error fetching caretakers:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

export  { addCareTaker, getCareTakers };