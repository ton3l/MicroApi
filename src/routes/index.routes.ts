import { studentsRouter } from "./students.routes";
import express from 'express';

export const router = express.Router();

router.use('/', studentsRouter);
