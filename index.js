const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/v1/animals', async (req, res) => {
    const animals = await prisma.animal.findMany();

    res.json({ animals });
});

app.post('/api/v1/animals', async (req, res) => {
    const data = req.body;
    
    const newAnimal = await prisma.animal.create({
        data: {
            name: data.name,
            class: data.class,
            origin: data.origin,
            weight_min: data.weight_min,
            weight_max: data.weight_max,
            feed: data.feed,
            size: data.size

        }
    });

    res.json({ newAnimal });
});

const main = async () => {
    app.listen(28785, () => {
        console.log('Server started successfully on port 28785');
    });
};

(() => {
    main();
})();