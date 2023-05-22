import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

//application routes
import userRoutes from './app/modules/user/user.route'
//using cors
app.use(cors());

//parse data(middleware)(je kono data read korar jonno)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get('/api/v1/user', userRoutes
app.use('/api/v1/user',userRoutes);


//     //inserting a test data into mongoDB
//     /*
//     mongoose website(typescript)
//     step1:Interface(user.interface.ts)
//     step2:schema(user.model.ts)
//     step3:Model(user.model.ts)
//     step4:database query(on model)
//     */
//     // res.send('Hello World!');
//     // next();
// )

export default app;

//save - save() --> Method -> data validate --> schema
 

//pattern MVC , Moduler

//Moduler formate

//interface -> interface.ts
//Schema , Model -> model.ts

//route
//route function -> controller.ts
//database Query Function --> service.ts
