async function main(req, res) {
    const {id}=req.params;
    const { get_pg_connection } = require('../base_communication/pg_connector');
    let client = await get_pg_connection();

    // const query = `
    //     delete from stream WHERE id = $1
    // `;

    const query = `
    update stream set isDeleted=1 where id=$1
`;

    const values = [id];
    
    const result = await client.query(query,values);
    res.send(`Data deleted successfully: ${JSON.stringify(result)}`);

    client.end();
}

module.exports = {
    main: main
};
