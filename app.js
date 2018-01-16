//change
const express = require( 'express' );
const nunjucks = require('nunjucks');
const app = express();// creates an instance of an express application
const routes = require("./routes");
//const morgan = require('morgan')
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates



app.use("/",routes)



var listener = app.listen(3000,function(){
	console.log("listening to port "+ listener.address().port)
} );
