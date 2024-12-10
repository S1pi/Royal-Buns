import express from 'express';
import userRouter from './routes/user-router';
import {errorHandler, notFoundHandler} from './middlewares/error-handler';
import authRouter from './routes/auth-router';
import cors from 'cors';
import restaurantRouter from './routes/restaurant-router';
import reservationRouter from './routes/reservation-router';
import menuRouter from './routes/menu-router';
import path from 'path';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

app.use(express.json());

app.use(express.static('public'));

// app.get('/', (req: Request, res: Response) => {
//   res.send('Tervetuloa');
// });

app.use('/api/user', userRouter);

app.use('/api/auth', authRouter);

app.use('/api/restaurants', restaurantRouter);

app.use('/api/reservations', reservationRouter);

app.use('/api/menu', menuRouter);

// Handles any requests that don't match the ones above and sends the index.html file
// This is needed for our SPA to work; otherwise, the browser would try to request a route from the server
// Html file shows 404 page if route is not found
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// if non of routes works uses this
app.use(notFoundHandler);
// errorHandler that handles all errors
app.use(errorHandler);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
