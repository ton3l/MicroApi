const names = ['Marçal', 'Daniel', 'Fábio'];

console.log('server started\n');
Bun.serve({
    port: 3000,
    routes: {
        '/:id': (req: Request & { params: { id: string } }): Response => {
            const parsedId = Number(req.params.id);

            if (!isNaN(parsedId)) {
                console.log(parsedId);
                return new Response(names[parsedId]);
            }

            return new Response('Not Found', { status: 404 });
        },
    },
});
