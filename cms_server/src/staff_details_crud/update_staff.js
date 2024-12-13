async function main(req, res) {
    const {id}=req.params;
    const {staff_name,staff_email,staff_mobile,role_id,subject_id}=req.body;
    const { get_pg_connection } = require('../base_communication/pg_connector');
    let client = await get_pg_connection();

    const query = `
        UPDATE staff_details
        SET 
            staff_name = $1,
            staff_email = $2,
            staff_mobile = $3,
            role_id = $4,
            subject_id = $5
        WHERE id = $6
    `;

    const values = [staff_name,staff_email,staff_mobile,role_id,subject_id];
    
    const result = await client.query(query, values);
    res.send(`Data updated successfully: ${JSON.stringify(result)}`);

    client.end();
}

module.exports = {
    main: main
};
