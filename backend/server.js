import express from 'express';
dotenv.config();
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

connectDB();

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('API Working');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
