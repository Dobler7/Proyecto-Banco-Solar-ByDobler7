const sequelize = require("./connection/connection");
const Server = require("./server/server");

const server = new Server();

server.listen();

/*sequelize.authenticate().then(()=>{
    console.log('funciona');
    
}).catch((error)=>{
    console.log('no funciona' + error);
    
})*/
