// src/db/connectMongoDB.js
import mongoose from 'mongoose';

import dns from 'node:dns';

dns.setServers(['1.1.1.1', '1.0.0.1']);

export const connectMongoDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    await mongoose.connect(mongoUrl);
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1); // аварійне завершення програми
  }
};
