import express from 'express';
import { promises } from 'fs';
import GradesRouter from './routes/grades.js';
const { writeFile, readFile } = promises;
global.fileName = 'grades.json';
const app = express();
app.use(express.json());
app.use('/grades', GradesRouter);
const port = 3000;
app.listen(port, async () => {
  console.log('API Started on port: ' + port);
});
