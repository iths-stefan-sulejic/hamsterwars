module.exports = (request, response, next) => {
    let APIkey = '12345';

    if(request.headers['authorization'] === APIkey){
        next();
    }else{
        response.status(403).send('You do not have permision to use this API')
    }
}