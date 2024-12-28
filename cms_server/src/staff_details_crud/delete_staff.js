async function main(req, res) {
    const {id}=req.params;
    // const { name, email, mobile, branch_id, standard_id, entrance_id, stream_id } = req.body;
    const { get_pg_connection } = require('../base_communication/pg_connector');
    let client = await get_pg_connection();

    // const query = `
    //     delete from staff_details WHERE id = $1
    // `;

    const query=`
        update staff_details set isDeleted=1 where id=$1;
    `

    const values = [id];
    
    const result = await client.query(query,values);
    // res.send(`Data deleted successfully: ${JSON(result)}`);
    let response={
        "status": "success",
        "message": "Staff deleted successfully",
        // "data": result.rows,
        
    }
    res.send(response);

    client.end();
}

module.exports = {
    main: main
};
