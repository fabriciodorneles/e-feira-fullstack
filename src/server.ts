import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import './typeorm/migrations';

const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3334, () => {
  console.log('🍉 Server startedio on port 3334');
});
