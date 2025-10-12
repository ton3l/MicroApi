import { studentRouter } from "./student.routes";
import express from 'express';

export const router = express.Router();

router.use('/', studentRouter);
