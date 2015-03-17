var http = require('http');
var signs = ["rock", "paper", "scissors", "lizard", "spock"];
var win = 0,
    lose = 0,
    tie = 0;
var JSONmod = {
    Result: 'Win',
    wins: '3',
    loses: '2',
    ties: '0'
};
var server = http.createServer(function(req, res) {
    switch (req.url) {
        case '/':

            console.log("[200] " + req.method + " to " + req.url);
            res.writeHead(200, "OK", {
                'Content-Type': 'text/html'
            });
            res.write('<html><head><meta http-equiv="Content-type" content="text/html; charset=utf-8" /><title>Welcome to the hand Game</title></head><body>');
            res.write('<h2> Pls choose a hand sign </h2>');
            res.write('<form action="/play/rock" method="post">');
            res.write('<input type="submit" value="Rock" />');
            res.write('</form>');
            res.write('<form action="/play/paper" method="post">');
            res.write('<input type="submit" value="Paper" />');
            res.write('</form>');
            res.write('<form action="/play/scissors" method="post">');
            res.write('<input type="submit" value="Scissors" />');
            res.write('</form>');
            res.write('<form action="/play/lizard" method="post">');
            res.write('<input type="submit" value="Lizard" />');
            res.write('</form>');
            res.write('<form action="/play/spock" method="post">');
            res.write('<input type="submit" value="Spock" />');
            res.write('</form>');
            res.write('</body></html>');
            res.end();
            break;
        case '/play/rock':
            if (req.method == 'POST') {
                console.log("[200] " + req.method + " to " + req.url);
                var string = signs[Math.floor(Math.random() * signs.length)];
                console.log("string '" + string + "' chosen");
                res.writeHead(200, "OK", {
                    'Content-Type': 'application/json;charset=utf-8'
                });
                switch (string) {
                    case 'rock':

                        JSONmod.Result = 'Tie';
                        tie = tie + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));
                        
                        res.end();
                        break;
                    case 'paper':
                        JSONmod.Result = 'Lose';
                        lose = lose + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));
                        
                        res.end();


                    case 'spock':

                        JSONmod.Result = 'Lose';
                        lose = lose + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));
                        
                        res.end();
                        break;
                    case 'scissors':

                        JSONmod.Result = 'Lose';
                        lose = lose + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));
                        
                        res.end();
                    case 'lizard':

                        JSONmod.Result = 'Win';
                        win = win + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));
                        
                        res.end();
                        break;
                }
            } else {
                console.log("[405] " + req.method + " to " + req.url);
                res.writeHead(405, "Method not supported", {
                    'Content-Type': 'text/html'
                });
                res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
            }
            break;
        case '/play/paper':
            if (req.method == 'POST') {
                console.log("[200] " + req.method + " to " + req.url);
                console.log("request received");
                var string = signs[Math.floor(Math.random() * signs.length)];
                console.log("string '" + string + "' chosen");
                res.writeHead(200, "OK", {
                    'Content-Type': 'application/json; charset=utf-8'
                });
                switch (string) {
                    case 'rock':
                        JSONmod.Result = 'Lose';
                        lose = lose + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));
                        
                        res.end();
                    case 'spock':

                        win = win + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));

                        res.end();
                        break;
                    case 'paper':

                        tie = tie + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));
                        
                        res.end();
                        break;
                    case 'scissors':
                        JSONmod.Result = 'Lose';
                        lose = lose + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));
                        
                        res.end();
                    case 'lizard':

                        JSONmod.Result = 'Lose';
                        lose = lose + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));
                        
                        res.end();
                        break;
                }
            } else {
                console.log("[405] " + req.method + " to " + req.url);
                res.writeHead(405, "Method not supported", {
                    'Content-Type': 'text/html'
                });
                res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
            }
            break;
        case '/play/scissors':
            if (req.method == 'POST') {
                console.log("[200] " + req.method + " to " + req.url);
                console.log("request received");
                var string = signs[Math.floor(Math.random() * signs.length)];
                console.log("string '" + string + "' chosen");
                res.writeHead(200, "OK", {
                    'Content-Type': 'application/json; charset=utf-8'
                });
                switch (string) {
                    case 'rock':

                        JSONmod.Result = 'Lose';
                        lose = lose + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));

                        res.end();
                    case 'spock':

                        JSONmod.Result = 'Lose';
                        lose = lose + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));

                        res.end();
                        break;
                    case 'paper':

                        JSONmod.Result = 'Lose';
                        lose = lose + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));

                        res.end();
                    case 'lizard':


                        JSONmod.Result = 'Win';
                        win = win + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));
                        
                        res.end();
                        break;
                        JSONmod.Result = 'Tie';
                        tie = tie + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));
                        
                        res.end();
                        break;
                }
            } else {
                console.log("[405] " + req.method + " to " + req.url);

                res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
            }
            break;
        case '/play/lizard':
            if (req.method == 'POST') {
                console.log("[200] " + req.method + " to " + req.url);
                console.log("request received");
                var string = signs[Math.floor(Math.random() * signs.length)];
                console.log("string '" + string + "' chosen");
                res.writeHead(200, "OK", {
                    'Content-Type': 'application/json; charset=utf-8'
                });
                switch (string) {
                    case 'rock':
                        JSONmod.Result = 'Lose';
                        lose = lose + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));

                        res.end();
                    case 'scissors':

                        JSONmod.Result = 'Lose';
                        lose = lose + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));

                        res.end();
                        break;
                    case 'paper':
                        JSONmod.Result = 'Lose';
                        lose = lose + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));

                        res.end();
                    case 'spock':

                        JSONmod.Result = 'Win';
                        win = win + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));
                        
                        res.end();
                        break;
                    case 'lizard':
                        
                        JSONmod.Result = 'Tie';
                        tie = tie + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));
                        
                        res.end();
                        break;
                }
            } else {
                console.log("[405] " + req.method + " to " + req.url);
                res.writeHead(405, "Method not supported", {
                    'Content-Type': 'text/html'
                });
                res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
            }
            break;
        case '/play/spock':
            if (req.method == 'POST') {
                console.log("[200] " + req.method + " to " + req.url);
                console.log("request received");
                var string = signs[Math.floor(Math.random() * signs.length)];
                console.log("string '" + string + "' chosen");
                res.writeHead(200, "OK", {
                    'Content-Type': 'application/json; charset=utf-8'
                });
                switch (string) {
                    case 'rock':
                        JSONmod.Result = 'Lose';
                        lose = lose + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));
                        
                        res.end();
                    case 'scissors':
                        JSONmod.Result = 'Win';
                        win = win + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));
                        
                        res.end();
                        break;
                    case 'paper':
                        JSONmod.Result = 'Lose';
                        lose = lose + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));
                        
                        res.end();
                    case 'lizard':
                        
                        JSONmod.Result = 'Lose';
                        lose = lose + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));
                        
                        res.end();
                        break;
                    case 'spock':
                       
                        JSONmod.Result = 'Tie';
                        tie = tie + 1;
                        JSONmod.wins = win;
                        JSONmod.loses = lose;
                        JSONmod.ties = tie;
                        console.log(JSONmod);
                        res.write(JSON.stringify(JSONmod));
                        
                        res.end();
                        break;
                }
            } else {
                console.log("[405] " + req.method + " to " + req.url);
                res.writeHead(405, "Method not supported", {
                    'Content-Type': 'text/html'
                });
                res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
            }
            break;
        default:
            res.writeHead(404, "Not found", {
                'Content-Type': 'text/html'
            });
            res.end('<html><head><title>404 - Not found</title></head><body><h1>Not found.</h1></body></html>');
            console.log("[404] " + req.method + " to " + req.url);
    };
}).listen(3000);
var address = server.address();
console.log("Game is running at http://localhost:" + address.port + "/");
