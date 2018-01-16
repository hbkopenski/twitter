//change
const express = require( 'express' );
const nunjucks = require('nunjucks');
const app = express(); // creates an instance of an express application
//const morgan = require('morgan')
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

app.use(function(req,res,next){

	console.log("here "+req.method+" "+ req.path)
	next()

})
app.get('/',function(req,res){
	res.send("hello there")
})
app.get('/news',function(req,res){
	res.send("this is the news page")
})

var listener = app.listen(3000,function(){
	console.log("listening to port "+ listener.address().port)
} );


