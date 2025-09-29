import express from 'express';
import { database } from './index';

const studentsRouter = express.Router();

studentsRouter.get('/students', (req, res) => {
    res.status(200).send(database.students);
});

studentsRouter.post('/students', (req, res) => {
    const newStudent = req.body.name;

    database.students.push(newStudent);

    res.status(201).send(newStudent);
});

studentsRouter.put('/students/:name', (req, res) => {
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

studentsRouter.delete('/students/:name', (req, res) => {
    const delStudent = req.params.name;

    for (const [index, student] of database.students.entries()) {
        if (student === delStudent) {
            database.students.splice(index, 1);
            break;
        }
    }

    res.status(200).send(0);
});

export { studentsRouter };