import express from 'express';
import userRouter from './routes/user-router';
import {errorHandler, notFoundHandler} from './middlewares/error-handler';
import authRouter from './routes/auth-router';
import cors from 'cors';
import restaurantRouter from './routes/restaurant-router';
import reservationRouter from './routes/reservation-router';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
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

app.use('/api/reservation', reservationRouter);

// if non of routes works uses this
app.use(notFoundHandler);
// errorHandler that handles all errors
app.use(errorHandler);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
