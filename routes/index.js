
module.exports = function (app) {

        app.get('/',(req, res)=>{
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            res.end('<h1>Hello world</h1>');
    
    });
};