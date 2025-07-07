import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import { User } from './models/UserSchema.js'; 
import bcrypt from 'bcrypt';
import { Announce_ } from './models/Announce.js'; 
import {event_} from './models/Event.js'
import { Admin_ } from './models/Admins.js'; // Import the Admin model
import {Regis} from './models/Regis.js'


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); 

// Connect to MongoDB with the validation using Mongoose
await mongoose.connect("mongodb://localhost:27017/todo", {
    // useNewUrlParser: true, //useNewUrlParse is used for parsing the MongoDB connection string
    // useUnifiedTopology: true // useUnifiedTopology is used to opt in to the MongoDB driver's new connection management engine
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
        //We use bcrypt to hash the password before storing it in the database 
        //To ensure that passwords are stored securely, we use bcrypt to hash the password before storing it in the database.
        const hashedPassword = await bcrypt.hash(password, saltRounds); 

        // Store hashed password
        const newUser = new User({ name, email, password: hashedPassword }); 
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully!',user: {
        name: name,
        email: email
      } });
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

        // If user exists, compare the provided password with the hashed password in the database
        // bcrypt.compare is used to compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.json({ message: 'Login successful!',user: {
        name: user.name,
        email: user.email
      } });
    } catch (err) {
      console.error(err);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

// Announcement routes
// This route is used to create a new announcement
app.post('/announce', async (req, res) => {
    console.log("Incoming body:", req.body);
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
        const Events = await Announce_.find();
        res.status(200).json(Events);
    } catch (err) {
        console.error('Error fetching Events:', err);
        res.status(500).json({ message: 'Failed to fetch Events' });
    }
});

// Event routes
// This route is used to create a new event
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

// This route is used to fetch all events
// It retrieves all events from the database and returns them as a JSON response
app.get('/Events', async (req, res) => {
    try {
        const Events = await event_.find();
        res.status(200).json(Events);
    } catch (err) {
        console.error('Error fetching Events:', err);
        res.status(500).json({ message: 'Failed to fetch Events' });
    }
});

app.post('/api/verifyadmin', async (req, res) => {
    const { email } = req.body;

    try {
        const admin = await Admin_.findOne({ email });
        // Check if the email exists in the Admin collection
        // If the email exists, it means the user is an admin
        if (admin) {
            res.status(200).json({ authorized: true });
        } else {
            res.status(401).json({ authorized: false, message: 'Unauthorized email' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// app.post('/api/register', async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         const existingUser = await Regis.findOne({ email });
//         if (existingUser) {
//             return res.status(409).json({ message: 'User already registered with this email' });
//         }
        

        
//         const newRegis = new Regis({ name, EmailAddress,RollNumber,Program,Branch,PhoneNumber });
//         await newRegis.save();

//         res.status(201).json({
//             message: 'User registered successfully!', user: {
//                 Name: name,
//                 EmailAddress: email,
//                 RollNumber: RollNumber,
//                 Program: Program,
//                 Branch: Branch,
//                 PhoneNumber: PhoneNumber
//             }
//         });
//     } catch (err) {
//         if (err.name === 'ValidationError') {
//             return res.status(401).json({ message: err.message });
//         }
//         res.status(500).json({ message: 'Something went wrong' });
//     }
// });


app.post('/events/:eventId/register', async (req, res) => {
    const { eventId } = req.params;
    const formData = req.body;

    try {
        const registration = new Regis({ eventId, ...formData });
        await registration.save();
        res.status(200).json({ message: 'Registered successfully' });
    } catch (err) {
        console.error('Error saving registration:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/events/:eventId/registrations/count', async (req, res) => {
    const { eventId } = req.params;

    try {
        const count = await Regis.countDocuments({ eventId });
        res.json({ count });
    } catch (err) {
        console.error('Failed to fetch registration count:', err.message);
        res.status(500).json({ error: 'Could not retrieve registration count' });
    }
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});