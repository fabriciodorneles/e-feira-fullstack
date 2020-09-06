import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import './typeorm/migrations';

const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('🍉 Server started on port 3333'); // emoji WIN + .
});
