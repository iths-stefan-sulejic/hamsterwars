let express = require('express');
let app = express();

app.use(express.json());

let hamsters = require('./routes/hamsters');
app.use('/hamsters', hamsters);

let games = require('./routes/games');
app.use('/games', games);

// let stats = require('./routes/stats');
// app.use('/stats', stats);

app.listen(3000, () => {
    console.log('Server is up and running');
})