import { StudentsService } from '@services/stundent.service';
import express from 'express';

export const studentRouter = express.Router();
const studentsService = new StudentsService();

studentRouter.get('/students', async (req, res) => {
    const students = await studentsService.getAll();
    res.render('index', { students });
});

studentRouter.get('/students/:name', async (req, res) => {
    const student = await studentsService.get(req.params.name);
    res.render('student', { student });
});

studentRouter.post('/students', async (req, res) => {
    if (typeof req.body.name !== 'string') return res.status(400).send('Envie uma string válida');

    await studentsService.create(req.body.name);

    res.redirect('/students/' + req.body.name);
});

studentRouter.put('/students/:name', async (req, res) => {
    const oldName = req.params.name;
    const newName = req.body.name;

    const student = await studentsService.update({
        name: oldName,
        newName: newName,
    });

    res.status(200).send(student);
});

studentRouter.delete('/students/:name', async (req, res) => {
    const name = req.params.name;

    const delStudent = await studentsService.delete(name);

    res.redirect('/students');
});
