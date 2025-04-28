import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/index.js"
const app = express()
dotenv.config({
    path:"./.env"
})

connectDB()
.then(() => {
    app.on("error",(error) => {
        console.log("error in index.jsx", error);
        
    })
    app.listen(process.env.PORT || 6000,() => {
        console.log(`Server running at port ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MongoDB connection failed !!!!! file src/index.js", err);
    
})
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("Error", (error) => {
//       console.log("error", error);
//       throw error;
//     });

//     app.listen(`${process.env.PORT}`, () => {
//       console.log(`App is listening of Port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error", error);
//     throw error;
//   }
// })();
