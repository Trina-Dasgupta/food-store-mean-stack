import {connect,ConnectOptions} from 'mongoose';

export const dbConnect=()=>{
    connect(process.env.MONGO_URI!,{
       useUnifiedTopology: true, } as ConnectOptions).then(()=>{
        console.log("Connected successfully");
        
    },error=>{
        console.log(error);
        
    })
}
