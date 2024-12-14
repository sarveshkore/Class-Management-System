async function main(req, res) {
    const {id}=req.params;
    // const { name, email, mobile, branch_id, standard_id, entrance_id, stream_id } = req.body;
    const {branch}=req.body;
    const { get_pg_connection } = require('../base_communication/pg_connector');
    let client = await get_pg_connection();

    const query = `
        UPDATE branch
        SET 
            branch =$1
        WHERE id = $2
    `;

    const values = [branch,id];
    
    const result = await client.query(query, values);
    res.send(`Data updated successfully: ${JSON.stringify(result)}`);

    client.end();
}

module.exports = {
    main: main
};