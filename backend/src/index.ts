import express from 'express';
import userRouter from './routes/user-router';
import {errorHandler, notFoundHandler} from './middlewares/error-handler';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.use(express.json());

app.use(express.static('public'));

// app.get('/', (req: Request, res: Response) => {
//   res.send('Tervetuloa');
// });

app.use('/api/user', userRouter);

// if non of routes works uses this
app.use(notFoundHandler);
// errorHandler that handles all errors
app.use(errorHandler);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
