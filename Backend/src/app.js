import express from "express";

const app = express(); //creates an express app

app.use(express.json()); //gives our server the ability to parse the json requet it gets

//routes would be added here
import userRouter from "./routes/user.route.js";

//declare the routes
app.use("/api/v1/users", userRouter);

//example route : http://localhost:5000/api/v1/users/register



export default app; 