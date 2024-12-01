import express, {Request, Response} from 'express';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.send('Tervetuloa');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
