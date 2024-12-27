async function main(req, res) {
    const {id}=req.params;
    const { get_pg_connection } = require('../base_communication/pg_connector');
    let client = await get_pg_connection();

    // const query = `
    //     delete from student_details WHERE id = $1
    // `;

    const query=`
        update student_details set isDeleted=1 where id=$1;
    `

    const values = [id];
    
    const result = await client.query(query,values);
    // console.log(result)
    let response={
        "status": "success",
        "message": "Student deleted successfully",
        // "data": result.rows,
        
    }
    res.send(response);
    

    client.end();
}

module.exports = {
    main: main
};
