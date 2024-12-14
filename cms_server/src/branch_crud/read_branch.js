async function main(req, res) {
    const { get_pg_connection } = require('../base_communication/pg_connector');
    let client = await get_pg_connection();

    const query = `
        SELECT branch from branch;
    `;

    const result = await client.query(query);
    res.status(200).send(result.rows);

    client.end();
}

module.exports = {
    main: main
};