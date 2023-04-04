import mongoose from "mongoose";


const DBConnection= async()=>{
    const DB_URL=`mongodb://user:fileSharingApp@ac-dfixfzg-shard-00-00.wht1z3z.mongodb.net:27017,ac-dfixfzg-shard-00-01.wht1z3z.mongodb.net:27017,ac-dfixfzg-shard-00-02.wht1z3z.mongodb.net:27017/?ssl=true&replicaSet=atlas-c9zqey-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       await  mongoose.connect(DB_URL,{
            useNewURlParser:true
        })

        console.log("database connected successfully");


    }
    catch(error){
        console.log("Error while connection with db ", error.message)
    }
}

export default DBConnection;