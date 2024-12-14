// async function main(req,res){


//     const {standard}=req.body;
//     const {get_pg_connection}=require('../base_communication/pg_connector');
//     let client=await get_pg_connection();

//     const query = `INSERT INTO standard (standard) VALUES ($1)`;
//     const values = [standard];

//     const result=await client.query(query,values,
//         function(err,data){
//         if(err){
//             console.log("Error",err);
//             res.send(`ERROR in inserting the vlaue:-  ${err}`);
//         } 
//         else{
//             if(res.send){
//                 console.log(`Data inserted successfully:- ${JSON.stringify(result)}`)
//                 res.send(`Data inserted successfully:- ${JSON.stringify(result)}`)
//             }
//         }

//          client.end();
//     });
// }
// module.exports={
//     main:main
// }


async function main(req,res){


    // const {staff_name,staff_email,staff_mobile,role_id,subject_id}=req.body;
    const {std}=req.body;
    const {get_pg_connection}=require('../base_communication/pg_connector');
    let client=await get_pg_connection();

    const query = `insert into standard(std) VALUES ($1)`;
    const values = [std];

    const result=await client.query(query,values,
        function(err,data){
        if(err){
            console.log("Error",err);
            res.send(`ERROR in inserting the vlaue:-  ${err}`);
        } 
        else{
            if(res.send){
                // console.log(`Data inserted successfully:- ${JSON.stringify(result)}`)
                res.send(`standard inserted successfully:- ${JSON.stringify(result)}`)
            }
        }

         client.end();
    });
}
module.exports={
    main:main
}

