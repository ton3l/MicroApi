import express from 'express';
import { studentsRouter } from './students.routes';

export const database = {
    students: [] as Array<string>,
};

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Use a rota /students para ver os estudantes');
});

app.use('/', studentsRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
