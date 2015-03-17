
module.exports = function(app){
    console.log('---index.js loaded success---');

    function errorHandler(err, req, res, next){
        console.error(err);
        res.status(500).send(err);
    };

    /*function errorHandler(err, req, res, next){
        console.log('---Our custom Error handler---');
        console.error(err);
        res.status(400).send({error: err.message});
    };
*/


    app.get('/', function(req, res, next){
        res.status(200).send({success: 'root folder'});

    });

    app.get('/test', function(req, res, next){
        res.status(200).send({success: 'root folder'});

    });

    app.use(errorHandler);
};