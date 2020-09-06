const forecast = require("./data/forecast");

const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);


server.get(
    "/forecast",
    (req, res) => {
        setTimeout(() => {
            res.status(200).jsonp(forecast);
        }, 900);
    }
);

server.listen(3001, () => {
    console.log("Mock Server is running at http://localhost:3001/");
});