async function main(req, res) {
    const { get_pg_connection } = require('../base_communication/pg_connector');
    let client = await get_pg_connection();

    const query = `
        SELECT 
            sd.staff_name,
            sd.staff_email,
            sd.staff_mobile,
            r.role AS role_name,
            s.subject AS subject_name
        FROM 
            staff_details sd
        JOIN 
            role r ON sd.role_id = r.id
        JOIN 
            subject s ON sd.subject_id = s.id
    `;

    const result = await client.query(query);
    res.status(200).send(result.rows);

    client.end();
}

module.exports = {
    main: main
};