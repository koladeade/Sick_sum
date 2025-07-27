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

const getCareTaker = async (req, res) => {
    try {
        const userPhone = req.params.userPhone;
        const careTaker = await CareTaker.findOne({ user: userPhone });

        if (!careTaker) {
            return res.status(404).json({ message: "CareTaker not found" });
        }

        res.status(200).json(careTaker);
    } catch (error) {
        console.error("Error fetching caretaker:", error);
        res.status(500).json({ message: "Server Error" });
    }
};


export  { addCareTaker, getCareTaker };