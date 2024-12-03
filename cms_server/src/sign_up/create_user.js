async function main(req, res) {

    // const id  = req.body.id;
    // const f_name=req.body.f_name;
    // const l_name=req.body.l_name;
    // const email=req.body.email;
    // const mobile_no=req.body.mobile_no;
    // const role=req.body.role;

    const {id,f_name,l_name,email,mobile_no,role}=req.body;
    const {get_pg_connection}=require('../base_communication/pg_connector');
    let client=await get_pg_connection();
    const result=await client.query('insert into signup_details(id,f_name,l_name,email,mobile_no,role) values($1,$2,$3,$4,$5,$6)',[id,f_name,l_name,email,mobile_no,role],function(err,data){
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

    // res.send('Hello, this is the sign_up page');
}

module.exports = { main };
