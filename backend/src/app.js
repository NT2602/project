import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js'; // Kiểm tra dòng này
import productRoutes from './routes/productRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

export default app;