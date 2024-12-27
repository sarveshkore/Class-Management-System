async function main(req, res) {
    const { get_pg_connection } = require('../base_communication/pg_connector');
    let client = await get_pg_connection();

    const query = `
        SELECT 
            sd.id,
            sd.student_name, 
            sd.student_email, 
            sd.student_mobile, 
            b.branch AS branch_name, 
            s.std AS standard_name, 
            e.entrance AS entrance_name, 
            st.stream AS stream_name
        FROM student_details sd
        JOIN branch b ON sd.branch_id = b.id
        JOIN standard s ON sd.standard_id = s.id
        JOIN entrance e ON sd.entrance_id = e.id
        JOIN stream st ON sd.stream_id = st.id
        where isDeleted=0;
    `;

    const result = await client.query(query);
    // console.log(`Data fetched successfully: ${JSON.stringify(result.rows, null, 2)}`);
    res.status(200).send(result.rows);

    client.end();
}

module.exports = {
    main: main
};