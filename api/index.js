import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import colors from 'colors';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import adminRoute from './routes/admin.js';

dotenv.config();
const app = express();

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connected to mongoDB'.magenta);
	} catch (error) {
		throw error;
	}
};

mongoose.connection.on('disconnected', () => {
	console.log('mongoDB disconnected!'.red);
});

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// routes
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);
app.use('/api/admin', adminRoute);

app.use((err, req, res, next) => {
	const errorStatus = err.status || 500;
	const errorMessage = err.message || 'Something went wrong!'.red;
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack,
	});
});

const port = 8800;
app.listen(port, () => {
	connect();
	console.log(`Connected to backend on port ${port}`.blue);
});
