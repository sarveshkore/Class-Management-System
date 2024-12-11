async function main(req,res){


    const {name, email, mobile, branch_id, standard_id, entrance_id, stream_id}=req.body;
    const {get_pg_connection}=require('../base_communication/pg_connector');
    let client=await get_pg_connection();

    const query = `INSERT INTO student_details 
    (student_name, student_email, student_mobile, branch_id, standard_id, entrance_id, stream_id) 
    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const values = [name, email, mobile, branch_id, standard_id, entrance_id, stream_id];

    const result=await client.query(query,values,
        function(err,data){
        if(err){
            console.log("Error",err);
            res.send(`ERROR in inserting the vlaue:-  ${err}`);
        } 
        else{
            if(res.send){
                console.log(`Data inserted successfully:- ${JSON.stringify(result)}`)
                res.send(`Data inserted successfully:- ${JSON.stringify(result)}`)
            }
        }

         client.end();
    });
}
module.exports={
    main:main
}


