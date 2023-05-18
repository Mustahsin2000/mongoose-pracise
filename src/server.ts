import mongoose from 'mongoose'
import app from './app';

const port:number = 5000;

//database connection
async function main() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-practise');
  console.log(`database connection successful`);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    app.listen(port, () => {
        console.log(`server is listening on port ${port}`)
      });   
}catch(err){
        console.log(`failed to connect database`,err);
    }
  }

main();


