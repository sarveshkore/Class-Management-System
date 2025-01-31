async function main(req, res) {
    const {id}=req.params;
    // const { name, email, mobile, branch_id, standard_id, entrance_id, stream_id } = req.body;
    const { get_pg_connection } = require('../base_communication/pg_connector');
    let client = await get_pg_connection();

    // const query = `
    //     delete from branch WHERE id = $1
    // `;

    const query = `
  update  branch set isDeleted=1 where id=$1;
`;

    const values = [id];
    
    const result = await client.query(query,values);
    res.send(`Branch deleted successfully: ${JSON.stringify(result)}`);

    client.end();
}

module.exports = {
    main: main
};
