import express from 'express';

const app = express();
app.use(express.json());
const port = 3000;

const database = {
    students: [] as Array<string>,
};

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/students', (req, res) => {
    res.status(200).send(database.students);
});

app.post('/students', (req, res) => {
    console.log(req.body);
    const newStudent = req.body.name;
    database.students.push(newStudent);
    res.status(201).send(newStudent);
});

app.put('/students/:name', (req, res) => {
    const oldStudent = req.params.name;
    const newStudent = req.body.name;

    for (const [index, student] of database.students.entries()) {
        if (student === oldStudent) {
            database.students[index] = newStudent;
            break;
        }
    }

    res.status(200).send(newStudent);
});

app.delete('/students/:name', (req, res) => {
    const delStudent = req.params.name;

    for (const [index, student] of database.students.entries()) {
        if (student === delStudent) {
            database.students.splice(index, 1);
            break;
        }
    }

    res.status(200).send(0);
});
