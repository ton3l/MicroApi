import { prisma } from '@db';

export class StudentsService {
    constructor() {}

    async create(name: string) {
        const newStudent = await prisma.student.create({
            data: {
                name,
            },
        });

        return newStudent;
    }

    async get(name: string) {
        const student = await prisma.student.findUnique({
            where: {
                name,
            },
        });

        return student;
    }

    async getAll() {
        const students = await prisma.student.findMany({ orderBy: { id: 'asc' } });
        return students;
    }

    async update(options: { name: string; newName: string }) {
        const { name, newName } = options;
        const student = await prisma.student.update({
            where: {
                name,
            },
            data: {
                name: newName,
            },
        });

        return student;
    }

    async delete(name: string) {
        const student = await prisma.student.delete({
            where: {
                name,
            },
        });

        return student;
    }
}

