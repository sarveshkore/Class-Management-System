async function get_pg_connection(req,res){
    const pg = require("pg");
    const { Client } = pg;
    const x={
        user: 'postgres',
        password: 'root',
        host: 'localhost',
        port: 5432,
        database: 'class_management_system',
    };
    const client = new Client(x);

    try {
        
        await client.connect();
    } catch (error) {
        console.log(error);
        
    }
    return client;
}
module.exports={get_pg_connection};