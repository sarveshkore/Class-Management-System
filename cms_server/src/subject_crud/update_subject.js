async function main(req, res) {
    const {id}=req.params;
    const { subject,stream_id } = req.body;
    const { get_pg_connection } = require('../base_communication/pg_connector');
    let client = await get_pg_connection();

    const query = `
        UPDATE subject
        SET 
            subject=$1,
            stream_id=$2
        WHERE id = $3
    `;

    const values = [subject,stream_id, id];
    
    const result = await client.query(query, values);
    res.send(`Data updated successfully: ${JSON.stringify(result)}`);

    client.end();
}

module.exports = {
    main: main
};