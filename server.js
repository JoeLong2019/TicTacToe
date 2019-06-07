const express = require('express');
const mysql = require("mysql");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'TicTacToe')));

// app.get('/', (req, res) => {
//     res.send('<h1>Tic Tac Toe!!</h1>');
// });

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
