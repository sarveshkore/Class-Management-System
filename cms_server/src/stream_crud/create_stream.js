async function main(req,res){


    // const {staff_name,staff_email,staff_mobile,role_id,subject_id}=req.body;
    const {stream}=req.body;
    const {get_pg_connection}=require('../base_communication/pg_connector');
    let client=await get_pg_connection();

    const query = `insert into stream(stream) VALUES ($1)`;
    const values = [stream];

    const result=await client.query(query,values,
        function(err,data){
        if(err){
            console.log("Error",err);
            res.send(`ERROR in inserting the vlaue:-  ${err}`);
        } 
        else{
            if(res.send){
                // console.log(`Data inserted successfully:- ${JSON.stringify(result)}`)
                res.send(`Stream inserted successfully:- ${JSON.stringify(result)}`)
            }
        }

         client.end();
    });
}
module.exports={
    main:main
}
