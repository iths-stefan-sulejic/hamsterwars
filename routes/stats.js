const {db} = require('./../firebase');
const {Router} = require('express');

const router = new Router();

router.get('/total', async (request, response) => {
    let allGames = [];

    let snapShot = await db.collection('games').get();

    snapShot.forEach(game => {
        allGames.push(game.data())
    })
    let totalNumber = allGames.length

    response.status(200).send({msg: `${totalNumber} games has been played in total.`})
})

module.exports = router;