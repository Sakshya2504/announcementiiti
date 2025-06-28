import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import { User } from './models/UserSchema.js'; // or adjust path as needed
import bcrypt from 'bcrypt';
import { Announce_ } from './models/Announce.js'; // or adjust path as needed
import {event_} from './models/Event.js'


const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // important to parse JSON body

// Connect to MongoDB
await mongoose.connect("mongodb://localhost:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Signup route
app.post('/api/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already registered with this email' });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds); // 🔐 Hashing here

        const newUser = new User({ name, email, password: hashedPassword }); // Store hashed password
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({message : err.message });
        }
        res.status(500).json({ message: 'Something went wrong' });
      }
});

// Login route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Compare the provided password with the hashed password in the database
        // bcrypt.compare returns a promise that resolves to true or false
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }


        res.json({ message: 'Login successful!' });
    } catch (err) {
      console.error(err);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

app.post('/announce', async (req, res) => {
    console.log("📨 Incoming body:", req.body);
    try {
        const { clubname, heading, info } = req.body;

        // Create and save the new announcement
        const newAnnounce = new Announce_({
            clubname,
            heading,
            info
        });

        await newAnnounce.save();

        res.status(201).json({ message: 'Announcement created successfully!' });
    } catch (err) {
        console.error('Error creating announcement:', err);
        res.status(500).json({ message: 'Something went wrong while saving the announcement' });
    }
});

app.get('/notification', async (req, res) => {
    try {
        const announcements = await Announce_.find();
        res.status(200).json(announcements);
    } catch (err) {
        console.error('Error fetching announcements:', err);
        res.status(500).json({ message: 'Failed to fetch announcements' });
    }
});

app.post('/Createevent', async (req, res) => {
    console.log("Incoming body:", req.body);
    try {
        const { EventName, EventDateAndTime, ConductedBy, EventInfo } = req.body;

        // Create and save the new event
        const newEvent = new event_({
            EventName,
            EventDateAndTime,
            ConductedBy,
            EventInfo
        });

        await newEvent.save();

        res.status(201).json({ message: 'Event Creation successful!' });
    } catch (err) {
        console.error('Error creating event:', err);
        res.status(500).json({ message: 'Something went wrong while saving the event' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});