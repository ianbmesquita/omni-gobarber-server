import 'reflect-metadata';

import express from 'express';
import routes from './routes';
import uploadConfig from './config/upload';

import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.get('/', (request, response) =>
  response.json({ message: 'Hello GoStack' }),
);

app.listen(3333, () => {
  console.log('Servidor conectado na porta 3333...');
});
