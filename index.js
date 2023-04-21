const jsonServer=require('json-server');
const server = jsonServer.create();
const cors=require('cors')
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router);
server.use(cors)
const port=9168;


server.listen(9168, () => {
  console.log(`JSON Server is running on the port ${port}🎉🎉🎉`)
})
