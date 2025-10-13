import { router } from './routes/index.routes';
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (req, res) => {
    res.redirect('/students');
});

app.use('/', router);

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
