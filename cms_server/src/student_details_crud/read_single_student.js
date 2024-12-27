async function main(req, res) {
    const { get_pg_connection } = require('../base_communication/pg_connector');
    let client = await get_pg_connection();

    const {id} =req.params;
    // const { name, email, mobile, branch_id, standard_id, entrance_id, stream_id } = req.body;



    const query=`select * from student_details where id=$1;`

    const result = await client.query(query,[id]);
    // console.log(`Data fetched successfully: ${JSON.stringify(result.rows, null, 2)}`);
    res.status(200).send(result.rows);

    client.end();
}

module.exports = {
    main: main
};