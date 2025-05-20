// index.js
import dotenv from 'dotenv';


// import express from 'express';
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import connectDB from './db/database.js'

dotenv.config()

connectDB()
// const app = express();

// Middleware to parse JSON requests
// app.use(express.json());

// Basic root route
// app.get('/', (req, res) => {
//   res.send('Hello from Express!');
// });

// (async () => {
//   try {
//     const mongoURI = `${process.env.MONGODB_URI}/${DB_NAME}`;
//     await mongoose.connect(mongoURI);

//     console.log('✅ Connected to MongoDB');

//     const PORT = process.env.PORT || 8000;
//     app.listen(PORT, () => {
//       console.log(`🚀 Server is running at http://localhost:${PORT}`);
//     });

//     app.on('error', (error) => {
//       console.error('❌ Server error:', error);
//     });
//   } catch (error) {
//     console.error('❌ Failed to start application:', error);
//     process.exit(1); // Exit with failure
//   }
// })();
