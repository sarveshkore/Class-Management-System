async function main(req, res) {
    const { get_pg_connection } = require('../base_communication/pg_connector');
    let client = await get_pg_connection();

    const query = `
        SELECT * from subject where isDeleted=0;
    `;

    const result = await client.query(query);
    // console.log(`Data fetched successfully: ${JSON.stringify(result.rows, null, 2)}`);
    res.status(200).send(result.rows);

    client.end();
}

module.exports = {
    main: main
};