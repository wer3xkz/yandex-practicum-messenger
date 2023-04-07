const express = require('express');
const path = require('path');

// Стартуем express
const app = express();
const { PORT = 3000 } = process.env;
const pathName = path.join(__dirname, './dist/index.html');

app.use(express.static("./dist"));

// На любое обращение к серверу отдаем index.html
app.get("*", (req, res) => {
    res.sendFile(pathName);
});

app.listen(PORT, () => console.log(`App running on port:${PORT}`));
