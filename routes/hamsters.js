const {db} = require('./../firebase');
const {Router} = require('express');

const router = new Router();

router.get('/', async (request, response) => {
    let hamsters = [];

    let snapShot = await db.collection('hamsters').get()

    snapShot.forEach(document => {
        hamsters.push(document.data());
    })
    response.send({hamsters: hamsters})
})

router.get('/random', async (request, response) => {
    let hamsters = [];

    let snapShot = await db.collection('hamsters').get()

    snapShot.forEach(hamster => {
        hamsters.push(hamster.data());
    })
    let randomHamster = Math.floor(Math.random()*snapShot._size);

    response.send(hamsters[randomHamster])
    // console.log(hamsters)
})

router.get('/:id', async (request, response) => {
    let hamster = [];

    let snapShot = await db.collection('hamsters').where("id", "==", parseInt(request.params.id)).get();

    snapShot.forEach(hamsterID => {
        hamster.push(hamsterID.data());
    })
    response.send({hamster: hamster})
})

router.put('/:id/results', async (request, response) => {
    let snapShot = await db.collection('hamsters').where("id", "==", parseInt(request.params.id)).get();
    // console.log(request.body);
    // console.log(snapShot)

    snapShot.forEach(hamsterID => {
        let hamster = hamsterID.data();

        if(parseInt(request.body.wins) > 0){
            hamster.wins++;
        }

        if(parseInt(request.body.defeats) > 0){
            hamster.defeats++;
        }

        hamster.games += 1;

        db.collection('hamsters').doc(hamsterID.id).set(hamster)
        .then(response.send({msg: "Hamster updated"}))
        .catch(err => {
            response.status(500).send(err)
        })
        console.log(hamster)
    })
})

module.exports = router;