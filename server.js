const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
// const auth = require("json-server-auth");

const PORT = process.env.PORT || 3000;

server.db = router.db;

server.use(middlewares);
// server.use(auth);
server.use(router);

server.listen(PORT, () =>
  console.log(`JSON Server is running on port ${PORT}`)
);
