const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDb = require("./backend/config/database");
const session = require("express-session");
const workoutRoutes = require("./backend/routes/workoutRoutes");
const PORT = process.env.PORT || 4000;
require("dotenv").config();

connectDb();

app.get("/", (req, res) => {
    res.send("Connected to server");
});

// Serve static files from the React app
app.use("/", express.static(path.join(__dirname, "/public")));


app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET_KEY));

app.use(
    session({
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: false,
            maxAge: 1000 * 60 * 60 * 24 * 7,
        },
    })
);

// Routes
app.use(workoutRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
