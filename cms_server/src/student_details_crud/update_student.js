async function main(req, res) {
    const {id}=req.params;
    const { name, email, mobile, branch_id, standard_id, entrance_id, stream_id } = req.body;
    const { get_pg_connection } = require('../base_communication/pg_connector');
    let client = await get_pg_connection();

    const query = `
        UPDATE student_details
        SET 
            student_name = $1,
            student_email = $2,
            student_mobile = $3,
            branch_id = $4,
            standard_id = $5,
            entrance_id = $6,
            stream_id = $7
        WHERE id = $8
    `;

    const values = [name, email, mobile, branch_id, standard_id, entrance_id, stream_id, id];
    
    const result = await client.query(query, values);
    res.send(`Data updated successfully: ${JSON.stringify(result)}`);

    client.end();
}

module.exports = {
    main: main
};