import { StudentsService } from '@services/stundent.service';
import express from 'express';

export const studentRouter = express.Router();
const studentsService = new StudentsService();

studentRouter.get('/students', async (req, res) => {
    const students = await studentsService.getAll();
    res.status(200).send(students);
});

studentRouter.post('/students', async (req, res) => {
    const newStudent = await studentsService.create(req.body.name);

    res.status(201).send(newStudent);
});

studentRouter.put('/students/:name', async (req, res) => {
    const oldName = req.params.name;
    const newName = req.body.name;

    const newStudent = await studentsService.update({
        name: oldName,
        newName: newName,
    });

    res.status(200).send(newStudent);
});

studentRouter.delete('/students/:name', async (req, res) => {
    const name = req.params.name;

    const delStudent = await studentsService.delete(name);

    res.status(200).send(delStudent);
});
