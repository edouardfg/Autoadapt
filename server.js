/* Exemple d'intrant JSON pour test console

{
	"Timestamp": 623432423,
	"Classification": 1,
	"Desc": "blablabla",
	"Tx_imputation": 3
  }
 */

const IP = '127.0.0.1'//'132.211.219.121'//132.211.219.121'; //IP du serveur qui roule Threads
const PORT = 2345; //Port de Threads
const SENDPORT = 3456; //Port d'envoi de données à Threads


process.on('uncaughtException', function (error) 
{
    console.log(error.stack)
    fs.appendFile('error.txt','{"Error":"'+error.stack+'", "Time":'+Date.now()+"\n},",function (err) {
        if (err) throw err;});;
});

//Import de modules
var net = require('net');
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = jQuery = require('jquery')(window);


//Reception des données

  var client = new net.Socket();
client.connect(PORT, IP, function() {
console.log('Connected Server');
});

client.on('data', function(data) {
	console.log('Received: ' + data);


		fs.writeFile('short.json',data, function (err) {
			if (err) throw err;})
		fs.appendFile('long.json',data+',', function (err) {
			if (err) throw err;});
});

client.on('close', function() {
	console.log('Connection closed');
}); 
 

//Envoi de marqueur
var err = console.log("d")
var net = require('net');
var client = new net.Socket();
var lastmarkersent = '';

client.connect(SENDPORT, IP, function() {	console.log('Connected Client');


	setInterval(function(){
		fs.readFile('results.json', 'utf8', function(err, data) {  
		if (err) throw err;
		
	
		var marker = JSON.parse(data);
		var sendData = JSON.parse((JSON.stringify(marker.Button)));


		if (sendData != lastmarkersent){
			client.write(sendData);
			lastmarkersent = sendData;
			console.log(sendData);
		} else if (sendData == lastmarkersent) {

		}


	});	
	
	}, 500);

});
client.on('close', function() {
	console.log('Connection closed');
});





// HTTP || Application Layer

var fs = require("fs");
var http = require("http");
var url = require("url");
const path = require('path')

http.createServer(function (request, response) {

    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    response.writeHead(200);

    if(pathname == "/") {
        html = fs.readFileSync("index.html", "utf8");
		response.write(html);}

		else if (pathname == "/list.js") {
			script = fs.readFileSync("list.js", "utf8");
			response.write(script);
		}
		else if (pathname == "/scenario.js") {
			script = fs.readFileSync("scenario.js", "utf8");
			response.write(script);
		}
		else if (pathname == "/js.js") {
			script = fs.readFileSync("js.js", "utf8");
			response.write(script);
		}
		else if (pathname == "/css.css") {
			script = fs.readFileSync("css.css", "utf8");
			response.write(script);
		}
		else if (pathname == "/short.json") {
			script = fs.readFileSync("short.json", "utf8");
			response.write(script);
		}
		else if (pathname == "/results.json") {
			script = fs.readFileSync("results.json", "utf8");
			response.write(script);
		}
		else if (pathname == "/controller_html.html") {
			script = fs.readFileSync("controller_html.html", "utf8");
			response.write(script);}
		else if (pathname == "/index_trial.html") {
			script = fs.readFileSync("index_trial.html", "utf8");
			response.write(script);}
		else if (pathname == "/js2.js") {
			script = fs.readFileSync("js2.js", "utf8");
			response.write(script);}
		else if (pathname == "/scenario_trial.js") {
			script = fs.readFileSync("scenario_trial.js", "utf8");
			response.write(script);}

    response.end();
}).listen(8888);


console.log(__dirname)
console.log("Listening to server on 8888...")