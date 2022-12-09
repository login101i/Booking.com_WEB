import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import colors from 'colors';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';

import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import adminRoute from './routes/admin.js';

<<<<<<< HEAD
if (process.env.NODE_ENV === 'PRODUCTION') dotenv.config({ path: 'api/config.env' });
=======
if (process.env.NODE_ENV !== 'PRODUCTION') dotenv.config({ path: 'api/config.env' });
>>>>>>> 94d1d703e65dfa7ad27856f96b1ebbb3fa5e2527
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


const __dirname = path.resolve();

if (process.env.NODE_ENV === 'PRODUCTION') {
	app.use(express.static(path.join(__dirname, '/client/build')));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

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

app.listen(process.env.PORT || 8801, () => {
	connect();
	console.log(`Connected to backend on port ${process.env.PORT} on ${process.env.NODE_ENV} mode`.blue);
});
