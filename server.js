// 1. imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import model from "./model.js";

// 2. initialize express app
const app = express();
const port = process.env.PORT || 9000;

// 3. middleware
app.use(cors());
app.use(express.json());

// 4. initialize database
const mongoURI =
    "mongodb+srv://user:user@cluster0.s4jnb.mongodb.net/collections-id?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
    console.log("Database Connected !");
});

// 5. route
app.get("/", (req, res) => res.status(200).send("Hello"));

//get projects
app.get("/get/projects", (req, res) => {
    model.find((err, data) => {
        err ? res.status(500).send(err) : res.status(201).send(data);
    });
});

//post projects
app.post("/new/projects", (req, res) => {
    const projectData = req.body;

    model.create(projectData, (err, data) => {
        err ? res.status(500).send(err) : res.status(201).send(data);
    });
});

//delete projects
app.delete("/project/:id", (req, res) => {
    model
        .findById(req.params.id)
        .then((model) => model.remove().then(() => res.json({ success: true })))
        .catch((err) => res.status(404).json({ success: true }));
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

// 5. listen
app.listen(port, () => console.log(`Listening on port: ${port}`));
