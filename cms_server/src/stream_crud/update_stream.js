async function main(req, res) {
    const {id}=req.params;
    const { stream } = req.body;
    const { get_pg_connection } = require('../base_communication/pg_connector');
    let client = await get_pg_connection();

    const query = `
        UPDATE stream
        SET stream=$1
        WHERE id = $2
    `;

    const values = [stream, id];
    
    const result = await client.query(query, values);
    res.send(`Data updated successfully: ${JSON.stringify(result)}`);

    client.end();
}

module.exports = {
    main: main
};