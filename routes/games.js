const {db} = require('./../firebase');
const {Router} = require('express');

const router = new Router();

router.get('/', async (request, response) => {
    let allGames = [];

    let snapShot = await db.collection('games').get();

    snapShot.forEach(game => {
        allGames.push(game.data())
    });
    response.send(allGames);
})

router.post('/', async (request, response) => {
    let allGames = [];

    let snapShot = await db.collection('games').get();

    snapShot.forEach(game => {
        allGames.push(game.data())
    });

    let ID = allGames.length + 1;
    let date = Date.now();

    await db.collection('games').doc(`${ID}`).set(
        {
            id: ID,
            timeStamp: date, 
            contestants: request.body.contestants, 
            winner: request.body.winner
        }
    )
    response.status(200).send({msg: "Game added!"})
    // await snapShot.set({
    //     id: snapShot.id,
    //     timestamp: Date.now(),
    //     ...request.body
    // })
    // response.send({msg: 'Game saved'})
})

module.exports = router;