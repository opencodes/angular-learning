"use strict"
var fs = require('fs');
var data = fs.readFileSync('data.json');

var router = function(app){
    /* GET home page. */
    app.get('/', function(req, res) {

            res.render('index', { title: 'Angular APP'});

    });
    app.get('/getCategory', function(req, res) {
        res.json(JSON.parse(data).category);
    });

    app.get('/getPostByCat/:id', function(req, res) {

        var posts = JSON.parse(data).posts;

        var postByCat = [];
        for(var k in posts){
            if(posts[k].category === req.params.id){
                postByCat.push(posts[k]);
            }
        }
        res.json(postByCat);
    });
    app.get('/getPageInfo/:id', function(req, res) {

        var pages = JSON.parse(data).pages;

        var pageinfo = (pages[req.params.id]) ? pages[req.params.id] : {"title" : "404 ! Page not found","body" : "Please try different URL"};

        res.json(pageinfo);
    });



}
module.exports = router;
