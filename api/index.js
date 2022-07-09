import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import colors from "colors";
import cors from "cors";

import authRoutes from "./routes/auth.js";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
	res.send("Hello there");
});

app.use("/auth", authRoutes);

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log("Connected to mongoDB".magenta);
	} catch (error) {
		throw error;
	}
};

mongoose.connection.on("disconnected", () => {
	console.log("mongoDB disconnected!".red);
});

//middlewares

app.use((err, req, res, next) => {
	const errorStatus = err.status || 500;
	const errorMessage = err.message || "Something went wrong!".red;
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack
	});
});

app.listen(8800, () => {
	connect();
	console.log("Connected to backend.".blue);
});
