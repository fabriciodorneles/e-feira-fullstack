import express from 'express';
// src/server.ts
// import routes from './routes';
import './typeorm/migrations';

const app = express();

app.get('/', (request, response) => response.json({ message: 'hello world' }));

app.listen(3333, () => {
  console.log('🍉 Server started on port 3333'); // emoji WIN + .
});
