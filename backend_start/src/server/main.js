import express from "express";

import ViteExpress from "vite-express";

import subjectRoute from './routes/subjects.js';
import studentRoute from './routes/students.js';

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Express App !");
});
app.use('/students', studentRoute);
app.use('/subjects', subjectRoute);
ViteExpress.listen(app, 3000, () =>
console.log("Server is listening on port 3000..."),
);

