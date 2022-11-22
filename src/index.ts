import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

let lists: any[] = [
  {
    id: '0',
    text: 'To Do',
    tasks: [{ id: 'c0', text: 'Get through an interview' }],
  },
  {
    id: '1',
    text: 'In Progress',
    tasks: [{ id: 'c2', text: 'Send the resume' }],
  },
  {
    id: '2',
    text: 'Done',
    tasks: [{ id: 'c3', text: 'Make a resume' }],
  },
];

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.post('/save', (req, res) => {
  lists = req.body.lists;
  return res.json({ success: true });
});

app.get('/load', (_, res) => res.json({ lists }));

app.listen(port, () =>
  console.log(`Backend running on http://localhost:${port}`)
);
