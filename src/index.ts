import { router } from './routes/index.routes';
import express from 'express';

export const database = {
    students: ['Marçal', 'Joaquim'] as Array<string>,
};

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Use a rota /students para ver os estudantes');
});

app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
