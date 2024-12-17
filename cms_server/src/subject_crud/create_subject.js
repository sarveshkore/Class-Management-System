async function main(req,res){


    const {subject,stream_id}=req.body;
    const {get_pg_connection}=require('../base_communication/pg_connector');
    let client=await get_pg_connection();

    const query = `insert into subject(subject,stream_id) VALUES ($1,$2)`;
    const values = [subject,stream_id];

    const result=await client.query(query,values,
        function(err,data){
        if(err){
            console.log("Error",err);
            res.send(`ERROR in inserting the vlaue:-  ${err}`);
        } 
        else{
            if(res.send){
                res.send(`subject inserted successfully:- ${JSON.stringify(result)}`)
            }
        }

         client.end();
    });
}
module.exports={
    main:main
}

