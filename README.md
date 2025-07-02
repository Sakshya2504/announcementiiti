
Frontend (React)
Post and view announcements
Explore and create events
Flip-card interaction for events
Signup / Login functionality
Explore club profiles
Responsive design using 'Tailwind CSS'

Backend (Node.js + Express + MongoDB)
User authentication using 'bcrypt'
Event creation & listing
Announcement posting & retrieval
MongoDB via 'Mongoose'

#  Club Connect – IIT Indore Student Club Portal

A full-stack web application for managing club events, announcements, and student engagement at IIT Indore.

---

##  Features

###  Frontend (React)
-  Post and view announcements
-  Explore and create events
-  Flip-card interaction for events
-  Signup / Login functionality
-  Explore club profiles
-  Responsive design using  'Tailwind CSS'

###  Backend (Node.js + Express + MongoDB)
-  User authentication using 'bcrypt'
-  Event creation & listing
-  Announcement posting & retrieval
-  MongoDB via 'Mongoose'

---

##  Project Structure
src/
├── components/
│ ├── Events.jsx, Notification.jsx, Signup.jsx, NavBar.jsx, etc.
├── App.jsx
├── main.jsx
└── index.css

backened/
├── server.jsx
├── models/
│ ├── UserSchema.js
│ ├── Event.js
│ ├── Announce.js


---

##  API Endpoints

 Method       Endpoint              Description                      

 POST       `/api/signup`         Register a new user              
 POST       `/api/login`          Login user and return info       
 POST       `/Createevent`        Create a new event               
 GET        `/Events`             Fetch all events                 
 POST       `/announce`           Create a new announcement        
 GET        `/notification`       Get all announcements            

---

##  User Auth Flow

1.  Signup - `/api/signup` with `name`, `email`, `password`
   - Password is hashed using `bcrypt`
   - On success, user info is returned and saved to localStorage
2.  Login - `/api/login`
   - Compares credentials with hashed password
   - Returns user info on success

---

##  Install & Run

###  Backend

```bash
cd server
npm install
node server.jsx
###   Frontend
cd client
npm install
npm run dev   # if Vite
# or
npm start     # if CRA

### Contact
Email: cse240001068@iiti.ac.in
### License
This project is for educational use at IIT Indore. 

